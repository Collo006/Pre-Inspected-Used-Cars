// client/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    appDir: true,   // this is usually true by default in Next 14+
    // optionally:
    // root: 'src'   <-- Next.js currently doesn’t support changing root, so better move app folder
  },
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