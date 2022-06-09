import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/AboutMe/About';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
    </div >
  );
}

export default App;
