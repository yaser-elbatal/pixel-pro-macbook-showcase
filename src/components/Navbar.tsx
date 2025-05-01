
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-navy-950/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="flex items-center">
              <span className="text-white">Ahln.</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/products" className="text-white hover:text-blue-400 transition-colors">
                Products
              </Link>
              <Link to="/contact-us" className="text-white hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="hidden lg:block w-48">
              <SearchBar />
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 rounded-md">
              Try Order
            </Button>
          </div>
          
          <Button variant="ghost" className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
