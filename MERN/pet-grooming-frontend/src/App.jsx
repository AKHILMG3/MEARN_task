
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Booking from './Pages/Booking'
import ContactUs from './Pages/ContactUs'
import Gallery from './Pages/Gallery'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Services from './Pages/Services'
import Location from './Pages/Location'
import PageNotFound from './Pages/PageNotFound'


function App() {

  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='booking' element={<Booking/>}/>
          <Route path='contact' element={<ContactUs/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='service' element={<Services/>}/>
          <Route path='location' element={<Location/>}/>
          <Route path='pagenotfound' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
