const express = require('express');
const app = express();
const Event = require('../models/event');
const _=require('underscore');
///////////////////////////////////////////////


app.post('/addEvent',function(req,res){
  
  let body = req.body;//asi leo lo que hay en el vody de la peticion post, debe usarse body parser de npm
  /*Compruebo que en el los datos venga una imagen valida para insertar*/ 
  if (!req.files || Object.keys(req.files).length === 0) { 
    return res.status(400).json({
        response : 1,
        error:{
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
  file.mv('uploads/events/'+file.name, (err) => {
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
      let event = new Event({
        idRestaurant : body.idRestaurant,
        name : body.name,
        date : body.date,
        type: body.type,
        urlImg : "resvit-restaurant/Backend/uploads/events/"+file.name
      });
      /****************************************/ 
      event.save((err,eventDB)=>{
        //callback que trae error si no pudo grabar en la base de datos y usuarioDB si lo inserto
        if(err){
          return res.status(400).json({
            response:1,
            content:err
          });
        }
        res.json({
          response:2,
          content:{
            event :eventDB,
            message : "El evento se creo correctamente"
          } 
        });
      }); 
  });
});
app.put('/editEvent',function(req,res){
  let id = req.query.id;
  let body =_.pick( req.body,['name','type','date']);//library underscore let me filter just the fields that i want to accept for update
  Event.findByIdAndUpdate(id,body,{new:true,runValidators:true},(err,eventDB)=>{
    if(err){
      return res.status(400).json({
        response:1,
        content:err
      });
    }
    res.json({
      response:2,
      usuario:eventDB
    });
  });
});
app.put('/uploadImageEvent',function(req,res){
  if (!req.files || Object.keys(req.files).length === 0) { //si ningun archivo es detectado en la peticion que se envio
    return res.status(400).json({
        response : 1,
        error:{
          message: "No se ha seleccionado ningun archivo"
        }
    });
  }
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
  //Moving FIle
  file.mv('uploads/events/'+file.name, (err) => {
    if (err)
      return res.status(500).json({
        response : 1,
        content:{
          message : "ocurrio un error mientras se movia el archivo al directorio" ,
          error: err
        }
      });
    res.json({
      response : 2,
      content: {
        message: "la imagen se subio correctamente!!!"
      }
    });
  });
});
app.get('/getEvents',function(req,events){
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
                content: resMon
              };
            }
            events.json(data)//display response
          });
});
app.delete('/deleteEvent',function(req,res){
  let id = req.query.id;
  Event.findByIdAndRemove(id,(err,eventDB)=>{
    if(err){
      return res.status(400).json({
        response:1,
        content:err,
        message:"No existe el evento, o ya fue eliminado"
      });
    }
    res.json({
      response:2,
      event: eventDB
    });
  });  
  
    
  
});

module.exports = app;