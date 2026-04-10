import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Required for Docker: produces a self-contained server bundle
  output: "standalone",
};

export default nextConfig;
