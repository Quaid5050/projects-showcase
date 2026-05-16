'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function PastorStoriesPage() {
  const stories = [
    {
      name: 'Pastor Marcus D.',
      title: 'Power of Partnership',
      quote: 'This network transformed how we see church. We went from isolation to community. Now we\'re stronger because we\'re together.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      church: 'First Baptist Church',
    },
    {
      name: 'Pastor Marie S.',
      title: 'Stronger Together',
      quote: 'When we faced challenges, the network was there. Real relationships. Real support. That\'s what church should be.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      church: 'New Hope Community Church',
    },
    {
      name: 'Pastor James L.',
      title: 'Impacting Our Community',
      quote: 'The resources, the relationships, the unity—it all points to impact. We\'re changing lives together.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      church: 'Vision for Souls Church',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/85 to-dark-blue/70 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
          alt="Pastor stories"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 w-full">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
              HEAR FROM PASTORS
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
              Real stories from pastors experiencing the power of unity and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {stories.map((story, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/40 group-hover:bg-dark-blue/20 transition-all flex items-center justify-center">
                  <div className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">
                    ▶️
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-blue mb-1">{story.name}</h3>
              <p className="text-gold font-semibold text-sm mb-4">{story.title}</p>
              <blockquote className="text-medium-gray italic leading-relaxed mb-4">
                {`"${story.quote}"`}
              </blockquote>
              <p className="text-dark-blue font-semibold text-sm">{story.church}</p>
              <Button className="mt-6 bg-gold hover:bg-gold/90 text-dark-blue font-semibold px-6 py-2">
                WATCH VIDEO
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center py-10 sm:py-12 border-t border-border-gray">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-4 text-dark-blue">
            More Stories Coming
          </h2>
          <p className="text-medium-gray mb-6">We&apos;re capturing stories of impact, unity, and transformation.</p>
          <Button className="bg-dark-blue hover:bg-dark-blue/90 text-white font-semibold px-8 py-3">
            VIEW ALL STORIES
          </Button>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-dark-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold mb-4 sm:mb-6">
            Ready to Be Part of What God Is Building?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
            Join a growing network of pastors and churches committed to unity, collaboration, and real impact.
          </p>
          <Button className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-dark-blue font-semibold px-8 py-4 text-lg">
            JOIN THE NETWORK
          </Button>
        </div>
      </section>
    </div>
  );
}
