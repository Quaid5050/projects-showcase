const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: String,
  content: String,
  image: String,
  category: String,
  date: { type: Date, default: Date.now },
}, { timestamps: true })
module.exports = mongoose.model('Blog', schema)
