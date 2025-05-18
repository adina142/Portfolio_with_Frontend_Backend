// routes/experienceRoutes.js
const express = require('express');
const router = express.Router();
const experienceController = require('../contollers/experienceContoller');

// GET all experiences
router.get('/', experienceController.getAllExperiences);

// GET one experience by ID
router.get('/:id', experienceController.getExperienceById);

// POST new experience
router.post('/', experienceController.createExperience);

// PUT update experience
router.put('/:id', experienceController.updateExperience);

// DELETE experience
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;
