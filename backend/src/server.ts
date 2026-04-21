import mongoose from 'mongoose';
import { Server as IOServer } from 'socket.io';
import { Server as HttpServer } from 'http';
import os from 'os';
import app from './app';
import config from './config';
import { seedSuperAdmin } from './DB/seedAdmin';
import { socketHelper } from './helpers/socketHelper';

//uncaught exception
process.on('uncaughtException', (error) => {
  console.error('[uncaughtException]', error);
  process.exit(1);
});

let server: HttpServer | null = null;
async function main() {
  try {
    mongoose.connect(config.database_url as string);
    console.log('Database connected successfully');

    //Seed Super Admin after database connection is successful
    await seedSuperAdmin();

    const port =
      typeof config.port === 'number' ? config.port : Number(config.port);
    const host = (config.ip_address as string) || 'localhost';

    server = app.listen(port, host, () => {
      console.log(`Backend server ready!`);
      console.log(`- Local:         http://localhost:${port}`);
      
      const interfaces = os.networkInterfaces();
      for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name] || []) {
          if (iface.family === 'IPv4' && !iface.internal) {
            console.log(`- Network:       http://${iface.address}:${port}`);
          }
        }
      }
    });

    //socket
    const io = new IOServer(server as HttpServer, {
      pingTimeout: 60000,
      cors: {
        origin: '*',
      },
    });
    socketHelper.socket(io);
    // @ts-expect-error: attach io to global
    global.io = io;
  } catch (error) {
    console.error('Failed to start server or seed database:', error);
  }

  //handle unhandleRejection
  process.on('unhandledRejection', () => {
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

//SIGTERM
process.on('SIGTERM', () => {
  if (server) {
    server.close();
  }
});
