import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Users, 
  Package, 
  Heart, 
  Building2,
  GraduationCap,
  Network,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export default function ServicesPage() {
  const coreServices = [
    {
      number: '1',
      icon: Users,
      title: 'Connection & Collaboration',
      description: 'Build meaningful relationships with pastors and churches across Cobb County.',
      features: [
        'Find ministry partners',
        'Build lasting relationships',
        'Stay connected year-round',
      ],
      button: 'EXPLORE THE NETWORK',
      link: '/directory',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
    },
    {
      number: '2',
      icon: Package,
      title: 'Resource Sharing Network',
      description: 'Share what you have and find what you need to better serve.',
      features: [
        'Request support',
        'Share resources',
        'Access what others have to offer',
      ],
      button: 'BROWSE RESOURCES',
      link: '/resources',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
    },
    {
      number: '3',
      icon: Heart,
      title: 'Coordinated Outreach',
      description: 'Work together on outreach projects that make a bigger impact in our community.',
      features: [
        'Join outreach projects',
        'Support schools & families',
        'Serve together for greater impact',
      ],
      button: 'VIEW OPPORTUNITIES',
      link: '/events',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop',
    },
    {
      number: '4',
      icon: Building2,
      title: 'Unified Response System',
      description: 'When crisis happens, we respond together—quickly and effectively.',
      features: [
        'Crisis response',
        'Emergency support',
        'Real-time communication & coordination',
      ],
      button: 'LEARN HOW IT WORKS',
      link: '/crisis-response',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=400&h=300&fit=crop',
    },
    {
      number: '5',
      icon: GraduationCap,
      title: 'Leadership & Mentorship',
      description: 'Invest in the next generation through mentorship and leadership development.',
      features: [
        'Youth mentorship',
        'Leadership development',
        'Men & boys initiatives',
      ],
      button: 'GET INVOLVED',
      link: '/join',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
    },
  ]

  const howItWorks = [
    {
      number: '1',
      icon: Users,
      title: 'JOIN',
      description: 'Create your church profile and tell us how you serve.',
    },
    {
      number: '2',
      icon: Network,
      title: 'CONNECT',
      description: 'Share needs, resources, and opportunities.',
    },
    {
      number: '3',
      icon: Heart,
      title: 'ACT',
      description: 'Serve together and make a greater impact.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=500&fit=crop"
          alt="Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">HOW WE WORK TOGETHER</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
            Practical ways churches and pastors connect, collaborate, and serve as one.
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 px-4">
            This is where unity becomes action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              JOIN THE NETWORK
            </Button>
            <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              EXPLORE RESOURCES
            </Button>
          </div>
        </div>
      </section>

      {/* Not Just a Network */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 sm:mb-6">
                Not Just a Network—
                <br />
                A System for Impact
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                This platform removes the barriers between churches and makes collaboration simple, fast, and effective. Whether you need support, want to serve, or are looking to partner—this is where it happens.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy-dark flex items-center justify-center">
                  <Users className="h-10 w-10 text-gold" />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">CONNECT</h3>
                <p className="text-sm text-gray-600">Build relationships and strengthen unity.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center">
                  <Package className="h-10 w-10 text-navy-dark" />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">SHARE</h3>
                <p className="text-sm text-gray-600">Share resources and support one another.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy-dark flex items-center justify-center">
                  <Heart className="h-10 w-10 text-gold" />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">SERVE</h3>
                <p className="text-sm text-gray-600">Serve together to impact our community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-3 sm:mb-4">Our Core Services</h2>
          <p className="text-sm sm:text-base text-center text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            We equip and connect churches so we can accomplish more together than we ever could alone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-navy-dark/70 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                        <span className="text-navy-dark font-bold text-2xl">{service.number}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-navy-dark flex items-center justify-center">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-dark">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link href={service.link}>
                      <Button className="w-full bg-navy-dark hover:bg-navy-medium text-white font-semibold">
                        {service.button}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-8 sm:mb-12 md:mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
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

      {/* When Churches Move Together */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=1920&h=400&fit=crop"
          alt="Community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">When Churches Move Together...</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold italic mb-4 sm:mb-6">Communities Change.</p>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            This is how unity becomes visible.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-navy-dark text-white overflow-hidden">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gold flex items-center justify-center">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-navy-dark" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Be Part of What <span className="text-gold">God Is Building</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
                Your church has something to offer—and something to gain. Let's build a stronger Cobb County together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/join">
                  <Button className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg">
                    JOIN THE NETWORK
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg">
                    CONTACT US
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
