const express = require('express');
const app = express();
const Decoration = require('../models/decoration');
const _=require('underscore');

app.post('/addDecoration',function(req,res){

  /*Compruebo que en el los datos venga una imagen valida para insertar*/ 
  if (!req.files || Object.keys(req.files).length === 0) { 
    return res.status(400).json({
        response : 1,
        content:{
          message: "Es necesario subir una imagen"
        }
    });
  }
  /******************************************* */
  let file = req.files.archivo;//el nombre del input en html debe ser para este caso "archivo"
  let fileName = file.name.split('.');//para sacar la extencion del archivo 
  let extention = fileName[fileName.length-1] ;

  // Extenciones permitidas para cargar al servidor
  let extenciones = ['png','jpg','gif','jpeg'];
  // Validando extencion del archivo 
  if (extenciones.indexOf(extention)<0){
    return res.status(400).json({
      response:1,
      content:{
        message: 'tu extencion de archivo es :'+extention+', pero las extenciones permitidas son : '+ extenciones.join(', ')
      }
    });
  }
  let body = req.body;//asi leo lo que hay en el vody de la peticion post, debe usarse body parser de npm
  file.mv('uploads/decorations/'+file.name, (err) => {
    if (err)
      return res.status(500).json({
        response : 1,
        content:{
          message : "ocurrio un error mientras se movia el archivo al directorio" ,
          error: err
        }
      });
      //Si inserto bien la imagen entonces ahora si insertare el evento
      /*Armo el evento que voy a insertar abajo*/
      let decoration = new Decoration({
        idRestaurant : body.idRestaurant,
        description : body.description,
        type: body.type,
        price: body.price,
        urlImg : "resvit-restaurant/Backend/uploads/events/"+file.name
      });
      /****************************************/ 
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
          content: decorationDB
        });
      });   
  });
   
});
app.put('/editDecoration',function(req,res){
  let id = req.query.id;
  let body =_.pick( req.body,['type','description','price']);//library underscore let me filter just the fields that i want to accept for update
  Decoration.findByIdAndUpdate(id,body,{new:true,runValidators:true},(err,decorationDB)=>{
    if(err){
      return res.status(400).json({
        response:1,
        content:err
      });
    }
    res.json({
      response:2,
      content:decorationDB
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
  Decoration.find({idRestaurant:idRes})
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
                content: resMon
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
      content: decorationDB,
      message:"borrada"
    });
  });  
});










module.exports = app;//para importar al archivo de server.js