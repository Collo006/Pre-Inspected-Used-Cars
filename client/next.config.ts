// client/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {

  
  // Or disable only for Prisma
  images: {
    domains: ['localhost'],
    unoptimized: true, // If you have many images
  },
}
module.exports = {
  trailingSlash: true,
  nextConfig
   // or false, but be consistent
};