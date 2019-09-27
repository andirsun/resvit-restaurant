require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Connection = require('tedious').Connection
const Request = require('tedious').Request

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

/////////
var config = {
    userName: 'sa',
    password: 'Sqlserver2.',
    server: '40.117.173.135',
    options: {
        database: 'ADMINISTRADOR' // update
    }
    
  };

  var connection = new Connection(config);
  
  connection.on('connect', function (err) {
    if (err) {
      console.log('eror de conexion',err);
    } else {
        console.log("conexion correcta");
      //executeStatement()
    }
  })
  
  function executeStatement () {
    request = new Request("select 123, 'hello world'", function (err, rowCount) {
      if (err) {
        console.log(err)
      } else {
        console.log(rowCount + ' rows')
      }
      connection.close()
    })
  
    request.on('row', function (columns) {
      columns.forEach(function (column) {
        if (column.value === null) {
          console.log('NULL')
        } else {
          console.log(column.value)
        }
      })
    })
  
    connection.execSql(request)
}
//========================================================
/*
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
    

});*/
/*DATA BASE CONFIGURING  TO sql server the tedius module is require */

app.listen(process.env.PORT,()=>{
    console.log('escuchando al puerto',3000);
});