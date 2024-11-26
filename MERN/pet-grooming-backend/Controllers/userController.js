// logic for register 

//username,eamil,password => (email ? in db) ? "user already registered" : "post method execution -data saved to database"

const users = require('../Models/userSchema')

exports.register = (req,res) => {
    console.log("Inside registerController");
    const { username, email, password } = req.body
    console.log(username,email,password);

    res.status(200).json("Register Req received")

}