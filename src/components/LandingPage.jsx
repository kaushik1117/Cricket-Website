// LandingPage.jsx
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import MatchesSection from './MatchesSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MatchesSection />
      <Footer />
    </>
  );
};

export default LandingPage;
