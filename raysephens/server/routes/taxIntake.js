import express from 'express';
import nodemailer from 'nodemailer';
import TaxIntake from '../models/TaxIntake.js';
import { protect } from '../middleware/auth.js';
import { uploadDocs, cloudinary } from '../config/cloudinary.js';

const router = express.Router();

const createTransporter = () => nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// POST /api/tax-intake — public
router.post('/', uploadDocs.array('documents', 10), async (req, res) => {
  try {
    const {
      firstName, lastName, email, phone, dateOfBirth, gender, sin,
      maritalStatus, statusInCanada, dependants,
      street, street2, city, province, postalCode, certified,
    } = req.body;

    if (!firstName || !lastName || !email || !phone || !sin || !certified) {
      return res.status(400).json({ success: false, message: 'Please fill all required fields and certify the declaration.' });
    }

    const documents = (req.files || []).map(f => ({
      url: f.path,
      publicId: f.filename,
      originalName: f.originalname,
      format: f.format || f.mimetype,
    }));

    const intake = await TaxIntake.create({
      firstName, lastName, email, phone, dateOfBirth, gender, sin,
      maritalStatus, statusInCanada, dependants,
      address: { street, street2, city, province, postalCode },
      documents,
      certified: certified === 'true' || certified === true,
    });

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Ray Stephens Tax Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Tax Intake Submission — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;">
          <h2 style="color:#5C3D14;">New Tax Intake Form Submitted</h2>
          <p><strong>${firstName} ${lastName}</strong> (${email}, ${phone}) submitted their tax intake form with ${documents.length} document(s) attached.</p>
          <p>Log into the admin panel to view details and download documents.</p>
        </div>
      `,
    }).catch(err => console.error('Tax intake notification email failed:', err.message));

    res.status(201).json({ success: true, message: 'Submitted successfully', id: intake._id });
  } catch (error) {
    console.error('Tax intake error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit. Please try again.' });
  }
});

// GET /api/tax-intake — admin only
router.get('/', protect, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = status ? { status } : {};
    const intakes = await TaxIntake.find(filter).sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit);
    const total = await TaxIntake.countDocuments(filter);
    res.json({ success: true, intakes, total, pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/tax-intake/:id — admin only
router.patch('/:id', protect, async (req, res) => {
  try {
    const intake = await TaxIntake.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, intake });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/tax-intake/:id/download/:publicId — admin only, forces file download
router.get('/:id/download/:docIndex', protect, async (req, res) => {
  try {
    const intake = await TaxIntake.findById(req.params.id);
    if (!intake) return res.status(404).json({ success: false, message: 'Not found' });
    const doc = intake.documents[req.params.docIndex];
    if (!doc) return res.status(404).json({ success: false, message: 'Document not found' });

    const rawFormats = ['doc', 'docx'];
    const resourceType = rawFormats.includes((doc.format || '').toLowerCase()) ? 'raw' : 'image';

    const downloadUrl = cloudinary.url(doc.publicId, {
      resource_type: resourceType,
      type: 'upload',
      flags: 'attachment',
      secure: true,
    });
    res.redirect(downloadUrl);
  } catch (error) {
    console.error('Tax intake download error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
