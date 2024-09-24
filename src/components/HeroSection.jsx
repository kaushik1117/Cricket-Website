// HeroSection.jsx
import React, { useEffect, useState } from 'react';
import cricketImage from '../assets/hero1.jpeg';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative bg-gradient-to-r from-black from-50% via-blue-900 to-black text-white py-20 mt-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Image section with gradient overlay */}
        <div className="hero-image w-1/2 relative">
          <img
            src={cricketImage}
            alt="Cricket Tournament"
            className="w-full h-auto rounded-lg opacity-90 object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="hero-content w-1/2 text-right">
          <h2 className="text-4xl font-bold mb-4">Cricket Tournaments Like Never Before!</h2>
          <div className="timer bg-gray-800 p-4 inline-block rounded-lg">
            <h3 className="text-xl">Witness the live action in:</h3>
            <p className="text-2xl font-bold">{formatTime(timeLeft)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
