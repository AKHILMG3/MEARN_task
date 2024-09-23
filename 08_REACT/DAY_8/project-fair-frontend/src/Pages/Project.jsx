import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { FaSearch } from "react-icons/fa";  

function Project() {
  return (
    <div>
      <div className='text-center container m-5 p-5'>
        <h3 className='mb-5'>All Project</h3>

        <div className='d-flex justify-content-center'>
        <div className='d-flex w-50'>
        <input type="text" className='form-control mx-auto ' placeholder='Search By Technology' />
        <FaSearch className='fs-5 mt-1' style={{marginLeft:'-50px'}} />
        </div>
        </div>
        
          
 
        <div className="row px-5">
          <div className="col">
            <ProjectCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project