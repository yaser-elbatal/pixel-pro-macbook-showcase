
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lovable-uploads.s3.amazonaws.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig
