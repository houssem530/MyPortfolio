import React, { useEffect, useState } from 'react';
import { Cloud } from 'lucide-react';

const BackgroundAnimations = () => {
  const [showThunderbolt, setShowThunderbolt] = useState(false);

  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set new timeout for thunderbolt effect
      timeoutId = setTimeout(() => {
        setShowThunderbolt(true);
        setTimeout(() => setShowThunderbolt(false), 2000);
      }, 200);
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
        <Cloud className="cloud cloud-1" size={36} />
        <Cloud className="cloud cloud-2" size={32} />
        <Cloud className="cloud cloud-3" size={40} />
        <Cloud className="cloud cloud-4" size={28} />
        <Cloud className="cloud cloud-5" size={34} />
        <Cloud className="cloud cloud-6" size={30} />
        <Cloud className="cloud cloud-7" size={38} />
        <Cloud className="cloud cloud-8" size={26} />
        <Cloud className="cloud cloud-9" size={35} />
      </div>

      {/* Thunderbolt Effect */}
      {showThunderbolt && (
        <div className="lightning-container">
          <div className="thunderbolt-flash"></div>
          <div className="thunderbolt"></div>
          <div className="thunderbolt thunderbolt-2"></div>
        </div>
      )}
    </>
  );
};

export default BackgroundAnimations;