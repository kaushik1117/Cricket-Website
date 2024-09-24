// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white bg-opacity-10 backdrop-blur-lg' // Frosted effect when scrolled
          : 'bg-gradient-to-r from-black from-50% via-blue-900 to-black' // Gradient when at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="logo">
          <h1 className="text-xl font-bold text-white">CricketLeague</h1>
        </div>
        <ul className="flex space-x-8">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/matches" className="hover:text-gray-300">Matches</Link></li>
          <li><Link to="/host-tournament" className="hover:text-gray-300">Host Tournament</Link></li>

        </ul>
        <div>
            <div className="flex space-x-3">
        <Link
          to="/signin"  // This is the route to your multi-stage form
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Sign In
        </Link>
          <Link
          to="/form"  // This is the route to your multi-stage form
          className="bg-blue-600 text-white py-2 px-4  rounded-lg hover:bg-blue-700"
        >
          Register
        </Link>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
