'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import NewResourceForm from './NewResourceForm'

function NewResourceWithKey() {
  const searchParams = useSearchParams()
  const typeKey = searchParams.get('type') ?? 'offer'
  return <NewResourceForm key={typeKey} />
}

export default function NewDashboardResourcePage() {
  return (
    <Suspense fallback={<p className="text-gray-600">Loading…</p>}>
      <NewResourceWithKey />
    </Suspense>
  )
}
