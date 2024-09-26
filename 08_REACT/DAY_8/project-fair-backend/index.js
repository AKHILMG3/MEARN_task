// 1 load .env file

require('dotenv').config()

const express = require('express')
//2 import express  

//import DB
const cors = require('cors')
require('./DB/connection')

//4 create an application using express 
const pfServer = express()

//5 use 
pfServer.use(cors())
pfServer.use(express.json())

//6 Define port number
const PORT = 3000 || process.env.PORT

//7 Define listen
pfServer.listen(PORT,(req,res)=>{
    console.log("pfServer started at port" +
        PORT);
    
})
//8 Define client request 
pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Project Fair Server started .. waiting for the client request </h1>`)
})
