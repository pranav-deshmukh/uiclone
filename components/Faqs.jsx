import React from 'react';

const faqs = [
  {
    title: 'The Best Financial Accounting App Ever!',
    description: 'Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.',
    bg:'bg-red-500 text-white'
  },
  {
    title: 'The Best Financial Accounting App Ever!',
    description: 'Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.',
    bg:'bg-white text-black border border-gray-200'
  },
  {
    title: 'The Best Financial Accounting App Ever!',
    description: 'Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.',
    bg:'bg-white text-black border border-gray-200'
  },
  {
    title: 'The Best Financial Accounting App Ever!',
    description: 'Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.',
    bg:'bg-red-500 text-white'
  },
  {
    title: 'The Best Financial Accounting App Ever!',
    description: 'Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.',
    bg:'bg-red-500 text-white'
  },
  {
    title: 'The Best Financial Accounting App Ever!',
    description: 'Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.',
    bg:'bg-white text-black border border-gray-200'
  },
];

const FAQ = () => {
  return (
    <div className="p-8 bg-white rounded-lg w-[80%] mx-auto">
      <h2 className="text-2xl font-bold text-red-500 mb-4">FAQ</h2>
      <h1 className="text-4xl font-extrabold mb-6">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className={`p-6 rounded-lg ${faq.bg}`}>
            <h3 className="text-xl font-semibold">{faq.title}</h3>
            <p className="mt-2">{faq.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
