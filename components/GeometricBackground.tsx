
import React, { useEffect, useState } from 'react';

const GeometricBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      <svg 
        className="w-full h-full opacity-[0.15]" 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="xMidYMid slice"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#d4af37" strokeWidth="0.5" />
            <path d="M 0 0 L 100 100" fill="none" stroke="#333" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Decorative large triangles */}
        <polygon points="0,0 500,0 0,500" fill="none" stroke="#d4af37" strokeWidth="0.5" className="opacity-20" />
        <polygon points="1000,1000 500,1000 1000,500" fill="none" stroke="#d4af37" strokeWidth="0.5" className="opacity-20" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />
    </div>
  );
};

export default GeometricBackground;
