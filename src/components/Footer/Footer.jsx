import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaPhone, FaTelegramPlane, FaMapMarkerAlt } from 'react-icons/fa';

// Use the same logo path as your Hero component
import clinicLogo from '../../assets/images/elite-logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Column 1: About */}
        <div className="footer-col about">
          <img src={clinicLogo} alt="Elite Skin Clinic" className="footer-logo" />
          <p>
            Experience the art of aesthetic medicine at our luxury clinic in central Moscow.
          </p>
        </div>
        
        {/* Column 2: Quick Links */}
        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Before & After</Link></li>
            <li><Link to="/reviews">Testimonials</Link></li>
            <li><Link to="/#founder">About the Founder</Link></li>
            <li><Link to="/#contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col contact">
          <h4>Contact Info</h4>
          <p>
            <FaMapMarkerAlt />
            Tverskaya Street, 1<br />
            Moscow, Russia, 125009
          </p>
          <p>
            <FaPhone />
            <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          </p>
          <p>
            <FaTelegramPlane />
            <a href="https://t.me/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              @EliteSkinClinic
            </a>
          </p>
        </div>

        {/* Column 4: Hours */}
        <div className="footer-col hours">
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon - Fri: 10:00 - 21:00</li>
            <li>Sat - Sun: 11:00 - 19:00</li>
          </ul>
        </div>
        
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Elite Skin Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;