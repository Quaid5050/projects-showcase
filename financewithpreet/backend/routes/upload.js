const router = require('express').Router()
const auth = require('../middleware/auth')
const { upload } = require('../config/cloudinary')

router.post('/', auth, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' })
  res.json({ url: req.file.path, public_id: req.file.filename })
})
module.exports = router
