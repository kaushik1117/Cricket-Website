// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="sponsors">
          <h4 className="text-xl font-bold">Sponsored By:</h4>
          <p>Company 1, Company 2, Company 3</p>
        </div>
        <div className="social-media">
          <h4 className="text-xl font-bold">Follow Us:</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
