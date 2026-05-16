import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Edit } from 'lucide-react'
import DeleteButton from '@/components/admin/DeleteButton'
import { Badge } from '@/components/ui/badge'

export default async function CrisisNeedsPage() {
  await requireAdmin()
  const crisisNeeds = await prisma.crisisNeed.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Crisis Needs</h1>
          <p className="text-gray-600 mt-1">Manage urgent community needs</p>
        </div>
        <Link href="/admin/crisis-needs/new">
          <Button className="bg-gold hover:bg-gold-light text-navy-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add Crisis Need
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crisisNeeds.map((need) => (
          <Card key={need.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg">{need.title}</h3>
                    <Badge className={
                      need.urgency === 'urgent' 
                        ? 'bg-red-600' 
                        : need.urgency === 'high'
                        ? 'bg-orange-500'
                        : 'bg-yellow-500'
                    }>
                      {need.urgency.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{need.location}</p>
                  <p className="text-sm text-gray-500">{need.contactName}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                      {need.category}
                    </span>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      need.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {need.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-3 border-t">
                  <Link href={`/admin/crisis-needs/${need.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <DeleteButton 
                    id={need.id} 
                    name={need.title} 
                    endpoint="crisis-needs"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {crisisNeeds.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500">No crisis needs yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
