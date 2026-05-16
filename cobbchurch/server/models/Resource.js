const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  church: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: ['food', 'counseling', 'volunteers', 'transportation', 'youth', 'family', 'outreach', 'prayer', 'emergency', 'facilities', 'other'],
    required: true
  },
  availability: {
    type: String,
    enum: ['available', 'limited', 'unavailable'],
    default: 'available'
  },
  contactInfo: { type: String },
  crisisSupport: { type: Boolean, default: false },
  city: { type: String },
  tags: [String],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', ResourceSchema);
