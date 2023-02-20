
const mongoose = require('mongoose');

const resourceTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 100
    }
});

module.exports= mongoose.model('TypeRessource',TypeRessourceShema)