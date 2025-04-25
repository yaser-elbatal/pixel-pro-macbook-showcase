
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const news = [
  {
    title: "GITEX Dubai",
    date: "April 15, 2023",
    excerpt: "Experience AHLN Box's cutting-edge delivery solutions at GITEX Dubai. Visit our booth for live demonstrations and exclusive insights into smart delivery technology.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Global AI Exhibition",
    date: "March 18, 2023",
    excerpt: "Discover how AHLN Box leverages artificial intelligence to revolutionize package delivery. Join us at the Global AI Exhibition for an in-depth look at our innovative systems.",
    imageUrl: "/placeholder.svg"
  }
];

const LatestNews = () => {
  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Happenings</h2>
          <p className="text-gray-400">
            Stay updated with AHLN Box's presence at major industry events and exhibitions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <div 
              key={item.title}
              className="bg-navy-800/50 rounded-lg overflow-hidden hover:bg-navy-800/80 transition-colors"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-blue-900/60 text-blue-300 text-xs rounded">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.excerpt}</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-blue-300 p-0 flex items-center gap-1"
                >
                  Learn More <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
