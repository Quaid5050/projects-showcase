import { Church } from '@/data/churches';

interface ChurchCardProps {
  church: Church;
  onViewProfile?: (id: string) => void;
}

export default function ChurchCard({ church, onViewProfile }: ChurchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
      <div className="relative h-48 bg-gradient-to-br from-amber-50 to-blue-50 flex items-center justify-center p-4">
        <div className="w-16 h-16 bg-dark-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {church.name.charAt(0)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg text-dark-text mb-1">{church.name}</h3>
        <p className="text-sm text-medium-gray mb-3">{church.pastor}</p>
        
        <div className="flex items-start gap-2 mb-3">
          <span className="text-medium-gray mt-0.5">📍</span>
          <p className="text-sm text-medium-gray">{church.location}</p>
        </div>
        
        {church.ministries && church.ministries.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-dark-text mb-2">Ministries:</p>
            <div className="flex flex-wrap gap-2">
              {church.ministries.map((ministry) => (
                <span key={ministry} className="inline-block bg-light-gray text-dark-text text-xs px-2 py-1 rounded">
                  {ministry}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <button
          onClick={() => onViewProfile?.(church.id)}
          className="w-full bg-dark-blue hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
