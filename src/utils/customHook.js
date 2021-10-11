import { useState, useEffect } from 'react';

const getWindowDimensions = () => window.innerWidth;

export default function useWindowDimensions() {
  const [windowDimension, setWindowDimension] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => setWindowDimension(getWindowDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimension;
}
