import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Services from './components/Services';
import Connect from './components/ContactUs';
import Contact from './components/Contact';
import HeroImage from './components/HeroImage';


function App() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('active');
  };

  window.onscroll = () => {
    setIsNavbarActive(false);
  };

 

  return (
    <div className={isDarkMode ? 'App dark' : 'App'}>
      <Navbar isNavbarActive={isNavbarActive} toggleNavbar={toggleNavbar} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HeroImage />
      <Home />
      <About />
      <Menu />
      <Services />
      <Connect  />
      <Contact />
     
    </div>
  );
}

export default App;
