const stats = [
  {
    number: "500+",
    label: "Events Organized"
  },
  {
    number: "50+",
    label: "Unique Venues"
  },
  {
    number: "1000+",
    label: "Happy Clients"
  },
  {
    number: "15+",
    label: "Years Experience"
  }
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="stats-card">
          <h3 className="text-3xl font-bold text-coral mb-2">{stat.number}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}