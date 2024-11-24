import React from 'react';
import HeroSection from './components/Gallery Hero';
import PhotoGallery from './components/PhotoGallery';
import VideoCarousel from './components/VideoCarousel';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PhotoGallery />
      <VideoCarousel />
      <ContactSection />
    </div>
  );
};

export default App;
