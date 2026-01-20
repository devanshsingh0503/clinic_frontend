import React from 'react'; 
import SectionHeader from '../common/SectionHeader';
import './Benefits.css';

// Import your images
import lipsImg from '../../assets/images/lips.jpg';
import clinicImg from '../../assets/images/clinic.jpg';
import doctorImg from '../../assets/images/doctor.jpg';

// This is now a normal functional component, not a forwardRef
const Benefits = () => {
  return (
    // The 'ref' has been removed from this <section> tag
    <section className="benefits-section" id="special">
      <SectionHeader title="WHAT MAKES US" subtitle="SPECIAL" />
      
      <div className="features-grid">
        <div className="feature-item">
          <img src={lipsImg} alt="Russian Lips technique" />
          <h3>Russian Lips' patented technique</h3>
          <p>Enhance your lips with our signature technique for long-lasting beauty.</p>
        </div>
        
        <div className="feature-item">
          <img src={clinicImg} alt="Luxury clinic interior" />
          <h3>A luxury clinic in central Moscow</h3>
          <p>You will be immersed in an atmosphere of beauty and comfort.</p>
        </div>
        
        <div className="feature-item">
          <img src={doctorImg} alt="Famous Russian doctors" />
          <h3>Famous Russian doctors</h3>
          <p>Expert care from leading specialists guarantees precision and outstanding results.</p>
        </div>
      </div>
    </section>
  );
}; // The closing '});' is changed to '};'

export default Benefits;