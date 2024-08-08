
import { Routes , Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import WatchHistory from './pages/WatchHistory'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      {/* landing page path : http://localhost:5173/ */}
      <Route path='/' element={<LandingPage/>}/>

            {/* home page path : http://localhost:5173/home */}
            <Route path='/home' element={<Home/>}/>

                  {/* watch history page path : http://localhost:5173/whistory */}
                  <Route path='/watch-history' element={<WatchHistory/>}/>

                  <Route path='*' element={<PageNotFound/>}/>          
    </Routes>
    <Footer/>
    
    

    </>
  )
}

export default App
