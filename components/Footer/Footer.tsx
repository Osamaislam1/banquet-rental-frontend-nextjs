import { Flower2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { SocialLinks } from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="w-8 h-8 text-coral" />
              <span className="text-xl font-semibold">Banquet Rentals</span>
            </div>
            <p className="text-gray-600">
              Making your special moments unforgettable with perfect venues and exceptional service.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <FooterLinks
              links={[
                { href: '#venues', label: 'Venues' },
                { href: '#services', label: 'Services' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#contact', label: 'Contact' },
              ]}
            />
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <FooterLinks
              links={[
                { href: '#', label: 'Wedding Venues' },
                { href: '#', label: 'Corporate Events' },
                { href: '#', label: 'Birthday Parties' },
                { href: '#', label: 'Special Occasions' },
              ]}
            />
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">Subscribe to get special offers and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-sage/20 focus:border-sage focus:outline-none"
              />
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Banquet Rentals. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-coral transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-coral transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}