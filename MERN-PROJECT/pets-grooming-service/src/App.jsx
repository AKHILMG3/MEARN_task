
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Homepage from './Pages/Homepage'
import Aboutpage from './Pages/Aboutpage'
import Contactpage from './Pages/Contactpage'
import Admin from './Pages/Admin'
import PageNotFound from './Pages/PageNotFound'
import Bookingpage from './Pages/bookingpage'
import Gallery from './Pages/gallery'
import Register from './Pages/Register'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='about' element={<Aboutpage/>}/>
      <Route path='booking' element={<Bookingpage/>}/>
      <Route path='contact' element={<Contactpage/>}/>
      <Route path='admin' element={<Admin/>}/>
      <Route path='location' element={<Location/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='pagenotfound' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
