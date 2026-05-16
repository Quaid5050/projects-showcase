const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const { sendApplicationReceived } = require('../utils/email');

// @route POST /api/auth/register (Request Access)
router.post('/register', async (req, res) => {
  try {
    const {
      email, password, pastorName, churchName, churchAddress,
      city, state, zip, phone, website, denomination,
      congregationSize, applicationMessage
    } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ success: false, message: 'Email already registered' });

    const user = await User.create({
      email, password, pastorName, churchName, churchAddress,
      city, state, zip, phone, website, denomination,
      congregationSize, applicationMessage,
      role: 'pastor',
      status: 'pending'
    });

    // Send confirmation email
    await sendApplicationReceived(user);

    res.status(201).json({
      success: true,
      message: 'Application submitted. You will receive an email once approved.'
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: 'Please provide email and password' });

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    if (user.status === 'rejected') return res.status(403).json({ success: false, message: 'Your application was not approved.' });
    if (user.status === 'suspended') return res.status(403).json({ success: false, message: 'Account suspended. Contact admin.' });

    user.lastLogin = new Date();
    await user.save();

    const token = user.getSignedJwtToken();
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        status: user.status,
        pastorName: user.pastorName,
        churchName: user.churchName,
        profileImage: user.profileImage
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route GET /api/auth/me
router.get('/me', protect, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ success: true, user });
});

// @route PUT /api/auth/profile
router.put('/profile', protect, async (req, res) => {
  try {
    const fields = ['pastorName', 'churchName', 'churchAddress', 'city', 'state', 'zip', 'phone', 'website', 'denomination', 'congregationSize', 'bio'];
    const updates = {};
    fields.forEach(f => { if (req.body[f] !== undefined) updates[f] = req.body[f]; });

    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true, runValidators: true });
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route PUT /api/auth/password
router.put('/password', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('+password');
    if (!(await user.matchPassword(req.body.currentPassword))) {
      return res.status(400).json({ success: false, message: 'Current password is incorrect' });
    }
    user.password = req.body.newPassword;
    await user.save();
    res.json({ success: true, message: 'Password updated' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
