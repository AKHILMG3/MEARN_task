//1 import express 
const express = require('express')

//4 import usercontroller
const userController = require('../Controllers/userController')

//2 create router from express
const router = express.Router()

//3 Create router for each requests
   //1 Register router : http://localhost:4000/api/register
     router.post('./api/register',userController.register)

     module.exports = router

