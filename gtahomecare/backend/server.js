require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

connectDB()
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.log('MongoDB error:', err.message));
