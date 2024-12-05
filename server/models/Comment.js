const mongoose = require('mongoose');

// Comment Schema
const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: false }, // Optional if linked to a task
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: false }, // Optional if linked to a project
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
