const Comment = require('../models/Comment');

// Add a comment to a task or project
exports.addComment = async (req, res) => {
  try {
    const { content, taskId, projectId } = req.body;
    const comment = new Comment({
      content,
      author: req.user.id,
      task: taskId || null,
      project: projectId || null,
    });
    await comment.save();
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get comments for a task or project
exports.getComments = async (req, res) => {
  try {
    const { taskId, projectId } = req.query;
    const comments = await Comment.find({ task: taskId || null, project: projectId || null })
      .populate('author', 'username');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
