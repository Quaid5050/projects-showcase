const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  images: [{ type: String }],
  specs: [{
    label: String,
    value: String
  }],
  features: [String],
  category: { type: String, enum: ['android-box', 'iptv-box', 'mag-box', 'accessories'], default: 'iptv-box' },
  inStock: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  reviewCount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
