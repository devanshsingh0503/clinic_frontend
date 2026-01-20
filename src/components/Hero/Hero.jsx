/* src/components/Hero/Hero.jsx */

import React from 'react';
import './Hero.css';
import Button from '../common/Button'; // Import the reusable button

// 1. Import your logo from `src/assets`
// (This path must be correct)
import logoSrc from '../../assets/images/elite-logo-.png'; 

// 2. We do NOT need to import the background image
//    because the CSS file is loading it from the 'public' folder.
// import heroBg from '../../assets/images/backgrounddemo.jpeg'; // <-- DELETE THIS

const Hero = () => {
  // 3. The scrolling function (no change needed)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // Adjust as needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    // 4. This 'id' allows the header to scroll to the hero
    <section className="hero-section" id="hero">
      
      {/* 5. Add the overlay div from your CSS */}
      <div className="hero-overlay"></div>

      {/* 6. This 'z-index: 2' content sits on top of the overlay */}
      <div className="hero-content">
        
        {/* 7. Add the logo image from your import */}
        <img src={logoSrc} alt="Elite Skin Clinic" className="hero-logo" />
        
        {/* 8. Use the 'hero-title' class for the elegant font */}
        <h1 className="hero-title">
          ELITE SKIN CLINIC
        </h1>
        
        {/* 9. Add the 'hero-buttons' wrapper for the grid layout */}
        <div className="hero-buttons">
          <Button variant="primary" onClick={() => scrollToSection('procedure-signup')}>
            SIGN UP FOR THE PROCEDURE
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('procedures')}>
            ALL PROCEDURE
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('founder')}>
            FOUNDER OF THE CLINIC
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            CONTACTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;