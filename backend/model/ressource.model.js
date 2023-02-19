
const mongoose = require('mongoose');

const RessourceShema = mongoose.Schema({
    nb_use:{
        type:number,
        required:true,
    },
    Nom_Ressource:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:2,
        maxLength:100
    }
})

module.exports= mongoose.model('Ressource',RessourceShema)