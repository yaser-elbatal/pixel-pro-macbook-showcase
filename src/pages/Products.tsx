
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Package } from 'lucide-react';

const products = [
  {
    name: "AHLN Smart Box",
    image: "/placeholder.svg",
    description: "Secure package delivery box with smart access control and monitoring.",
    features: ["Facial Recognition", "24/7 Monitoring", "Weather Resistant", "Mobile App Integration"],
    price: "$299",
  },
  {
    name: "AHLN Pro Hub",
    image: "/placeholder.svg",
    description: "Enterprise-grade delivery management system for businesses.",
    features: ["Multi-box Management", "Analytics Dashboard", "API Integration", "Priority Support"],
    price: "$599",
  },
  {
    name: "AHLN Mini",
    image: "/placeholder.svg",
    description: "Compact smart delivery solution for apartments and small spaces.",
    features: ["Space Efficient", "Easy Installation", "Basic Monitoring", "Mobile Access"],
    price: "$199",
  }
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products - AHLN Smart Delivery System</title>
        <meta name="description" content="Explore AHLN's range of smart delivery solutions for homes and businesses." />
      </Helmet>

      <div className="min-h-screen bg-navy-950 text-white">
        <Navbar />
        
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl text-gray-300">
                Smart delivery solutions for every need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={product.name}
                  className="bg-navy-800/50 rounded-lg overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <Package size={16} className="mr-2 text-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                      <Button className="bg-blue-500 hover:bg-blue-600">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
