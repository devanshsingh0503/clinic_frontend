import React from 'react';
import Slider from 'react-slick'; // Import the slider
import SectionHeader from '../common/SectionHeader';
import { FaStar } from 'react-icons/fa'; // Using icons for stars
import './Testimonials.css';

// You can add as many as you want here
const testimonialData = [
  {
    id: 1,
    stars: 5,
    quote: "Absolutely in love with my lips! The 'Russian Lips' technique is amazing. So professional and the clinic is beautiful.",
    author: "— Anna V."
  },
  {
    id: 2,
    stars: 5,
    quote: "I was nervous about Botox, but the doctors here are true artists. I look refreshed, not frozen. Thank you!",
    author: "— Elena P."
  },
  {
    id: 3,
    stars: 5,
    quote: "The best HydraFacial I've ever had. My skin is glowing. I will be a regular customer from now on.",
    author: "— Maria S."
  },
  {
    id: 4,
    stars: 5,
    quote: "Professional, clean, and luxurious. The results for my jawline correction exceeded my expectations.",
    author: "— Katerina B."
  }
];

// Helper function to render stars
const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<FaStar key={i} />);
  }
  return <div className="stars">{stars}</div>;
};

const Testimonials = () => {
  // Settings for the react-slick slider
  const settings = {
    dots: true,       // Show dot indicators
    infinite: true,   // Loop the slider
    speed: 500,
    slidesToShow: 3,  // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <SectionHeader title="WHAT OUR CLIENTS SAY" subtitle="Testimonials" />
      
      <div className="slider-container">
        <Slider {...settings}>
          {testimonialData.map((item) => (
            <div className="testimonial-card-wrapper" key={item.id}>
              <div className="testimonial-card">
                {renderStars(item.stars)}
                <p className="quote">"{item.quote}"</p>
                <p className="author">{item.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;