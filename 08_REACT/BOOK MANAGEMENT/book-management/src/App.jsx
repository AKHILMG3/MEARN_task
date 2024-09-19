
import './App.css'
import Header from './Componets/Header'
import Footer from './Componets/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AddBook from './Pages/AddBook'
import DeleteBook from './Pages/DeleteBook'
import EditBook from './Pages/EditBook'
import ViewBook from './Pages/ViewBook'
    

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='addBook' element={<AddBook/>}/>
      <Route path='deleteBook' element={<DeleteBook/>}/>
      <Route path='editBook' element={<EditBook/>}/>
      <Route path='viewBook' element={<ViewBook/>}/>
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
