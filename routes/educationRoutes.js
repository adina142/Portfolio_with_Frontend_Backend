const express = require('express');
const router = express.Router();
const { getAllEducation } = require('../contollers/educationController');

router.get('/', getAllEducation);

module.exports = router;
