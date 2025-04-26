
import { type NextPage } from 'next';
import Head from 'next/head';
import MacBookShowcase from '@/components/MacBookShowcase';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import LatestNews from '@/components/LatestNews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AHLN - Revolutionary Smart Delivery System</title>
      </Head>
      <div className="min-h-screen bg-navy-950 text-white font-poppins">
        <Navbar />
        <MacBookShowcase />
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
