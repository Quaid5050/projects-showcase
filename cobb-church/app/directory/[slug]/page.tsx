import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import HeroSection from '@/components/sections/HeroSection'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ChurchProfilePage({ params }: PageProps) {
  const { slug: segment } = await params
  const looksLikeObjectId = /^[0-9a-f]{24}$/i.test(segment)
  const church = await prisma.church.findFirst({
    where: {
      published: true,
      approvalStatus: 'APPROVED',
      ...(looksLikeObjectId ? { id: segment } : { slug: segment }),
    },
  })

  if (!church) {
    notFound()
  }

  const location = `${church.city}, ${church.state}`

  return (
    <>
      <HeroSection
        title={church.name}
        subtitle="Church Profile"
        backgroundImage={church.image || '/images/community-worship.jpg'}
        overlayOpacity={0.3}
      />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">Leadership</h2>
                <div className="space-y-2">
                  <p className="text-lg text-dark-text font-semibold">Pastor {church.pastorName}</p>
                  <p className="text-medium-gray">{location}</p>
                </div>
              </div>

              {church.description && (
                <div className="mb-8 pb-8 border-b border-border-gray">
                  <h2 className="text-2xl font-bold text-dark-text mb-4">About Us</h2>
                  <p className="text-medium-gray leading-relaxed text-lg">{church.description}</p>
                </div>
              )}

              {church.ministries && church.ministries.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-dark-text mb-4">Our Ministries</h2>
                  <div className="flex flex-wrap gap-3">
                    {church.ministries.map((ministry, idx) => (
                      <span
                        key={idx}
                        className="bg-light-gray text-dark-blue px-4 py-2 rounded-lg font-medium text-sm"
                      >
                        {ministry}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Location</p>
                  <p className="text-dark-text">
                    {church.address}
                    <br />
                    {location} {church.zip}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Phone</p>
                  <p className="text-dark-text">{church.phone}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Email</p>
                  <p className="text-dark-text text-sm break-all">{church.email}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Website</p>
                  {church.website ? (
                    <a href={church.website} className="text-dark-text text-sm break-all hover:text-gold underline" target="_blank" rel="noopener noreferrer">
                      {church.website}
                    </a>
                  ) : (
                    <p className="text-dark-text text-sm">—</p>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Button asChild className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold">
                  <Link href="/contact">Connect Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-navy-dark text-navy-dark font-bold">
                  <Link href="/directory">Back to Directory</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
