
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add transpilePackages for any packages that need to be transpiled
  transpilePackages: ['react-dom', '@tanstack/react-query'],
  // Configure image domains if needed
  images: {
    domains: ['lovable-uploads.s3.amazonaws.com'],
  },
  // Ensure we properly resolve the modules from the src directory
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
