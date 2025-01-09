import React from 'react'
import { FaPowerOff } from "react-icons/fa";
// import { FaBars } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { FaRegUserCircle } from "react-icons/fa";
 import { Link } from 'react-router-dom'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header({SidebarToggle , setSidebarToggle}) {
  return (

    <div>
       <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn0.iconfinder.com/data/icons/zake-data-internet-vol-1/25/admin_panel_dashboard-512.png'
              height='30'
              width={50}
              alt=''className=''
              loading='lazy'
            />
           <h3 className='fw-bold'> Admin Dashborad</h3>
          </MDBNavbarBrand>
         <Link to={'/'}><button className='btn btn-outline-danger fw-bold'>  Logout</button></Link> 
        </MDBContainer>
      </MDBNavbar>
    </div>

        // <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
        //     <div className='flex items-center text-xl'>
        //     <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebarToggle(!SidebarToggle)} />
        //         <span className='text-white font-semibold'>Admin Dashboard</span>
        //     </div>

        //     <div className='flex items-center gap-x-5'>
        //         <div className='relative md:w-65'>
        //             <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2 '>
        //                 <button className='p-1 focus:outline-none text-dark md:text-black'><FaSearch /></button></span>
        //             <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block  ' />
        //         </div>

        //         <div className='relative'>
        //             <button className='text-white group'>
        //             <FaRegUserCircle className='w-6 h-6 mt-1' />
        //             <div className='z-10 text-dark hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0 m-2 p-2 pe-2'>
        //                 <ul>
        //                     <Link to={''}><li>Profile</li></Link>
        //                     <Link to={'settings'}><li>settings</li></Link>
        //                     <Link to={'login'}><li>LogOut</li></Link>
        //                 </ul>
        //             </div>
        //             </button>
        //         </div>
        //     </div>
        // </nav>
   
  )
}

export default Header