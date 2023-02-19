
const mongoose = require('mongoose');

const TypeRessourceShema = mongoose.Schema({
    Nom_Ressource:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:2,
        maxLength:100
    }
})

module.exports= mongoose.model('TypeRessource',TypeRessourceShema)