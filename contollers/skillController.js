// controllers/skillController.js
const Skill = require('../models/Skill');

// GET all skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new skill
exports.createSkill = async (req, res) => {
  try {
    const { name, level } = req.body;
    const newSkill = new Skill({ name, level });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT (update) an existing skill
exports.updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level } = req.body;

    const updatedSkill = await Skill.findByIdAndUpdate(
      id,
      { name, level },
      { new: true }
    );

    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.status(200).json(updatedSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a skill
exports.deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
