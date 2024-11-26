//1 load .env file
require('dotenv').config()

//2 import express
const express = require('express')

//3 import cors
const cors = require('cors')

//10 import router
const router = require('./Routes/router')

//9 import DB
require('./DB/connection')

//4 create an application using express
const pgServer = express()

//5 use
pgServer.use(cors())
pgServer.use(express.json())
pgServer.use(router)

//6 Define port number 
const PORT = 4000 || process.env.PORT

//7 Define listen 
pgServer.listen(PORT, (req,res)=>{
    console.log("pgServer started at port" + PORT);
    
})

//8 Define client request 
pgServer.get('/',(req,res)=>{
    res.status(200).send(` <h1>Pet Grooming Server started....... Waiting for the client request </h1>`)
})