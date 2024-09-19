
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Projects from './Pages/Projects'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'





function App() {

  return (
    <>
    <Header/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/project' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    <Footer/>
    
      
    </>
  )
}

export default App
