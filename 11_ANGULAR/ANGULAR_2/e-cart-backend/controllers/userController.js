const users = require("../models/userSchema")
const jwt = require("jsonwebtoken")

//register login 

exports.registerAPI = async(req,res)=>{
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email}) 
        if(existingUser){
            res.status(401).json("User already registered...")
        }
        else{
            const newUser = new users({username,email,password})
            await newUser.save()
            res.status(200).json(newUser)
        } 
    }
    catch(error){
        res.status(404).json(error)
    }
}
 
exports.loginAPI = async(req,res)=>{
    const {email,password}=req.body
    try{
        const existingUser = await users.findOne
        ({email,password})
        if(existingUser){
            //token generation
            const token = jwt.sign({userId:existingUser._id},process.env.jwtKey)

            res.status(200).json({existingUser,token})
        }
        else{
            res.status(401).json("Incorrect email or password")
        }
    }
    catch(error){
        res.status(404).json(error)
    }
}