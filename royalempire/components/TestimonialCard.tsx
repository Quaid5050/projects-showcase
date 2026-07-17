import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="mb-6">
        <Quote className="w-12 h-12 text-red-600 opacity-20" />
      </div>

      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed flex-grow italic">
        &quot;{content}&quot;
      </p>

      <div className="flex items-center mt-auto">
        <div className="relative w-14 h-14 mr-4 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h4 className="font-bold text-black">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
