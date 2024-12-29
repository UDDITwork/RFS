// src/components/FireExtinguishers.jsx
import React from 'react';

const FireExtinguishers = () => {
  const extinguishers = [
    {
        type: "Water Type",
        uses: ["Wood fires", "Paper fires", "Textile fires"],
        image: "https://5.imimg.com/data5/BS/RM/MY-30961433/water-type-fire-extinguisher.jpg",
        color: "blue"
      },
      {
        type: "Foam Type",
        uses: ["Flammable liquids", "Gasoline", "Oil"],
        image: "https://5.imimg.com/data5/SELLER/Default/2020/9/LG/NF/VL/26192240/water-foam-fire-extinguisher-cylinder.jpg",
        color: "yellow"
      },
      {
        type: "ABC Powder",
        uses: ["Multiple fire types", "Electrical fires", "Liquid fires"],
        image: "https://5.imimg.com/data5/EA/WW/CG/SELLER-5147715/abc-dry-powder-type-6kg-wall-mounted-fire-extinguisher.jpg",
        color: "red"
      },
      {
        type: "CO2 Type",
        uses: ["Electrical equipment", "Flammable liquids"],
        image: "https://safexfire.com/wp-content/uploads/2021/06/Untitled-design-6.jpg",
        color: "black"
      },
      {
        type: "Wet Chemical",
        uses: ["Kitchen fires", "Cooking oils", "Fats"],
        image: "https://5.imimg.com/data5/SELLER/Default/2024/8/445688016/VY/MR/OF/2346938/chemical-foam-fire-extinguishers.jpg",
        color: "yellow"
      }
  ];

  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fire Extinguisher Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extinguishers.map((ext) => (
            <div key={ext.type} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="p-4 flex justify-center items-center bg-gray-50" style={{ height: '300px' }}>
                <img 
                  src={ext.image} 
                  alt={`${ext.type} Fire Extinguisher`} 
                  className="max-h-full w-auto object-contain transform hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{ext.type}</h3>
                <ul className="space-y-2">
                  {ext.uses.map((use, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FireExtinguishers;