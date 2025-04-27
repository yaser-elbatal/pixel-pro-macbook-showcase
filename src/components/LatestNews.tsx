
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "GITEX Dubai",
    date: "April 18, 2023",
    excerpt: "Experience AHLN Box's cutting-edge delivery solutions at GITEX Dubai. Visit our booth for live demonstrations and exclusive insights into our upcoming features.",
    imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Global AI Exhibition",
    date: "May 8, 2023",
    excerpt: "Discover how AHLN Box leverages artificial intelligence to revolutionize package delivery. Join us at the Global AI Exhibition for an exclusive preview of upcoming AI features.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const LatestNews = () => {
  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="block text-sm text-blue-400 uppercase tracking-wider mb-2">News</span>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Happenings</h2>
          <p className="text-gray-400">
            Stay updated with AHLN Box's presence at major industry events and exhibitions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="bg-navy-800/50 rounded-lg overflow-hidden hover:bg-navy-800/80 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-60 object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60"></div>
              </div>
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
                  className="text-blue-400 hover:text-blue-300 p-0 flex items-center gap-1 group"
                >
                  Learn More <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
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
