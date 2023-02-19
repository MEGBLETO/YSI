
const mongoose = require('mongoose');

const Campagne = mongoose.Schema({
    Nom_Campagne:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:2,
        maxLength:100
    },
    theme:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:2,
        maxLength:100
    },
    videoUrl:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:2,
        maxLength:100
    },
    dateD:{
        type:Date,
        required:true,
        
    },
    DateF:{
        type:Date,
        required:true,
    },
})

module.exports= mongoose.model('Campagne',Campagne)