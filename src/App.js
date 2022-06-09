import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/AboutMe/About';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
      <Services />
      <Experience />
    </div >
  );
}

export default App;
