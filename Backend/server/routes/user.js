const express = require('express');
const app = express();
const User = require('../models/user');
//const bcrypt = require('bcrypt');
const _=require('underscore');
//////////////////////////////////////

app.post('/addUser',function(req,res){
  //Add user to DB 
    let body = req.body;//asi leo lo que hay en el vody de la peticion post, debe usarse body parser de npm
    console.log(body);
    let usuario = new User({
      userName : body.userName,
      email : body.email,
      //password : bcrypt.hashSync(body.password,10), //ENCRIPTACION HASH DE UNA VIA CON 10 VUELTAS 
      password:body.password, 
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
      usuarioDB.password =null;
      res.status(200).json({
        response:2,
        user: usuarioDB
      });
      
    });    
});

app.get('/getNameUser',function(req,res){
  let id = req.query.id;
  User.findOne({_id:id},function(err,userDB){
    if(err){
      res.status(500).json({
        response :1,
        content: {
          error : err,
          message : "no se puede encontrar el usuario"
        }
      });
    }
    if(userDB){
      res.status(200).json({
        response :1,
        content:{
          name : userDB.userName
        } 
      })
    }
  })
});
app.post('/logout',function(req,res){
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
              userDB.password = "";
              userDB.active = false;
              res.json({
                response:2,
                content:{
                  message : "User its correctly logout",
                  user: userDB
                }
              });
            }else{
              res.json({
                response:1,
                content:{
                  message : "incorrect data, cant logout"
                }
              });
            }
          });
          
});
app.post('/login',function(req,res){
  //Use to login and validate if a user exists
  let body =_.pick( req.body,['id','password']);
  body.active = true; //aqui le digo que esta iniciara sesion
  console.log(body);
  User.findByIdAndUpdate(body.id,body,{new:true,runValidators:true},function(err,userDB){
            if(err){
              return res.status(400).json({
                response:1,
                content:{
                  error:err,
                  message: "incorrect data"
                }
              });
            }
            if(userDB){
              userDB.password = "";
              res.json({
                response:2,
                content:{
                  message : "now the user is login"
                  
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
app.get('/validateSession',function(req,res){
  let body = req.body;
  let id = req.query.id;
  let password = req.query.pass;
  User.findOne({_id:id},function(err,userDB){
    //console.log(userDB);
    if(err){
      return res.status(500).json({
        response:1,
        content:"user not found",
        error:err
      });
    }
    if(userDB){
      if(userDB.active ==true){
        res.status(200).json({
          response:2,
          content:"user is authenticate!!!"
        });
      }else{
        res.status(200).json({
          response:1,
          content:"user is not authenticated!!!"
        });
      }
    }
  });
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