// src/components/About.jsx
import React from 'react';
import { FaCheckCircle, FaUsers, FaTools, FaCertificate } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaUsers className="text-3xl text-red-500" />,
      title: "Experienced Team",
      description: "Our team has over 15 years of experience in fire safety solutions"
    },
    {
      icon: <FaTools className="text-3xl text-red-500" />,
      title: "Quality Service",
      description: "State-of-the-art equipment and regular maintenance services"
    },
    {
      icon: <FaCertificate className="text-3xl text-red-500" />,
      title: "Certified Solutions",
      description: "All products and services meet international safety standards"
    },
    {
      icon: <FaCheckCircle className="text-3xl text-red-500" />,
      title: "24/7 Support",
      description: "Round-the-clock emergency response and customer support"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Rajput Fire Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Established in 2010, we are Agra's leading fire safety solutions provider, 
            committed to protecting lives and properties with cutting-edge fire safety equipment and services.
          </p>
        </div>

        {/* Company Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold ml-3">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted name in fire safety solutions, setting industry standards 
              for quality, reliability, and customer service in Agra and surrounding regions.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
            <p className="text-gray-700">
              To provide comprehensive fire safety solutions that protect lives and properties, 
              while delivering exceptional service and maintaining the highest safety standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;