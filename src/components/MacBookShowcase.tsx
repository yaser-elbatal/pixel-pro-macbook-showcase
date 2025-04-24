
import React from 'react';
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const MacBookShowcase = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              MacBook Pro 14"
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Pro anywhere.
            </p>
          </div>
          
          {/* MacBook Image */}
          <div className="mt-16 relative">
            <div className="w-full max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229"
                alt="MacBook Pro 14-inch"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Specs Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold">Power. On.</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Up to 18 hours of battery life. M2 Pro or M2 Max chip. Up to 96GB unified memory.
              </p>
            </div>
            <div className="space-y-6 animate-fade-in delay-100">
              <h2 className="text-3xl font-bold">Liquid Retina XDR</h2>
              <p className="text-gray-600 dark:text-gray-300">
                14.2-inch display. Reference modes. ProMotion technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookShowcase;
