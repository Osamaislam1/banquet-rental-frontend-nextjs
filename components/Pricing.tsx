import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$1,999",
    features: [
      "Up to 100 guests",
      "4-hour venue rental",
      "Basic decoration setup",
      "Standard lighting",
      "Parking space"
    ]
  },
  {
    name: "Premium",
    price: "$3,999",
    features: [
      "Up to 200 guests",
      "6-hour venue rental",
      "Premium decoration",
      "Professional lighting",
      "Valet parking",
      "Catering service",
      "Event coordinator"
    ]
  },
  {
    name: "Luxury",
    price: "$5,999",
    features: [
      "Up to 300 guests",
      "8-hour venue rental",
      "Luxury decoration",
      "Premium lighting & effects",
      "Valet parking",
      "Premium catering",
      "Dedicated event team",
      "Photography service"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div key={plan.name} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
          <p className="text-3xl font-bold text-coral mb-6">{plan.price}</p>
          <ul className="space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-coral" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="btn-primary w-full mt-8">Select Package</button>
        </div>
      ))}
    </div>
  );
}