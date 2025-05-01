
import React from 'react';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import LatestNews from '@/components/LatestNews';
import Newsletter from '@/components/Newsletter';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const HomePage = () => {
  return (
    <>
      <div className="pt-32 pb-20 bg-navy-950 relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-500/30"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-blue-400/20"></div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-blue-600/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                WELCOME TO <span className="text-blue-400">AHLN</span>
              </h1>
              <p className="text-lg text-gray-300">
                AHLN Box provides a revolutionary smart delivery system that ensures your
                packages are secure, accessible, and delivered efficiently. Say goodbye to
                package theft and missed deliveries.
              </p>
              <div className="flex gap-4 mt-8">
                <Button className="bg-blue-500 hover:bg-blue-600 px-8">
                  Try Order
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-8 rounded-full bg-gradient-radial from-blue-500/30 via-blue-800/10 to-transparent blur-xl"></div>
                <img
                  src="/lovable-uploads/f5760ed8-3fa5-4bfa-aff0-b758e3b29d8b.png"
                  alt="AHLN Smart Delivery Box"
                  className="w-auto max-h-[600px] mx-auto object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Features />
      <HowItWorks />
      <LatestNews />
      <Newsletter />
    </>
  );
};

export default HomePage;
