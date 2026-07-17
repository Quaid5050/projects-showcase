const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  alt: { type: String, default: 'GTA Homecare Services' },
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
