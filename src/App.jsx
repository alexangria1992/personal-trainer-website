import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
      <About />
      <Contact />
    </>
  );
}

export default App;
