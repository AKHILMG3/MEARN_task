import React from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Profile from '../Components/Profile'




function Dashboard() {
  return (
    <div>
      <div className="row p-5 d-flex justify-content-between">
        <h2>Welcome to User</h2>
        <div className="col-6  shadow bg-light p-5 m-4" >
          <div className="row">
            <div className="col-6"> 
              <h2>My Project</h2>
            </div>
            <div className="col-6">
              <button className='btn btn-grey' style={{float:'right'}}><Add/></button>
            </div>
          </div>

          <div className="row mt-3 ">
            <div className="col">
              <View/>
            </div>

          </div>

          <div className="col-4 shadow   bg-light p-5 ">
            <Profile/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard