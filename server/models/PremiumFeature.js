const mongoose = require('mongoose');

// Premium Feature Schema
const premiumFeatureSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  featureName: { type: String, required: true },
  activatedOn: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('PremiumFeature', premiumFeatureSchema);
