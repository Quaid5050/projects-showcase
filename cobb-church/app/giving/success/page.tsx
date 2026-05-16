import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default async function GivingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const sp = await searchParams
  const hasSession = !!sp.session_id?.trim()

  return (
    <div className="min-h-[60vh] max-w-lg mx-auto px-4 py-16">
      <Card>
        <CardContent className="p-8 space-y-4 text-center">
          <h1 className="text-2xl font-bold text-navy-dark font-display">Thank you</h1>
          <p className="text-gray-700">
            {hasSession
              ? 'Your payment was received. A receipt will be emailed when your payment provider confirms the transaction.'
              : 'If you completed a gift, thank you — confirmation is sent by email after payment is confirmed.'}
          </p>
          <Button asChild className="bg-navy-dark text-white">
            <Link href="/giving">Back to Giving</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
