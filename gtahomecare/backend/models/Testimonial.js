const mongoose = require('mongoose');
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  text: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved'], default: 'Pending' },
}, { timestamps: true });
module.exports = mongoose.model('Testimonial', testimonialSchema);
