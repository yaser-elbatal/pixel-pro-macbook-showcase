
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add any additional Next.js configuration here
  typescript: {
    ignoreBuildErrors: true, // Optional: helps with initial migration
  },
};

module.exports = nextConfig;
