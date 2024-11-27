"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLinks } from './NavLinks';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-coral transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
          <NavLinks className="flex flex-col space-y-4" />
        </div>
      )}
    </div>
  );
}