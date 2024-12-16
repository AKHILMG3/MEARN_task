import { serverURL } from "./serverURL.JS";
import { commonAPI } from "./commonAPI.JS"

// Register API Call => localhost:4000/api/register
export const registerAPI = async(user)=>{
    return await commonAPI('post' , `${serverURL}/api/register`,user,"")
}


// login API Call => localhost:4000/api/login
export const loginAPI = async(user)=>{
    return await commonAPI('post' , `${serverURL}/api/login`,user,"")
}

//booking API call => localhost:4000/api/booking
export const bookingAPI = async(booking)=>{
    return await commonAPI('post' , `${serverURL}/api/booking`,booking,"")
}

//gallery API call => localhost:4000/api/gallery
export const galleryAPI = async(gallery)=>{
    return await commonAPI('post' , `${serverURL}/api/gallery`,gallery)
}

//contact API call => localhost:4000/api/contact
export const contactAPI = async(contact)=>{
    return await commonAPI('post' , `${serverURL}/api/contact`,contact)
}