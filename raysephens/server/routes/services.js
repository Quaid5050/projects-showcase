import express from 'express';
import Service from '../models/Service.js';
import { protect } from '../middleware/auth.js';
import { upload, cloudinary } from '../config/cloudinary.js';

const router = express.Router();

// GET /api/services — public
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
    res.json({ success: true, services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/services/:slug — public
router.get('/:slug', async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug, isActive: true });
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    res.json({ success: true, service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/services/seed — creates the default service list if none exist (run once)
router.post('/seed', async (req, res) => {
  try {
    const count = await Service.countDocuments();
    if (count > 0) {
      return res.status(400).json({ success: false, message: 'Services already exist' });
    }
    const defaults = [
      { title: 'Income Tax Preparation', shortDescription: 'Accurate personal, self-employed, and employment income tax returns filed on time with full CRA compliance.', description: 'Accurate personal, self-employed, and employment income tax returns filed on time with full CRA compliance.', icon: 'tax', order: 1 },
      { title: 'Bookkeeping Services', shortDescription: 'Complete financial records management — monthly or annual — for small businesses and sole proprietors.', description: 'Complete financial records management — monthly or annual — for small businesses and sole proprietors.', icon: 'book', order: 2 },
      { title: 'Payroll Services', shortDescription: 'Comprehensive payroll processing including deductions, remittances, T4 slips, and ROE filing.', description: 'Comprehensive payroll processing including deductions, remittances, T4 slips, and ROE filing.', icon: 'payroll', order: 3 },
      { title: 'HST Filing', shortDescription: 'Accurate HST/GST registration, preparation, and CRA filing for businesses of all sizes.', description: 'Accurate HST/GST registration, preparation, and CRA filing for businesses of all sizes.', icon: 'hst', order: 4 },
      { title: 'Charitable Tax Filing', shortDescription: 'Specialized tax preparation for charitable donations and registered charities.', description: 'Specialized tax preparation for charitable donations and registered charities.', icon: 'charitable', order: 5 },
      { title: 'Corporate Filing', shortDescription: 'Full corporate tax return preparation, T2 filing, and year-end financial statement services.', description: 'Full corporate tax return preparation, T2 filing, and year-end financial statement services.', icon: 'corporate', order: 6 },
      { title: 'Citizenship Applications', shortDescription: 'Document preparation and review support for Canadian citizenship applications.', description: 'Document preparation and review support for Canadian citizenship applications.', icon: 'citizenship', order: 7 },
      { title: 'Sponsorship Applications', shortDescription: 'Family and spousal sponsorship application assistance with document review and submission support.', description: 'Family and spousal sponsorship application assistance with document review and submission support.', icon: 'sponsorship', order: 8 },
      { title: 'PR Renewal', shortDescription: 'Permanent Resident card renewal application preparation and documentation support.', description: 'Permanent Resident card renewal application preparation and documentation support.', icon: 'pr', order: 9 },
    ];
    const services = [];
    for (const data of defaults) {
      services.push(await Service.create(data));
    }
    res.json({ success: true, message: `${services.length} services created`, services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/services — admin only
router.post('/', protect, upload.single('image'), async (req, res) => {
  try {
    const { title, description, shortDescription, icon, order } = req.body;
    const serviceData = { title, description, shortDescription, icon, order: order || 0 };
    if (req.file) {
      serviceData.image = req.file.path;
      serviceData.imagePublicId = req.file.filename;
    }
    const service = await Service.create(serviceData);
    res.status(201).json({ success: true, service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/services/:id — admin only
router.put('/:id', protect, upload.single('image'), async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    const { title, description, shortDescription, icon, order, isActive } = req.body;
    if (title) service.title = title;
    if (description) service.description = description;
    if (shortDescription !== undefined) service.shortDescription = shortDescription;
    if (icon) service.icon = icon;
    if (order !== undefined) service.order = order;
    if (isActive !== undefined) service.isActive = isActive === 'true' || isActive === true;
    if (req.file) {
      if (service.imagePublicId) {
        await cloudinary.uploader.destroy(service.imagePublicId);
      }
      service.image = req.file.path;
      service.imagePublicId = req.file.filename;
    }
    await service.save();
    res.json({ success: true, service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/services/:id — admin only
router.delete('/:id', protect, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    if (service.imagePublicId) {
      await cloudinary.uploader.destroy(service.imagePublicId);
    }
    await service.deleteOne();
    res.json({ success: true, message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
