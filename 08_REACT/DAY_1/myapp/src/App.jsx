import './App.css';
import Header from './Componenets/Header/Header';
import Login from './Componenets/Login/Login';
import Footer from './Componenets/Footer/Footer';


function App() {
  return (
    <div className="App">
      <h1>App Component - Root Component</h1>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
