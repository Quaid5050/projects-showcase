import Image from 'next/image';
import { crisisNeeds } from '@/data/crisisNeeds';
import HeroSection from '@/components/sections/HeroSection';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CrisisDetailPage({ params }: PageProps) {
  const { id } = await params;
  const need = crisisNeeds.find((n) => n.id === id);

  if (!need) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dark-text mb-4">
            Need Not Found
          </h1>
          <p className="text-medium-gray">
            The need you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  const urgencyColors = {
    urgent: 'bg-urgent text-white',
    moderate: 'bg-yellow-500 text-dark-blue',
    low: 'bg-blue-500 text-white'
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={need.title}
        subtitle="Crisis Response"
        backgroundImage={need.image || '/images/crisis-response.jpg'}
        overlayOpacity={0.5}
      />

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Need Details */}
            <div className="md:col-span-2">
              {/* Urgency Status */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <span className={`inline-block px-4 py-2 rounded font-bold text-sm ${urgencyColors[need.urgencyLevel]}`}>
                  {need.urgencyLevel.toUpperCase()}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  About This Need
                </h2>
                <p className="text-medium-gray leading-relaxed text-lg">
                  {need.description}
                </p>
              </div>

              {/* Specific Needs */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  What&apos;s Needed
                </h2>
                <div className="space-y-3">
                  {need.needs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-light-gray p-4 rounded-lg">
                      <span className="text-gold text-xl">✓</span>
                      <span className="text-dark-text font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Host */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  Additional Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Location
                    </p>
                    <p className="text-dark-text text-lg">{need.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Category
                    </p>
                    <p className="text-dark-text text-lg">{need.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Hosted By
                    </p>
                    <p className="text-dark-text text-lg">{need.hostedBy}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Action */}
            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">
                How You Can Help
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-2">
                    Urgency Level
                  </p>
                  <span className={`inline-block px-3 py-1 rounded font-bold text-sm ${urgencyColors[need.urgencyLevel]}`}>
                    {need.urgencyLevel.charAt(0).toUpperCase() + need.urgencyLevel.slice(1)}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-2">
                    Location
                  </p>
                  <p className="text-dark-text">{need.location}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-2">
                    Contact Church
                  </p>
                  <p className="text-dark-text">{need.hostedBy}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-urgent hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Respond to This Need
                </button>
                <button className="w-full bg-dark-blue hover:bg-dark-blue/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Contact the Church
                </button>
                <button className="w-full border-2 border-gold text-gold font-bold py-3 px-4 rounded-lg hover:bg-gold/10 transition-colors">
                  Share This Need
                </button>
              </div>

              <p className="text-center text-xs text-medium-gray mt-6">
                Together, we respond with compassion and care. One Church. One Response. One Community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
