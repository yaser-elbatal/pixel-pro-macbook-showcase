
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-navy-950">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">About AHLN</h1>
        <p className="text-lg text-gray-300 mb-8">
          Learn more about our revolutionary smart delivery system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At AHLN, we're committed to revolutionizing package delivery with innovative 
              smart technology solutions that ensure secure, accessible, and efficient delivery.
            </p>
            <p className="text-gray-300">
              Our mission is to eliminate package theft and missed deliveries while 
              providing convenience and peace of mind to our customers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We envision a world where package delivery is seamless, secure, and 
              stress-free. By combining cutting-edge technology with user-friendly 
              design, we're creating the delivery infrastructure of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
