
'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setSearchTerm } from '@/store/slices/searchSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setSearchTerm(query));
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-navy-800/50 border border-navy-800 rounded-md py-1 pl-9 pr-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </form>
  );
};

export default SearchBar;
