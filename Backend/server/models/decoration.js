const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;



let decorationSchema = new Schema({
    idRestaurant:{
        type:Number,
        required:[true,'el idUser es necesario']
    },
    type:{
        type: String,
        required:[true,'el tipo es necesario']
    },
    description:{
        type: String,
        required:[true,'las descripcion es necesaria']
    },
    urlImg:{
        type :String,
        required:[true,"es necesario la imagen"]
    },
    price :{
        type:Number,
        required:[true,'el precio es necesario']
    }
});
decorationSchema.plugin(uniqueValidator,{message: '{PATH} Debe de ser Unico'}); //desplegar los errores mas user friendly

module.exports= mongoose.model('decoration',decorationSchema);//name of the collection