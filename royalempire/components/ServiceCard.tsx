import Image from 'next/image';
import { ArrowRight as _ArrowRight, Chrome as Home, Utensils, Droplet, Trees, Square, Building2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

const iconMap: { [key: string]: React.ElementType } = {
  home: Home,
  utensils: Utensils,
  droplet: Droplet,
  trees: Trees,
  brick: Square,
  building: Building2,
};

export default function ServiceCard({ title, description, icon, image, features }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Home;

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>


      </div>
    </div>
  );
}
