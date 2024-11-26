
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
import Services from './Pages/Services'
import Location from './Pages/Location'
import Gallery from './Pages/Gallery'
import Login from './Pages/login'
import Register from './Pages/register'




function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/booking' element={<Bookingpage/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/pagenotfound' element={<PageNotFound/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/location' element={<Location/>}/>
      {/* <Route path='login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/> */}
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      
    </Routes>
    <Footer/>

    </>
  )
}

export default App
