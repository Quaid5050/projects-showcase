const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { protect, requireApproved, authorize } = require('../middleware/auth');

// @route GET /api/churches - Get all approved churches (for directory)
router.get('/', protect, requireApproved, async (req, res) => {
  try {
    const { city, denomination, search } = req.query;
    const query = { status: 'approved', role: { $in: ['pastor', 'admin'] } };

    if (city) query.city = new RegExp(city, 'i');
    if (denomination) query.denomination = new RegExp(denomination, 'i');
    if (search) {
      query.$or = [
        { churchName: new RegExp(search, 'i') },
        { pastorName: new RegExp(search, 'i') }
      ];
    }

    const churches = await User.find(query)
      .select('pastorName churchName churchAddress city state phone website denomination congregationSize bio profileImage churchLogo')
      .sort({ churchName: 1 });

    res.json({ success: true, count: churches.length, churches });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route GET /api/churches/:id
router.get('/:id', protect, requireApproved, async (req, res) => {
  try {
    const church = await User.findById(req.params.id)
      .select('-password -resetPasswordToken -resetPasswordExpire');
    if (!church || church.status !== 'approved') {
      return res.status(404).json({ success: false, message: 'Church not found' });
    }
    res.json({ success: true, church });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
