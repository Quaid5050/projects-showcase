const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Room = require('./models/Room');
const Review = require('./models/Review');
const Gallery = require('./models/Gallery');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('✅ MongoDB connected');

  // Admin user
  await User.deleteMany({ email: 'admin@sunsetretreatja.com' });
  const user = new User({ name: 'Carl', email: 'admin@sunsetretreatja.com', password: 'sunset2026' });
  await user.save();
  console.log('✅ Admin created: admin@sunsetretreatja.com / sunset2026');

  const saved = await User.findOne({ email: 'admin@sunsetretreatja.com' });
  const match = await bcrypt.compare('sunset2026', saved.password);
  console.log('✅ Password test:', match ? 'PASS ✓' : 'FAIL ✗ — PROBLEM HAI!');

  // DELETE old rooms and re-seed all 4
  await Room.deleteMany({});
  await Room.insertMany([
    {
      name: '2 Bedroom Coastal Escape Near Ocho Rios & Beaches',
      slug: '2-bedroom-coastal-escape',
      shortDesc: 'Spacious 2-bedroom retreat just minutes from Ocho Rios and beautiful beaches.',
      description: 'Our stunning two-bedroom coastal escape offers generous space for families or groups, featuring a full kitchen, ocean views, and easy access to Ocho Rios attractions and pristine beaches.',
      bedrooms: 2, bathrooms: 2, maxGuests: 4, pricePerNight: 275,
      amenities: ['2 Bedrooms', 'Ocean View', '2 Bathrooms', 'AC', 'Free WiFi', 'Smart TV', 'Full Kitchen', 'Large Balcony'],
      images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'],
      airbnbUrl: 'https://www.airbnb.com/rooms/1217449871263544293',
      vrboUrl: '',
      isActive: true, order: 1,
    },
    {
      name: '1 Bedroom Coastal Retreat Near Ocho Rios',
      slug: '1-bedroom-coastal-retreat',
      shortDesc: 'A serene one-bedroom getaway with coastal charm near Ocho Rios.',
      description: 'Relax in this beautifully appointed one-bedroom coastal retreat, offering stunning views, modern amenities, and the perfect base for exploring Ocho Rios.',
      bedrooms: 1, bathrooms: 1, maxGuests: 2, pricePerNight: 175,
      amenities: ['King Bed', 'Ocean View', 'En-Suite Bathroom', 'AC', 'Free WiFi', 'Smart TV', 'Mini Kitchen', 'Private Balcony'],
      images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'],
      airbnbUrl: 'https://www.airbnb.com/rooms/1496774073337494827',
      vrboUrl: '',
      isActive: true, order: 2,
    },
    {
      name: '1 Bedroom Hideaway Near Beaches & Ocho Rios',
      slug: '1-bedroom-hideaway',
      shortDesc: 'A peaceful hideaway tucked near Jamaica\'s best beaches.',
      description: 'Escape to this charming one-bedroom hideaway, perfectly positioned near pristine beaches and the vibrant town of Ocho Rios.',
      bedrooms: 1, bathrooms: 1, maxGuests: 2, pricePerNight: 155,
      amenities: ['King Bed', 'Garden View', 'Bathroom', 'AC', 'Free WiFi', 'Smart TV', 'Kitchenette', 'Patio'],
      images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80'],
      airbnbUrl: 'https://www.airbnb.com/rooms/1694447305874309310',
      vrboUrl: '',
      isActive: true, order: 3,
    },
    {
      name: '1 Bedroom / 1 Bath Tropical Escape Near Ocho Rios',
      slug: '1-bedroom-tropical-escape',
      shortDesc: 'A tropical paradise just moments from Ocho Rios attractions.',
      description: 'Enjoy the ultimate tropical escape in this cozy one-bedroom, one-bathroom unit surrounded by lush greenery and just minutes from Ocho Rios.',
      bedrooms: 1, bathrooms: 1, maxGuests: 2, pricePerNight: 135,
      amenities: ['Queen Bed', 'Tropical View', 'Bathroom', 'AC', 'Free WiFi', 'Smart TV', 'Kitchenette', 'Balcony'],
      images: ['https://images.unsplash.com/photo-1590490360182-c33d7dc8b4da?w=800&q=80'],
      airbnbUrl: 'https://www.airbnb.com/rooms/51519181',
      vrboUrl: '',
      isActive: true, order: 4,
    },
  ]);
  console.log('✅ 4 Rooms seeded with correct Airbnb URLs');

  // Reviews
  const reviewCount = await Review.countDocuments();
  if (reviewCount === 0) {
    await Review.insertMany([
      { name: 'Jessica M.', origin: 'New York, USA', rating: 5, platform: 'airbnb', approved: true, featured: true, text: 'Sunset Retreat JA was absolutely amazing! The view, the comfort, and the hospitality were beyond our expectations.' },
      { name: 'Michael R.', origin: 'Toronto, Canada', rating: 5, platform: 'vrbo', approved: true, featured: true, text: 'Best vacation rental we have ever stayed in. Clean, luxurious, and the sunset views are simply magical.' },
      { name: 'Sarah & Tom', origin: 'London, UK', rating: 5, platform: 'google', approved: true, featured: true, text: 'From the moment we arrived we felt at home. Beautiful, private, and perfectly located.' },
    ]);
    console.log('✅ Reviews seeded');
  }

  console.log('\n🌴 Done! Login with:');
  console.log('   Email:    admin@sunsetretreatja.com');
  console.log('   Password: sunset2026\n');

  await mongoose.disconnect();
}

seed().catch(err => { console.error('❌ Error:', err); process.exit(1); });