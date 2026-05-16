import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users, Heart, Target } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'

export const revalidate = 60

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    where: { published: true },
    orderBy: { date: 'asc' },
  })

  const featuredEvent = events[0]
  const upcomingEvents = events.slice(1, 5)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=400&fit=crop&q=80"
          alt="Volunteers serving together at a community event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 px-4">
            Events &
            <br />
            <span className="text-gold">Community Impact</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Where churches come together to serve, connect, and make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold">
              <Calendar className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              VIEW UPCOMING EVENTS
            </Button>
            <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold">
              <Users className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              SUBMIT AN EVENT
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-12 md:py-16 bg-navy-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="bg-gold text-navy-dark font-bold px-4 py-2 mb-6">
              FEATURED EVENT
            </Badge>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={featuredEvent.image || 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop'}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gold">
                  {featuredEvent.title}
                </h2>
                <div className="flex flex-wrap gap-3 mb-6 text-gray-300 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(featuredEvent.date), 'EEEE, MMMM d')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>All Ages, Community Wide</span>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 mb-6">
                  {featuredEvent.description}
                </p>
                <div className="bg-gold/10 border border-gold rounded-lg p-4 sm:p-6 mb-6">
                  <p className="text-gold font-bold text-base sm:text-lg mb-2">UNITY IN ACTION</p>
                  <p className="text-gray-300 text-sm sm:text-base">One Community. One Mission.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/events/${featuredEvent.slug}`} className="flex-1">
                    <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-4 text-base">
                      REGISTER / JOIN EVENT
                    </Button>
                  </Link>
                  <Link href={`/events/${featuredEvent.slug}`}>
                    <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-6 py-4 text-base">
                      VIEW DETAILS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-4 md:py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm">
              <option>Date: Upcoming</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm">
              <option>All Locations</option>
              <option>Powder Springs</option>
              <option>Austell</option>
              <option>Kennesaw</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm">
              <option>All Churches</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm">
              <option>All Types</option>
              <option>Outreach</option>
              <option>Fellowship</option>
              <option>Training</option>
            </select>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-8 md:mb-12">UPCOMING EVENTS</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Events List */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-40">
                  <Image
                    src={event.image || 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop'}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-navy-dark text-white px-2 py-1 rounded-md text-center">
                    <div className="text-xl font-bold">{format(new Date(event.date), 'd')}</div>
                    <div className="text-xs">{format(new Date(event.date), 'MMM')}</div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-base font-bold text-navy-dark mb-2 line-clamp-2 min-h-[48px]">{event.title}</h3>
                  
                  <div className="space-y-1 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/events/${event.slug}`} className="flex-1">
                      <Button className="w-full bg-navy-dark hover:bg-navy-medium text-white font-semibold text-xs py-2">
                        REGISTER
                      </Button>
                    </Link>
                    <Link href={`/events/${event.slug}`}>
                      <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-100 text-xs py-2 px-3">
                        DETAILS
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>

            {/* Calendar Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 lg:sticky lg:top-24">
                <h3 className="text-lg md:text-xl font-bold text-navy-dark mb-4 md:mb-6">EVENT CALENDAR</h3>
                
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-4">
                  <button className="text-gray-600 hover:text-navy-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h4 className="font-bold text-navy-dark">May 2026</h4>
                  <button className="text-gray-600 hover:text-navy-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-xs font-semibold text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before month starts */}
                  {[...Array(3)].map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}
                  
                  {/* Days of the month */}
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1
                    const hasEvent = [7, 14, 19, 24].includes(day)
                    const isToday = day === 15
                    
                    return (
                      <button
                        key={day}
                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                          isToday
                            ? 'bg-navy-dark text-white font-bold'
                            : hasEvent
                            ? 'bg-gold text-navy-dark font-semibold hover:bg-gold-light'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                {/* Legend */}
                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-navy-dark" />
                    <span className="text-gray-600">Today</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gold" />
                    <span className="text-gray-600">Event Day</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-navy-dark hover:bg-navy-medium text-white font-semibold py-3 rounded-lg transition-colors">
                  VIEW FULL CALENDAR
                </button>
              </div>

              {/* Event Types */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 mt-6 lg:sticky lg:top-[600px]">
                <h3 className="text-base md:text-lg font-bold text-navy-dark mb-4">EVENT TYPES</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Outreach', count: 18 },
                    { name: 'Fellowship', count: 12 },
                    { name: 'Worship', count: 8 },
                    { name: 'Training & Workshop', count: 12 },
                    { name: 'Youth Recreation', count: 15 },
                    { name: 'Community Service', count: 16 },
                    { name: 'Sports & Recreation', count: 9 },
                    { name: 'Conferences', count: 6 },
                  ].map((type) => (
                    <button
                      key={type.name}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-sm text-gray-700">{type.name}</span>
                      <span className="text-sm font-semibold text-navy-dark">{type.count}</span>
                    </button>
                  ))}
                  <button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-3 rounded-lg transition-colors mt-4">
                    VIEW ALL TYPES
                  </button>
                </div>
              </div>

              {/* Want to Host */}
              <div className="bg-navy-dark text-white rounded-lg p-4 md:p-6 mt-6 lg:sticky lg:top-[1050px]">
                <h3 className="text-base md:text-lg font-bold mb-3">WANT TO HOST AN EVENT?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  If your church is planning something that can bring churches together, we want to help make it happen.
                </p>
                <button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-3 rounded-lg transition-colors">
                  PARTNER WITH OTHER CHURCHES
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button className="w-full sm:w-auto bg-navy-dark hover:bg-navy-medium text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
              VIEW ALL EVENTS
            </Button>
          </div>
        </div>
      </section>

      {/* Connect, Serve, Impact */}
      <section className="py-12 md:py-16 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gold flex items-center justify-center">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-navy-dark" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">CONNECT</h3>
              <p className="text-gray-300 text-sm sm:text-base">Form lasting churches and deepen together.</p>
            </div>
            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gold flex items-center justify-center">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-navy-dark" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">SERVE</h3>
              <p className="text-gray-300 text-sm sm:text-base">Make a difference and resources.</p>
            </div>
            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gold flex items-center justify-center">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-navy-dark" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">IMPACT</h3>
              <p className="text-gray-300 text-sm sm:text-base">Events create unity in our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 sm:mb-6">
            Be Part of
            <br />
            What&apos;s <span className="text-gold">Happening</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Join, serve, or support—there&apos;s a place for you in this movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-5 sm:py-6 text-base sm:text-lg">
              <Link href="/join">JOIN THE NETWORK</Link>
            </Button>
            <Button asChild className="bg-navy-dark hover:bg-navy-medium text-white font-semibold px-8 py-5 sm:py-6 text-base sm:text-lg">
              <Link href="/resources">EXPLORE RESOURCES</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
