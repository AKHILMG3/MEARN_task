import React from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Profile from '../Components/Profile'




function Dashboard() {
  return (
   <div className="row p-5 m-5">
    <h2>Welcome User</h2>
    <div className="col-7 bg-light shadow p-5 m-5">
      <div className="row d-flex justify-content-evenly">
        <div className="col-6"> 
         <h3>My Project</h3> 
        </div>
        <div className="col-6" >
         <button className='btn ' style={{float:'right'}}> <Add/></button>
        </div>

        <div className="row">
          <div className="col">
            <View/>
          </div>
        </div>
      </div>

    </div>
    <div className="col-4 bg-light shadow p-5">
      <Profile/>
    </div>
   </div>
  )
}

export default Dashboard