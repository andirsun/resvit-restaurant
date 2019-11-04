const express = require('express');
const app = express();
const User = require('../models/user');
//const bcrypt = require('bcrypt');
const _=require('underscore');
//////////////////////////////////////

app.post('/addUser',function(req,res){
  //Add user to DB 
    let body = req.body;//asi leo lo que hay en el vody de la peticion post, debe usarse body parser de npm
    let usuario = new User({
      userName : body.userName,
      email : body.email,
      //password : bcrypt.hashSync(body.password,10), //ENCRIPTACION HASH DE UNA VIA CON 10 VUELTAS 
      pass:body.password, 
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
      res.status(200).json({
        response:2,
        user: usuarioDB
      });
      
    });    
});

app.get('/auth',function(req,res){
  //Use to login and validate if a user exists
  let body = req.body;
  let user = body.email;
  //let pass = bcrypt.hashSync(body.pass,10);
  let pass = body.pass;
  User.findOne({email:user,password:pass},function(err,userDB){
            if(err){
              return res.status(400).json({
                response:1,
                content:err
              });
            }
            if(userDB){
              res.json({
                response:2,
                content:{
                  message : "User exist and its validate",
                  user: userDB
                }
              });
            }else{
              res.json({
                response:1,
                content:{
                  message : "datos incorrectos"
                }
              });
            }
          });
          
});
app.get('/getUsers',function(req,res){
  
  let desde = req.query.desde || 0; //logic operator, if user doesnt send "desde" propertie in the petition, then desde variable will be set in 0;
  desde = Number(desde);

  let limite = req.query.limite || 0; 
  limite = Number(limite);

  let tipo = req.query.type || 1;
  tipo = Number(tipo);


  User.find({userType:tipo})
        //.skip(desde)//avoid this number or records 
        //.limit(5)//show this number of records after skip n records

        .exec((err,usuariosDB)=>{
          usuariosDB.forEach(element => {
            element.password = "top secret madafuca";
          });
            if(err){
              return res.status(400).json({
                response:1,
                content:err
              });
            }
            res.status(200).json({
              response : 2,
              usuariosDB,
              type: tipo
            });
          })
});
app.put('/editUser',function(req,res){
  let id = req.query.id;
  let body =_.pick( req.body,['userName','email','img','type']);//library underscore let me filter just the fields that i want to accept for update
  Usuario.findByIdAndUpdate(id,body,{new:true,runValidators:true},(err,usuarioDB)=>{
      
    if(err){
      return res.status(400).json({
        response:1,
        content:err
      });
    }
    res.status(200).json({
      response:2,
      usuario:usuarioDB
    });
  });  
});
module.exports = app;//para importar al archivo de server.js