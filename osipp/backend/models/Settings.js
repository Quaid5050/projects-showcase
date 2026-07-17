const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  businessName: { type: String, default: 'OSIPP Delivery' },
  phone: { type: String, default: '+1 905 462 2160' },
  email: { type: String, default: 'osippdelivery741@gmail.com' },
  whatsapp: { type: String, default: '+1 905 462 2160' },
  instagram: { type: String, default: 'https://www.instagram.com/osipp_delivery' },
  address: { type: String, default: 'Mississauga, ON' },
  deliveryRadius: { type: String, default: 'Mississauga & GTA' },
  minOrder: { type: Number, default: 0 },
  freeDeliveryThreshold: { type: Number, default: 60 },
  deliveryFee: { type: Number, default: 4.99 },
  deliveryHours: {
    monThu: { type: String, default: '11am – 11pm' },
    friSat: { type: String, default: '11am – 1am' },
    sunday: { type: String, default: '12pm – 10pm' }
  },
  isOpen: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
