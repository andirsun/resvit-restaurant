//================================
// Puerto
//=================================
process.env.PORT = process.env.PORT || 3000;


/*////Congiguration of sql server data base ////
///////////Database conection
var Connection = require('tedious').Connection
var Request = require('tedious').Request
//////////////////////////////////////////////////
var config = {
    userName: 'SA', // update me
    password: 'Sqlserver2', // update me
    server: '40.117.173.135,1432'
    
  }
  var connection = new Connection(config)

connection.on('connect', function (err) {
  if (err) {
    console.log(err)
  } else {
    executeStatement()
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
}*/