const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./routes')
const res = require('express/lib/response');
const { compileETag } = require('express/lib/utils');
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config()


const app = express();
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery',false);

mongoose.connect('')
.then(() =>{    
    console.log("tu a reussi a te co a la bd pouleto")
})
.catch(err=>console.log(err));

app.use("/api/v1",apiRouter);
app.use(errorHandler);

app.listen("7001", function(){

    console.log("ça start mon pouleto");
})




















