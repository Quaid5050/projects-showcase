const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  service: String,
  date: String,
  time: String,
  message: String,
  language: { type: String, default: 'English' },
  status: { type: String, enum: ['pending','confirmed','cancelled'], default: 'pending' },
}, { timestamps: true })
module.exports = mongoose.model('Booking', schema)
