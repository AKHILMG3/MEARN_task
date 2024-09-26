//1 import mongoose 
const mongoose = require('moongoose')

//2 create a connection string
const connection_string = process.env.CONNCECTION_STRING

//3 connected to the database
mongoose.connect(connection_string).then((res)=>{
    console.log("mongodb connection establish with psServer");
    
}).catch((err)=>{
    console.log("Mongodb connectin error:"+
        err);
    
})