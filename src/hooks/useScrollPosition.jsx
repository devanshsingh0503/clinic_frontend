import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    // Call it once on mount
    updatePosition();

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;