import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Icons from Heroicons (You might need to install heroicons)
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white bg-opacity-10 backdrop-blur-lg' // Frosted effect when scrolled
          : 'bg-gradient-to-r from-black from-50% via-blue-900 to-black' // Gradient when at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="text-xl font-bold text-white"><img className='h-12 w-12 rounded-full'src={logo} /></Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Links for Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-300 text-white">Home</Link>
          </li>
          <li>
            <Link to="/matches" className="hover:text-gray-300 text-white">Matches</Link>
          </li>
          <li>
            <Link to="/host-tournament" className="hover:text-gray-300 text-white">Host Tournament</Link>
          </li>
        </ul>

        {/* Sign In and Register Buttons for Desktop */}
        <div className="hidden md:flex space-x-3">
          <Link
            to="/signin"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </Link>
          <Link
            to="/form"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-90">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 text-lg"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/matches"
                  className="text-white hover:text-gray-300 text-lg"
                  onClick={toggleMenu}
                >
                  Matches
                </Link>
              </li>
              <li>
                <Link
                  to="/host-tournament"
                  className="text-white hover:text-gray-300 text-lg"
                  onClick={toggleMenu}
                >
                  Host Tournament
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full text-center"
                  onClick={toggleMenu}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/form"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full text-center"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
