import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$10/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  {
    name: 'Standard',
    price: '$20/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  },
  {
    name: 'Premium',
    price: '$30/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
  }
];

const PricingComponent = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl font-bold text-red-500 mb-4">PRICING</h2>
      <h1 className="text-4xl font-extrabold mb-6">Subscription Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="p-6 border rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-4">{plan.price}</p>
            <ul className="text-left mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">{feature}</li>
              ))}
            </ul>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
