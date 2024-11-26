const mongoose = require('mongoose')

//1 create a schema and a model for users
const userSchema = new mongoose.Schema({
    username : {
        type:String,
        require: true
    },
    email : {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const users = mongoose.model('users',userSchema)
module.exports = users