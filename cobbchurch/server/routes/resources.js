const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');
const { protect, requireApproved, authorize } = require('../middleware/auth');

// @route GET /api/resources - List all active resources (approved users)
router.get('/', protect, requireApproved, async (req, res) => {
  try {
    const { category, availability, city, crisisSupport, search } = req.query;
    const query = { isActive: true };

    if (category) query.category = category;
    if (availability) query.availability = availability;
    if (city) query.city = new RegExp(city, 'i');
    if (crisisSupport === 'true') query.crisisSupport = true;
    if (search) query.$or = [
      { title: new RegExp(search, 'i') },
      { description: new RegExp(search, 'i') }
    ];

    const resources = await Resource.find(query)
      .populate('church', 'churchName pastorName city phone')
      .sort({ createdAt: -1 });

    res.json({ success: true, count: resources.length, resources });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route POST /api/resources - Create resource
router.post('/', protect, requireApproved, async (req, res) => {
  try {
    const resource = await Resource.create({ ...req.body, church: req.user.id });
    res.status(201).json({ success: true, resource });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route PUT /api/resources/:id - Update own resource
router.put('/:id', protect, requireApproved, async (req, res) => {
  try {
    let resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ success: false, message: 'Not found' });
    if (resource.church.toString() !== req.user.id && !['admin', 'superadmin'].includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    resource = await Resource.findByIdAndUpdate(req.params.id, { ...req.body, updatedAt: Date.now() }, { new: true });
    res.json({ success: true, resource });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route DELETE /api/resources/:id
router.delete('/:id', protect, requireApproved, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ success: false, message: 'Not found' });
    if (resource.church.toString() !== req.user.id && !['admin', 'superadmin'].includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    await resource.deleteOne();
    res.json({ success: true, message: 'Resource removed' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route GET /api/resources/my - My church's resources
router.get('/my/list', protect, requireApproved, async (req, res) => {
  try {
    const resources = await Resource.find({ church: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, resources });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
