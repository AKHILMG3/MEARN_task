import React , {useEffect, useState}  from 'react' 
import ViewUser from './ViewUser'
import { Await } from 'react-router-dom'

function UserPages() {

    const baseUrl = 'https://dummyjson.com/users'

    const [user,setUser]=useState([])

    const userfetch = async ()=>{
        const response =  await fetch(baseUrl)
        .then(response=>response.json())
        .then(arraydata=>setUser(arraydata.user))
        console.log(user);
    }

    useEffect(()=>{
        userfetch()
    },[])



  return (
    <div>
        <ViewUser data={user}/>
    </div>
  )
}

export default UserPages