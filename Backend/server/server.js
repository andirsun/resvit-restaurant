require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose()

////Create or read the Database file//////
var db = new sqlite3.Database('http://159.65.217.210/chinook.db',(err)=>{
  if (err){
    console.log(err.message);
  }
  else{
    console.log(`connect to chinook Database`);
  }
});
//////////////////////////////////////////





// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

/////////


//=================Events=======================================
app.get('/authenticate',function(req,res){
  let body = req.body;//Body request
  if(body.id==undefined){
    req.status(400).json({
      ok:false,
      response:1,
      content:'User Id is require for petition'
    });
  }else{
    ///I need to put the query of autentication here
    db.serialize(function(){ 
      db.each("SELECT id FROM users", function(err, row) {
          console.log("User id : "+row.id);
      });
    });
    res.json({
      user:id
    });
  }
});



app.post('/usuario',function(req,res){
    let body = req.body;//asi leo lo que hay en el vody de la peticion post, debe usarse body parser de npm

    if(body.nombre === undefined){ //asi respondo si las peticiones son buenas o malas
        res.status(400).json({
            ok:false,
            mensaje:'EL nombre es necesario'
        });
    }else{
        res.json({
            persona:body
        });
    }
    

});
//===========================================================
app.post('/postevent',function(req,res){
  res.json('Aca va a tener que enviarme la informacion del evento para crearlooooo');
});
app.put('/editevent',function(req,res){
  res.json('Aca va a tener que enviarme la informacion del evento para actualizarlo');
});
app.get('/getevent/:id',function(req,res){
  let id = req.params.id;
  res.json({
      idEvent:id
  });
});
db.close();////always need to close de db

app.listen(process.env.PORT,()=>{
    console.log('escuchando al puerto',3000);
});