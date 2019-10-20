const express = require('express');
const app = express();
const Decoration = require('../models/decoration');




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










module.exports = app;//para importar al archivo de server.js