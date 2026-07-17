import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Smaller build footprint on low-disk machines (fewer parallel page writes)
  experimental: {
    staticGenerationMaxConcurrency: 1,
    staticGenerationMinPagesPerWorker: 999,
  },
  images: {
    formats: ['image/webp'],
    // Avoid serving stale optimized variants after public/ image replacements
    minimumCacheTTL: 0,
  },
  async redirects() {
    return [
      { source: '/industries/wholesale-distribution', destination: '/industries/commercial', permanent: false },
      { source: '/industries/import-export-businesses', destination: '/products/global-trading', permanent: false },
      { source: '/industries/industrial-machinery', destination: '/products/industrial-machinery', permanent: false },
      { source: '/partnership', destination: '/partnerships', permanent: false },
    ];
  },
};

export default nextConfig;
