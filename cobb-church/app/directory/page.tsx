import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, MapPin, Filter, Map, CheckCircle2 } from 'lucide-react'
import { prisma } from '@/lib/prisma'

export const revalidate = 60

export default async function DirectoryPage() {
  const churches = await prisma.church.findMany({
    where: { published: true, approvalStatus: 'APPROVED' },
    orderBy: { name: 'asc' },
  })

  const churchesData = churches.map((church, idx) => ({
    id: church.id,
    name: church.name,
    pastor: church.pastorName,
    location: `${church.city}, ${church.state}`,
    logo: ['✝️', 'V', 'CMIG', '🌱', '❤️', '✝️', '🙏', '⛰️', '✓'][idx % 9],
    bgColor: ['bg-navy-dark', 'bg-navy-dark', 'bg-navy-dark', 'bg-green-700', 'bg-red-700', 'bg-navy-dark', 'bg-amber-600', 'bg-slate-700', 'bg-gold'][idx % 9],
    ministries: church.ministries.slice(0, 3),
    slug: church.slug,
  }))

  const ministryCategories = [
    { icon: '🎵', label: 'Worship & Music', count: 18 },
    { icon: '👨‍👩‍👧', label: 'Youth & Young Adults', count: 13 },
    { icon: '🤝', label: 'Outreach & Missions', count: 20 },
    { icon: '👨‍👩‍👧‍👦', label: 'Families', count: 21 },
    { icon: '👨', label: 'Men & Women', count: 10 },
    { icon: '📖', label: 'Prayer & Spiritual Growth', count: 16 },
    { icon: '💬', label: 'Counseling & Support', count: 8 },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=1920&h=400&fit=crop&q=80"
          alt="Historic church steeple against the sky, representing Cobb County congregations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-12 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 px-4">
            Church Directory
          </h1>
          <p className="text-xl sm:text-2xl text-gold font-semibold mb-4 md:mb-6 px-4">
            We&apos;re Better Together.
          </p>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Connect with churches across Cobb County that are working, serving, and building stronger communities together.
          </p>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 md:gap-4 px-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-gray-400" />
              <input
                type="text"
                suppressHydrationWarning
                placeholder="Search churches by name, location, or ministry..."
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 rounded-lg text-gray-900 text-sm md:text-base lg:text-lg"
              />
            </div>
            <Button className="bg-navy-dark hover:bg-navy-medium text-white px-4 md:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg whitespace-nowrap">
              <MapPin className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              VIEW MAP
            </Button>
            <Button className="bg-gold hover:bg-gold-light text-navy-dark px-4 md:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg whitespace-nowrap">
              <Filter className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              MORE FILTERS
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-b border-gray-200 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 md:gap-4">
              <select suppressHydrationWarning className="px-3 md:px-4 py-2 border border-gray-300 rounded-md bg-white text-sm md:text-base">
                <option>📍 All Locations</option>
                <option>Powder Springs</option>
                <option>Austell</option>
                <option>Marietta</option>
                <option>Kennesaw</option>
              </select>

              <select suppressHydrationWarning className="px-3 md:px-4 py-2 border border-gray-300 rounded-md bg-white text-sm md:text-base">
                <option>⛪ All Church Types</option>
                <option>Baptist</option>
                <option>Non-denominational</option>
                <option>Methodist</option>
              </select>

              <select suppressHydrationWarning className="px-3 md:px-4 py-2 border border-gray-300 rounded-md bg-white text-sm md:text-base">
                <option>🙏 All Ministries</option>
                <option>Youth Ministry</option>
                <option>Worship</option>
                <option>Outreach</option>
              </select>

              <select suppressHydrationWarning className="px-3 md:px-4 py-2 border border-gray-300 rounded-md bg-white text-sm md:text-base">
                <option>Sort by: A-Z</option>
                <option>Sort by: Location</option>
                <option>Sort by: Size</option>
              </select>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 mt-3 md:mt-4">
            Showing {churchesData.length} church{churchesData.length === 1 ? '' : 'es'}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {churchesData.length === 0 ? (
            <p className="text-center text-gray-600">No published churches yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {churchesData.map((church) => (
                <Card key={church.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`relative h-48 ${church.bgColor} flex items-center justify-center`}>
                    <div className="text-6xl">{church.logo}</div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-navy-dark mb-2">{church.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Pastor {church.pastor}</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-4 flex items-center gap-1">
                      <MapPin className="h-3 md:h-4 w-3 md:w-4" />
                      {church.location}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {church.ministries.map((ministry, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {ministry}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/directory/${church.slug}`} className="block">
                      <Button className="w-full bg-navy-dark hover:bg-navy-medium text-white font-semibold text-sm md:text-base">
                        VIEW PROFILE
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg h-64 md:h-80 lg:h-96 flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map View</p>
                  <Button className="mt-4 bg-navy-dark hover:bg-navy-medium text-white">
                    VIEW FULL MAP
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-navy-dark mb-4 md:mb-6">Browse by Ministry</h3>
              <div className="space-y-3">
                {ministryCategories.map((category, idx) => (
                  <button
                    key={idx}
                    type="button"
                    suppressHydrationWarning
                    className="w-full flex items-center justify-between p-3 md:p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-left"
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <span className="text-xl md:text-2xl">{category.icon}</span>
                      <span className="font-medium text-navy-dark text-sm md:text-base">{category.label}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs md:text-sm">
                      {category.count}
                    </Badge>
                  </button>
                ))}
                <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold mt-4 text-sm md:text-base">
                  View All Ministries
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-6 text-center">
              Why Join the Network?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="text-center">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-gold mx-auto mb-4" />
                <p className="text-base sm:text-lg text-gray-700">Build meaningful relationships with other pastors</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-gold mx-auto mb-4" />
                <p className="text-base sm:text-lg text-gray-700">Share resources and support</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-gold mx-auto mb-4" />
                <p className="text-base sm:text-lg text-gray-700">Strengthen the Church in Cobb County</p>
              </div>
            </div>
            <div className="text-center">
              <Button asChild className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg">
                <Link href="/join">JOIN THE NETWORK</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82e33f4?w=1920&h=400&fit=crop&q=80"
          alt="Leaders collaborating at a table"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Stronger Churches.
            <br />
            <span className="text-gold">Stronger Community.</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 px-4">
            Unity isn&apos;t just a vision—it&apos;s our mission. Let&apos;s build a legacy of faith, together.
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
