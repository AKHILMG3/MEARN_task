import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { LuMessageSquareText } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { FaRegAddressBook } from "react-icons/fa";

function Sidebar({SidebarToggle}) {
  return (

	<aside className="w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800">
	<nav className="space-y-8 text-sm">
	<ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <Link to={'/'} className='px-3'> <AiFillHome className='inline-block w-6 h-6 mr-2 -mt-2' /> Home</Link>
            </li><br />

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <Link to={'inbox'} className='px-3'> <LuMessageSquareText className='inline-block w-6 h-6 mr-2 -mt-2' /> Inbox</Link>
            </li><br />


            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <Link to={'/booking'} className='px-3'> <FaRegAddressBook className='inline-block w-6 h-6 mr-2 -mt-2' /> Booking</Link>
            </li><br />

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <Link to={'gallery'} className='px-3'> <GrGallery className='inline-block w-6 h-6 mr-2 -mt-2' />Gallery</Link>
            </li><br />

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <Link className='px-3'> <IoMdSettings className='inline-block w-6 h-6 mr-2 -mt-2' /> Settings</Link>
            </li><br />

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <Link to={'login'} className='px-3'> <MdOutlineLogin  className='inline-block w-6 h-6 mr-2 -mt-2' /> Login</Link>
            </li><br />

        </ul>
		
	</nav>
</aside>
    // <div className={`${SidebarToggle ? " hidden " : " block "}w-64 bg-gray-800 fixed h-full px-4 py-2`}>
    //     <div className='my-2 mb-4'>
    //         <h4 className='text-2x text-white font-bold'>Admin Dashboard </h4>
    //     </div>
    //     <hr />

        // <ul className='mt-3 text-white font-bold'>
        //     <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        //         <Link to={'/'} className='px-3'> <AiFillHome className='inline-block w-6 h-6 mr-2 -mt-2' /> Home</Link>
        //     </li>

        //     <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        //         <Link to={'inbox'} className='px-3'> <LuMessageSquareText className='inline-block w-6 h-6 mr-2 -mt-2' /> Inbox</Link>
        //     </li>

        //     <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        //         <Link className='px-3'> <IoMdSettings className='inline-block w-6 h-6 mr-2 -mt-2' /> Settings</Link>
        //     </li>

        //     <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        //         <Link to={'login'} className='px-3'> <MdOutlineLogin  className='inline-block w-6 h-6 mr-2 -mt-2' /> Login</Link>
        //     </li>

        // </ul>
    // </div>
  )
}

export default Sidebar