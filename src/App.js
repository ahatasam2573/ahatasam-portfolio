import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/AboutMe/About';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/ContactMe/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact />
    </div >
  );
}

export default App;
