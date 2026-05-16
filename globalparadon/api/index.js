const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// ROUTES
app.use('/api/auth', require('../server/routes/auth'));
app.use('/api/leads', require('../server/routes/leads'));
app.use('/api/cases', require('../server/routes/cases'));
app.use('/api/contact', require('../server/routes/contact'));

app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;