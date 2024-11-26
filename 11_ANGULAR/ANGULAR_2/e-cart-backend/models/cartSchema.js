const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
id:{
    type:Number,
    require:true,
    unique:true
},
title:{
    type:String,
    require:true,
},
price:{
    type:Number,
    require:true,
},
image:{
    type:String,
    require:true,
},
quantity:{
    type:Number,
    require:true,
},
grandTotal:{
    type:Number,
},
userId:{
    type:String,
    require:true,
}

})


const carts=mongoose.model('carts',cartSchema)
module.exports = carts
