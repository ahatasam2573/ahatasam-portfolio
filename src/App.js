import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/AboutMe/About';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div >
  );
}

export default App;
