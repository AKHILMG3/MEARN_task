const carts = require('../models/cartSchema')


//add to cart
exports.addToCart=async(req,res)=>{
    const{id,title,price,image,quantity}=req.body
    const  userId = req.payload
    try{
        //Check if the product already in the cart
        const cartProduct =await carts.findOne({id,userId})
        if(cartProduct){
            cartProduct.quantity+=1
            cartProduct.grandTotal = cartProduct.quantity*cartProduct.price
            await cartProduct.save()
           res.status(200).json("Product updated")
        }
        else{
           const newProduct = new carts({
               id,title,price,image,quantity,userId
           })
           newProduct.grandTotal = newProduct.quantity*newProduct.price
           await newProduct.save()
           res.status(200).json("Product added successfully..")
        }
   
       }
       catch(err){
          res.status(403).json("Error" +err)
        }}

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

    exports.incrementCart=async(req,res)=>{
        const{id}=req.params
        const  userId = req.payload
        try{
            //Check if the product already in the cart
            const cartProduct =await carts.findOne({id,userId})
            if(cartProduct){
                cartProduct.quantity+=1
                cartProduct.grandTotal = cartProduct.quantity*cartProduct.price
                await cartProduct.save()
               res.status(200).json(cartItem)
            }
            else{
              
               res.status(200).json("Item not found ")
            }
       
           }
           catch(err){
              res.status(403).json("Error" +err)
            }
        }

        exports.decrementCart=async(req,res)=>{
            const{id}=req.params
            const  userId = req.payload
            try{
                //Check if the product already in the cart
                const cartProduct =await carts.findOne({id,userId})
                if(cartProduct){
                    cartProduct.quantity-=1
                    if(cartProduct.quantity==0){
                        const deleteItem = await carts.deleteOne({id})
                        if(deleteItem){
                            const cartItem = await cards.find({userId})
                            res.status(200).json(cartItem)
                        }
                    }
                    
                    else{
                        cartProduct.grandTotal = cartProduct.quantity*cartProduct.price
                    await cartProduct.save()

                    const cartItem = await carts.find({userId})
                   res.status(200).json(cartItem)
                    }
                }
                else{
                  
                   res.status(200).json("Item not found ")
                }
           
               }
               catch(err){
                  res.status(403).json("Error" +err)
                }
            }


