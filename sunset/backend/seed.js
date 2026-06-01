const mongoose = require('mongoose');
const User = require('./models/User');
const Package = require('./models/Package');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sunset-retreat';

const samplePackages = [
  {
    name: 'Weekend Escape',
    description: 'A perfect short getaway for couples or solo travellers seeking a taste of Jamaica luxury.',
    price: 350,
    duration: '2 nights',
    features: ['Private Villa Access', 'Welcome Drinks', 'Pool Access', 'Free WiFi', 'Airport Transfer'],
    isActive: true,
    isSpecialOffer: false,
  },
  {
    name: 'Luxury Retreat',
    description: 'Our most popular package — immerse yourself fully in the Sunset Retreat JA experience.',
    price: 780,
    duration: '5 nights',
    features: ['Private Villa Access', 'Daily Breakfast', 'Pool & Beach Access', 'Sunset Cruise', 'Personal Concierge', 'Airport Transfer'],
    isActive: true,
    isSpecialOffer: true,
    offerBadge: 'Most Popular',
  },
  {
    name: 'Honeymoon Bliss',
    description: 'Crafted for newlyweds — romance, privacy, and unforgettable memories in paradise.',
    price: 1200,
    duration: '7 nights',
    features: ['Premium Villa Suite', 'Romantic Setup', 'Couples Spa Session', 'Private Chef Dinner', 'Sunset Cruise', 'All Transfers Included'],
    isActive: true,
    isSpecialOffer: true,
    offerBadge: 'Special Offer',
  },
];

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  // Create admin user
  const existingAdmin = await User.findOne({ email: 'admin@sunsetretreat.com' });
  if (!existingAdmin) {
    await User.create({ name: 'Carl', email: 'admin@sunsetretreat.com', password: 'sunset2026' });
    console.log('✅ Admin user created: admin@sunsetretreat.com / sunset2026');
  } else {
    console.log('ℹ️  Admin user already exists');
  }

  // Create sample packages
  const count = await Package.countDocuments();
  if (count === 0) {
    await Package.insertMany(samplePackages);
    console.log('✅ Sample packages created');
  } else {
    console.log('ℹ️  Packages already exist');
  }

  console.log('\n🌴 Sunset Retreat JA database seeded successfully!');
  console.log('   Login: admin@sunsetretreat.com');
  console.log('   Password: sunset2026');
  console.log('   Admin URL: http://localhost:5173/admin/login\n');

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
