/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  experimental: {
    forceSwcTransforms: false // Disable SWC
  }
};

module.exports = nextConfig;
