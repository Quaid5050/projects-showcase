import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isChurchUserRole } from '@/lib/roles'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Filter, Package, Users, Utensils, GraduationCap, Heart, AlertCircle, School, CheckCircle2 } from 'lucide-react'
import PublicResourceGrid, { type PublicResourceItem } from '@/components/resources/PublicResourceGrid'

const publicResourceWhere = {
  published: true,
  status: 'ACTIVE' as const,
  church: { published: true, approvalStatus: 'APPROVED' as const },
}

function mapResource(r: {
  id: string
  title: string
  description: string
  category: string
  type: string
  status: string
  churchId: string
  createdAt: Date
  church: { name: string; slug: string; city: string; state: string }
}): PublicResourceItem {
  return {
    id: r.id,
    title: r.title,
    description: r.description,
    category: r.category,
    type: r.type,
    status: r.status,
    churchId: r.churchId,
    churchName: r.church.name,
    churchSlug: r.church.slug,
    city: r.church.city,
    state: r.church.state,
    createdAt: r.createdAt.toISOString(),
  }
}

const offerLogin = `/login?callbackUrl=${encodeURIComponent('/dashboard/resources/new?type=offer')}`
const requestLogin = `/login?callbackUrl=${encodeURIComponent('/dashboard/resources/new?type=request')}`

export default async function ResourcesPage() {
  const session = await getServerSession(authOptions)
  const viewerChurchId =
    session?.user?.churchId && isChurchUserRole(session.user.role) ? session.user.churchId : null

  const [requestRows, offerRows] = await Promise.all([
    prisma.resource.findMany({
      where: { ...publicResourceWhere, type: 'REQUEST' },
      include: { church: { select: { name: true, slug: true, city: true, state: true } } },
      orderBy: { createdAt: 'desc' },
      take: 24,
    }),
    prisma.resource.findMany({
      where: { ...publicResourceWhere, type: 'OFFER' },
      include: { church: { select: { name: true, slug: true, city: true, state: true } } },
      orderBy: { createdAt: 'desc' },
      take: 24,
    }),
  ])

  const requests = requestRows.map(mapResource)
  const offers = offerRows.map(mapResource)

  const categories = [
    { icon: Package, label: 'All', active: true },
    { icon: Users, label: 'Volunteers' },
    { icon: Package, label: 'Equipment / Space' },
    { icon: Utensils, label: 'Food / Essentials' },
    { icon: GraduationCap, label: 'Mentorship / Youth' },
    { icon: Heart, label: 'Prayer / Spiritual Support' },
    { icon: AlertCircle, label: 'Crisis Response' },
    { icon: School, label: 'School Support' },
  ]

  const howItWorks = [
    { number: '1', icon: Search, title: 'Post or Search', description: 'Find resources or share what you have.' },
    { number: '2', icon: Users, title: 'Connect', description: 'Reach out directly to the church.' },
    { number: '3', icon: CheckCircle2, title: 'Take Action', description: 'Share, support, and collaborate together.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=400&fit=crop"
          alt="Resources"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-12 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 px-4">
            Find What You <span className="text-gold">Need.</span>
            <br />
            Share What You <span className="text-gold">Have.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            A centralized place where churches connect through resources, support, and opportunities.
          </p>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 md:gap-4 px-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources, needs, or churches..."
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 rounded-lg text-gray-900 text-sm md:text-base lg:text-lg"
                suppressHydrationWarning
              />
            </div>
            <Button asChild className="bg-gold hover:bg-gold-light text-navy-dark px-4 md:px-8 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap">
              <Link href={viewerChurchId ? '/dashboard/resources/new?type=offer' : offerLogin}>OFFER A RESOURCE</Link>
            </Button>
            <Button asChild className="bg-navy-dark hover:bg-navy-medium text-white px-4 md:px-8 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap">
              <Link href={viewerChurchId ? '/dashboard/resources/new?type=request' : requestLogin}>REQUEST A RESOURCE</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark text-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 md:gap-6 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((category, idx) => {
              const Icon = category.icon
              return (
                <button
                  key={idx}
                  type="button"
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg whitespace-nowrap font-semibold transition-colors text-sm md:text-base ${
                    category.active ? 'bg-gold text-navy-dark' : 'bg-navy-medium hover:bg-navy-light'
                  }`}
                  suppressHydrationWarning
                >
                  <Icon className="h-4 md:h-5 w-4 md:w-5" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 flex-1">
              <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm" suppressHydrationWarning>
                <option>📍 Location</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm" suppressHydrationWarning>
                <option>⛪ Church</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm" suppressHydrationWarning>
                <option>📦 Type</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm" suppressHydrationWarning>
                <option>⚠️ Urgency</option>
              </select>
            </div>
            <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-100 text-sm whitespace-nowrap">
              <Filter className="mr-2 h-4 w-4" />
              Reset Filters
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-2">RESOURCE REQUESTS</h2>
              <p className="text-gray-600 text-sm">Published requests from churches in the network.</p>
            </div>
          </div>
          <PublicResourceGrid items={requests} viewerChurchId={viewerChurchId} variant="request" />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark">AVAILABLE OFFERS</h2>
          </div>
          <PublicResourceGrid items={offers} viewerChurchId={viewerChurchId} variant="offer" />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-navy-dark text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 rounded-full bg-gold flex items-center justify-center">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-navy-dark" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Support?</h3>
                <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">Let the network know how we can help.</p>
                <Button asChild className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  <Link href={viewerChurchId ? '/dashboard/resources/new?type=request' : requestLogin}>SUBMIT A NEED</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gold text-navy-dark overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 rounded-full bg-navy-dark flex items-center justify-center">
                  <Package className="h-6 w-6 md:h-8 md:w-8 text-gold" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Have Something to Offer?</h3>
                <p className="text-navy-medium mb-4 md:mb-6 text-base md:text-lg">
                  Share your resources and support other churches.
                </p>
                <Button asChild className="w-full sm:w-auto bg-navy-dark hover:bg-navy-medium text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  <Link href={viewerChurchId ? '/dashboard/resources/new?type=offer' : offerLogin}>OFFER A RESOURCE</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-8 md:mb-16">HOW IT WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {howItWorks.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="text-center">
                  <div className="relative mb-6 inline-block">
                    <div className="w-20 h-20 mx-auto rounded-full bg-navy-dark flex items-center justify-center">
                      <Icon className="h-10 w-10 text-gold" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                      <span className="text-navy-dark font-bold text-lg">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-600 mb-6">CONNECTED CHURCHES</h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Button asChild variant="outline" className="border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white text-sm">
              <Link href="/directory">View Full Church Directory →</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=400&fit=crop"
          alt="Community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            When Churches Share Resources...
            <br />
            <span className="text-gold italic text-3xl sm:text-4xl md:text-5xl">Communities Feel the Impact.</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            This platform works when churches actively participate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-5 sm:py-6 text-base sm:text-lg">
              <Link href="/join">JOIN THE NETWORK</Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-5 sm:py-6 text-base sm:text-lg">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
