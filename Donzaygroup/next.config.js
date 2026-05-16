/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
};

module.exports = nextConfig;
