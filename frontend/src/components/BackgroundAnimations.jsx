import React, { useEffect, useState } from 'react';
import { Cloud } from 'lucide-react';

const BackgroundAnimations = () => {
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set new timeout for lightning effect
      timeoutId = setTimeout(() => {
        setShowLightning(true);
        setTimeout(() => setShowLightning(false), 1000);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      {/* Floating Clouds */}
      <div className="floating-clouds">
        <Cloud className="cloud cloud-1" size={32} />
        <Cloud className="cloud cloud-2" size={28} />
        <Cloud className="cloud cloud-3" size={36} />
        <Cloud className="cloud cloud-4" size={24} />
        <Cloud className="cloud cloud-5" size={30} />
        <Cloud className="cloud cloud-6" size={26} />
        <Cloud className="cloud cloud-7" size={34} />
      </div>

      {/* Lightning Effect */}
      {showLightning && (
        <div className="lightning-container">
          <div className="lightning-flash"></div>
          <div className="lightning"></div>
        </div>
      )}
    </>
  );
};

export default BackgroundAnimations;