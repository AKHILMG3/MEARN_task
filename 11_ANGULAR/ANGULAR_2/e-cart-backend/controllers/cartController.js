const carts = require('../models/cartSchema')

//add to cart
exports.addToCart = async(req,res)=>{
    const {id,title,price,image,quantity}=req.body
    const userId = req.payload
    try{
        //check if the product already in the cart \
        const cartProduct = await carts.findOne({id,userId})
        if(cartProduct){
            cartProduct.quantity+=
            cartProduct.grandTotal=cartProduct.quantity*cartProduct.price
            await cartProduct.save()
            res.status(200).json("product update")
        }
        else{
            const newProduct = new carts({
                id,title,price,image,quantity,userId
            })

            newProduct.grandTotal = newProduct.quantity*newProduct.price
            await newProduct.save()
            res.status(200).json("product added successfully...")
        }
    }
    catch(err){
        res.status(403).json("Error" +err)
    }
}

    exports.getCart = async(req,res)=>{
        const userId = req.payload
        try{
            const Cart = await carts.find({userId})
            res.status(200).json(Cart)
        }
        catch(err){
            res.status(403).json("Error" +err)
        }

    }

    exports.deleteCart = async(req,res)=>{
        const userId = req.payload
        const {id} = req.params;

        try{
            const deleteItem = await carts.deleteOne({id})
            if(deleteItem){
                const cartItem = await carts.find({userId})
                res.status(200).json(cartItem)
            }
        }

        catch(err){
            res.status(403).json("Error" +err)
        }
    }

