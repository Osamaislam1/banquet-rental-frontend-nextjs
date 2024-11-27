import { Utensils, Music, Camera, Users, MapPin, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Professional catering with diverse menu options"
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Live music and DJ services for your event"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photo and video coverage"
  },
  {
    icon: Users,
    title: "Event Planning",
    description: "Full-service event planning and coordination"
  },
  {
    icon: MapPin,
    title: "Venue Selection",
    description: "Help finding the perfect venue for your event"
  },
  {
    icon: Sparkles,
    title: "Decoration",
    description: "Custom decoration and theme setup"
  }
];

export default function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.title}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="feature-icon mb-4">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}