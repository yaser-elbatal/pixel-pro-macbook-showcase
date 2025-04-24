
import React from 'react';
import { Helmet } from 'react-helmet';
import MacBookShowcase from '../components/MacBookShowcase';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MacBook Pro 14" - Professional Grade Performance</title>
        <meta name="description" content="Experience the power of MacBook Pro 14-inch. Featuring M2 Pro or M2 Max chip, up to 18 hours of battery life, and a stunning Liquid Retina XDR display." />
        <meta name="keywords" content="MacBook Pro, Apple, M2 Pro, M2 Max, Liquid Retina XDR, Professional Laptop" />
        <meta property="og:title" content="MacBook Pro 14 - Professional Grade Performance" />
        <meta property="og:description" content="Experience the power of MacBook Pro 14-inch with M2 Pro or M2 Max chip." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <MacBookShowcase />
    </>
  );
};

export default Index;
