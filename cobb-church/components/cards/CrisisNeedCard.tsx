import { CrisisNeed } from '@/data/crisisNeeds';

interface CrisisNeedCardProps {
  need: CrisisNeed;
  onRespond?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export default function CrisisNeedCard({ need, onRespond, onViewDetails }: CrisisNeedCardProps) {
  const urgencyColor = {
    urgent: 'bg-red-600',
    moderate: 'bg-amber-500',
    low: 'bg-blue-600',
  };

  const urgencyLabel = {
    urgent: 'URGENT',
    moderate: 'MODERATE',
    low: 'LOW',
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
      <div className={`h-1 ${urgencyColor[need.urgencyLevel]}`}></div>

      <div className="relative h-40 bg-gradient-to-br from-amber-50 to-blue-50 flex items-center justify-center p-4">
        {need.image && (
          <img src={need.image} alt={need.title} className="w-full h-full object-cover absolute inset-0" />
        )}
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-black/20">
          <div className="text-4xl">🆘</div>
        </div>
        <div className={`absolute top-3 right-3 ${urgencyColor[need.urgencyLevel]} text-white px-3 py-1 rounded text-xs font-bold z-20`}>
          {urgencyLabel[need.urgencyLevel]}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg text-dark-text mb-2">{need.title}</h3>
        <p className="text-sm text-medium-gray mb-3">{need.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <span>🏢</span>
            <span className="font-medium">{need.hostedBy}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <span>📍</span>
            <span>{need.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <span>📂</span>
            <span>{need.category}</span>
          </div>
        </div>

        {need.needs && need.needs.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-dark-text mb-2">What&apos;s Needed:</p>
            <ul className="text-sm text-medium-gray space-y-1">
              {need.needs.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => onRespond?.(need.id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded text-sm transition-colors"
          >
            Respond to Need
          </button>
          <button
            onClick={() => onViewDetails?.(need.id)}
            className="flex-1 bg-light-gray hover:bg-border-gray text-dark-blue font-semibold py-2 px-3 rounded text-sm transition-colors border border-border-gray"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
