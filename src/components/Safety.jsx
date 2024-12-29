// src/components/Safety.jsx
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Safety = () => {
  const safetyTips = [
    "Regular inspection and maintenance of fire equipment",
    "Proper training for fire extinguisher usage",
    "Clear marking of emergency exits",
    "Regular fire drills and evacuation plans",
    "Proper storage of flammable materials"
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <FaExclamationTriangle className="text-4xl text-red-500 mr-4" />
          <h2 className="text-3xl font-bold">Safety Precautions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {safetyTips.map((tip, index) => (
              <li key={index} className="flex items-start p-4 bg-white rounded-lg shadow">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center mr-4">
                  {index + 1}
                </span>
                <p className="text-gray-700">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Safety;