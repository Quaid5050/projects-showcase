const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  church: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pastorName: { type: String, required: true },
  churchName: { type: String },
  title: { type: String, required: true },
  content: { type: String, required: true },
  videoUrl: { type: String },
  thumbnail: { type: String },
  isFeatured: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: false },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Story', StorySchema);
