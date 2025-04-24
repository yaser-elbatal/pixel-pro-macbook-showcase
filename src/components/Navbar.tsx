
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-navy-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            AHLN
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/products" className="text-white hover:text-blue-400 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact Us
            </Link>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
              Try Order
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
