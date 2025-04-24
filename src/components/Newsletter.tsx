
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected with AHLN Box</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive updates, industry insights, and special offers.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-navy-800 border-navy-700"
            />
            <Button className="bg-blue-500 hover:bg-blue-600">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
