import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { notFound } from 'next/navigation'
import ChurchForm from '@/components/admin/ChurchForm'

export default async function EditChurchPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin()
  const { id } = await params
  const church = await prisma.church.findUnique({
    where: { id },
  })

  if (!church) {
    notFound()
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Church</h1>
        <p className="text-gray-600 mt-1">Update church information</p>
      </div>
      <ChurchForm church={church} />
    </div>
  )
}
