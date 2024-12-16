//1 import express 
const express = require('express')

//4 import usercontroller
const userController = require('../Controllers/userController')

const bookingController = require('../Controllers/bookingController')

const galleryController = require('../Controllers/galleryController')

const contactContoller = require('../Controllers/contactController')

//2 create router from express
const router = express.Router()

//3 Create router for each requests
   //1 Register router : http://localhost:4000/api/register
     router.post('/api/register',userController.register)

     //2 Login router : http://localhost:4000/api/login
     router.post('/api/login',userController.login)

     //3 Booking router : http://localhost:4000/api/booking
     router.post('/api/booking',bookingController.booking)

//4 add image to gallery : http://localhost:4000/api/gallery 
router.post('/api/gallery', galleryController.addGallery);

//5 get image to gallery : http://localhost:4000/api/gallery 
router.get('/api/gallery', galleryController.getGallery);

//6 put image to gallery : http://localhost:4000/api/gallery 
router.put('/api/gallery:id', galleryController.updateGallery);

//7 delete image to gallery : http://localhost:4000/api/gallery 
router.delete('/api/gallery:id', galleryController.deleteGallery);

// contact router : http://localhost:4000/api/contact
router.post('/api/contact',contactContoller.contact)





module.exports = router;



