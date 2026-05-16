import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { notFound } from 'next/navigation'
import ResourceForm from '@/components/admin/ResourceForm'

export default async function EditResourcePage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin()
  const { id } = await params
  const resource = await prisma.resource.findUnique({
    where: { id },
  })

  if (!resource) {
    notFound()
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Resource</h1>
        <p className="text-gray-600 mt-1">Update resource information</p>
      </div>
      <ResourceForm resource={resource} />
    </div>
  )
}
