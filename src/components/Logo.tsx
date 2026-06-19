import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle/ring on the left */}
      <circle 
        cx="35" 
        cy="43" 
        r="11" 
        stroke="currentColor" 
        strokeWidth="9" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />
      
      {/* Elegant cursive loop/arch and hook */}
      <path 
        d="M 44 44 C 47.5 32, 55 21, 67 21 C 79 21, 80 39, 71 50 C 62 61, 52 68, 50 75 C 48.5 81, 55 83, 58 77" 
        stroke="currentColor" 
        strokeWidth="9" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />
    </svg>
  );
};
