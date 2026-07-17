require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const connectDB = require('./config/db')

const app = express()

// Connect DB
connectDB()

// Middleware
app.use(helmet())
app.use(cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:5173', 'http://localhost:5173'],
  credentials: true,
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/admin', require('./routes/admin'))
app.use('/api/blogs', require('./routes/blogs'))
app.use('/api/leads', require('./routes/leads'))
app.use('/api/bookings', require('./routes/bookings'))
app.use('/api/newsletter', require('./routes/newsletter'))
app.use('/api/hero', require('./routes/hero'))
app.use('/api/services', require('./routes/services'))
app.use('/api/upload', require('./routes/upload'))

app.get('/', (req, res) => res.json({ message: 'Finance With Preet API running ✓', version: '1.0.0' }))

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✓`))

module.exports = app
