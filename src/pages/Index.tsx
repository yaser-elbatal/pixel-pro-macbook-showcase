
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
    img.src = "/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png";
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
                    src="/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png"
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

        {/* Product Showcase Section */}
        <section className="py-20 bg-navy-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Advanced Smart Delivery Solution
                </h2>
                <p className="text-lg text-gray-300">
                  Our state-of-the-art delivery box comes equipped with advanced security features,
                  including facial recognition, smart access control, and 24/7 monitoring capabilities.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Smart Access Control
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Weather-Resistant Design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Real-time Monitoring
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png"
                  alt="AHLN Smart Box Features"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <LatestNews />
        <Newsletter />
      </div>
    </>
  );
};

export default Index;

