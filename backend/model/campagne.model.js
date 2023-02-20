const mongoose = require("mongoose");

const campaignSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    resources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource'
    }]
});


module.exports = mongoose.model("Campaign", campaignSchema);
