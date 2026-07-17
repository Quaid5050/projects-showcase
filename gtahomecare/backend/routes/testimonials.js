const router = require('express').Router();
const Testimonial = require('../models/Testimonial');
const auth = require('../middleware/auth');

// Public - Submit a review
router.post('/', async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json({ message: 'Thank you for your review! It will appear after approval.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Public - Get approved reviews
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ status: 'Approved' }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin - Get all reviews (pending + approved)
router.get('/all', auth, async (req, res) => {
  try {
    const { status } = req.query;
    const query = status && status !== 'All' ? { status } : {};
    const testimonials = await Testimonial.find(query).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin - Approve/update review
router.put('/:id', auth, async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
    res.json(testimonial);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin - Delete review
router.delete('/:id', auth, async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
