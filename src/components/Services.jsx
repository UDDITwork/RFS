import React from 'react';
import { FaFire, FaTint, FaBell, FaWrench } from 'react-icons/fa';
// Changed FaPump to FaTint for the hydrant system icon

const Services = () => {
  const services = [
    {
      icon: <FaFire className="text-4xl text-red-500" />,
      title: "Fire Extinguisher Services",
      description: "Sales, refilling, and maintenance of all types of fire extinguishers"
    },
    {
      icon: <FaTint className="text-4xl text-red-500" />, // Changed to water drop icon
      title: "Fire Hydrant Systems",
      description: "Installation and maintenance of complete fire hydrant systems"
    },
    {
      icon: <FaBell className="text-4xl text-red-500" />,
      title: "Fire Alarm Systems",
      description: "Advanced fire detection and alarm system installation"
    },
    {
      icon: <FaWrench className="text-4xl text-red-500" />,
      title: "Maintenance Services",
      description: "24/7 maintenance and emergency response services"
    }
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;