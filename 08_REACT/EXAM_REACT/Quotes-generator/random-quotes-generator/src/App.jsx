
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import QuotesPage from './Pages/QuotesPage'
import ViewQuotes from './Pages/ViewQuotes'
import PageNotFound from './Pages/PageNotFound'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/quotes' element={<QuotesPage/>}/>
        <Route path='/quotes/view/:id' element={<ViewQuotes/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
