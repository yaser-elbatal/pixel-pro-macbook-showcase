
import { type NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import MacBookShowcase from '@/components/MacBookShowcase';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import LatestNews from '@/components/LatestNews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector';
import { fetchMetadata } from '@/store/slices/metadataSlice';

const Home: NextPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const { metadata, isLoading } = useAppSelector(state => state.metadata);

  useEffect(() => {
    // Fetch metadata from the backend
    dispatch(fetchMetadata());

    // Load hero image
    const img = new Image();
    img.src = "/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png";
    img.onload = () => setIsImageLoaded(true);
  }, [dispatch]);

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
      <Head>
        <title>{metadata?.title || "AHLN - Revolutionary Smart Delivery System"}</title>
        <meta name="description" content={metadata?.description || "Experience the future of package delivery with AHLN Box"} />
        <meta name="keywords" content={metadata?.keywords || "AHLN, smart delivery, package security"} />
        <meta property="og:title" content={metadata?.ogTitle || "AHLN - Smart Package Delivery System"} />
        <meta property="og:description" content={metadata?.ogDescription || "Revolutionary smart delivery system"} />
      </Head>

      <div className="min-h-screen bg-navy-950 text-white font-poppins">
        <Navbar />
        
        {/* Hero Section with Enhanced Gradient Background and Light Circle */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="hero-section relative overflow-hidden pt-32 pb-20"
        >
          {/* Enhanced gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-blue-900/30 to-navy-950"></div>
          
          {/* Large light circle in background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-500/10 via-blue-400/5 to-transparent blur-3xl"></div>
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

export default Home;
