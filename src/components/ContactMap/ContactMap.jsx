import React from 'react';
import SectionHeader from '../common/SectionHeader';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <section className="contact-section" id="contact">
      <SectionHeader title="COME" subtitle="Visit Us" />
      <div className="contact-container">
        
        <div className="map-placeholder">
          {/* You would embed your Google Maps iframe here */}
          <p>Google Map Embed</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;