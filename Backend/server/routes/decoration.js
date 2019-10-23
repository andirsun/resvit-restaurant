const express = require('express');
const app = express();
const Decoration = require('../models/decoration');
const _=require('underscore');

app.post('/addDecoration',function(req,res){
    let body = req.body;//asi leo lo que hay en el vody de la peticion post, debe usarse body parser de npm
    let decoration = new Decoration({
      idRestaurant : body.idRestaurant,
      description : body.description,
      type: body.type
    });
    decoration.save((err,decorationDB)=>{
      //callback que trae error si no pudo grabar en la base de datos y usuarioDB si lo inserto
      if(err){
        return res.status(400).json({
          response:1,
          content:err
        });
      }
      res.json({
        response:2,
        event: decorationDB
      });
    });    
});
app.put('/editDecoration',function(req,res){
  let id = req.query.id;
  let body =_.pick( req.body,['type','description']);//library underscore let me filter just the fields that i want to accept for update
  Decoration.findByIdAndUpdate(id,body,{new:true,runValidators:true},(err,decorationDB)=>{
    if(err){
      return res.status(400).json({
        response:1,
        content:err
      });
    }
    res.json({
      response:2,
      usuario:decorationDB
    });
  });
});
app.get('/getDecorations',function(req,events){
  let desde = req.query.desde || 0; //logic operator, if user doesnt send "desde" propertie in the petition, then desde variable will be set in 0;
  desde = Number(desde);
  let limite = req.query.limite || 0; 
  limite = Number(limite);
  let idRes = req.query.id;
  idRes = Number(idRes)
  Event.find({idRestaurant:idRes})
        .exec((err,resMon)=>{
            if(err){
              return resMon.status(400).json({
                response:1,
                content:err
              });
            }
            if(resMon){
              data = {
                response:2,
                events: resMon
              };
            }
            events.json(data)//display response
          });
});

app.delete('/deleteDecoration',function(req,res){
  let id = req.query.id;
  Decoration.findByIdAndRemove(id,(err,decorationDB)=>{
    if(err){
      return res.status(400).json({
        response:1,
        content:err,
        message:"No existe la decoracion, o ya fue eliminada"
      });
    }
    res.json({
      response:2,
      event: decorationDB,
      message:"borrada"
    });
  });  
});










module.exports = app;//para importar al archivo de server.js