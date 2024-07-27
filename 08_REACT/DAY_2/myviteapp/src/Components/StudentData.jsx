import React from 'react'

function StudentData({studentName,ispresent}){
    //console.log(props);//object


  return (
    <div style={{width:'500px',height:"400px",backgroundColor:"green"}}>
      <h1 style={{textAlign:'center'}}>StudentData</h1>
      <h3>Student Name : {studentName} </h3>
      <h3>Student Status : {ispresent ?"Active" : "inactive"}</h3>
      </div>
  )
}

export default StudentData