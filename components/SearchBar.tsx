"use client";

import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search banquet rentals..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
        >
          <Search className="w-6 h-6 text-coral" />
        </button>
      </form>
      <button className="btn-primary w-full">
        Find Your Perfect Venue
      </button>
    </div>
  );
}