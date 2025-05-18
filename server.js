const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const educationRoutes = require('./routes/educationRoutes');
const skillRoutes = require('./routes/skillRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Routes
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillRoutes); // POST /api/skills

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
