const User = require('../models/User');

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ role: 'superadmin' });
    if (adminExists) return;

    await User.create({
      email: process.env.ADMIN_EMAIL || 'admin@cobbchurchnetwork.org',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'superadmin',
      status: 'approved',
      pastorName: 'Network Administrator',
      churchName: 'Cobb Church Network',
      city: 'Cobb County',
      state: 'GA'
    });
    console.log('✅ Admin user seeded');
  } catch (err) {
    console.error('Seed error:', err.message);
  }
};

seedAdmin();
