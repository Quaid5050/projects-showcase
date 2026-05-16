import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'
import DeleteChurchButton from '@/components/admin/DeleteChurchButton'

export default async function ChurchesPage() {
  await requireAdmin()
  const churches = await prisma.church.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Churches</h1>
          <p className="text-gray-600 mt-1">Manage church directory</p>
        </div>
        <Link href="/admin/churches/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Church
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {churches.map((church) => (
          <Card key={church.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg">{church.name}</h3>
                  <p className="text-sm text-gray-600">Pastor {church.pastorName}</p>
                  <p className="text-sm text-gray-500">{church.city}, {church.state}</p>
                </div>
                
                <div className="flex items-center gap-2 pt-3 border-t">
                  <Link href={`/admin/churches/${church.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <DeleteChurchButton id={church.id} name={church.name} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {churches.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500">No churches yet. Add your first church to get started.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
