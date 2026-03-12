// client/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      }
    ],
    unoptimized: true, // If you have many images
  },
}
module.exports = nextConfig
  