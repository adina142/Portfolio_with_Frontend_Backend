const Education = require('../models/Education');

exports.getAllEducation = async (req, res) => {
  try {
    const educations = await Education.find();
    res.status(200).json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
