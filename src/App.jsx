import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';

import Header from "./components/Header/Header"; 

import Founder from './components/Founder/Founder';
import Benefits from './components/Benefits/Benefits';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Testimonials from './components/Testimonials/Testimonials';

import Hero from './components/Hero/Hero'; // ❓ IS THIS THE RIGHT PATH?
import Procedures from './components/Procedures/Procedures'; // ❓ IS THIS THE RIGHT PATH?

import Contact from "./components/ContactMap/ContactMap"; // ✅ FIX: Was "./components/Contact/Contact"



function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header isVisible={isHeaderVisible} />

      <main>
        <Hero />
        <Benefits/>
        <Procedures />
        <Founder />
        
        <BeforeAfter />
        <Testimonials />
        <Contact />
      </main>
      <Footer/>
      
      
    </div>
  );
}

export default App;