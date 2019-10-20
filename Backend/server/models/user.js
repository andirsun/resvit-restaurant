const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let rolesValidos ={
    values:[1,2],
    message:'{VALUE} no es un rol valido'
};
let usuarioSchema = new Schema({
   /* idUser:{
        type:int,
        required:[true,'el nombre es necesario']
    },*/
    userType:{
        type:int,
        required:[true,'el tipo de usuario es un campo necesario'],
        enum:  rolesValidos
    },
    userName:{
        type: String,
        required:[true,'el nombre un campo requerido']
    },
    email:{
        type:String,
        required: [true,"EL correo es necesario"]
    },
    password:{
        type:String,
        required: [true,"EL pass es necesario"]
    }
});



usuarioSchema.methods.toJson = function(){//es para no devolver nunca el pass en la respuesta
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}
usuarioSchema.plugin(uniqueValidator,{message: '{PATH} Debe de ser Unico'}); //desplegar los errores mas user friendly

module.exports= mongoose.model('usuario',usuarioSchema);