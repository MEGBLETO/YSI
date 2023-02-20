const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    budget: {
      type: Number,
      required: true
    },
    resources: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resource'
    }]
  });

module.exports = mongoose.model("Campaign", CampaignSchema);
