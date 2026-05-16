import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Eye, 
  Target, 
  Star,
  Users, 
  Package, 
  Heart,
  Building2,
  GraduationCap,
  Network,
  CheckCircle2,
  Play
} from 'lucide-react'

export default function AboutPage() {
  const visionPoints = [
    'Churches work together—they collaborate',
    'Resources are shared—not kept',
    'Leaders are supported—not isolated',
    'Unity is visible—not just talked about',
  ]

  const whatMakesUsDifferent = [
    {
      title: 'A denomination',
      description: '',
    },
    {
      title: 'A governing body',
      description: '',
    },
    {
      title: 'A platform for foreign mission',
      description: '',
    },
  ]

  const weAre = [
    'A network built on trust',
    'A space for real relationships',
    'A movement focused on action',
  ]

  const whatThisLooksLike = [
    {
      icon: Users,
      title: 'Pastors gathering regularly to build real relationships',
    },
    {
      icon: Heart,
      title: 'Churches stepping up for each other publicly',
    },
    {
      icon: Package,
      title: 'Collaborating on community outreach',
    },
    {
      icon: Network,
      title: 'Sharing resources to strengthen every church involved',
    },
    {
      icon: Building2,
      title: 'Standing together in moments of crisis, not scrambling to respond alone',
    },
  ]

  const pastorMessages = [
    {
      icon: Users,
      title: 'There is strength in connection.',
    },
    {
      icon: Heart,
      title: 'There is power in unity.',
    },
    {
      icon: Star,
      title: 'And there is greater impact when we move together.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=500&fit=crop"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">ABOUT US</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
            We're Better
            <br />
            <span className="text-gold">Together.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto px-4">
            A movement of pastors and churches choosing unity over isolation—so we can strengthen our community together.
          </p>
        </div>
      </section>

      {/* Our Story - How It Started */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">OUR STORY</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 sm:mb-6">How It Started</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Cobb Church Network was born out of a simple but powerful realization: there are strong churches all across our community—but they were largely operating separately instead of together.
                </p>
                <p>
                  Pastors carry heavy responsibility. Churches face new challenges. Communities need real support. And too often, pastors are navigating it all on their own.
                </p>
                <p>
                  We believed there was a better way. Not by creating another program or event, but by building a system that makes collaboration simple, fast, and effective.
                </p>
                <p>
                  The kind of relationships where pastors know each other, support each other, and stand together—not just in good moments, but in times when it matters most.
                </p>
                <p>
                  So from this longing to see pastors connected, and a shared heart to see our community stronger.
                </p>
                <p className="font-semibold text-navy-dark">
                  And from that, something powerful began to grow.
                </p>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=600&h=600&fit=crop"
                alt="Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Vision */}
            <Card className="bg-navy-medium border-0">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="w-14 h-14 mb-5 rounded-full bg-gold flex items-center justify-center">
                  <Eye className="h-7 w-7 text-navy-dark" />
                </div>
                <p className="text-gold text-sm font-semibold uppercase mb-3">OUR VISION</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  What Could God Do If We Truly Moved Together?
                </h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  We believe unity isn't just a nice idea—it's a responsibility. Our vision is to see pastors and churches across Cobb County work together in a way that is real, visible, and impactful.
                </p>
                <div className="space-y-3">
                  {visionPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0 mt-1" />
                      <p className="text-gray-200 text-sm sm:text-base">{point}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 mt-4 text-sm sm:text-base">
                  When we move together, we don't just do more—we do better. More impact made for the Kingdom.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-gold border-0">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="w-14 h-14 mb-5 rounded-full bg-navy-dark flex items-center justify-center">
                  <Target className="h-7 w-7 text-gold" />
                </div>
                <p className="text-navy-dark text-sm font-semibold uppercase mb-3">OUR MISSION</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-dark mb-4">
                  To connect pastors and churches in authentic relationship so we can share resources, serve together, and strengthen our community.
                </h2>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop"
                alt="Different"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">WHAT MAKES US DIFFERENT</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 sm:mb-6">
                This Isn't About Building Another Organization.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We are not:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <p className="text-gray-700">A denomination</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <p className="text-gray-700">A governing body</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <p className="text-gray-700">A platform for foreign mission</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-4 font-semibold">We are:</p>
              <div className="space-y-3">
                {weAre.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Looks Like In Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs sm:text-sm font-semibold uppercase text-center mb-3 sm:mb-4">WHAT THIS LOOKS LIKE IN ACTION</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-8 sm:mb-12 md:mb-16 px-4">
            Over time, this creates a rhythm—where unity becomes visible.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatThisLooksLike.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy-dark flex items-center justify-center">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                    <p className="text-gray-700 font-medium">{item.title}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* A Word to Pastors */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop"
                alt="Pastors"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">A WORD TO PASTORS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">To Every Pastor</h2>
              <p className="text-xl text-gray-200 mb-6">
                We know what you carry.
                <br />
                The responsibility.
                <br />
                The pressure.
                <br />
                The weight of leading well and making an impact.
                <br />
                You were never meant to do this alone.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                This network exists so you don't have to.
              </p>
              
              <div className="space-y-4">
                {pastorMessages.map((msg, idx) => {
                  const Icon = msg.icon
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-navy-dark" />
                      </div>
                      <p className="text-lg text-gray-200 mt-2">{msg.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 sm:mb-6 px-4">
            Be Part of What God Is Building In Our Community
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            Join a growing network of pastors and churches committed to unity, collaboration, and kingdom impact.
          </p>
          
          <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg">
            JOIN THE NETWORK
          </Button>
        </div>
      </section>
    </div>
  )
}
