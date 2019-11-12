const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let rolesValidos ={
    values:[1,2],
    message:'{VALUE} no es un rol valido'
};
let userSchema = new Schema({
   /* idUser:{
        type:int,
        required:[true,'el nombre es necesario']
    },*/
    userType:{
        type:Number,
        required:[true,'el tipo de usuario es un campo necesario'],
        enum:  rolesValidos
    },
    userName:{
        type: String,
        required:[true,'el nombre un campo requerido']
    },
    email:{
        type:String,
        unique:true,
        required: [true,"EL correo es necesario"]
    },
    password:{
        type:String,
        required: [true,"EL password es necesario"]
    },
    active:{
        type:Boolean,
        default:false
    },
    idRestaurant:{
        type: Number,
        required:[false]
    }
});


/*
userSchema.methods.toJson = function(){//es para no devolver nunca el pass en la respuesta
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}*/
userSchema.plugin(uniqueValidator,{message: '{PATH} Debe de ser Unico'}); //desplegar los errores mas user friendly

module.exports= mongoose.model('user',userSchema);//name of the collection