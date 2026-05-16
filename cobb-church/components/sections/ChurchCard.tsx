import Image from 'next/image';
import Link from 'next/link';

interface ChurchCardProps {
  name: string;
  pastor: string;
  location: string;
  image?: string;
  ministries?: string[];
  description?: string;
  link?: string;
  logo?: React.ReactNode;
}

export default function ChurchCard({
  name,
  pastor,
  location,
  image,
  ministries = [],
  description,
  link,
  logo
}: ChurchCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-border-gray hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Image */}
      {image && (
        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Logo or Icon */}
        {logo && (
          <div className="w-12 h-12 mb-4">
            {logo}
          </div>
        )}

        {/* Church Name */}
        <h3 className="text-lg font-bold text-dark-text mb-1">
          {name}
        </h3>

        {/* Pastor */}
        <p className="text-sm text-medium-gray mb-2">
          Pastor {pastor}
        </p>

        {/* Location */}
        <p className="text-sm text-medium-gray flex items-center gap-1 mb-4">
          📍 {location}
        </p>

        {/* Description */}
        {description && (
          <p className="text-sm text-medium-gray mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {/* Ministries */}
        {ministries.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {ministries.map((ministry, idx) => (
              <span
                key={idx}
                className="text-xs bg-light-gray text-dark-blue px-2 py-1 rounded font-medium"
              >
                {ministry}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {link && (
          <Link
            href={link}
            className="text-gold font-semibold hover:text-gold/80 transition-colors text-sm inline-block"
          >
            View Profile →
          </Link>
        )}
      </div>
    </div>
  );
}
