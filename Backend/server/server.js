require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sqlite3 = require('sqlite3').verbose()


//////////////////////////////////////////
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
app.use( require('./routes/usuario'));






mongoose.connect('mongodb://localhost:27017/resturante', (err)=>{

  if(err) throw err;
  console.log(`Base de datos mela`);
});

app.listen(process.env.PORT,()=>{
    console.log('escuchando al puerto',3000);
});