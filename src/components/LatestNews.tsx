
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector';
import { fetchNews } from '@/store/slices/newsSlice';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const LatestNews = () => {
  const dispatch = useAppDispatch();
  const { news, isLoading, error } = useAppSelector((state) => state.news);
  
  useEffect(() => {
    // Dispatch action to fetch news data from the backend
    dispatch(fetchNews());
  }, [dispatch]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerNews = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-navy-900"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeInUp} className="text-center mb-14">
          <span className="block text-sm text-blue-400 uppercase tracking-wider mb-2">News</span>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Happenings</h2>
          <p className="text-gray-400">
            Stay updated with AHLN Box's presence at major industry events and exhibitions.
          </p>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 p-8 bg-navy-800/50 rounded-lg">
            <p>Failed to load latest news. Please try again later.</p>
          </div>
        ) : (
          <Carousel className="w-full">
            <CarouselContent>
              {news.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-navy-800/50 rounded-lg overflow-hidden hover:bg-navy-800/80 transition-all duration-300 h-full mx-2"
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
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-blue-900/20 hover:bg-blue-800" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-blue-900/20 hover:bg-blue-800" />
            </div>
          </Carousel>
        )}
      </div>
    </motion.section>
  );
};

export default LatestNews;
