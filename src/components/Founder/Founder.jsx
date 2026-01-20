import React from 'react';
import SectionHeader from '../common/SectionHeader';
import './Founder.css';

const founderImg = "/assets/images/doctor.png";

const Founder = () => {
  return (
    // This id="founder" is correct and matches your button
    <section className="founder-section" id="founder">
      <SectionHeader title="FOUNDER OF THE" subtitle="Clinic" />
      <div className="founder-content">
        <div className="founder-image">
          <img src={founderImg} alt="Dr. Anna Ivanova" /> 
        </div>
        <div className="founder-bio">
          <h3>Dr. Anna Ivanova</h3>
          <p> {/* <-- FIX: Was <s_p> */}
            The heart and soul of "Lips for Kiss," Dr. Anna Ivanova is a 
            world-renowned specialist in aesthetic medicine. With over 15 years 
            of experience, she pioneered the patented "Russian Lips" technique, 
            transforming the industry.
          </p>
          <p> {/* <-- FIX: Was <s_p> */}
            Her philosophy combines medical precision with an artist's eye, 
            ensuring every client receives personalized, natural-looking results 
            that enhance their unique beauty.
          </p>
        </div>
      </div>
      <div className="founder-content">
        <div className="founder-image">
          <img src={founderImg} alt="Dr. Anna Ivanova" /> 
        </div>
        <div className="founder-bio">
          <h3>Dr. Anna Ivanova</h3>
          <p>
            The heart and soul of "Lips for Kiss," Dr. Anna Ivanova is a 
            world-renowned specialist in aesthetic medicine. With over 15 years 
            of experience, she pioneered the patented "Russian Lips" technique, 
            transforming the industry.
          </p>
          <p> {/* <-- FIX: Was <s_p> */}
            Her philosophy combines medical precision with an artist's eye, 
            ensuring every client receives personalized, natural-looking results 
            that enhance their unique beauty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;