import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Header({SidebarToggle,setSidebarToggle}) {
  return (
 
    <div className='bg-gray-800 px-4 py-3 flex justify-between '>
    <div className='flex items-center text-xl '>
    <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebarToggle(!SidebarToggle)} />
    <span className='text-white font-semibold'>Navbar</span>
    </div>

    <div className='flex items-center gap-x-5'>
     <div className='relative md:w-65'>
         <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
             <button className='p-1 focus:outline-none  md:text-black'><FaSearch /></button>
         </span>

         <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block' />
     </div>

     <div className='text-white'><FaRegBell className='w-6 h-6'/></div>

     <div className='relative'>
        <button className='text-white group'>
        <FaRegUserCircle className='w-6 h-6 mt-1' />
        <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
        <ul className='py-2 text-sm px-3 m-2 text-gray-950 space-y-2 text-center fw-bold '>
          <li>Sign in</li>
          <Link to={'login'}> <li>Settings</li></Link>
            <hr />
            <li>Log out</li>
        </ul>
        </div>
        </button>
     </div>
    </div>
 </div>
 
  )
}

export default Header