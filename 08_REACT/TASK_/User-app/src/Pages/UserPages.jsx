import React , {useEffect, useState}  from 'react' 
import ViewUser from './ViewUser'

function UserPages() {

    const baseUrl = 'https://dummyjson.com/users'

    const [user,setUser]=useState([])

    const userfetch = async ()=>{
        const response =  await fetch(baseUrl)
        .then(response=>response.json())
        .then(arraydata=>setUser(arraydata.users))
    }
        console.log(user);

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