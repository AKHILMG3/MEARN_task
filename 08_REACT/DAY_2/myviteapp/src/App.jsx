
import './App.css'
import StudentData from './Components/StudentData'

function App() {
  // parent Component

  const sName = "Ajal"

  return (
    <>
    <h1>Student Name : {sName}</h1>
    <StudentData studentName={sName} ispresent={false}/>
   
 
    </>
  )
}

export default App
