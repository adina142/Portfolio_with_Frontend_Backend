// controllers/experienceController.js
const Experience = require('../models/Experience');

// GET all experiences
exports.getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
};

// GET a single experience by ID
exports.getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
};

// CREATE new experience
exports.createExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create experience' });
  }
};

// UPDATE experience
exports.updateExperience = async (req, res) => {
  try {
    const updated = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update experience' });
  }
};

// DELETE experience
exports.deleteExperience = async (req, res) => {
  try {
    const deleted = await Experience.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    res.json({ message: 'Experience deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete experience' });
  }
};
