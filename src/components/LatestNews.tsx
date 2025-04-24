
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "AHLN Partners with Major Courier Services",
    date: "April 15, 2025",
    excerpt: "AHLN announces strategic partnerships with leading courier services to enhance delivery capabilities.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "New Smart Box Features Released",
    date: "April 2, 2025",
    excerpt: "Latest firmware update adds facial recognition and enhanced security features to all AHLN devices.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "AHLN Expands to European Markets",
    date: "March 20, 2025",
    excerpt: "Following success in North America, AHLN smart delivery solutions now available across Europe.",
    imageUrl: "/placeholder.svg"
  }
];

const LatestNews = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
            View All News <ArrowRight size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div 
              key={item.title}
              className="bg-navy-800/50 rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-400 text-sm">{item.date}</span>
                <h3 className="text-xl font-semibold my-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.excerpt}</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-blue-300 p-0 flex items-center gap-1"
                >
                  Read More <ArrowRight size={16} />
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
