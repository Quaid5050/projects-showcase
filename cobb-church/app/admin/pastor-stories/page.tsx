import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Star } from 'lucide-react'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function PastorStoriesPage() {
  await requireAdmin()
  const stories = await prisma.pastorStory.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pastor Stories</h1>
          <p className="text-gray-600 mt-1">Manage pastor testimonies and stories</p>
        </div>
        <Link href="/admin/pastor-stories/new">
          <Button className="bg-gold hover:bg-gold-light text-navy-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add Story
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg line-clamp-2">{story.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{story.pastorName}</p>
                  <p className="text-sm text-gray-500">{story.churchName}</p>
                </div>
                {story.featured && (
                  <Star className="h-5 w-5 text-gold fill-gold" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 line-clamp-3 mb-4">{story.story}</p>
              
              <div className="flex gap-2 mb-4">
                <Badge variant={story.published ? 'default' : 'secondary'}>
                  {story.published ? 'Published' : 'Draft'}
                </Badge>
                {story.videoUrl && (
                  <Badge variant="outline">Video</Badge>
                )}
              </div>

              <div className="flex gap-2">
                <Link href={`/admin/pastor-stories/${story.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </Link>
                <DeleteButton 
                  id={story.id} 
                  name={story.title}
                  endpoint="pastor-stories"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {stories.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 mb-4">No pastor stories yet</p>
            <Link href="/admin/pastor-stories/new">
              <Button className="bg-gold hover:bg-gold-light text-navy-dark">
                <Plus className="h-4 w-4 mr-2" />
                Add First Story
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
