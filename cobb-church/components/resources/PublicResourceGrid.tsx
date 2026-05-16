import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export type PublicResourceItem = {
  id: string
  title: string
  description: string
  category: string
  type: string
  status: string
  churchId: string
  churchName: string
  churchSlug: string
  city: string
  state: string
  createdAt: string
}

export default function PublicResourceGrid({
  items,
  viewerChurchId,
  variant,
}: {
  items: PublicResourceItem[]
  viewerChurchId: string | null
  variant: 'request' | 'offer'
}) {
  if (items.length === 0) {
    return (
      <p className="text-gray-600 text-center py-12">
        No {variant === 'request' ? 'requests' : 'offers'} are listed yet. Check back soon.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {items.map((r) => {
        const isOwn = viewerChurchId !== null && r.churchId === viewerChurchId
        const loginHref = `/login?callbackUrl=${encodeURIComponent(`/resources/${r.id}`)}`
        const joinHref = `/join`

        return (
          <Card key={r.id} className="overflow-hidden hover:shadow-xl transition-shadow">
            {variant === 'request' && (
              <div className="bg-red-600 px-4 py-2">
                <Badge className="bg-white text-red-600 font-bold">REQUEST</Badge>
              </div>
            )}
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-navy-dark flex items-center justify-center text-sm font-bold text-white">
                  {r.churchName.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">{r.churchName}</p>
                  <p className="text-xs text-gray-400">
                    {r.city}, {r.state}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {r.type === 'OFFER' ? 'Offer' : 'Request'}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {r.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {r.status === 'ACTIVE' ? 'Active' : r.status}
                </Badge>
              </div>
              <p className="text-xs text-gray-400 mb-2">Listed {new Date(r.createdAt).toLocaleDateString()}</p>

              <h3 className="text-xl font-bold text-navy-dark mb-2">{r.title}</h3>
              <p className="text-gray-600 mb-4 text-sm line-clamp-4">{r.description}</p>

              <div className="flex flex-col sm:flex-row gap-2">
                {viewerChurchId && !isOwn ? (
                  <Button asChild className="flex-1 bg-navy-dark hover:bg-navy-medium text-white font-semibold text-sm">
                    <Link href={`/resources/${r.id}`}>Respond</Link>
                  </Button>
                ) : viewerChurchId && isOwn ? (
                  <Button disabled variant="secondary" className="flex-1 text-sm">
                    Your listing
                  </Button>
                ) : (
                  <>
                    <Button asChild className="flex-1 bg-navy-dark hover:bg-navy-medium text-white font-semibold text-sm">
                      <Link href={loginHref}>Respond (sign in)</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-navy-dark text-navy-dark text-sm">
                      <Link href={joinHref}>Join network</Link>
                    </Button>
                  </>
                )}
                <Button asChild variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-100 text-sm">
                  <Link href={`/resources/${r.id}`}>Details</Link>
                </Button>
                <Button asChild variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-100 text-sm">
                  <Link href={`/directory/${r.churchSlug}`}>View church</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
