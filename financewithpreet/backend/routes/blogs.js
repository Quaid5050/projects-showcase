const router = require('express').Router()
const Blog = require('../models/Blog')
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
  try { res.json(await Blog.find().sort({ date: -1 })) } catch (e) { res.status(500).json({ error: e.message }) }
})
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
    if (!blog) return res.status(404).json({ message: 'Not found' })
    res.json(blog)
  } catch (e) { res.status(500).json({ error: e.message }) }
})
router.post('/', auth, async (req, res) => {
  try { res.status(201).json(await Blog.create(req.body)) } catch (e) { res.status(400).json({ error: e.message }) }
})
router.put('/:id', auth, async (req, res) => {
  try { res.json(await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })) } catch (e) { res.status(400).json({ error: e.message }) }
})
router.delete('/:id', auth, async (req, res) => {
  try { await Blog.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }) } catch (e) { res.status(400).json({ error: e.message }) }
})
module.exports = router
