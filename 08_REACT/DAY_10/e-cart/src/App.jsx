
import './App.css'
import { Route, Routes,Navigate  } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'






function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>

    <Footer/>
    
    </>
  )
}

export default App
