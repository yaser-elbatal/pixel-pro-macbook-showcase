
import React from 'react';
import Image from 'next/image';

const steps = [
  {
    number: 1,
    title: "Order Online",
    description: "Shop from your favorite retailers and select AHLN Box for your delivery option.",
    icon: "💻" 
  },
  {
    number: 2,
    title: "Courier Delivers",
    description: "The courier securely deposits your package in the AHLN Box designed for you.",
    icon: "🚚"
  },
  {
    number: 3,
    title: "Receive Notification",
    description: "Get instantly notified via our app when your package has been delivered.",
    icon: "📱"
  },
  {
    number: 4,
    title: "Pickup Anytime",
    description: "Collect your package at your convenience using our secure access system.",
    icon: "🔐"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative bg-navy-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="block text-sm text-blue-400 uppercase tracking-wider mb-2">Process</span>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, streamlined process that makes package delivery and retrieval effortless.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-6">
                {step.number}
              </div>
              <div className="bg-navy-800/50 hover:bg-navy-800/70 transition-colors rounded-lg p-6 w-full">
                <div className="w-20 h-20 mx-auto bg-navy-700 rounded-full flex items-center justify-center text-3xl mb-4 relative">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 -m-2 rounded-full bg-gradient-radial from-blue-500/20 via-blue-800/5 to-transparent blur-md"></div>
                  <span className="relative z-10">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
