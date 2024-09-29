import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI.JS";

export const registerAPI = async(user)=>{
    return await commonAPI('post' , `${serverURL}/api/register`,user,"")
}