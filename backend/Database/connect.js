const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


module.export  = mongoose.connect(
  `mongodb+srv://manager:lol123@cluster0.8awwvrp.mongodb.net/?retryWrites=true&w=majority`
).then((res)=>{
   console.log("you are connected to the database...")
})



