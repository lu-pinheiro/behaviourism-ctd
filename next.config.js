/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pps.whatsapp.net'],
  },
};

module.exports = nextConfig;
