import React from 'react';
import './SectionHeader.css';

/**
 * A reusable header for sections.
 * @param {string} title - The main (uppercase) title
 * @param {string} subtitle - The secondary (script) title
 */
const SectionHeader = ({ title, subtitle }) => {
  return (
    <h2 className="section-header">
      {title} <span className="script-font">{subtitle}</span>
    </h2>
  );
};

export default SectionHeader;