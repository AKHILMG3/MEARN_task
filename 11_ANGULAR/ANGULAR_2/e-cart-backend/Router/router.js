const express = require('express')
const productController = require('../controllers/productController')
const userController = require("../controllers/userController")
const wishlistController = require('../controllers/wishlistController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const cartController = require('../controllers/cartController')


const router = express.Router()
//get all products
router.get('/allProducts',productController.getProducts)
//register

router.post('/register',userController.registerAPI)
//login
router.post('/login',userController.loginAPI)
//view a products
router.get('/view/:id',productController.getAProduct)
//add to wishlist
router.post('/wishlist',jwtMiddleware,wishlistController.addToWishlist)
//get wishlist
router.get('/wishlist',jwtMiddleware,wishlistController.getWishlist)
//delete wishlist
router.delete('./wishlist/:id',jwtMiddleware,wishlistController.deleteWishlist)
//add to cart
router.post('/cart',jwtMiddleware,cartController.addToCart)
//get cart
router.get('/cart',jwtMiddleware,cartController.getCart)
//delete cart
router.delete('/cart/:id', jwtMiddleware,cartController.deleteCart)
//increment 
router.get('/cart/:id',jwtMiddleware,cartController.incrementCart)
//decrement 
router.get('/cart/:id',jwtMiddleware,cartController.decrementCart)

module.exports=router