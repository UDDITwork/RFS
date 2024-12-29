// src/components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaClock, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaShieldAlt className="mr-2" />
              Rajput Fire Service
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in fire safety solutions since 2010. Providing comprehensive fire protection services across Agra and surrounding areas.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <FaClock className="mr-2" />
              <span>Open 24/7 for Emergency Services</span>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2 flex-shrink-0 text-red-500" />
                <span>HR ESTATE, 35 N, Bichpuri Rd, Bodla, Pathauli Village, Agra, Uttar Pradesh 282010</span>
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-red-500" />
                <a href="tel:097196 55220" className="hover:text-red-400 transition">
                  097196 55220
                </a>
              </p>
              <p className="flex items-center">
                <FaWhatsapp className="mr-2 text-red-500" />
                <a href="https://wa.me/919719655220" className="hover:text-red-400 transition">
                  +91 97196 55220
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-red-500" />
                <a href="mailto:info@rajputfire.com" className="hover:text-red-400 transition">
                  info@rajputfire.com
                </a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-red-400 transition flex items-center">
                  <span className="mr-2">→</span>
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition flex items-center">
                  <span className="mr-2">→</span>
                  Fire Extinguishers
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition flex items-center">
                  <span className="mr-2">→</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-red-400 transition flex items-center">
                  <span className="mr-2">→</span>
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition flex items-center">
                  <span className="mr-2">→</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Service Areas & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="text-gray-400 mb-6 space-y-2">
              <li>Agra</li>
              <li>Kalwari</li>
              <li>Manghatai</li>
              <li>Vayu Vihar</li>
              <li>Dahtora</li>
            </ul>
            
           {/* Social Media Links */}
<div className="flex space-x-4">
  <a 
    href="https://facebook.com/rajputfireservice" 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-400 transition"
  >
    <FaFacebook size={24} />
  </a>
  <a 
    href="https://twitter.com/rajputfireserv" 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-400 transition"
  >
    <FaTwitter size={24} />
  </a>
  <a 
    href="https://instagram.com/rajputfireservice" 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-400 transition"
  >
    <FaInstagram size={24} />
  </a>
  <a 
    href="https://wa.me/919719655220" 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-400 transition"
  >
    <FaWhatsapp size={24} />
  </a>
</div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left text-gray-400">
              <p>&copy; {new Date().getFullYear()} Rajput Fire Service. All rights reserved.</p>
            </div>
            
            {/* Emergency Contact */}
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                24/7 Emergency Service: 
                <a href="tel:097196 55220" className="text-red-400 hover:text-red-300 ml-2 font-semibold">
                  097196 55220
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;