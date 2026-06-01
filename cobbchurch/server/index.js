const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

require('dotenv').config();

const app = express();

// Vercel ke liye trust proxy
app.set('trust proxy', 1);

// Security middleware
app.use(helmet());

// CORS — www aur non-www dono allow
const allowedOrigins = [
  'http://localhost:3000',
  'https://cobbchurchnetwork.org',
  'https://www.cobbchurchnetwork.org',
  'https://cobbchurch.vercel.app',
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use('/api/', limiter);

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Root Route
app.get('/', (req, res) => {
  res.send('Cobb Church API Running Successfully');
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/churches', require('./routes/churches'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/events', require('./routes/events'));
app.use('/api/stories', require('./routes/stories'));
app.use('/api/crisis', require('./routes/crisis'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/donate', require('./routes/donate'));
app.use('/api/admin', require('./routes/admin'));

// MongoDB Connection
let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
    });
    isConnected = true;
    console.log('✅ MongoDB connected');
    require('./utils/seedAdmin');
  } catch (err) {
    isConnected = false;
    console.error('MongoDB connection error:', err);
  }
};

connectDB();

mongoose.connection.on('connected', () => { isConnected = true; });
mongoose.connection.on('disconnected', () => {
  isConnected = false;
  console.log('MongoDB Disconnected — reconnecting...');
  setTimeout(connectDB, 3000);
});
mongoose.connection.on('error', (err) => {
  isConnected = false;
  console.log('MongoDB Error:', err);
});

module.exports = app;