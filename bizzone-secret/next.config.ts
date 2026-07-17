import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow large page sizes (our panel is big)
  experimental: {},
  // Disable strict mode to avoid double-render issues with vanilla JS
  reactStrictMode: false,
}

export default nextConfig
