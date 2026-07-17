const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' });
    const match = await admin.comparePassword(password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, admin: { email: admin.email, name: admin.name } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Seed default admin (run once)
router.post('/seed', async (req, res) => {
  try {
    const exists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (exists) return res.json({ message: 'Admin already exists' });
    const admin = new Admin({ email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD, name: 'GTA Admin' });
    await admin.save();
    res.json({ message: 'Admin created', email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
