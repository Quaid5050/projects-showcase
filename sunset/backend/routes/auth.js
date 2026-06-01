const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && await user.matchPassword(password)) {
      res.json({ _id: user._id, name: user.name, email: user.email, token: generateToken(user._id) });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/register (first time setup)
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });
    const user = await User.create({ name, email, password });
    res.status(201).json({ _id: user._id, name: user.name, email: user.email, token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/me
router.get('/me', protect, async (req, res) => {
  res.json(req.user);
});

// GET /api/auth/setup — browser se open karo, admin create/reset karta hai
// SECURITY: yeh route sirf SETUP_KEY env variable se protect hai
// Deploy ke baad SETUP_KEY env variable hata do ya route comment out karo
router.get('/setup', async (req, res) => {
  const { key, email, password, name } = req.query;

  // Simple secret key check
  if (!process.env.SETUP_KEY || key !== process.env.SETUP_KEY) {
    return res.status(403).json({ message: 'Forbidden. SETUP_KEY required as ?key=yourkey' });
  }

  if (!email || !password) {
    return res.status(400).json({ message: 'Pass ?email=&password=&name= in URL' });
  }

  try {
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.findOneAndUpdate(
      { email },
      { name: name || 'Admin', email, password: hashed, role: 'admin' },
      { upsert: true, new: true }
    );

    res.json({
      message: '✅ Admin user created/updated successfully!',
      email: user.email,
      name: user.name,
      note: 'Aap ab /admin/login pe ja kar login kar sakte hain'
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;