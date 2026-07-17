const router = require('express').Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const Gallery = require('../models/Gallery');
const auth = require('../middleware/auth');

const storage = new CloudinaryStorage({
  cloudinary,
  params: { folder: 'gta-homecare-gallery' },
});
const upload = multer({ storage });

// Public: list gallery images
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin: upload new image
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No image uploaded' });
    const image = new Gallery({ url: req.file.path, publicId: req.file.filename, alt: req.body.alt || 'GTA Homecare Services' });
    await image.save();
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin: delete image
router.delete('/:id', auth, async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ message: 'Image not found' });
    await cloudinary.uploader.destroy(image.publicId);
    await image.deleteOne();
    res.json({ message: 'Image deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
