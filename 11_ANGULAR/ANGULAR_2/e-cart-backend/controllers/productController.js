const products = require('../models/productSchema')

//get all products
exports.getProducts = async(req,res)=>{
    try{
        const allProducts = await products.findOne()
            res.status(200).json(allProducts)
        
    }
    catch(error){
        res.status(401).json(error)
    }
}

//view particular product
exports.getAProduct=async(req,res)=>{
    try{
        const {id}=req.params
        const viewproduct = await products.findOne({id})
        res.status(200).json(viewproduct)
    }
    catch(error){
        res.status(401).json(error)
    }
}   