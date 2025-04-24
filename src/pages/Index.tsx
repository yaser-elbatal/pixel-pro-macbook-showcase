
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import LatestNews from '@/components/LatestNews';
import Newsletter from '@/components/Newsletter';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/e3c4c460-58b8-4289-ac1a-50406f3594e0.png";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>AHLN - Revolutionary Smart Delivery System</title>
        <meta name="description" content="AHLN Box provides a revolutionary smart delivery system that ensures your packages are secure, accessible, and delivered efficiently." />
        <meta name="keywords" content="AHLN, smart delivery, package security, delivery system" />
        <meta property="og:title" content="AHLN - Smart Delivery System" />
        <meta property="og:description" content="Revolutionary smart delivery system for secure and efficient package delivery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-navy-950 text-white">
        <Navbar />
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold">
                WELCOME TO <span className="text-blue-400">AHLN</span>
              </h1>
              <p className="text-lg text-gray-300">
                AHLN Box provides a revolutionary smart delivery system that ensures your
                packages are secure, accessible, and delivered efficiently. Say goodbye to
                package theft and missed deliveries.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Try Order
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in delay-100">
              <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg bg-navy-800/30">
                {isImageLoaded ? (
                  <img
                    src="/lovable-uploads/e3c4c460-58b8-4289-ac1a-50406f3594e0.png"
                    alt="AHLN Smart Delivery Box"
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                    style={{ opacity: 1, transform: 'scale(1)' }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-navy-800/50">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </AspectRatio>
            </div>
          </div>
        </div>

        <Features />
        <HowItWorks />
        <LatestNews />
        <Newsletter />
      </div>
    </>
  );
};

export default Index;
