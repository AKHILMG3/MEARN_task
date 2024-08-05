
import { useState } from 'react'
import './App.css'
import DataSet from './Components/DataSet'
import { useEffect } from 'react'

function App() {

   //let employeeName 

   // state creation
   const [employeeName, setEmployeeName] = useState('Ann')

   const handleAlert=()=>{
       setEmployeeName("Ann Luke")
       alert("Employee Name has been changed ")
     }
     useEffect(()=>{
      handleAlert()
     },[])


  // const handleAlert=()=>{
  //   alert("Sign in success")
  // }
  
  // const handleArguments=(details)=>{
  //   alert(details)
  // }

  // const handleinput=(e)=>{
  //   console.log(e.target.value);
  // }

  return (
    <>

   
    {/* <div><h1>Hello World</h1></div><br />

    <button style={{backgroundColor:'blue',color:'white',padding:'8px',borderRadius:'20px'}} onClick={handleAlert}>Sign in</button> <br /><br />

    
    <button style={{backgroundColor:'blue',color:'white',padding:'8px',borderRadius:'20px'}} onClick={()=>handleArguments("signin : username, password")}>Sign in</button>

    <input onChange={(e)=>handleinput(e)} style={{margin:'10px' ,width:'300px', padding:'8px'}} type="text" placeholder='Enter Data' /> */}

    <DataSet eName = {employeeName}/>

   
    </>
  )
}

export default App
