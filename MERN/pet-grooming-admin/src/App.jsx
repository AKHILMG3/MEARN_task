import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Components/Dashboard';
import Gallery from './Pages/Gallery';
import Inbox from './Pages/Inbox';
import Sidebar from './Components/Sidebar';
import PageNotFound from './Pages/PageNotFound';
import Header from './Components/Header';
import Booking from './Pages/Booking';


function App() {

  const [SidebarToggle , setSidebarToggle] = useState(false)

  return (
    <>
       <Header/>
    <div className="flex">
      <Sidebar SidebarToggle = {SidebarToggle} />
      
          <Routes>
           
            <Route path="/" element={<Dashboard SidebarToggle = {SidebarToggle}
                                     setSidebarToggle = {setSidebarToggle} />} />
            <Route path="/**" element={<PageNotFound/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="inbox" element={<Inbox/>} />
            <Route path='/booking' element={<Booking/>}/>
          </Routes>
      </div>
    
  
    </>
  )
}

export default App
