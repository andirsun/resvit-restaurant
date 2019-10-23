const express = require('express');
const app = express();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const _=require('underscore');
//////////////////////////////////////

app.post('/addUser',function(req,res){
    let body = req.body;//asi leo lo que hay en el vody de la peticion post, debe usarse body parser de npm
    let usuario = new User({
      userName : body.userName,
      email : body.email,
      password : bcrypt.hashSync(body.password,10), //ENCRIPTACION HASH DE UNA VIA CON 10 VUELTAS 
      userType: body.userType
    });
    
    usuario.save((err,usuarioDB)=>{
      //callback que trae error si no pudo grabar en la base de datos y usuarioDB si lo inserto
      if(err){
        return res.status(400).json({
          response:1,
          content:err
        });
      }

      usuario.password =null;
      res.json({
        response:2,
        user: usuarioDB
      });
      
    });    
});
app.get('/usuario',function(req,usuarios){
  let desde = req.query.desde || 0; //logic operator, if user doesnt send "desde" propertie in the petition, then desde variable will be set in 0;
  desde = Number(desde);

  let limite = req.query.limite || 0; 
  limite = Number(limite);

  Usuario.find({})
        .skip(desde)//avoid this number or records 
        .limit(5)//show this number of records after skip n records 
        .exec((err,res)=>{
            if(err){
              return res.status(400).json({
                response:1,
                content:err
              });
            }
            res.json({
              response : 2,
              usuarios
            });
          })
});
app.put('/usuario/:id',function(req,res){
  let id = req.params.id;
  let body =_.pick( req.body,['nombre','email','img','role','estado']);//library underscore let me filter just the fields that i want to accept for update
  Usuario.findByIdAndUpdate(id,body,{new:true,runValidators:true},(err,usuarioDB)=>{
    if(err){
      return res.status(400).json({
        response:1,
        content:err
      });
    }
    res.json({
      response:2,
      usuario:usuarioDB
    });
  });  
});
module.exports = app;//para importar al archivo de server.js