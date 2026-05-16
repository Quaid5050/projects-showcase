import type { StaticPastorStory } from '@/data/pastorStories'

interface PastorCardProps {
  story: StaticPastorStory
  onReadMore?: (id: string) => void;
}

export default function PastorCard({ story, onReadMore }: PastorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative h-64 bg-gradient-to-br from-amber-50 to-blue-50 flex items-center justify-center">
        {story.image && (
          <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
        )}
        {!story.image && (
          <div className="w-32 h-32 bg-dark-blue rounded-full flex items-center justify-center text-white text-4xl font-bold">
            {story.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-xl text-dark-text mb-1">{story.name}</h3>
        <p className="text-sm text-medium-gray mb-2">{story.church}</p>
        <p className="text-xs text-gold font-semibold mb-4 uppercase">{story.quote}</p>

        <p className="text-sm text-medium-gray mb-4 line-clamp-3">{story.story}</p>

        <button
          onClick={() => onReadMore?.(story.id)}
          className="text-gold hover:text-gold/80 font-semibold text-sm transition-colors"
        >
          Read Full Story →
        </button>
      </div>
    </div>
  );
}
