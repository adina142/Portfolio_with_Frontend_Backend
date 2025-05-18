// models/education.js

const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String },
    startYear: { type: Number },
    endYear: { type: Number },
    grade: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Education', educationSchema);
