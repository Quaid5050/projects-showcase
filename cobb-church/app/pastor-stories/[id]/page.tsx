import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import HeroSection from '@/components/sections/HeroSection'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function PastorStoryPage({ params }: PageProps) {
  const { id } = await params

  const story = await prisma.pastorStory.findFirst({
    where: {
      published: true,
      OR: [{ slug: id }, { id }],
    },
  })

  if (!story) {
    notFound()
  }

  return (
    <>
      <HeroSection
        title={story.title}
        subtitle={`Pastor ${story.pastorName}`}
        backgroundImage={story.image || '/images/pastoral-leadership.jpg'}
        overlayOpacity={0.5}
      />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8 pb-8 border-b border-border-gray">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Church</p>
                    <p className="text-lg text-dark-text font-semibold">{story.churchName}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">The Story</h2>
                <p className="text-medium-gray leading-relaxed text-lg whitespace-pre-wrap">{story.story}</p>
              </div>
            </div>

            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">About Pastor {story.pastorName}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Church</p>
                  <p className="text-dark-text">{story.churchName}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Button asChild className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold">
                  <Link href="/contact">Connect</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-navy-dark text-navy-dark font-bold">
                  <Link href="/pastor-stories">More stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
