// controllers/educationController.js

const Education = require('../models/Education');

// Get all education records
exports.getAllEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ startYear: -1 });
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch education records', error: err });
  }
};

// Add a new education record
exports.createEducation = async (req, res) => {
  try {
    const newRecord = new Education(req.body);
    const saved = await newRecord.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create education record', error: err });
  }
};

// Update an education record by ID
exports.updateEducation = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) {
      return res.status(404).json({ message: 'Education record not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update education record', error: err });
  }
};

// Delete an education record by ID
exports.deleteEducation = async (req, res) => {
  try {
    const deleted = await Education.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Education record not found' });
    }
    res.json({ message: 'Education record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete education record', error: err });
  }
};
