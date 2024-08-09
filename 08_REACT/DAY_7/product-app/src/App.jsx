
import './App.css'
import Footer from './Components/Footer'
import { Routes , Route } from 'react-router-dom'
import Header from './Components/Header'
import HomePages from './Pages/HomePages'
import ProductPages from './Pages/ProductPages'
import ViewProduct from './Pages/ViewProduct'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePages/>} />

      <Route path="/product" element={<ProductPages/>} />

      <Route path="/products/view/:id" element={<ViewProduct/>} />
    </Routes>


  <Footer/>
    </>
  )
}

export default App
