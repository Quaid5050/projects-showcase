import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  MessageCircle, 
  Handshake, 
  Users, 
  Heart,
  Mail,
  Phone,
  Clock,
  Send,
  Calendar,
  Shield
} from 'lucide-react'

export default function ContactPage() {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'General Questions',
      description: 'Have a question about the network or how it works?',
      button: 'SEND A MESSAGE',
      link: '#form',
    },
    {
      icon: Handshake,
      title: 'Partnership / Collaboration',
      description: 'Want to work together or connect with other churches?',
      button: 'START A CONVERSATION',
      link: '#form',
    },
    {
      icon: Users,
      title: 'Join the Network',
      description: 'Ready to get your church connected to the network?',
      button: 'JOIN NOW',
      link: '/join',
    },
    {
      icon: Heart,
      title: 'Community Need / Support',
      description: 'Need help or want to share a need?',
      button: 'SUBMIT A NEED',
      link: '/crisis-response',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=400&fit=crop"
          alt="Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">WE'RE HERE FOR YOU</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Let's Connect
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gold mb-3 sm:mb-4 px-4">
            We're here to build relationships, answer questions, and help you get connected.
          </p>
          <p className="text-base sm:text-lg text-gray-200 px-4">
            You don't have to do this alone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4">
            <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              JOIN THE NETWORK
            </Button>
            <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              SEND A MESSAGE
            </Button>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-8 sm:mb-12 md:mb-16">How Can We Help?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactOptions.map((option, idx) => {
              const Icon = option.icon
              return (
                <Card key={idx} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
                      <Icon className="h-10 w-10 text-navy-dark" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm">{option.description}</p>
                    <Link href={option.link}>
                      <Button className="w-full bg-navy-dark hover:bg-navy-medium text-white font-semibold">
                        {option.button}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Send Us a Message & Contact Info */}
      <section id="form" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-3 sm:mb-4">Send Us a Message</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Fill out the form below and someone from our team will follow up with you shortly.
              </p>
              
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="church">Church / Organization</Label>
                        <Input id="church" placeholder="Church name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Contact *</Label>
                      <select 
                        id="reason" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Select a reason</option>
                        <option>General Question</option>
                        <option>Join the Network</option>
                        <option>Partnership Opportunity</option>
                        <option>Resource Request</option>
                        <option>Event Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        rows={5}
                        placeholder="Tell us how we can help..."
                        required
                      />
                    </div>

                    <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      SEND MESSAGE
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4" />
                      <p>Your information is safe with us and will never be shared.</p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-6 sm:mb-8">Prefer to Reach Out Directly?</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-navy-dark flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-dark mb-1">Email</h3>
                        <p className="text-gray-600">info@cobbchurchnetwork.org</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-navy-dark flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-dark mb-1">Phone</h3>
                        <p className="text-gray-600">(678) 777-1234</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-navy-dark flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-dark mb-1">Office Hours</h3>
                        <p className="text-gray-600">Mon – Fri: 9:00 AM – 5:00 PM</p>
                        <p className="text-sm text-gray-500 mt-2">We typically respond within 24–48 hours.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-navy-dark text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
                  <p className="text-gray-300 mb-6">
                    We'd love to connect with you directly, hear your heart, and help you get plugged in.
                  </p>
                  <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-4">
                    <Calendar className="mr-2 h-5 w-5" />
                    SCHEDULE A CONVERSATION
                  </Button>
                </CardContent>
              </Card>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop"
                  alt="Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Is About Relationships */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=400&fit=crop"
          alt="Relationships"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">This Is About Relationships</h2>
              <p className="text-lg sm:text-xl text-gray-200 mb-3 sm:mb-4">
                We're not just building a platform—we're building real connections between pastors and churches across our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-50 border-2 border-gray-200">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gold flex items-center justify-center">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-navy-dark" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-3 sm:mb-4">
                Ready to Be Part of Something Bigger?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Join a growing network of churches working together to strengthen our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/join">
                  <Button className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg">
                    JOIN THE NETWORK
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white font-semibold px-8 py-6 text-lg">
                    BACK TO HOME
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
