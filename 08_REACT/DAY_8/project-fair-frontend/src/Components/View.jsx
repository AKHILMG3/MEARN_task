  import React, { useEffect } from 'react'
 
  import { FaExternalLinkAlt } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
  import { MdDelete } from "react-icons/md";
// import projects from '../../../project-fair-backend/Models/projectSchema';
import Edit from './Edit';
import { deleteProject } from '../Services/ALLAPI';


  function View() {

    const getUserProjects=async()=>{
      let token = sessionStorage.getItem('token');
      if(token){
        const reqHeader={
          "Content-Type": "application/json",
          "Authorization":"Bearer " + token
           }
           try{
            const allProjects = await getUserProjectsAPI(reqHeader)
            console.log(allProjects.data);
            if(allProjects.status==200){
              setProjects(allProjects.data)
            }
            else{
              console.log("Cant get projects");
              
            }
           }
           catch(error){
            console.log(error);
            
           }
      }
       
        
    }

    const handleDelete = async()=>{
      let token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization":` Bearer ${token}`
        }

        try{
          const response = await deleteProject(pid,reqHeader);
          if(response.status==200){
            console.log('Project deleted successfully');
            
          }
          else{
            console.log("cant delete project");
            
          }

        }
        catch(error){
          console.log(error);
          
        }
      }
    }

    useEffect(()=>{
      getUserProjects()
    },[addProjectRes,editProjectRes])

    

    
    return (
      <div>
          <div className="">
            {

              projects.length>0?projects.map(item=>(

             

                <div className="col">
                 <div className="col my-4 border shadow p-3">
                  <div className="row">
                   <div className="col-8">
                <h5>{item.title}</h5></div>

                <div className="col-4">
                <Edit item={item}/>
               
                <FaExternalLinkAlt className='fs-4 text-primary fw-bolder me-2' />
                <FaGithub className='fs-4 text-white fw-bolder me-2' />
                <MdDelete onClick={()=> handleDelete(item._id)} className='fs-4 text-danger fw-bolder me-2' />

                 </div>
                 </div>
                </div>
                </div> )):"No data"

            }
           
      </div>
      </div>
    )
  }

  export default View