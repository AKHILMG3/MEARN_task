// logic for register 

//username,eamil,password => (email ? in db) ? "user already registered" : "post method execution -data saved to database"

const user = require('../Models/userSchema') 

const jwt = require('jsonwebtoken')

exports.register = async(req,res) => {
    console.log("Inside registerController");
    const { username, email, phonenumber, password } = req.body
    console.log(username,email,phonenumber,password);

    try{
        //1 check email in mongodb (model)
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(401).json("User already registered...")
        }
        else {
            //add new user to database
            const newUser = new users({
                username,email,phonenumber,password
            })
            //save new user to database
            await newUser.save()
            //send response to cilent 
            res.status(200).json(newUser)
        }   
    }

    catch(err){ 
        res.status(401).json({message:err});

    }
}

const users = require('../Models/userSchema')

exports.login = async(req,res) => {
    console.log("Inside loginController");
    const { email, password } = req.body
    console.log(email,password);

    try{
        //1 check email and password in mongodb (model)
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_Key)
            res.status(200).json({user:existingUser,token})
        }
        else {
            res.status(404).json("Invaild email or password")
        }   
    }

    catch(err){ 
        res.status(401).json({message:err});

    }
}