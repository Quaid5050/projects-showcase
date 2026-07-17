import Image from 'next/image';
import { ArrowRight } from 'lucide-react';interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, category, description, image }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block bg-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {description}
          </p>

        </div>
      </div>
    </div>
  );
}
