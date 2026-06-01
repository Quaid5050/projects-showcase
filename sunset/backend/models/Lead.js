const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  checkin: Date,
  checkout: Date,
  guests: { type: Number, default: 1 },
  message: String,
  package: String,
  status: { type: String, enum: ['new', 'contacted', 'booked', 'closed'], default: 'new' },
  notes: String,
  source: { type: String, default: 'website' }
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
