import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-gray-600 hover:text-coral transition-colors">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-600 hover:text-coral transition-colors">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-600 hover:text-coral transition-colors">
        <Instagram className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-600 hover:text-coral transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
}