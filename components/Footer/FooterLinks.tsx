interface FooterLink {
  href: string;
  label: string;
}

interface FooterLinksProps {
  links: FooterLink[];
}

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-gray-600 hover:text-coral transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}