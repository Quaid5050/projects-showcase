import mongoose from 'mongoose';

const taxIntakeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: String },
  gender: { type: String },
  sin: { type: String, required: true },
  maritalStatus: { type: String },
  statusInCanada: { type: String },
  dependants: { type: String },
  address: {
    street: String,
    street2: String,
    city: String,
    province: String,
    postalCode: String,
  },
  documents: [{
    url: String,
    publicId: String,
    originalName: String,
    format: String,
  }],
  certified: { type: Boolean, required: true },
  status: { type: String, enum: ['new', 'in-progress', 'completed'], default: 'new' },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('TaxIntake', taxIntakeSchema);
