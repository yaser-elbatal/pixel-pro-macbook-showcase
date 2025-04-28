
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
}

module.exports = nextConfig
