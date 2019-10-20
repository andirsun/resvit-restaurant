const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;



let eventSchema = new Schema({
    idRestaurant:{
        type:Number,
        required:[true,'el idUser es necesario']
    },
    name:{
        type: String,
        required:[true,'el nombre es necesario']
    },
    type:{
        type: String,
        required:[true,'el tipo es necesario']
    },
    date:{
        type: Date,
        required:[true,'Es necesario colocar la fecha del evento']
    }
});
eventSchema.plugin(uniqueValidator,{message: '{PATH} Debe de ser Unico'}); //desplegar los errores mas user friendly

module.exports= mongoose.model('event',eventSchema);//name of the collection