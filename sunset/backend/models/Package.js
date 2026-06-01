const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  duration: String,
  features: [String],
  isActive: { type: Boolean, default: true },
  isSpecialOffer: { type: Boolean, default: false },
  offerBadge: String
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);
