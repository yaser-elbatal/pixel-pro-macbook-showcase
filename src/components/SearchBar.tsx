import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { setSearchTerm, searchProducts } from '@/store/slices/searchSlice';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { searchTerm, results, isLoading } = useAppSelector(state => state.search);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  
  useEffect(() => {
    if (searchTerm.trim().length > 2) {
      const timer = setTimeout(() => {
        dispatch(searchProducts(searchTerm));
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [searchTerm, dispatch]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
    setIsResultsOpen(value.length > 0);
  };
  
  const handleFocus = () => {
    if (searchTerm.trim().length > 0) {
      setIsResultsOpen(true);
    }
  };
  
  return (
    <div className="relative z-20">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search products, features..." 
          className="w-full py-2 px-4 pl-10 bg-navy-800 border border-navy-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={() => setTimeout(() => setIsResultsOpen(false), 200)}
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        {isLoading && (
          <div className="absolute right-3 top-2.5">
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {isResultsOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-navy-800 border border-navy-700 rounded-md shadow-lg overflow-hidden"
          >
            <div className="p-2">
              <h3 className="text-sm text-gray-400 px-2 py-1">Results</h3>
              <div className="divide-y divide-navy-700">
                {results.map((result) => (
                  <div 
                    key={result.id}
                    className="px-4 py-2 hover:bg-navy-700 transition-colors cursor-pointer"
                  >
                    <p className="text-white">{result.name}</p>
                    <p className="text-sm text-blue-400">${result.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
