import {commonAPI}from "./commonAPI";
import { serverURL } from "./serverUrl";

//Register API call => post => localhost:3001/api/register
export const registerAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/register`,user,"")
}