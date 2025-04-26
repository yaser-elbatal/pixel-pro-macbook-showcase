
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add transpilePackages for any packages that need to be transpiled
  transpilePackages: ['react-dom', '@tanstack/react-query'],
  // Optional: helps with initial migration
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure we properly resolve the modules from the src directory
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
