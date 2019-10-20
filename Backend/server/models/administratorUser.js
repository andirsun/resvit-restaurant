const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;



let administratorUserSchema = new Schema({
    idUser:{
        type:Number,
        unique:true,
        required:[true,'el idUser es necesario']
    },
    info:{
        type: String
    }
});
administratorUserSchema.plugin(uniqueValidator,{message: '{PATH} Debe de ser Unico'}); //desplegar los errores mas user friendly

module.exports= mongoose.model('administratorUser',userSchema);//name of the collection