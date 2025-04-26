
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-navy-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="bg-blue-500 text-white p-1 rounded">AHLN</span>
            <span className="hidden sm:inline">BOX</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-900/20 hover:text-blue-400",
                      location.pathname === "/" ? "border-t-2 border-blue-500 text-blue-400" : "text-white"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-900/20 hover:text-blue-400",
                      location.pathname === "/about" ? "border-t-2 border-blue-500 text-blue-400" : "text-white"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/products" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-900/20 hover:text-blue-400",
                      location.pathname === "/products" ? "border-t-2 border-blue-500 text-blue-400" : "text-white"
                    )}
                  >
                    Products
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-900/20 hover:text-blue-400",
                      location.pathname === "/contact" ? "border-t-2 border-blue-500 text-blue-400" : "text-white"
                    )}
                  >
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                className="p-2 rounded-full hover:bg-blue-900/20 transition-colors"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
              <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                Try Order
              </Button>
            </div>
          </div>
          
          <Button variant="ghost" className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        
        {/* Search Bar - conditionally shown */}
        <div className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${isSearchOpen ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products, features..." 
              className="w-full py-2 px-4 pl-10 bg-navy-800 border border-navy-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
