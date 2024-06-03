import React from 'react';
import { features } from '@/data/features';

const Features = () => {
  return (
    <div className="p-8 ml-25 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Features</h2>
      <h1 className="text-4xl font-extrabold mb-6">Uifry Premium</h1>
      {features.map((feature, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-2">
            <span className="mr-2 text-xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
