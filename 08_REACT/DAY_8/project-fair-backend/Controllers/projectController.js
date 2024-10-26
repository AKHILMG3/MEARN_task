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
    const searchKey = req.query.search
    const query={
        language:{
            $regex:searchKey,
            $option:"i"
        }
    }
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



//edit project 
exports.editProject = async(req,res) =>{
    console.log("Inside edit project");
    const {title,language,github,website,overview,projectImg}= req.body
    const uploadImg = req.file? req.file.filename : uploadImg
    const userId = req.payload
    const {projectId} = req.params

    try{
        const updateProject = await projects.findByIdAndUpdate({_id:projectId},{title,language,website,github,overview,projectImg:uploadImg,userId})
        await updateProject.save()
        res.status(200).json(updateProject)
    }
    catch(error){
        res.status(401).json("Internal error")
    }
}

exports.deleteProject = async(req,res) => {
    console.log('Inside deleteProject');
    const {projectId} = req.params

    try{
        await projects.findByAndDelete({_id:projectId})
        res.status(200).json("Project delete Successfully")
    }
    catch(error){
        res.status(401).json("Server error"+error)
    }
    
}
