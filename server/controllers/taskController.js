const Task = require('../models/Task');

// Create a task
exports.createTask = async (req, res) => {
  try {
    const {
      title, description, deadline, priority, projectId, assignee,
    } = req.body;
    const task = new Task({
      title,
      description,
      deadline,
      priority,
      project: projectId,
      assignee,
    });
    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get tasks for a project
exports.getProjectTasks = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await Task.find({ project: projectId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update task status
exports.updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const task = await Task.findByIdAndUpdate(taskId, { status }, { new: true });
    res.status(200).json({ message: 'Task status updated', task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
