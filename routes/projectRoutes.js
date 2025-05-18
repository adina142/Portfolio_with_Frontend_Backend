// routes/educationRoutes.js
const express = require('express');
const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
  res.send('Project route working!');
});

module.exports = router;
