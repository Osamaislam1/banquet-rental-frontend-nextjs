import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content: "The venue exceeded all our expectations. The staff was incredibly helpful and made our special day perfect!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Planner",
    content: "As an event planner, I've worked with many venues, but this one stands out for its elegance and service.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
  }
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-coral">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-coral text-coral" />
            ))}
          </div>
          <p className="text-gray-600">{testimonial.content}</p>
        </div>
      ))}
    </div>
  );
}