//================================
// Puerto
//=================================
process.env.PORT = process.env.PORT || 3000;


/*////Congiguration of sql server data base ////
///////////Database conection

//////////////////////////////////////////////////



*/










/*Base de datos 
app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'SA',
        password: 'Sqlserver2.',
        server: '40.117.173.135', 
        database: 'ADMINISTRADOR',
        port: 1432 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err){
            console.log('error en la conexion',err);  
        }         
        // create Request object
        var request = new sql.Request();
        
        // query to the database and get the records
        request.query('select * from USER', function (err, recordset) {
            
            if (err) console.log('error en la consulta',err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});
//==============================Eventos====================

 */