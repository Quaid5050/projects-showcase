const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') });

const User = require('../models/User');
const Product = require('../models/Product');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/iptv-platform';

const products = [
  {
    name: 'YOKATV IPX2 Pro',
    slug: 'yokatv-ipx2-pro',
    brand: 'YOKATV',
    description: 'The YOKATV IPX2 Pro is a premium 4K UHD Android streaming box designed for the ultimate IPTV experience. With Android 11, 4GB RAM, and 32GB storage, it delivers smooth performance for all your streaming needs.',
    shortDescription: '4K UHD Android Box | 4GB RAM | 32GB | Android 11',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    ],
    specs: [
      { label: 'OS', value: 'Android 11' },
      { label: 'RAM', value: '4GB' },
      { label: 'Storage', value: '32GB' },
      { label: 'Resolution', value: '4K Ultra HD' },
      { label: 'WiFi', value: '2.4G & 5G 2T2R' },
      { label: 'Ethernet', value: '1000M' },
      { label: 'Remote', value: 'BT Voice Remote' }
    ],
    features: ['Google Assistant', 'YOKA AppStore', 'OTA Update', 'AV1 Codec', 'HDR10+'],
    category: 'android-box',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    name: 'YOKATV IPx1 PRO',
    slug: 'yokatv-ipx1-pro',
    brand: 'YOKATV',
    description: 'The YOKATV IPx1 PRO brings smarter streaming and faster performance to your home. With Widevine DRM L1, 4K Ultra HD, and HDR 10+, experience premium content like never before.',
    shortDescription: '4K IPTV Box | 2GB RAM | 32GB | Widevine L1',
    price: 59.99,
    originalPrice: 79.99,
    images: [
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80'
    ],
    specs: [
      { label: 'RAM', value: '2GB' },
      { label: 'Storage', value: '32GB' },
      { label: 'Resolution', value: '4K Ultra HD' },
      { label: 'DRM', value: 'Widevine L1' },
      { label: 'HDMI', value: '2.0' },
      { label: 'Power', value: 'Type-C (DC IN)' }
    ],
    features: ['HDR 10+', 'YOKATV Online 1', 'YOKATV APP Store', 'OTA Update'],
    category: 'iptv-box',
    isFeatured: true,
    rating: 4.6,
    reviewCount: 89
  },
  {
    name: 'MAG322W1 IPTV Set-Top Box',
    slug: 'mag322w1-iptv-box',
    brand: 'Infomir',
    description: 'The MAG322W1 is a professional IPTV set-top box by Infomir, designed specifically for IPTV service providers. Built-in Wi-Fi 802.11 b/g/n at 150 Mbps ensures seamless streaming.',
    shortDescription: 'Professional IPTV STB | Built-in WiFi | Linux OS',
    price: 79.99,
    originalPrice: 99.99,
    images: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80',
      'https://images.unsplash.com/photo-1595925889916-0e4b5c47f95e?w=800&q=80'
    ],
    specs: [
      { label: 'OS', value: 'Linux' },
      { label: 'WiFi', value: '802.11 b/g/n 150Mbps' },
      { label: 'Brand', value: 'Infomir' },
      { label: 'HDMI', value: 'Yes' },
      { label: 'USB', value: '2x USB 2.0' }
    ],
    features: ['Linux API Network Web Protocol', 'NET Record Live Digital Media', 'Net Digital Media for Live & VOD', 'EPG & Playback'],
    category: 'mag-box',
    isFeatured: true,
    rating: 4.7,
    reviewCount: 203
  },
  {
    name: 'Aku IPTV Box Worldwide',
    slug: 'aku-iptv-box-worldwide',
    brand: 'Aku IPTV',
    description: 'The Aku IPTV Box is the heart of our worldwide referral program. Purchase this box and get 1 year of TV free. Share with friends and earn credits toward free TV years and incredible rewards.',
    shortDescription: '1 Year TV Free | Worldwide | Referral Rewards',
    price: 99.99,
    originalPrice: 149.99,
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
      'https://images.unsplash.com/photo-1600169408830-ee80c6bb9b7f?w=800&q=80'
    ],
    specs: [
      { label: 'Subscription', value: '1 Year Free' },
      { label: 'Channels', value: '10,000+' },
      { label: 'Quality', value: '4K HDR10' },
      { label: 'GPU', value: 'Mali-T720' },
      { label: 'OS', value: 'Android' }
    ],
    features: ['High-Performance Multi-Core Mali-T720 GPU', 'High-quality 265/VP9 4K@60fps', 'HDR10bit & HLG Video Processing', 'Smartcolor 3.0 Display Engine', 'NET Record Live Digital Media'],
    category: 'iptv-box',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 312
  },
  {
    name: 'My TV Android Box',
    slug: 'my-tv-android-box',
    brand: 'My TV',
    description: 'The My TV Android Box is a vibrant, feature-packed streaming device perfect for families. Enjoy thousands of channels with crystal clear picture quality and an intuitive interface.',
    shortDescription: 'Family Streaming Box | Android | 4K',
    price: 49.99,
    originalPrice: 69.99,
    images: [
      'https://images.unsplash.com/photo-1617531653332-bd46c16f6f40?w=800&q=80',
      'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&q=80'
    ],
    specs: [
      { label: 'OS', value: 'Android' },
      { label: 'Resolution', value: '4K' },
      { label: 'WiFi', value: 'Built-in' },
      { label: 'Apps', value: 'Pre-installed' }
    ],
    features: ['5000+ Live Channels', 'VOD Library', 'Catch-up TV', 'EPG Guide', 'Multi-screen Support'],
    category: 'android-box',
    isFeatured: false,
    rating: 4.4,
    reviewCount: 67
  },
  {
    name: 'IPTV 1 Year Subscription',
    slug: 'iptv-1-year-subscription',
    brand: 'Aku IPTV',
    description: 'Get access to over 10,000 channels worldwide for a full year. Compatible with all IPTV boxes, Firestick, Smart TV, and more. Includes VOD, EPG, and catch-up TV.',
    shortDescription: '1 Year IPTV | 10,000+ Channels | All Devices',
    price: 49.99,
    originalPrice: 79.99,
    images: [
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80'
    ],
    specs: [
      { label: 'Duration', value: '1 Year' },
      { label: 'Channels', value: '10,000+' },
      { label: 'VOD', value: '50,000+ Movies' },
      { label: 'Devices', value: 'Up to 3' },
      { label: 'Quality', value: 'SD/HD/FHD/4K' }
    ],
    features: ['EPG Electronic Program Guide', 'Catch-up TV 7 Days', 'VOD & Series', 'Multi-device Support', '24/7 Support'],
    category: 'iptv-box',
    isFeatured: false,
    rating: 4.5,
    reviewCount: 445
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing
    await Product.deleteMany({});
    await User.deleteMany({ role: 'admin' });

    // Seed products
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);

    // Create admin user
    await User.create({
      name: 'Admin',
      email: 'admin@akuiptv.com',
      password: 'Admin@123456',
      whatsapp: '+1234567890',
      role: 'admin'
    });
    console.log('Admin user created: admin@akuiptv.com / Admin@123456');

    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
