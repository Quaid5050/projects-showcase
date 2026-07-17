const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  headline: String,
  subheadline: String,
  video: String,
  fallbackImage: String,
  image: String,
  ctaPrimary: String,
  ctaSecondary: String,

  // "Meet Your Personal Finance Coach" section (editable from admin)
  coachImage: String,
  coachName: String,
  coachRole: String,
  coachBio: String,      // supports two paragraphs separated by a blank line
  coachCta: String,
}, { timestamps: true })
module.exports = mongoose.model('Hero', schema)
