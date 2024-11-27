interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className = "" }: NavLinksProps) {
  return (
    <nav className={className}>
      <a href="#venues" className="text-gray-600 hover:text-coral transition-colors">Venues</a>
      <a href="#services" className="text-gray-600 hover:text-coral transition-colors">Services</a>
      <a href="#gallery" className="text-gray-600 hover:text-coral transition-colors">Gallery</a>
      <a href="#pricing" className="text-gray-600 hover:text-coral transition-colors">Pricing</a>
      <a href="#contact" className="text-gray-600 hover:text-coral transition-colors">Contact</a>
    </nav>
  );
}