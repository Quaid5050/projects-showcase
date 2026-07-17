require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Settings = require('./models/Settings');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/osipp_delivery';

const products = [
  { name: 'Budweiser', category: 'Beer', subCategory: 'Lager', store: 'Beer Store', volume: '6-pack 355ml', price: 16.95, badge: 'Popular', stock: 200 },
  { name: 'Corona Extra', category: 'Beer', subCategory: 'Lager', store: 'Beer Store', volume: '12 x 355ml', price: 24.99, badge: '', stock: 150 },
  { name: 'Heineken', category: 'Beer', subCategory: 'Lager', store: 'Beer Store', volume: '6-pack 330ml', price: 17.49, badge: '', stock: 180 },
  { name: 'Guinness Draught', category: 'Beer', subCategory: 'Stout', store: 'Beer Store', volume: '4-pack 440ml', price: 15.99, badge: 'Premium', stock: 120 },
  { name: 'Coors Light', category: 'Beer', subCategory: 'Lager', store: 'Beer Store', volume: '12 x 355ml', price: 22.99, badge: '', stock: 200 },
  { name: 'Stella Artois', category: 'Beer', subCategory: 'Lager', store: 'Beer Store', volume: '6-pack 330ml', price: 16.49, badge: '', stock: 160 },
  { name: 'Alexander Keith\'s', category: 'Beer', subCategory: 'IPA', store: 'Beer Store', volume: '6-pack 341ml', price: 15.99, badge: '', stock: 140 },
  { name: 'Molson Canadian', category: 'Beer', subCategory: 'Lager', store: 'Beer Store', volume: '24 x 355ml', price: 39.99, badge: 'Popular', stock: 100 },
  { name: 'Sapporo', category: 'Beer', subCategory: 'Lager', store: 'Beer Store', volume: '6-pack 355ml', price: 14.99, badge: '', stock: 90 },
  { name: 'Mill Street Organic', category: 'Beer', subCategory: 'Lager', store: 'Beer Store', volume: '6-pack 341ml', price: 15.49, badge: '', stock: 110 },

  { name: 'Jack Daniel\'s', category: 'Spirits', subCategory: 'Whiskey', store: 'Liquor Store', volume: '750ml', price: 38.95, badge: 'Popular', stock: 80 },
  { name: 'Grey Goose', category: 'Spirits', subCategory: 'Vodka', store: 'Liquor Store', volume: '750ml', price: 44.99, badge: 'Premium', stock: 60 },
  { name: 'Bacardi White Rum', category: 'Spirits', subCategory: 'Rum', store: 'Liquor Store', volume: '750ml', price: 27.49, badge: '', stock: 100 },
  { name: 'Don Julio 1942', category: 'Spirits', subCategory: 'Tequila', store: 'Liquor Store', volume: '750ml', price: 189.99, badge: 'Premium', stock: 25 },
  { name: 'Hennessy VS', category: 'Spirits', subCategory: 'Cognac', store: 'Liquor Store', volume: '750ml', price: 54.99, badge: '', stock: 50 },
  { name: 'Captain Morgan', category: 'Spirits', subCategory: 'Rum', store: 'Liquor Store', volume: '750ml', price: 29.95, badge: '', stock: 90 },
  { name: 'Smirnoff Vodka', category: 'Spirits', subCategory: 'Vodka', store: 'Liquor Store', volume: '750ml', price: 24.99, badge: 'Popular', stock: 150 },
  { name: 'Crown Royal', category: 'Spirits', subCategory: 'Whiskey', store: 'Liquor Store', volume: '750ml', price: 35.99, badge: '', stock: 70 },
  { name: 'Bombay Sapphire', category: 'Spirits', subCategory: 'Gin', store: 'Liquor Store', volume: '750ml', price: 32.99, badge: '', stock: 65 },
  { name: 'Patron Silver', category: 'Spirits', subCategory: 'Tequila', store: 'Liquor Store', volume: '750ml', price: 62.99, badge: 'Premium', stock: 40 },

  { name: 'Kim Crawford', category: 'Wine', subCategory: 'Sauvignon Blanc', store: 'Liquor Store', volume: '750ml', price: 19.95, badge: 'Popular', stock: 100 },
  { name: 'Apothic Red', category: 'Wine', subCategory: 'Red Blend', store: 'Liquor Store', volume: '750ml', price: 16.99, badge: '', stock: 120 },
  { name: 'Veuve Clicquot', category: 'Wine', subCategory: 'Champagne', store: 'Liquor Store', volume: '750ml', price: 69.99, badge: 'Premium', stock: 30 },
  { name: 'Barefoot Moscato', category: 'Wine', subCategory: 'Moscato', store: 'Liquor Store', volume: '750ml', price: 12.99, badge: '', stock: 140 },
  { name: 'Yellow Tail Shiraz', category: 'Wine', subCategory: 'Shiraz', store: 'Liquor Store', volume: '750ml', price: 13.49, badge: '', stock: 130 },
  { name: 'Meiomi Pinot Noir', category: 'Wine', subCategory: 'Pinot Noir', store: 'Liquor Store', volume: '750ml', price: 24.99, badge: '', stock: 80 },
  { name: 'Josh Cellars Cabernet', category: 'Wine', subCategory: 'Cabernet', store: 'Liquor Store', volume: '750ml', price: 19.99, badge: 'Popular', stock: 90 },
  { name: 'Oyster Bay Pinot Gris', category: 'Wine', subCategory: 'Pinot Gris', store: 'Liquor Store', volume: '750ml', price: 17.49, badge: '', stock: 85 },

  { name: 'Lay\'s Classic Chips', category: 'Convenience', subCategory: 'Chips', store: 'Convenience Store', volume: '200g', price: 4.49, badge: '', stock: 300 },
  { name: 'Doritos Nacho', category: 'Convenience', subCategory: 'Chips', store: 'Convenience Store', volume: '255g', price: 5.49, badge: '', stock: 250 },
  { name: 'Red Bull Energy', category: 'Convenience', subCategory: 'Drinks', store: 'Convenience Store', volume: '4-pack 250ml', price: 11.99, badge: 'Popular', stock: 200 },
  { name: 'Coca-Cola', category: 'Convenience', subCategory: 'Drinks', store: 'Convenience Store', volume: '2L', price: 3.49, badge: '', stock: 300 },
  { name: 'Canada Dry Ginger Ale', category: 'Convenience', subCategory: 'Mixer', store: 'Convenience Store', volume: '2L', price: 3.49, badge: '', stock: 200 },
  { name: 'Tonic Water Schweppes', category: 'Convenience', subCategory: 'Mixer', store: 'Convenience Store', volume: '1L', price: 2.99, badge: '', stock: 180 },
  { name: 'Bag of Ice', category: 'Convenience', subCategory: 'Party', store: 'Convenience Store', volume: '3kg', price: 4.99, badge: 'Popular', stock: 500 },
  { name: 'Solo Cups Red 50pk', category: 'Convenience', subCategory: 'Party', store: 'Convenience Store', volume: '50 cups', price: 8.99, badge: '', stock: 150 },
  { name: 'Lime Wedges Pack', category: 'Convenience', subCategory: 'Garnish', store: 'Convenience Store', volume: '1 pack', price: 3.99, badge: '', stock: 120 },
  { name: 'Mixed Nuts', category: 'Convenience', subCategory: 'Snacks', store: 'Convenience Store', volume: '300g', price: 7.99, badge: '', stock: 160 },
];

const sampleOrders = [
  {
    customer: { name: 'Ahmed Khan', email: 'ahmed@email.com', phone: '+1 905 111 2222', address: '45 Elm St', city: 'Mississauga', postalCode: 'L5B 1M4' },
    status: 'delivered', paymentMethod: 'card', paymentStatus: 'paid', deliveredAt: new Date()
  },
  {
    customer: { name: 'Sara Mitchell', email: 'sara@email.com', phone: '+1 905 333 4444', address: '120 Queen Blvd', city: 'Mississauga', postalCode: 'L5A 2K1' },
    status: 'confirmed', paymentMethod: 'cash', paymentStatus: 'pending'
  },
  {
    customer: { name: 'Ravi Patel', email: 'ravi.p@email.com', phone: '+1 905 555 6666', address: '88 Dundas Ave', city: 'Mississauga', postalCode: 'L5C 3N2' },
    status: 'pending', paymentMethod: 'card', paymentStatus: 'paid'
  },
  {
    customer: { name: 'Emily Chen', email: 'emily.c@email.com', phone: '+1 416 777 8888', address: '200 Lakeshore Rd', city: 'Toronto', postalCode: 'M5V 1A1' },
    status: 'out_for_delivery', paymentMethod: 'interac', paymentStatus: 'paid'
  },
  {
    customer: { name: 'Tom Bradley', email: 'tomb@email.com', phone: '+1 905 999 0000', address: '15 Hurontario St', city: 'Mississauga', postalCode: 'L5B 2P4' },
    status: 'cancelled', paymentMethod: 'card', paymentStatus: 'refunded', cancelReason: 'Customer request'
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});
    await Settings.deleteMany({});

    // Admin user
    const admin = await User.create({
      name: 'OSIPP Admin',
      email: 'admin@osipp.ca',
      phone: '+1 905 462 2160',
      password: 'osipp2024',
      role: 'admin'
    });
    console.log('Admin created: admin@osipp.ca / osipp2024');

    // Products
    const createdProducts = await Product.insertMany(products);
    console.log(`${createdProducts.length} products seeded`);

    // Settings
    await Settings.create({});
    console.log('Settings created');

    // Orders
    for (let i = 0; i < sampleOrders.length; i++) {
      const o = sampleOrders[i];
      const randomProducts = createdProducts.sort(() => 0.5 - Math.random()).slice(0, Math.floor(1 + Math.random() * 3));
      const items = randomProducts.map(p => ({
        product: p._id, name: p.name, price: p.price, quantity: Math.floor(1 + Math.random() * 3), volume: p.volume
      }));
      const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);
      const deliveryFee = subtotal >= 60 ? 0 : 4.99;

      await Order.create({
        ...o,
        items,
        subtotal,
        deliveryFee,
        total: subtotal + deliveryFee
      });
    }
    console.log(`${sampleOrders.length} sample orders created`);

    console.log('\nSeed complete!');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
