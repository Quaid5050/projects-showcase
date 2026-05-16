import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { notFound } from 'next/navigation'
import PastorStoryForm from '@/components/admin/PastorStoryForm'

export default async function EditPastorStoryPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin()
  const { id } = await params
  const pastorStory = await prisma.pastorStory.findUnique({
    where: { id },
  })

  if (!pastorStory) {
    notFound()
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Pastor Story</h1>
        <p className="text-gray-600 mt-1">Update pastor story information</p>
      </div>
      <PastorStoryForm pastorStory={pastorStory} />
    </div>
  )
}
