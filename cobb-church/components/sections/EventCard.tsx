import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  image,
  tags = [],
  link
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-border-gray hover:shadow-lg transition-shadow">
      {/* Image */}
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Date Badge */}
        <div className="inline-block bg-gold text-dark-blue px-3 py-1 rounded text-sm font-semibold mb-3">
          {date}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-dark-text mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Meta Info */}
        <div className="space-y-2 mb-4 text-sm text-medium-gray">
          <p className="flex items-center gap-2">
            <span>🕐</span> {time}
          </p>
          <p className="flex items-center gap-2">
            <span>📍</span> {location}
          </p>
        </div>

        {/* Description */}
        <p className="text-medium-gray text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-light-gray text-medium-gray px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {link && (
          <Link
            href={link}
            className="text-gold font-semibold hover:text-gold/80 transition-colors text-sm"
          >
            View Details →
          </Link>
        )}
      </div>
    </div>
  );
}
