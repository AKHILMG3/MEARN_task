const jwt = require("jsonwebtoken")

const jwtMiddleware = (req,res,next)=>{
    try{
        //get token
        const token = req.headers['authorization'].slice(7)
        console.log(token);
        //token verification
        const jwtVerification = jwt.verify(token,process.env.jwtKey)
        console.log(jwtVerification);
        req.payload=jwtVerification.userId
        console.log(req.payload);
        next()
        
    }
    catch(err){
        res.status(401).json("Authorization Error" +err)
    }
}

module.exports=jwtMiddleware