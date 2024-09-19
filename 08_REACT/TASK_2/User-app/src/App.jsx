
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import UserPages from './Pages/UserPages'
import ViewUser from './Pages/ViewUser'
import PagesNotFound from './Pages/PagesNotFound'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePages/>}/>
      <Route path='/user' element={<UserPages/>}/>
      <Route path='user/view/:id' element={<ViewUser/>}/>
      <Route path='*' element={<PagesNotFound/>}/>
    </Routes>
  
    <Footer/>
    </>
  )
}

export default App
