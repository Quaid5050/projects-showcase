 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },

      // 👉 Postimg add karo
      { protocol: 'https', hostname: 'i.postimg.cc' },
    ],
  },
}

module.exports = nextConfig