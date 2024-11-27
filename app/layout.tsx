import './globals.css';
import type { Metadata } from 'next';
import { Marcellus } from 'next/font/google';

const marcellus = Marcellus({ 
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Banquet Rentals - Find Your Perfect Celebration Space',
  description: 'Discover and book beautiful banquet spaces for your special celebrations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={marcellus.className}>{children}</body>
    </html>
  );
}