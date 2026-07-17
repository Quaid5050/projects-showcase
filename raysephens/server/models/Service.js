import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String },
  image: { type: String },
  imagePublicId: { type: String },
  icon: { type: String, default: 'document' },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  slug: { type: String, unique: true },
}, { timestamps: true });

serviceSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  next();
});

export default mongoose.model('Service', serviceSchema);
