const mongoose = require("mongoose");



const resourceSchema = mongoose.Schema({
    usageHistory: {
        type: Number,
        required: true
    },
    label: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 100
    },
    description: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 100
    },
    url: {
        type: String,
        required: true
    },
    resourceType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ResourceType'
    },
    rightDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
});
module.exports = mongoose.model("Ressource", resourceSchema);
