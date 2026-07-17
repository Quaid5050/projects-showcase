const router = require('express').Router()
const Service = require('../models/Service')
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
  try { res.json(await Service.find().sort({ order: 1 })) } catch (e) { res.status(500).json({ error: e.message }) }
})
router.post('/', auth, async (req, res) => {
  try { res.status(201).json(await Service.create(req.body)) } catch (e) { res.status(400).json({ error: e.message }) }
})
router.put('/:id', auth, async (req, res) => {
  try { res.json(await Service.findByIdAndUpdate(req.params.id, req.body, { new: true })) } catch (e) { res.status(400).json({ error: e.message }) }
})
router.delete('/:id', auth, async (req, res) => {
  try { await Service.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }) } catch (e) { res.status(400).json({ error: e.message }) }
})
module.exports = router
