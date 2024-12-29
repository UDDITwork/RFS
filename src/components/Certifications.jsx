
import React from 'react';
import { FaAward, FaCertificate, FaCheckCircle, FaStar } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      icon: <FaAward className="text-4xl text-yellow-500" />,
      title: "Trademark Registered",
      description: "Government of India"
    },
    {
      icon: <FaCertificate className="text-4xl text-yellow-500" />,
      title: "ISO Certified",
      description: "Quality Management System"
    },
    {
      icon: <FaCheckCircle className="text-4xl text-yellow-500" />,
      title: "MSME Registered",
      description: "Ministry of MSME, Govt. of India"
    },
    {
      icon: <FaStar className="text-4xl text-yellow-500" />,
      title: "5-Star Rated",
      description: "Customer Satisfaction"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Licenses & Approvals</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">{cert.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;