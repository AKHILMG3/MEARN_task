const express = require('express')
const productController = require('../controllers/productController')
const userController = require("../controllers/userController")

const router = express.Router()
//get all products
router.get('../allProducts',productController.getProducts)
//register

router.post('/register',userController.registerAPI)
//login
router.post('/login',userController.loginAPI)
//view a products
router.get('/view/:id',productController.getAProduct)
//add to wishlist
//get wishlist
//delete wishlist
//add to cart
//get cart
//delete cart

module.exports=router