import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { notFound } from 'next/navigation'
import CrisisNeedForm from '@/components/admin/CrisisNeedForm'

export default async function EditCrisisNeedPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin()
  const { id } = await params
  const crisisNeed = await prisma.crisisNeed.findUnique({
    where: { id },
  })

  if (!crisisNeed) {
    notFound()
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Crisis Need</h1>
        <p className="text-gray-600 mt-1">Update crisis need information</p>
      </div>
      <CrisisNeedForm crisisNeed={crisisNeed} />
    </div>
  )
}
