
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Weather from './Components/Weather'
import HomePage from './Pages/HomePage'
import { Routes , Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
  
   <Routes>
    { <Route path='/' element={<HomePage/>}/> }

   <Route path='home' element={<Weather/>}/>
   </Routes>
    <Footer/>
      
    </>
  )
}

export default App
