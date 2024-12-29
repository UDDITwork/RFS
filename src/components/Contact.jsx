// src/components/Contact.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for all your fire safety needs. We're available 24/7 for emergency services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    HR ESTATE, 35 N, Bichpuri Rd, Bodla, Pathauli Village, Agra, Uttar Pradesh 282010
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-red-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:097196 55220" className="hover:text-red-500">097196 55220</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaWhatsapp className="text-red-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-gray-600">
                    <a href="https://wa.me/919719655220" className="hover:text-red-500">+91 97196 55220</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-red-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@rajputfire.com" className="hover:text-red-500">info@rajputfire.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-red-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-gray-600">24/7 Emergency Service Available</p>
                  <p className="text-gray-600">Office Hours: Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name*</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email*</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone*</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message*</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;