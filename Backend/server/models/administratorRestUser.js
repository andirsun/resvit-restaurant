const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;



let adminRestUserSchema = new Schema({
    idUser:{
        type:Number,
        unique:true,
        required:[true,'el idUser es necesario']
    },
    idRestaurant:{
        type:Number,
        required:[true,'el idUser es necesario']
    },
    name:{
        type: String,
        required:[true,'El Nombre es necesario']
    },
    info:{
        type: String
    }
});
adminRestUserSchema.plugin(uniqueValidator,{message: '{PATH} Debe de ser Unico'}); //desplegar los errores mas user friendly

module.exports= mongoose.model('administratorRestUser',adminRestUserSchema);//name of the collection