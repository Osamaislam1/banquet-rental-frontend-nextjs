"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-coral" />
            <span>contact@banquetrentals.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-coral" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-coral" />
            <span>123 Celebration Ave, Party City, PC 12345</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="search-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="search-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            className="search-input min-h-[150px]"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
      <div className="h-[400px] bg-sage/10 rounded-2xl">
        {/* Add map integration here */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Map Integration
        </div>
      </div>
    </div>
  );
}