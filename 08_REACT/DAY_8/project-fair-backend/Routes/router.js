//import express 
const express = require('express')

const userController = require('../Controllers/userController')

 const projectController = require('../Controllers/projectController')

 const jwtMiddleware = require('../Middlewares/jwtMiddleware')

 const multerConfig = require('../Middlewares/multerMiddleware')

//2 create router from express
const router = express.Router()

//3 create route for each requests

  //1 register route : http://localhost:3000/api/register
  router.post('/api/register',userController.register)

  //2 login route : http://localhost:3000/api/login
  router.post('/api/login',userController.login)

  router.post('/api/addProject',jwtMiddleware,multerConfig.single('projectImg'),projectController.addProject)


//4 get all project - find()
router.get("/api/getAllProjects",jwtMiddleware,projectController.getAllProjects)

//5 get all projects of particular user find({userId})
router.get("/api/getUserProjects",jwtMiddleware,projectController.getAllProjects)

//6 get how projects(3) find().limit(3)
router.get("/api/getHomeProjects",projectController.getHomeProjects)


  module.exports = router