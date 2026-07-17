const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, default: 'shield' },
  description: String,
  image: String,
  features: [String],
  order: { type: Number, default: 0 },
}, { timestamps: true })
module.exports = mongoose.model('Service', schema)