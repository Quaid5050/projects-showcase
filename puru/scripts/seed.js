/**
 * MongoDB Seed Script for YUVAAN INTERNATIONAL
 * ─────────────────────────────────────────────
 * Run: node scripts/seed.js
 *
 * COMPASS CONNECTION:
 *   URI: mongodb://localhost:27017
 *   Database: yuvaan-international
 *
 * ADMIN LOGIN:
 *   URL: http://localhost:3000/admin
 *   Username: admin
 *   Password: Yuvaan@Admin2024
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yuvaan-international';

// ── Schemas ───────────────────────────────────────────────────────────────
const AdminSchema = new mongoose.Schema({ username: String, email: String, password: String, role: String }, { timestamps: true });
const SiteContentSchema = new mongoose.Schema({ section: String, key: String, value: String, type: String, label: String }, { timestamps: true });
SiteContentSchema.index({ section: 1, key: 1 }, { unique: true });
const InquirySchema = new mongoose.Schema({ fullName: String, companyName: String, email: String, phone: String, country: String, businessType: String, inquiryCategory: String, productOrServiceNeeded: String, message: String, status: { type: String, default: 'new' }, source: { type: String, default: 'contact' } }, { timestamps: true });
const LeadSchema = new mongoose.Schema({ name: String, email: String, phone: String, company: String, businessType: String, status: { type: String, default: 'new' } }, { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);
const SiteContent = mongoose.model('SiteContent', SiteContentSchema);
const Inquiry = mongoose.model('Inquiry', InquirySchema);
const Lead = mongoose.model('LeadSignup', LeadSchema);

// ── Site Content Seed Data ────────────────────────────────────────────────
const siteContentSeed = [
  { section: 'hero', key: 'eyebrow', value: 'Canada-Based International Trade', type: 'text', label: 'Hero Eyebrow Text' },
  { section: 'hero', key: 'headline_line1', value: 'Global Trade Connections for', type: 'text', label: 'Hero Headline Line 1' },
  { section: 'hero', key: 'headline_accent1', value: 'Products,', type: 'text', label: 'Hero Accent Word 1' },
  { section: 'hero', key: 'headline_accent2', value: 'Machinery', type: 'text', label: 'Hero Accent Word 2' },
  { section: 'hero', key: 'headline_suffix', value: '& Partnerships', type: 'text', label: 'Hero Headline Suffix' },
  { section: 'hero', key: 'subheadline', value: 'YUVAAN INTERNATIONAL connects importers, exporters, manufacturers, wholesalers, distributors, and industrial buyers with reliable international trade opportunities.', type: 'textarea', label: 'Hero Subheadline' },
  { section: 'hero', key: 'cta_primary', value: 'Complete Inquiry', type: 'text', label: 'Hero CTA Primary Button' },
  { section: 'hero', key: 'cta_secondary', value: 'Explore Products', type: 'text', label: 'Hero CTA Secondary Button' },
  { section: 'hero', key: 'badge1', value: 'Global Network', type: 'text', label: 'Hero Badge 1 Title' },
  { section: 'hero', key: 'badge1_desc', value: 'Trusted connections across 50+ countries.', type: 'text', label: 'Hero Badge 1 Description' },
  { section: 'hero', key: 'badge2', value: 'Reliable & Secure', type: 'text', label: 'Hero Badge 2 Title' },
  { section: 'hero', key: 'badge2_desc', value: 'Verified partners and transparent processes.', type: 'text', label: 'Hero Badge 2 Description' },
  { section: 'hero', key: 'badge3', value: 'Business Growth', type: 'text', label: 'Hero Badge 3 Title' },
  { section: 'hero', key: 'badge3_desc', value: 'Driving scalable partnerships and long-term success.', type: 'text', label: 'Hero Badge 3 Description' },
  { section: 'hero', key: 'badge4', value: 'Dedicated Support', type: 'text', label: 'Hero Badge 4 Title' },
  { section: 'hero', key: 'badge4_desc', value: 'Personalized assistance at every step.', type: 'text', label: 'Hero Badge 4 Description' },
  { section: 'about', key: 'headline', value: 'A Canadian Gateway for International Trade', type: 'text', label: 'About Headline' },
  { section: 'about', key: 'body', value: 'YUVAAN INTERNATIONAL supports importers, exporters, manufacturers, wholesalers, distributors, and industrial buyers by helping create reliable trade connections and business opportunities across markets.', type: 'textarea', label: 'About Body Text' },
  { section: 'about', key: 'mission', value: 'To create trusted international trade pathways for businesses seeking product sourcing, supply connections, distribution, and partnership opportunities.', type: 'textarea', label: 'Mission Statement' },
  { section: 'about', key: 'vision', value: 'To become a reliable global trade gateway for businesses looking to connect, source, distribute, and grow.', type: 'textarea', label: 'Vision Statement' },
  { section: 'navbar', key: 'cta_text', value: 'Complete Inquiry', type: 'text', label: 'Navbar CTA Button Text' },
  { section: 'navbar', key: 'phone', value: '(778) 828-3610', type: 'text', label: 'Navbar Phone Number' },
  { section: 'footer', key: 'tagline', value: 'A Canadian gateway for international trade — connecting importers, exporters, manufacturers, wholesalers, and industrial buyers with global opportunities.', type: 'textarea', label: 'Footer Tagline' },
  { section: 'footer', key: 'phone', value: '(778) 828-3610', type: 'text', label: 'Footer Phone' },
  { section: 'footer', key: 'email', value: 'pacifictrade2010@gmail.com', type: 'text', label: 'Footer Email' },
  { section: 'footer', key: 'disclaimer', value: 'Information on this website is for general business inquiry purposes only. Availability of products, partnerships, sourcing, or trade opportunities is subject to review, confirmation, and applicable regulations.', type: 'textarea', label: 'Footer Disclaimer' },
  { section: 'contact', key: 'headline', value: 'Complete Your Trade Inquiry', type: 'text', label: 'Contact Page Headline' },
  { section: 'contact', key: 'subheadline', value: 'Tell us what you are looking to import, export, source, distribute, or develop.', type: 'text', label: 'Contact Subheadline' },
  { section: 'partnership', key: 'headline', value: 'Strategic Partnerships for Global Trade Growth', type: 'text', label: 'Partnership Headline' },
  { section: 'partnership', key: 'subheadline', value: 'YUVAAN INTERNATIONAL works with businesses seeking reliable trade, sourcing, distribution, and partnership opportunities.', type: 'textarea', label: 'Partnership Subheadline' },
  { section: 'industries', key: 'headline', value: 'Industries We Serve', type: 'text', label: 'Industries Headline' },
  { section: 'industries', key: 'subheadline', value: 'Connecting businesses across key sectors through product sourcing, trade coordination, and partnership opportunities.', type: 'textarea', label: 'Industries Subheadline' },
  { section: 'products', key: 'headline', value: 'Products, Machinery & Trade Categories', type: 'text', label: 'Products Headline' },
  { section: 'products', key: 'subheadline', value: 'Explore the product and machinery categories YUVAAN INTERNATIONAL can help source, connect, or coordinate through international trade channels.', type: 'textarea', label: 'Products Subheadline' },
  { section: 'cta_banner', key: 'headline', value: 'Have a product, machinery, or trade requirement?', type: 'text', label: 'CTA Banner Headline' },
  { section: 'cta_banner', key: 'subheadline', value: 'Submit your inquiry and our team will review your requirements.', type: 'text', label: 'CTA Banner Subheadline' },
  { section: 'cta_banner', key: 'button_text', value: 'Complete Inquiry Form', type: 'text', label: 'CTA Banner Button Text' },
];

// ── Demo Inquiries ─────────────────────────────────────────────────────────
const demoInquiries = [
  { fullName: 'James Henderson', companyName: 'Henderson Imports Ltd', email: 'james@hendersonimports.com', phone: '+1 604-555-0123', country: 'Canada', businessType: 'Importer', inquiryCategory: 'Industrial Machinery', productOrServiceNeeded: 'CNC milling machines - 5 units', message: 'We are looking to import 5 CNC milling machines from manufacturers in Asia. Please connect us with reliable suppliers.', status: 'new', source: 'contact' },
  { fullName: 'Priya Sharma', companyName: 'Global Spice Exports', email: 'priya@globalspice.in', phone: '+91 98765-43210', country: 'India', businessType: 'Exporter', inquiryCategory: 'Agricultural & Food Trade', productOrServiceNeeded: 'Organic spices - bulk export to Canada', message: 'We export certified organic spices and are looking for Canadian importers and distributors.', status: 'reviewed', source: 'product-modal' },
  { fullName: 'Marco Bertoni', companyName: 'Bertoni Distribution', email: 'marco@bertoni.it', phone: '+39 02 555 0198', country: 'Italy', businessType: 'Distributor', inquiryCategory: 'Wholesale / Distribution', productOrServiceNeeded: 'Consumer electronics wholesale distribution partnership', message: 'Looking to establish a wholesale distribution agreement for consumer electronics across North America.', status: 'contacted', source: 'partnership' },
  { fullName: 'Aisha Rahman', companyName: 'Rahman Manufacturing Co.', email: 'aisha@rahmanmfg.com', phone: '+880 1711 234567', country: 'Bangladesh', businessType: 'Manufacturer', inquiryCategory: 'Manufacturing', productOrServiceNeeded: 'Textile manufacturing supplies and export partnership', message: 'We manufacture high-quality textiles and are looking to connect with Canadian wholesale buyers and distributors.', status: 'new', source: 'contact' },
  { fullName: 'David Park', companyName: 'Pacific Construction Ltd', email: 'd.park@pacificconstruction.ca', phone: '+1 778-555-0456', country: 'Canada', businessType: 'Project Partner', inquiryCategory: 'Infrastructure / Project Opportunity', productOrServiceNeeded: 'Construction materials - bulk import from Asia', message: 'Looking for reliable suppliers of steel, cement, and construction aggregates for infrastructure projects.', status: 'new', source: 'contact' },
];

// ── Demo Leads ─────────────────────────────────────────────────────────────
const demoLeads = [
  { name: 'Sarah Mitchell', email: 'sarah.m@tradequest.com', phone: '+1 604-555-0789', company: 'TradeQuest Inc', businessType: 'Importer', status: 'new' },
  { name: 'Carlos Mendez', email: 'carlos@mendezexports.mx', company: 'Mendez Exports', businessType: 'Exporter', status: 'new' },
  { name: 'Yuki Tanaka', email: 'yuki@tanakasupply.jp', company: 'Tanaka Supply Chain', businessType: 'Supplier', status: 'new' },
];

async function seed() {
  console.log('\n🌱 YUVAAN INTERNATIONAL — MongoDB Seed Script');
  console.log('──────────────────────────────────────────────');
  console.log('📡 Connecting to:', MONGODB_URI);

  await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 8000 });
  console.log('✅ Connected to MongoDB\n');

  // ── Admin ──────────────────────────────────────────────────────────
  console.log('👤 Setting up admin user...');
  const existingAdmin = await Admin.findOne({ username: 'admin' });
  if (!existingAdmin) {
    const hashed = await bcrypt.hash('Yuvaan@Admin2024', 12);
    await Admin.create({ username: 'admin', email: 'admin@yuvaaninterntional.com', password: hashed, role: 'super' });
    console.log('   ✅ Admin user created');
  } else {
    console.log('   ℹ️  Admin already exists, skipping');
  }

  // ── Site Content ────────────────────────────────────────────────────
  console.log('\n📝 Seeding site content...');
  let contentAdded = 0;
  for (const item of siteContentSeed) {
    const existing = await SiteContent.findOne({ section: item.section, key: item.key });
    if (!existing) {
      await SiteContent.create(item);
      contentAdded++;
    }
  }
  console.log(`   ✅ ${contentAdded} content items added (${siteContentSeed.length - contentAdded} already existed)`);

  // ── Demo Inquiries ──────────────────────────────────────────────────
  console.log('\n📨 Seeding demo inquiries...');
  const inquiryCount = await Inquiry.countDocuments();
  if (inquiryCount === 0) {
    await Inquiry.insertMany(demoInquiries);
    console.log(`   ✅ ${demoInquiries.length} demo inquiries added`);
  } else {
    console.log(`   ℹ️  ${inquiryCount} inquiries already exist, skipping`);
  }

  // ── Demo Leads ──────────────────────────────────────────────────────
  console.log('\n👥 Seeding demo leads...');
  const leadCount = await Lead.countDocuments();
  if (leadCount === 0) {
    await Lead.insertMany(demoLeads);
    console.log(`   ✅ ${demoLeads.length} demo leads added`);
  } else {
    console.log(`   ℹ️  ${leadCount} leads already exist, skipping`);
  }

  console.log('\n──────────────────────────────────────────────');
  console.log('🎉 Database seeded successfully!\n');
  console.log('📊 MONGODB COMPASS CONNECTION:');
  console.log('   Connection String: mongodb://localhost:27017');
  console.log('   Database Name:     yuvaan-international');
  console.log('   Collections:');
  console.log('     • admins          — Admin users');
  console.log('     • inquiries       — Trade inquiries from website');
  console.log('     • sitecontents    — Editable website content');
  console.log('     • leadsignups     — Newsletter/contact leads');
  console.log('     • productcategories — Product categories');
  console.log('     • industries      — Industry entries');
  console.log('     • partnershiptypes — Partnership types\n');
  console.log('🔐 ADMIN PANEL LOGIN:');
  console.log('   URL:      http://localhost:3000/admin');
  console.log('   Username: admin');
  console.log('   Password: Yuvaan@Admin2024');
  console.log('──────────────────────────────────────────────\n');

  await mongoose.disconnect();
}

seed().catch(err => {
  console.error('\n❌ Seed failed:', err.message);
  if (err.message.includes('ECONNREFUSED') || err.message.includes('connect ECONNREFUSED')) {
    console.error('\n💡 MongoDB is not running. Start it with:');
    console.error('   Windows: Start MongoDB service from Services panel');
    console.error('   Or: mongod --dbpath C:\\data\\db');
  }
  process.exit(1);
});
