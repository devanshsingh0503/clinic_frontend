import React from 'react';
import './Button.css';

/**
 * A reusable button component.
 * @param {object} props
 * @param {'primary' | 'secondary'} props.variant - 'primary' is gold, 'secondary' is light grey/transparent.
 * @param {function} props.onClick - The function to call when clicked.
 * @param {React.ReactNode} props.children - The text or icon inside the button.
 */
const Button = ({ children, onClick, variant = 'secondary' }) => {
  // This correctly creates "btn btn-primary" or "btn btn-secondary"
  const buttonClass = `btn btn-${variant}`; 
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;