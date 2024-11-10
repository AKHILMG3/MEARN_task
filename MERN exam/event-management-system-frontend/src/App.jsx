
import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import Editing from './Pages/Editing'
import ViewPage from './Pages/ViewPage'
import AddPage from './Pages/AddPage'
import BookingPage from './Pages/BookingPage'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/edit' element={<Editing/>}/>
      <Route path='/view' element={<ViewPage/>}/>
      <Route path='/add' element={<AddPage/>}/>
      <Route path='/booking' element={<BookingPage/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
