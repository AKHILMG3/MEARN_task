require('dotenv').config()

const express = require('express')
const cors = require('cors')
require('./connection/db')

//create an app using express
const Cartserver = express()
const router = require('./Router/router')
Cartserver.use(cors())
Cartserver.use(express.json())
Cartserver.use(router)

const PORT = 3000 || process.env.PORT

Cartserver.listen(PORT,()=>{
    console.log("Listening on the port" +PORT);
    
})

Cartserver.get('/',(req,res)=>{
    res.send("E cart server is started...")
})