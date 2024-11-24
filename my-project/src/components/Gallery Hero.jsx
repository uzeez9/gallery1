import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[40vh] bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl font-bold tracking-wider">
          OUR GALLERY
        </h1>
      </div>
      
      {/* Decorative hand image */}
      <div className="absolute right-0 top-0 h-full w-1/3">
        <div className="h-full w-full bg-[url('/hand.jpg')] bg-cover bg-center opacity-50"></div>
      </div>
    </div>
  );
};

export default HeroSection;
