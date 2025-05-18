const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const educationRoutes = require('./routes/educationRoutes');
const skillRoutes = require('./routes/skillRoutes');
const projectRoutes = require('./routes/projectRoutes');
const experienceRoutes = require('./routes/experienceRoutes');


dotenv.config();
connectDB();

const app = express();

// Middleware: allow frontend at localhost:3000 to access backend
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware: parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experience', experienceRoutes);


// Root route - basic test endpoint
app.get('/', (req, res) => {
  res.send('Portfolio API is running');
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
