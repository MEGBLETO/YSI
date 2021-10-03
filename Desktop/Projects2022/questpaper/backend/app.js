const express = require('express')
var mysql      = require('mysql');
const cors = require('cors')

const routes = require('./routes/index')


const app = express()

//allowing cross origin ressource
app.use(cors())

//connection a ma base de donnee
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'questpaper',
  port     : '8889'
});
 
db.connect((err) =>{
   if(err){
       throw(err)
   }
   console.log('MySql connected...')
});
 

 //create a table

//  app.use('/api/users', require('./routes/index'))

app.get('/createtable', (req, res) =>{

  // let sql = 'CREATE TABLE users (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))'
  
  //    db.query(sql, (err, result) =>{
  //         if(err){
  //             throw err;
  //         }
  // console.log("Result" + result)
  // res.send('The user table has been created')
  // })

})

const PORT = process.env.PORT || 5000



app.listen(() => console.log(`app listening on ${PORT}`))