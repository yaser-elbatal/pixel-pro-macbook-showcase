
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import LatestNews from '@/components/LatestNews';
import Newsletter from '@/components/Newsletter';
import { Button } from "@/components/ui/button";
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

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
        
        {/* Hero Section with Gradient Background and Particles */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="hero-section relative overflow-hidden pt-32 pb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-blue-900"></div>
          
          {/* Enhanced decorative particles */}
          <div className="particles absolute inset-0">
            <div className="particle absolute top-1/4 left-1/5 w-6 h-6 rounded-full bg-blue-400/20"></div>
            <div className="particle absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-blue-300/10"></div>
            <div className="particle absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-blue-500/20"></div>
            <div className="particle absolute top-2/3 right-1/3 w-5 h-5 rounded-full bg-blue-400/15"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={fadeInUp} 
                className="space-y-6"
              >
                <motion.h1 
                  variants={fadeInUp} 
                  className="text-4xl md:text-6xl font-bold"
                >
                  WELCOME TO <span className="text-blue-400">AHLN</span>
                </motion.h1>
                <motion.p 
                  variants={fadeInUp} 
                  className="text-lg text-gray-300"
                >
                  AHLN Box provides a revolutionary smart delivery system that ensures your
                  packages are secure, accessible, and delivered efficiently. Say goodbye to
                  package theft and missed deliveries.
                </motion.p>
                <motion.div 
                  variants={fadeInUp} 
                  className="flex gap-4 mt-8"
                >
                  <Button className="bg-blue-500 hover:bg-blue-600 px-8">
                    Try Order
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="relative flex items-center justify-center"
              >
                {isImageLoaded ? (
                  <div className="relative">
                    {/* Radial gradient shadow/glow effect */}
                    <div className="absolute inset-0 -m-8 rounded-full bg-gradient-radial from-blue-500/30 via-blue-800/10 to-transparent blur-xl"></div>
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      src="/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png"
                      alt="AHLN Smart Delivery Box"
                      className="w-auto max-h-[500px] mx-auto object-contain relative z-10"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-[400px]">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <Features />
        <HowItWorks />
        <LatestNews />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Index;
