import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isChurchUserRole } from '@/lib/roles'
import HeroSection from '@/components/sections/HeroSection'
import ResourceRespondForm from '@/components/resources/ResourceRespondForm'

const publicResourceWhere = {
  published: true,
  status: 'ACTIVE' as const,
  church: { published: true, approvalStatus: 'APPROVED' as const },
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  const viewerChurchId =
    session?.user?.churchId && isChurchUserRole(session.user.role) ? session.user.churchId : null

  const resource = await prisma.resource.findFirst({
    where: { id, ...publicResourceWhere },
    include: { church: true },
  })

  if (!resource) {
    notFound()
  }

  const defaultName = session?.user?.name || ''
  const defaultEmail = session?.user?.email || ''

  return (
    <>
      <HeroSection
        title={resource.title}
        subtitle={resource.type === 'OFFER' ? 'Resource offer' : 'Resource request'}
        backgroundImage="/images/resource-sharing.jpg"
        overlayOpacity={0.4}
      />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">About this listing</h2>
                <p className="text-medium-gray leading-relaxed text-lg">{resource.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Type</p>
                    <p className="text-dark-text text-lg">{resource.type === 'OFFER' ? 'Offer' : 'Request'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Category</p>
                    <p className="text-dark-text text-lg">{resource.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Church</p>
                    <p className="text-dark-text text-lg">{resource.church.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Location</p>
                    <p className="text-dark-text text-lg">
                      {resource.church.city}, {resource.church.state}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Status</p>
                    <p className="text-dark-text text-lg">{resource.status === 'ACTIVE' ? 'Active' : resource.status}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">Connect</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Listed by</p>
                  <p className="text-dark-text font-semibold">{resource.church.name}</p>
                </div>
                <ButtonLink slug={resource.church.slug} />
              </div>
              <ResourceRespondForm
                resourceId={resource.id}
                viewerChurchId={viewerChurchId}
                ownerChurchId={resource.churchId}
                defaultName={defaultName}
                defaultEmail={defaultEmail}
              />
              <p className="text-center text-xs text-medium-gray mt-6">
                Sharing resources strengthens every church in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ButtonLink({ slug }: { slug: string }) {
  return (
    <Link
      href={`/directory/${slug}`}
      className="inline-block w-full text-center text-sm font-semibold text-gold hover:underline"
    >
      View church profile →
    </Link>
  )
}
