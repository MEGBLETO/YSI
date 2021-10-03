const express = require('express')
const router = express.Router()




router.post('/',(req, res) =>{
    let sql = 'CREATE TABLE users (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))'
    
       db.query(sql, (err, result) =>{
            if(err){
                throw err;
            }
    console.log("Result" + result)
    res.send('The user table has been created')
    })
    
    res.send('hi')
})



module.exports = router;