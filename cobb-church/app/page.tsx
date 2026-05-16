import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { 
  Users, 
  Package, 
  Heart,
  Play,
} from 'lucide-react'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  // Fetch data from database
  const [churchCount, eventCount, resourceCount, pastorStories] = await Promise.all([
    prisma.church.count({ where: { published: true, approvalStatus: 'APPROVED' } }),
    prisma.event.count({ where: { published: true } }),
    prisma.resource.count({
      where: { published: true, status: 'ACTIVE', church: { published: true, approvalStatus: 'APPROVED' } },
    }),
    prisma.pastorStory.findMany({
      where: { published: true, featured: true },
      take: 3,
      orderBy: { createdAt: 'desc' },
    }),
  ])

  const impactStats = [
    { number: `${churchCount}+`, label: 'CHURCHES IN THE NETWORK' },
    { number: `${eventCount}+`, label: 'PUBLIC EVENTS & INITIATIVES' },
    { number: `${resourceCount}+`, label: 'ACTIVE RESOURCE LISTINGS' },
    { number: 'Cobb County', label: 'COMMUNITIES WE SERVE TOGETHER' },
  ]

  const coreValues = [
    {
      icon: Users,
      title: 'CONNECT CHURCHES',
      description: 'Building relationships and unity among pastors across Cobb County.',
    },
    {
      icon: Package,
      title: 'SHARE RESOURCES',
      description: 'Sharing back, talent, and support so no church stands alone.',
    },
    {
      icon: Heart,
      title: 'SERVE TOGETHER',
      description: 'Working together to meet needs and make a real impact in our community.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544427920-b99f422464b4?w=1920&h=600&fit=crop&q=80"
          alt="Diverse group of adults meeting outdoors in community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-0">
          <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 md:mb-4 tracking-wide">
            CONNECTING CHURCHES. STRENGTHENING COMMUNITY.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
            CONNECTING CHURCHES.
            <br />
            <span className="text-gold">STRENGTHENING COMMUNITY.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-3 md:mb-4 max-w-3xl mx-auto px-4">
            What could God do in our community if we truly moved together?
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-8 max-w-2xl mx-auto px-4">
            An initiative of Cobb Pastors Alliance
            <br />
            Powered By The Shepherds Table
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto px-4">
            A place where pastors and churches unite to share resources, serve together, and strengthen our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link href="/join" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 md:px-10 py-4 md:py-6 text-sm md:text-base lg:text-lg">
                <Users className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                JOIN THE NETWORK
              </Button>
            </Link>
            <Link href="/resources" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 sm:px-8 md:px-10 py-4 md:py-6 text-sm md:text-base lg:text-lg">
                <Package className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                EXPLORE RESOURCES
              </Button>
            </Link>
            <Link href="/pastor-stories" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 sm:px-8 md:px-10 py-4 md:py-6 text-sm md:text-base lg:text-lg">
                <Play className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                HEAR FROM PASTORS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* We're Better Together Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              We&apos;re <span className="text-gold italic">Better Together</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {coreValues.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
                    <Icon className="h-10 w-10 text-navy-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900&h=900&fit=crop&q=80"
                alt="Pastors and leaders in discussion at a community gathering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-dark/40 flex items-center justify-center">
                <Link
                  href="/pastor-stories"
                  aria-label="Watch pastor stories from the network"
                  className="w-20 h-20 rounded-full bg-gold flex items-center justify-center hover:bg-gold-light transition-colors"
                >
                  <Play className="h-10 w-10 text-navy-dark fill-navy-dark ml-1" />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 md:mb-4">WHO WE ARE</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 md:mb-6">
                UNITING CHURCHES.
                <br />
                TRANSFORMING COMMUNITIES.
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                The Cobb Church Network is a movement of pastors and churches committed to unity, collaboration, and serving community impact.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                When churches move together, we can reach further, serve better, and change more lives than we ever could alone.
              </p>
              <Link href="/about">
                <Button className="w-full sm:w-auto bg-navy-dark hover:bg-navy-medium text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  LEARN MORE ABOUT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-8 md:mb-12 lg:mb-16">WHAT WE DO</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: 'CHURCH CONNECTION',
                description: 'Building relationships and unity among pastors.',
                link: '/directory',
              },
              {
                icon: Package,
                title: 'RESOURCE SHARING NETWORK',
                description: 'Sharing resources and support so no church stands alone.',
                link: '/resources',
              },
              {
                icon: Heart,
                title: 'COORDINATED OUTREACH',
                description: 'Partnering together on outreach projects that make a bigger impact.',
                link: '/events',
              },
              {
                icon: Heart,
                title: 'CRISIS RESPONSE & TESTIMONIES',
                description: 'Responding together in times of need and sharing testimonies.',
                link: '/crisis-response',
              },
              {
                icon: Users,
                title: 'LEADERSHIP DEVELOPMENT',
                description: 'Investing in the next generation through mentorship.',
                link: '/services',
              },
              {
                icon: Package,
                title: 'CHURCH NETWORK',
                description: 'Every relationship and connection that makes our network stronger.',
                link: '/directory',
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Link key={idx} href={item.link}>
                  <Card className="hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
                        <Icon className="h-8 w-8 text-navy-dark" />
                      </div>
                      <h3 className="text-lg font-bold text-navy-dark mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hear From Pastors Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">HEAR FROM PASTORS</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4">
              Real stories from pastors who are experiencing the power of unity and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {pastorStories.map((pastor) => (
              <Link key={pastor.id} href={`/pastor-stories/${pastor.slug}`}>
                <div className="relative group cursor-pointer">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={
                        pastor.image ||
                        'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=450&fit=crop&q=80'
                      }
                      alt={`${pastor.pastorName} — ${pastor.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors flex items-center justify-center pointer-events-none">
                      <span className="w-16 h-16 rounded-full bg-gold flex items-center justify-center" aria-hidden>
                        <Play className="h-8 w-8 text-navy-dark fill-navy-dark ml-1" />
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-bold text-lg">{pastor.pastorName}</p>
                    <p className="text-gold text-sm">{pastor.title}</p>
                    <p className="text-gray-400 text-sm">{pastor.churchName}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12 px-4">
            <Link href="/pastor-stories">
              <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                WATCH MORE STORIES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-3 md:mb-4">
              TOGETHER, WE MAKE AN IMPACT
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark mb-2">
                  {stat.number}
                </div>
                <p className="text-navy-dark font-semibold text-xs sm:text-sm uppercase px-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Be Part CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 rounded-full bg-gold flex items-center justify-center">
            <Users className="h-8 w-8 md:h-10 md:w-10 text-navy-dark" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 md:mb-6 px-4">
            READY TO BE PART OF SOMETHING BIGGER?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
            Join a growing network of pastors and churches committed to unity, collaboration, and kingdom impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link href="/join" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 md:px-10 py-4 md:py-6 text-base md:text-lg">
                JOIN THE NETWORK
              </Button>
            </Link>
            <Link href="/giving" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-navy-dark hover:bg-navy-medium text-white font-semibold px-6 md:px-10 py-4 md:py-6 text-base md:text-lg">
                SUPPORT THE MISSION
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
