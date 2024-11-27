import Image from 'next/image';

const venues = [
  {
    id: 1,
    name: 'Mayfair Display',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800',
  },
  {
    id: 2,
    name: 'Playfair Display',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800',
  },
  {
    id: 3,
    name: 'Ballroom',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800',
  },
  {
    id: 4,
    name: 'Sallback',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800',
  },
  {
    id: 5,
    name: 'Results',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800',
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {venues.map((venue) => (
        <div key={venue.id} className="gallery-item">
          <Image
            src={venue.image}
            alt={venue.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white text-xl font-semibold">{venue.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}