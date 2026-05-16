import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Edit } from 'lucide-react'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function AdminResourcesPage() {
  await requireAdmin()

  const resources = await prisma.resource.findMany({
    orderBy: { createdAt: 'desc' },
    include: { church: { select: { name: true } } },
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
          <p className="text-gray-600 mt-1">Manage church offers and requests</p>
        </div>
        <Link href="/admin/resources/new">
          <Button className="bg-gold hover:bg-gold-light text-navy-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add Resource
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.church.name}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                      {resource.category}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      {resource.type}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                      {resource.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{resource.description}</p>
                <div className="flex gap-2 pt-2">
                  <Link href={`/admin/resources/${resource.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </Link>
                  <DeleteButton id={resource.id} name={resource.title} endpoint="resources" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {resources.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center text-gray-500">
            No resources yet.{' '}
            <Link href="/admin/resources/new" className="text-gold font-semibold hover:underline">
              Add one
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
