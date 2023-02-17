
const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:2,
        maxLength:100
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:2,
        maxLength:100
    },
    email :{
        type :String,
        required:true,
        unique:true

    },
    password :{
        type:String,
        required:true

    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    typeUser:{
        type:String,
        enum:['Campagne','Ressource']
    }
})

module.exports= mongoose.model('User',userShema)