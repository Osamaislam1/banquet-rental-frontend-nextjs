import { MapPin, Calendar, Sparkles, Users, Award, Heart, Star, Utensils, Music, Camera } from 'lucide-react';
import Navbar from '@/components/Navigation/Navbar';
import SearchBar from '@/components/SearchBar';
import FeatureCard from '@/components/FeatureCard';
import Gallery from '@/components/Gallery';
import FlowerPattern from '@/components/FlowerPattern';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer/Footer';
import Stats from '@/components/Stats';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-16">
        {/* Hero Section */}
        <section className="relative px-6 py-20 text-center">
          <FlowerPattern />
          <div className="max-w-4xl mx-auto relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Find the Perfect Banquet
              <br />
              for Your Celebration
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Enter the perfect details for your special occasion
            </p>
            <SearchBar />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 py-20 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide exceptional service and attention to detail for your special events
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Award}
                title="Premium Venues"
                description="Carefully curated selection of elegant and sophisticated venues"
              />
              <FeatureCard
                icon={Heart}
                title="Dedicated Service"
                description="Professional team committed to making your event perfect"
              />
              <FeatureCard
                icon={Sparkles}
                title="Complete Solutions"
                description="Everything you need from catering to decoration"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive event solutions tailored to your needs
              </p>
            </div>
            <Services />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="px-6 py-20 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Venues</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our collection of stunning venues perfect for any occasion
              </p>
            </div>
            <Gallery />
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <Stats />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="px-6 py-20 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read about experiences from our satisfied customers
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Packages</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect package for your celebration
              </p>
            </div>
            <Pricing />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-20 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get in touch with us to plan your perfect event
              </p>
            </div>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}