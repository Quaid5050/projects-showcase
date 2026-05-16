import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import DonateCheckout from '@/components/giving/DonateCheckout'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Heart, 
  Users, 
  Package, 
  DollarSign,
  HandHeart,
  Building2,
  GraduationCap,
  Church,
  CheckCircle2,
} from 'lucide-react'

export default function GivingPage() {
  const impactStats = [
    { number: '500+', label: 'Families Helped' },
    { number: '250+', label: 'Youth Mentored' },
    { number: '60+', label: 'Churches Empowered' },
    { number: '25+', label: 'Community Initiatives' },
  ]

  const supportWays = [
    {
      icon: DollarSign,
      title: 'Give Financially',
      description: 'Your financial support helps sustain the platform, outreach efforts, and community impact.',
      button: 'DONATE NOW',
      link: '/giving#donate',
    },
    {
      icon: Users,
      title: 'Volunteer Your Time',
      description: 'Use your time and gifts to support events, outreach, and initiatives across the network.',
      button: 'BECOME A VOLUNTEER',
      link: '/join',
    },
    {
      icon: Package,
      title: 'Share Resources',
      description: 'Share equipment, space, or support to help another church or community initiative.',
      button: 'OFFER A RESOURCE',
      link: '/resources',
    },
    {
      icon: HandHeart,
      title: 'Partner With Us',
      description: 'Organizations and leaders can partner to expand impact and reach.',
      button: 'START A PARTNERSHIP',
      link: '/contact',
    },
  ]

  const supportAreas = [
    'Platform development & maintenance',
    'Community outreach initiatives',
    'Event support and coordination',
    'Resource distribution and aid',
    'Leadership development and training',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=500&fit=crop&q=80"
          alt="Hands joined in prayer and support"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">SUPPORT THE MISSION</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
            Help Strengthen Churches, Serve Families, and Impact Our Community Together
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Every contribution helps move the mission forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              <Link href="#donate">
                <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                GIVE / DONATE
              </Link>
            </Button>
            <Button asChild className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              <Link href="/join">
                <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                GET INVOLVED
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-6 sm:mb-8">Why This Matters</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                The Cobb Church Network exists to connect churches, share resources, and respond to real needs in our community. Your support helps make that possible—turning unity into action.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy-dark flex items-center justify-center">
                  <Church className="h-10 w-10 text-gold" />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">Strengthen Churches</h3>
                <p className="text-sm text-gray-600">Equip and empower churches to work together for greater impact.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center">
                  <Users className="h-10 w-10 text-navy-dark" />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">Support Families</h3>
                <p className="text-sm text-gray-600">Provide resources, help, and practical aid to families in need.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy-dark flex items-center justify-center">
                  <Heart className="h-10 w-10 text-gold" />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">Impact Community</h3>
                <p className="text-sm text-gray-600">Address real needs and create lasting change across Cobb County.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways You Can Support */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-8 sm:mb-12 md:mb-16">Ways You Can Support</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {supportWays.map((way, idx) => {
              const Icon = way.icon
              return (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={`https://images.unsplash.com/photo-${idx === 0 ? '1579621970563-ebec7560ff3e' : idx === 1 ? '1559027615-cd4628902d4a' : idx === 2 ? '1488521787991-ed7bbaae773c' : '1521737711867-e3b97375f902'}?w=400&h=300&fit=crop`}
                      alt={way.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-navy-dark/60 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                        <Icon className="h-8 w-8 text-navy-dark" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-navy-dark mb-3">{way.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm">{way.description}</p>
                    <Link href={way.link}>
                      <Button className="w-full bg-navy-dark hover:bg-navy-medium text-white font-semibold">
                        {way.button} →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Your Support Creates <span className="text-gold">Real Impact</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-xl sm:text-2xl font-bold mb-2">When We Work Together,</p>
            <p className="text-3xl sm:text-4xl font-bold text-gold italic">Lives Are Changed.</p>
          </div>
        </div>
      </section>

      {/* Where Your Support Goes */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop"
                alt="Church building"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-6 sm:mb-8">Where Your Support Goes</h2>
              <div className="space-y-4">
                {supportAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make a Contribution */}
      <section id="donate" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-6 sm:mb-8">Make a Contribution</h2>
              
              <Suspense
                fallback={
                  <Card>
                    <CardContent className="p-8 text-gray-600">Loading donation form…</CardContent>
                  </Card>
                }
              >
                <DonateCheckout />
              </Suspense>

              <Card className="mt-6 bg-navy-dark text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="h-8 w-8 text-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Not Everyone Gives Money—And That&apos;s Okay</h3>
                      <p className="text-gray-300 text-sm">
                        You can still be part of the mission by serving, sharing, and connecting. Every act of kindness matters.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop"
                  alt="Volunteers"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <Button asChild className="w-full bg-navy-dark hover:bg-navy-medium text-white font-semibold py-6 text-lg">
                  <Link href="/join" className="inline-flex items-center justify-center w-full gap-2">
                    <Users className="h-6 w-6 shrink-0" />
                    VOLUNTEER
                  </Link>
                </Button>
                <Button asChild className="w-full bg-transparent border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white font-semibold py-6 text-lg">
                  <Link href="/join" className="inline-flex items-center justify-center w-full gap-2">
                    <Package className="h-6 w-6 shrink-0" />
                    JOIN THE NETWORK
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            Be Part of What <span className="text-gold">God Is Building</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            This mission only works because people like you step up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg">
              <Link href="#donate">
                <Heart className="mr-2 h-5 w-5" />
                GIVE / DONATE
              </Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
