
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import ViewProduct from './Pages/ViewProduct'
import PageNotFound from './Pages/PageNotFound'

function App() {

  return (
    <>
    
    <Header/>
        <Routes>
          {/* http://localhost:5173/ - hOME PAGE */}
          <Route path="/" element={<HomePage/>}/>

          {/* http://localhost:5173/ - PRODUCT PAGE */}
          <Route path='/products' element={<ProductPage/>}/>

          {/* http://localhost:5173/ - VIEW A PARTICULAR PRODUCT PAGE*/}
          <Route path='/products/view/:id' element={<ViewProduct/>}/>

          {/* PAGE NOT FOUND */}
          <Route path='*' element={<PageNotFound/>}/>

        </Routes>
    <Footer/>
    </>
  )
}

export default App
