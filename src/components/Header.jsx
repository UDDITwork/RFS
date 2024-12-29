// src/components/Header.jsx
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">Rajput Fire Service</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {/* Added shine effect classes to each nav link */}
            <Link 
              to="/" 
              className="relative overflow-hidden group px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                before:absolute before:top-0 before:-left-full before:w-full before:h-full 
                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                hover:before:left-full before:transition-all before:duration-500 hover:bg-red-500"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="relative overflow-hidden group px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                before:absolute before:top-0 before:-left-full before:w-full before:h-full 
                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                hover:before:left-full before:transition-all before:duration-500 hover:bg-red-500"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="relative overflow-hidden group px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                before:absolute before:top-0 before:-left-full before:w-full before:h-full 
                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                hover:before:left-full before:transition-all before:duration-500 hover:bg-red-500"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="relative overflow-hidden group px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                before:absolute before:top-0 before:-left-full before:w-full before:h-full 
                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                hover:before:left-full before:transition-all before:duration-500 hover:bg-red-500"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:097196 55220" 
              className="flex items-center hover:text-red-200 transition"
            >
              <FaPhone className="mr-2" />
              097196 55220
            </a>
            <a 
              href="mailto:info@rajputfire.com" 
              className="flex items-center hover:text-red-200 transition"
            >
              <FaEnvelope className="mr-2" />
              info@rajputfire.com
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-500">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-red-200 px-4 py-2">Home</Link>
              <Link to="/about" className="hover:text-red-200 px-4 py-2">About</Link>
              <Link to="/services" className="hover:text-red-200 px-4 py-2">Services</Link>
              <Link to="/contact" className="hover:text-red-200 px-4 py-2">Contact Us</Link>
              <a href="tel:097196 55220" className="flex items-center px-4 py-2">
                <FaPhone className="mr-2" />
                097196 55220
              </a>
              <a href="mailto:info@rajputfire.com" className="flex items-center px-4 py-2">
                <FaEnvelope className="mr-2" />
                info@rajputfire.com
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;