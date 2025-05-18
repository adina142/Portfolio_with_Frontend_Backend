// routes/skillRoutes.js
const express = require('express');
const router = express.Router();
const skillController = require('../contollers/skillController');

router.get('/', skillController.getSkills);         // GET all skills
router.post('/', skillController.createSkill);      // POST new skill
router.put('/:id', skillController.updateSkill);    // PUT update skill by ID
router.delete('/:id', skillController.deleteSkill); // DELETE skill by ID

module.exports = router;
