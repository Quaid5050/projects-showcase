const router = require('express').Router();
const multer = require('multer');
const { protect, adminOnly } = require('../middleware/auth');
const { uploadImage } = require('../controllers/uploadController');

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) return cb(new Error('Only image files are allowed'));
    cb(null, true);
  }
});

router.post('/', protect, adminOnly, upload.single('image'), uploadImage);

module.exports = router;
