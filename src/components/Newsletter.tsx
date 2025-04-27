
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from '@/components/ui/checkbox';

const Newsletter = () => {
  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Stay Connected with AHLN Box</h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for exclusive updates, industry insights, and special offers.
              Join our community of forward-thinking delivery solution enthusiasts.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Latest Newsletter Preview</h3>
              <div className="bg-navy-900/50 border border-navy-800 rounded-lg p-4 space-y-4">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300">New Feature Alert: Smart Temperature Control</h4>
                    <p className="text-sm text-gray-400">Introducing our newest innovation in package preservation...</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300">Industry Insights: Future of Delivery</h4>
                    <p className="text-sm text-gray-400">An exclusive analysis of upcoming trends in package delivery...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-navy-900/70 rounded-lg p-6 border border-navy-800">
              <h3 className="text-xl font-semibold mb-6">Subscribe to Updates</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 block mb-1">Full Name</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="bg-navy-800 border-navy-700"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 block mb-1">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-navy-800 border-navy-700"
                  />
                </div>
                
                <div className="flex items-start gap-2">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to receive marketing communications from AHLN Box
                    </label>
                    <p className="text-sm text-gray-500">
                      You can unsubscribe at any time.
                    </p>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
