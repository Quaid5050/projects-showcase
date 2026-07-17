const router = require('express').Router()
const Hero = require('../models/Hero')
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
  try { res.json(await Hero.findOne()) } catch (e) { res.status(500).json({ error: e.message }) }
})
router.post('/', auth, async (req, res) => {
  try {
    let hero = await Hero.findOne()
    if (hero) { hero = await Hero.findByIdAndUpdate(hero._id, req.body, { new: true }) }
    else { hero = await Hero.create(req.body) }
    res.json(hero)
  } catch (e) { res.status(400).json({ error: e.message }) }
})
module.exports = router
