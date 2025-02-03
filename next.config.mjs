/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  experimental: {
    forceSwcTransforms: true, // Enable SWC transforms
  },
};

export default nextConfig;
