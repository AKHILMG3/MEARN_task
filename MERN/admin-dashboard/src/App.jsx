import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/login'
import Register from './Pages/register'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Gallery from './Pages/Gallery'
import { useState } from 'react'

function App() {
  const [SidebarToggle,setSidebarToggle] = useState(false)
  return (
    <>
   <div className='flex'>
   <Dashboard SidebarToggle={SidebarToggle}
            setSidebarToggle={setSidebarToggle}/>
  <Sidebar SidebarToggle={SidebarToggle}/>
  </div>
   
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='gallery' element={<Gallery/>}/>

      </Routes>
      
    </>
  )
}

export default App
