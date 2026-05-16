const express = require('express');
const router = express.Router();
const Crisis = require('../models/Crisis');
const User = require('../models/User');
const { protect, requireApproved, authorize } = require('../middleware/auth');
const { sendCrisisAlert } = require('../utils/email');

// Get active crisis alerts (approved churches only)
router.get('/', protect, requireApproved, async (req, res) => {
  try {
    const alerts = await Crisis.find({ isActive: true })
      .populate('createdBy', 'churchName pastorName')
      .sort({ urgency: -1, createdAt: -1 });
    res.json({ success: true, alerts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Create crisis alert (admin only)
router.post('/', protect, authorize('admin', 'superadmin'), async (req, res) => {
  try {
    const crisis = await Crisis.create({ ...req.body, createdBy: req.user.id });

    // Notify all approved churches
    const churches = await User.find({ status: 'approved', role: { $in: ['pastor', 'admin'] } }).select('email');
    const emails = churches.map(c => c.email);
    await sendCrisisAlert(emails, crisis);

    res.status(201).json({ success: true, crisis });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Respond to crisis
router.post('/:id/respond', protect, requireApproved, async (req, res) => {
  try {
    const crisis = await Crisis.findById(req.params.id);
    if (!crisis) return res.status(404).json({ success: false, message: 'Not found' });

    const alreadyResponded = crisis.respondingChurches.find(r => r.church.toString() === req.user.id);
    if (alreadyResponded) return res.status(400).json({ success: false, message: 'Already responded' });

    crisis.respondingChurches.push({ church: req.user.id, response: req.body.response });
    await crisis.save();
    res.json({ success: true, message: 'Response submitted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Resolve crisis (admin)
router.put('/:id/resolve', protect, authorize('admin', 'superadmin'), async (req, res) => {
  try {
    const crisis = await Crisis.findByIdAndUpdate(req.params.id, { isActive: false, resolvedAt: Date.now() }, { new: true });
    res.json({ success: true, crisis });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
