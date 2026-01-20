import React, { useEffect, useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
import './Procedures.css';

// Import images
import hydrafacialImg from "../../assets/images/hydrafacial.jpg";
import botoxImg from '../../assets/images/botox.jpg';
import fillerImg from '../../assets/images/filler.jpg';
import laserImg from '../../assets/images/laser.jpg';

const proceduresData = [
  { id: 1, name: 'HydraFacial!', img: hydrafacialImg },
  { id: 2, name: 'Botox', img: botoxImg },
  { id: 3, name: 'Fillers', img: fillerImg },
  { id: 4, name: 'Laser', img: laserImg },
  // Duplicate for a longer scroll
  { id: 5, name: 'HydraFacial!', img: hydrafacialImg },
  { id: 6, name: 'Botox', img: botoxImg },
  { id: 7, name: 'Fillers', img: fillerImg },
];

const Procedures = () => {
  const scrollerRef = useRef(null);
  const intervalRef = useRef(null);
  const scrollSpeed = 1;

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (scrollerRef.current) {
        const scroller = scrollerRef.current;
        if (scroller.scrollLeft >= (scroller.scrollWidth - scroller.clientWidth - 1)) {
          scroller.scrollLeft = 0;
        } else {
          scroller.scrollLeft += scrollSpeed;
        }
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // Cleanup on unmount
  }, []);

  return (
    <section className="procedures-section" id="procedures">
      <SectionHeader title="EXPLORE OUR" subtitle="Procedures" />
      
      <div 
        className="procedures-scroller"
        ref={scrollerRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {proceduresData.map((procedure) => (
          <div className="procedure-card" key={procedure.id}>
            <img src={procedure.img} alt={procedure.name} />
            <h3>{procedure.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Procedures;