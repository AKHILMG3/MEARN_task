import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI.JS";

export const registerAPI = async(user)=>{
    return await commonAPI('post' , `${serverURL}/api/register`,user,"")
}



export const loginAPI = async(user)=>{
    return await commonAPI('post' , `${serverURL}/api/login`,user,"")
}

//add projects 
export const addProject = async(project,reqHeader)=>{
    return await commonAPI('post', `${serverURL}/api/addProject`,project,reqHeader)
}

//get all user projects

export const getAllProjectsAPI = async(searchKey, reqHeader)=>{
    return await commonAPI('get' , `${serverURL}/api/getAllProjects?search = ${searchKey}`,"",reqHeader)
}

//get particular user projects

export const getUserProjectsAPI = async(reqHeader)=>{
    return await commonAPI('get',`${serverURL}/api/getUserProjects`,"",reqHeader)
}

//get home projects

export const getHomeProjectsAPI = async()=>{
    return await commonAPI('get',`${serverURL}/api/getHomeProjects`,"","")
}

//edit/update project- post => http://localhost:5000/api/addProject
export const editProjectAPI = async(project,reqHeader) =>{
    return await commonAPI('post',`${serverURL}/api/editProject`,project,reqHeader)
}

//delete project

export const deleteProject = async (id,reqHeader) =>{
    return await commonAPI('delete', `${serverURL}/api/delete/${id}`,"",reqHeader)
}



