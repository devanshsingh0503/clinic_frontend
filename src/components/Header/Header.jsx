import React, { useState } from 'react';
import Button from '../common/Button';
import './Header.css';

const Header = ({ isVisible }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerClasses = `header ${isVisible ? 'header-scrolled' : ''}`;
  const navClasses = `nav-links ${menuOpen ? 'open' : ''}`;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false); // close menu after click
  };

  return (
    <header className={headerClasses}>
      <nav className="header-nav">
        <div className="logo">Elite Skin Clinic</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={navClasses}>
          <Button variant="primary" onClick={() => scrollToSection('procedure-signup')}>
            SIGN UP
          </Button>
          <Button onClick={() => scrollToSection('procedures')}>
            ALL PROCEDURE
          </Button>
          <Button onClick={() => scrollToSection('founder')}>
            FOUNDER
          </Button>
          <Button onClick={() => scrollToSection('contact')}>
            CONTACTS
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
