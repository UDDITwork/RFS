// src/components/Hero.jsx
import React, { useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';
import heroImage from '../assets/hero-images.jpg';

const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleConsultation = () => {
    setIsContactFormOpen(true);
  };

  const handleServices = () => {
    window.location.href = "#services";
  };

  return (
    <>
      <section className="relative h-[600px] bg-gradient-to-r from-red-800 to-red-900 text-white">
        {/* Previous Hero content remains the same */}
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <FaShieldAlt className="text-4xl mr-4" />
                <h1 className="text-5xl font-bold">Where Safety Meets Expertise</h1>
              </div>
              <p className="text-xl mb-8 text-gray-200">
                Your one-stop solution for comprehensive fire safety systems and services in Agra.
                Protecting lives and properties with state-of-the-art fire safety solutions.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={handleConsultation}
                  className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition duration-300"
                >
                  Get Free Consultation
                </button>
                <button 
                  onClick={handleServices}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition duration-300"
                >
                  Our Services
                </button>
              </div>
            </div>
           
<div className="hidden md:block">
  <img 
    src={heroImage}
    alt="Fire Safety Equipment"
    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
  />

            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default Hero;