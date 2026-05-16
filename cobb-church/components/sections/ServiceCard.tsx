import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  points?: string[];
  link?: {
    href: string;
    label: string;
  };
}

export default function ServiceCard({
  title,
  description,
  icon,
  points = [],
  link
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-border-gray rounded-lg p-8 hover:shadow-lg transition-shadow">
      {/* Icon */}
      <div className="w-16 h-16 bg-light-gray rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-dark-text mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-medium-gray text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Points List */}
      {points.length > 0 && (
        <ul className="space-y-2 mb-6">
          {points.map((point, idx) => (
            <li key={idx} className="text-sm text-medium-gray flex items-start">
              <span className="text-gold mr-3 font-bold">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      {link && (
        <Link
          href={link.href}
          className="text-gold font-semibold hover:text-gold/80 transition-colors inline-flex items-center gap-2"
        >
          {link.label}
          <span>→</span>
        </Link>
      )}
    </div>
  );
}
