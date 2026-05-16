interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export default function ServiceCard({ icon, title, description, features, ctaText, ctaHref }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-2xl font-semibold text-dark-text mb-3">{title}</h3>

      <p className="text-medium-gray mb-4 leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">✓</span>
              <span className="text-medium-gray text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {ctaText && ctaHref && (
        <a
          href={ctaHref}
          className="inline-block bg-dark-blue hover:bg-opacity-90 text-white font-semibold py-2 px-6 rounded transition-colors"
        >
          {ctaText}
        </a>
      )}
    </div>
  );
}
