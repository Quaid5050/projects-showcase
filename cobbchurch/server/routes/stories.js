const express = require('express');
const router = express.Router();
const Story = require('../models/Story');
const { protect, authorize } = require('../middleware/auth');

// Public published stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find({ isPublished: true })
      .populate('church', 'churchName city')
      .sort({ isFeatured: -1, createdAt: -1 });
    res.json({ success: true, stories });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate('church', 'churchName pastorName city');
    if (!story || !story.isPublished) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, story });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Create story
router.post('/', protect, authorize('admin', 'superadmin'), async (req, res) => {
  try {
    const story = await Story.create(req.body);
    res.status(201).json({ success: true, story });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Update story
router.put('/:id', protect, authorize('admin', 'superadmin'), async (req, res) => {
  try {
    const story = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, story });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Delete
router.delete('/:id', protect, authorize('admin', 'superadmin'), async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Story removed' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
