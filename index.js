const express = require('express')
const mysql = require('mysql')
const app = express()
const connection = mysql.createConnection({
  host:'bqugdrjqu0wsspz1twyy-mysql.services.clever-cloud.com',
  user:'ub0nykf7cgpypvjg',
  password:'MUWI84rxYvCEPXjIoEWy',
  database:'bqugdrjqu0wsspz1twyy'
})



app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  connection.connect((err)=>{
    if(err) throw err
    console.log('Succeful')
  })
  connection.query('SELECT * FROM `Alumnos`',(err,rows)=>{
    console.log(rows)
  })
  connection.end()
})

app.listen(3000)