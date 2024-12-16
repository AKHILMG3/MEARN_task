import React from 'react'
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";


function Sidebar({SidebarToggle}) {
  return (
    <div className={`${SidebarToggle? " hidden " : " block "} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h4 className='text-2x text-white font-bold '>Admin Dashboard</h4>
      </div>
      <hr />

      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className='px-3 text-white '>
          <FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />
            Home
          </a>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className='px-3 text-white '>
          <GrGallery className='inline-block w-6 h-6 mr-2 -mt-2' />
            Gallery
          </a>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className='px-3 text-white '>
          <MdOutlineForwardToInbox className='inline-block w-6 h-6 mr-2 -mt-2' />
            Inbox
          </a>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className='px-3 text-white '>
          <IoSettingsOutline className='inline-block w-6 h-6 mr-2 -mt-2' />
            Settings
          </a>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className='px-3 text-white '>
          <TbLogout2 className='inline-block w-6 h-6 mr-2 -mt-2' />
            Log Out
          </a>
        </li>
      </ul>
      
    </div>
  )
}

export default Sidebar