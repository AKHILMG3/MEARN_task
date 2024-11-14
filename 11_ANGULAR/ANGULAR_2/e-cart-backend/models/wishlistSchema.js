const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
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
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    userId:{
        type:{
            type:String,
            require:true
        }
    }

})

const wishlists = mongoose.model('wishlists',wishlistSchema)
module.exports = wishlists