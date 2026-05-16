import type { StaticEvent } from '@/data/events'

interface EventCardProps {
  event: StaticEvent
  onViewDetails?: (id: string) => void;
}

export default function EventCard({ event, onViewDetails }: EventCardProps) {
  const eventDate = new Date(event.date);
  const monthStr = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const dayStr = eventDate.getDate();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
      <div className="relative h-48 bg-gradient-to-br from-amber-50 to-blue-50 flex items-center justify-center p-4">
        <div className="absolute top-3 left-3 bg-dark-blue text-white px-3 py-1 rounded text-sm font-semibold">
          <div className="text-xs">{monthStr}</div>
          <div className="text-lg">{dayStr}</div>
        </div>
        <div className="text-4xl">📅</div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg text-dark-text mb-2">{event.title}</h3>
        <p className="text-sm text-medium-gray mb-3 line-clamp-2">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <span>🕐</span>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <span>📍</span>
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <span>🏢</span>
            <span>{event.hostedBy}</span>
          </div>
        </div>

        {event.type && event.type.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {event.type.slice(0, 3).map((tag) => (
              <span key={tag} className="inline-block bg-light-gray text-dark-text text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={() => onViewDetails?.(event.id)}
          className="w-full bg-gold hover:bg-opacity-90 text-dark-blue font-semibold py-2 px-4 rounded transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
