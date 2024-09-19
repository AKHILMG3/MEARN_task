import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Login from './Components/Login'
import Register from './Components/Register'
import PageNotFound from './Pages/PageNotFound'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<PageNotFound/>}/>

    </Routes>

    <Footer/>
  
    </>
  )
}

export default App
