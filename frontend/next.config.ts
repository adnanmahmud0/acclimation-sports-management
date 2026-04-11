import type { NextConfig } from "next";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), '../.env') });

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["10.10.7.65", "cold-sao-resistant-sequences.trycloudflare.com"],
  // Required for Docker: produces a self-contained server bundle
  output: "standalone",
};

export default nextConfig;
