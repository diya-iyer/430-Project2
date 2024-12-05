const Project = require('../models/Project');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const {
      name, description, dueDate, teamMembers,
    } = req.body;
    const project = new Project({
      name,
      description,
      dueDate,
      teamMembers,
      owner: req.user.id, // Assuming the logged-in user is the owner
    });
    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all projects for a user
exports.getUserProjects = async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user.id });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const updates = req.body;
    const project = await Project.findByIdAndUpdate(projectId, updates, { new: true });
    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
