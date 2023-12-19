import './App.css';
import Header from "./components/MyHeader.js";
import Hero from "./components/Hero";
import Impact from './components/Impact.js';
import Works from './components/Works.js';
import Community from './components/Community.js';
import Mentor from './components/Mentor.js';
import Partners from './components/Partners.js';
import Sustainability from './components/Sustainability.js';
import Hub from './components/Hub.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
// import Trial from './components/Trial';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Impact/>
      <Works/>
      <Community/>
      <Mentor/>
      <Partners/>
      <Sustainability/>
      <Hub/>
      <Contact/>
      <Footer/>
      {/* <Trial/> */}
    </>
  );
}

export default App;
