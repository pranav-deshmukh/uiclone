import React from 'react';

const ContactComponent = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto mt-20">
      <h2 className="text-2xl font-bold text-red-500 mb-4">CONTACT OR DOWNLOAD</h2>
      <h1 className="text-4xl font-extrabold mb-6">Get in Touch or Download Now</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Message" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-lg">Send Message</button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <a href="/download/app1" className="bg-red-500 text-white py-2 px-4 rounded-lg">Download App 1</a>
          </div>
          <div className="mb-4">
            <a href="/download/app2" className="bg-red-500 text-white py-2 px-4 rounded-lg">Download App 2</a>
          </div>
          <div className="mb-4">
            <a href="/download/app3" className="bg-red-500 text-white py-2 px-4 rounded-lg">Download App 3</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
