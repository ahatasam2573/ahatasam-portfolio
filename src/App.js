import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/AboutMe/About';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
      <Services />
    </div >
  );
}

export default App;
