import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
dotenv.config({ path: path.join(process.cwd(), '../.env') });

// Inject the correct database name into the MongoDB URL based on NODE_ENV.
// development → acclimation-development
// production  → acclimation-sports-management
const buildDatabaseUrl = (): string => {
  const rawUrl = process.env.DATABASE_URL || '';
  const env = process.env.NODE_ENV || 'development';
  const dbName =
    env === 'production'
      ? 'acclimation-sports-management'
      : 'acclimation-development';

  // MongoDB SRV URLs look like:
  //   mongodb+srv://user:pass@host/?params
  //   mongodb+srv://user:pass@host/existingDb?params
  // We insert / replace the database name segment before the query string.
  return rawUrl.replace(
    /(\.mongodb\.net\/)[^?]*(\?|$)/,
    `$1${dbName}$2`,
  );
};

export default {
  ip_address: process.env.IP_ADDRESS,
  database_url: buildDatabaseUrl(),
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || '1000',
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS || '10',
  jwt: {
    jwt_secret: process.env.JWT_SECRET || 'dev-secret',
    jwt_expire_in: process.env.JWT_EXPIRE_IN || '1h',
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret',
    jwt_refresh_expire_in: process.env.JWT_REFRESH_EXPIRE_IN || '7d',
  },
  email: {
    from: process.env.EMAIL_FROM,
    user: process.env.EMAIL_USER,
    port: process.env.EMAIL_PORT,
    host: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASS,
  },
  super_admin: {
    email: process.env.SUPER_ADMIN_EMAIL,
    password: process.env.SUPER_ADMIN_PASSWORD,
  },
};
