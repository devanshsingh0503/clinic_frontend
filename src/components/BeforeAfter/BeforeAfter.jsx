import React from 'react';
import './BeforeAfter.css';
import SectionHeader from '../common/SectionHeader'; // Re-using our header

// --- UPDATE THESE with your actual images ---
import lipsBefore from '../../assets/images/lips-before-1.jpg';
import lipsAfter from '../../assets/images/lips-after-1.jpg';
import botoxBefore from '../../assets/images/botox-before-1.jpg';
import botoxAfter from '../../assets/images/botox-after-1.jpg';
import jawlineBefore from '../../assets/images/jawline-before-1.jpg';
import jawlineAfter from '../../assets/images/jawline-after-1.jpg';

// You can add as many as you want here
const galleryData = [
  { 
    id: 1, 
    procedure: 'Lip Fillers', 
    beforeImg: lipsBefore, 
    afterImg: lipsAfter 
  },
  { 
    id: 2, 
    procedure: 'Botox', 
    beforeImg: botoxBefore, 
    afterImg: botoxAfter 
  },
  { 
    id: 3, 
    procedure: 'Jawline Correction', 
    beforeImg: jawlineBefore, 
    afterImg: jawlineAfter 
  },
];

const BeforeAfter = () => {
  return (
    // We can link to this section with id="results"
    <section className="ba-section" id="results">
      <SectionHeader title="OUR RESULTS" subtitle="Before & After" />
      
      <div className="ba-gallery-grid">
        {galleryData.map((item) => (
          <div className="ba-card" key={item.id}>
            <div className="ba-images-container">
              <div className="ba-image-wrapper">
                <img src={item.beforeImg} alt={`${item.procedure} before`} />
                <span className="ba-image-label">BEFORE</span>
              </div>
              <div className="ba-image-wrapper">
                <img src={item.afterImg} alt={`${item.procedure} after`} />
                <span className="ba-image-label">AFTER</span>
              </div>
            </div>
            <h4 className="ba-procedure-title">{item.procedure}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfter;