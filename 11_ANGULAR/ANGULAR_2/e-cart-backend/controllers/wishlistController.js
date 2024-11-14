const wishlists = require('../models/wishlistSchema')

//Add to wishlist logic 
exports.addToWishlist = async(req,res)=>{
    const { id, title, price, image } = req.body 

    //req payload
    const userId = req.payload
    try{
        //check if the product already in the wishlist
        const wishlistProduct = await wishlists.findOne({id,userId})
        if(wishlistProduct){
            res.status(402).json("Product already in the wishlist")
        }
        else{
            const newProduct = new wishlists({
                id, title, price, image, userId
            })
            await newProduct.save()
            res.status(200).json("Product added successfully...")
        }
    }
    catch(err){
        res.status(403).json("Error" +err)
    }
}

exports.getWishlist=async(req,res)=>{
    const userId = req.payload
    try{
        const wishlist = await wishlists.find({userId})
        res.status(200).json(wishlist)
    }
    catch(err){
        res.status(403).json("Error" +err)
    }
}

exports.deleteWishlist = async(req,res)=>{
    const userId = req.payload
    const {id} = req.params;
    try{
        const deleteItem = await wishlists.deleteOne({id})
        if(deleteItem){
            const wishlistItem = await wishlists.find({userId})
            res.status(200).json(wishlistItem)
        }
    }
    catch(err){
        res.status(403).json("Error" +err)
    }

}