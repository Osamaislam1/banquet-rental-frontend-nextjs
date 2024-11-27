import { Flower2 } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { NavLinks } from './NavLinks';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <Flower2 className="w-8 h-8 text-coral" />
          <span className="text-xl font-semibold">Banquet Rentals</span>
        </a>

        <NavLinks className="hidden lg:flex space-x-8" />
        <MobileMenu />
      </div>
    </header>
  );
}