const mongoose = require('mongoose');

// Notification Schema
const notificationSchema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  read: { type: Boolean, default: false },
  type: { type: String, enum: ['Task Update', 'Project Update', 'General'], default: 'General' },
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
