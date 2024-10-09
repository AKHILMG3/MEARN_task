const projects = require('../Models/projectSchema')

exports.addProject = async(req,res)=>{
    console.log("Inside add project controller");

    const {title,language ,website,github,overview}= req.body
    const projectImg = req.file.filename
    const userId = req.payload
    try{
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json("project already exists")
        }
        else{
            const newProject = new projects({
                title,language,website,github,overview,projectImg,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch(error){
        res.status(500).json("server error"+error)
    }
}

exports.getAllProjects = async(req,res)=>{
    console.log("Inside getAllProjects");
    const userId = req.payload
    try{
        const getAllProjects = await projects.find({userId})
        res.status(200).json(getAllProjects)
    }
    catch(error){
        res.status(500).json("Server error"+error)
    }
}

exports.getHomeProjects  = async(req,res) =>{
    try{
        const getHomeProjects = await projects.find().limit(3)
        res.status(200).json(getHomeProjects)
    }
    catch(error){
        res.status(500).json("Server error"+error)
    }

}