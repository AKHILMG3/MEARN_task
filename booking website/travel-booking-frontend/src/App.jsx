
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import TourDetails from './Pages/TourDetails'
import Login from './Pages/Login'
import Tour from './Pages/Tour'
import Register from './Pages/Register'
import SearchResult from './Pages/SearchResult'






function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='tours' element={<Tour/>}/>
        <Route path='tours/:id' element={<TourDetails/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='/tours/search' element={<SearchResult/>}/>

      </Routes>
      <Footer/>
       
    </>
  )
}

export default App
