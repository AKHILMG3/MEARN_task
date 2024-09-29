//import express 
const express = require('express')

const userController = require('../Controllers/userController')
//2 create router from express
const router = express.Router()

//3 create route for each requests
  //1 register route : http://localhost:3000/api/register
  router.post('/api/register',userController.register)

  module.exports = router