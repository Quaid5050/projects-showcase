const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName:  { type: String, required: true, trim: true },
    email:     { type: String, required: true, lowercase: true, trim: true },
    phone:     { type: String, trim: true },
    province:  { type: String, trim: true },
    service: {
      type: String,
      enum: [
        'Canadian Pardon / Record Suspension',
        'US Entry Waiver',
        'NEXUS Application',
        'Multiple Services',
        'Not Sure',
      ],
    },
    message: { type: String, trim: true },
    source:  { type: String, default: 'Website Form' },

    // CRM Pipeline Stage
    status: {
      type: String,
      enum: ['New Lead', 'Contacted', 'In Review', 'Documents Requested', 'Submitted', 'Approved', 'Rejected', 'Closed'],
      default: 'New Lead',
    },

    // Internal notes
    notes: [
      {
        text:      String,
        createdAt: { type: Date, default: Date.now },
        addedBy:   String,
      },
    ],

    assignedTo:   { type: String, default: 'Unassigned' },
    followUpDate: { type: Date },
    isArchived:   { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);
