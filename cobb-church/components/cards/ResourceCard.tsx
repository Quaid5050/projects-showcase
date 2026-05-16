import type { StaticResource } from '@/data/resources'

interface ResourceCardProps {
  resource: StaticResource
  onViewDetails?: (id: string) => void;
  onRespond?: (id: string) => void;
}

export default function ResourceCard({ resource, onViewDetails, onRespond }: ResourceCardProps) {
  const isUrgent = resource.urgent === true

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
      {isUrgent && (
        <div className="h-1 bg-red-600"></div>
      )}

      <div className="relative h-40 bg-gradient-to-br from-amber-50 to-blue-50 flex items-center justify-center p-4">
        <div className="text-4xl">📦</div>
        {isUrgent && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
            URGENT
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg text-dark-text mb-2">{resource.title}</h3>
        <p className="text-sm text-medium-gray mb-3">{resource.description}</p>

        <div className="flex items-center gap-2 mb-2 text-sm text-medium-gray">
          <span>🏢</span>
          <span>{resource.church}</span>
        </div>

        <div className="flex items-center gap-2 mb-3 text-sm text-medium-gray">
          <span>📍</span>
          <span>{resource.location}</span>
        </div>

        {resource.category && (
          <div className="mb-4">
            <span className="inline-block bg-light-gray text-dark-text text-xs px-3 py-1 rounded">
              {resource.category}
            </span>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => onRespond?.(resource.id)}
            className="flex-1 bg-gold hover:bg-opacity-90 text-dark-blue font-semibold py-2 px-3 rounded text-sm transition-colors"
          >
            Respond
          </button>
          <button
            onClick={() => onViewDetails?.(resource.id)}
            className="flex-1 bg-light-gray hover:bg-border-gray text-dark-blue font-semibold py-2 px-3 rounded text-sm transition-colors border border-border-gray"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
