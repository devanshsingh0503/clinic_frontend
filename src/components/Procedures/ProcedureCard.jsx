// src/components/Procedures/ProcedureCard.js
import React from 'react';
import './ProcedureCard.css';
import Button from '../common/Button';

// This component receives data as props
const ProcedureCard = ({ image, title, description, link }) => {
  return (
    <div className="procedure-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
        <a href={link} className="card-learn-more">Learn more</a>
        <div className="card-buttons">
          <Button variant="primary">Sign up</Button>
          <Button variant="secondary">WhatsApp</Button>
        </div>
      </div>
    </div>
  );
};

export default ProcedureCard;