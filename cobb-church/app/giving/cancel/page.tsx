import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function GivingCancelPage() {
  return (
    <div className="min-h-[60vh] max-w-lg mx-auto px-4 py-16">
      <Card>
        <CardContent className="p-8 space-y-4 text-center">
          <h1 className="text-2xl font-bold text-navy-dark font-display">Checkout cancelled</h1>
          <p className="text-gray-700">No charge was made. You can return to the giving page whenever you are ready.</p>
          <Button asChild className="bg-gold text-navy-dark">
            <Link href="/giving">Try again</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
