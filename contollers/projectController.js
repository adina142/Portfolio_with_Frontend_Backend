// controllers/projectController.js
const Project = require('../models/Project');

// GET /api/projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// POST /api/projects
exports.createProject = async (req, res) => {
  const { title, description, link, techStack } = req.body;
  try {
    const project = new Project({ title, description, link, techStack });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: 'Invalid input', error: err });
  }
};

// PUT /api/projects/:id
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, link, techStack } = req.body;
  try {
    const project = await Project.findByIdAndUpdate(
      id,
      { title, description, link, techStack },
      { new: true }
    );
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err });
  }
};

// DELETE /api/projects/:id
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted', id });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err });
  }
};
