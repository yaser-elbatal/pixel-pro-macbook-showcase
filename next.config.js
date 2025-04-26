
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
};

module.exports = nextConfig;
