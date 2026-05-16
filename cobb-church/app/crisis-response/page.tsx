import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  AlertCircle, 
  Bell, 
  Heart, 
  Home, 
  Utensils, 
  Stethoscope, 
  DollarSign, 
  Car, 
  Shirt, 
  MessageCircle, 
  HandHeart,
  Shield,
  Users,
  Send,
  CheckCircle2
} from 'lucide-react'

export default function CrisisResponsePage() {
  const activeNeeds = [
    {
      id: 1,
      title: 'Family in Need - Austell',
      description: 'House fire - family displaced',
      urgency: 'URGENT',
      needs: ['Temporary housing', 'Clothing', 'Food support'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Elderly Support - Marietta',
      description: 'Elderly woman without family support',
      urgency: 'URGENT',
      needs: ['Meals', 'Transportation', 'Wellness check-ins'],
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Flood Relief - Smyrna',
      description: 'Multiple families affected by flooding',
      urgency: 'URGENT',
      needs: ['Cleaning supplies', 'Clothing', 'Volunteers'],
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=400&h=300&fit=crop',
    },
  ]

  const responseTypes = [
    { icon: Home, label: 'Emergency Housing' },
    { icon: Utensils, label: 'Food Assistance' },
    { icon: Shirt, label: 'Clothing' },
    { icon: MessageCircle, label: 'Prayer Support' },
    { icon: MessageCircle, label: 'Counseling' },
    { icon: DollarSign, label: 'Financial Assistance' },
    { icon: HandHeart, label: 'Volunteer Support' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=500&fit=crop"
          alt="Crisis Response"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
            CRISIS RESPONSE
            <br />
            <span className="text-gold">NETWORK</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 max-w-2xl mx-auto px-4">
            When our community faces urgent needs, we respond together.
          </p>
          <p className="text-gold text-base sm:text-lg font-semibold mb-6 sm:mb-8">
            ONE CHURCH. ONE RESPONSE.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              <AlertCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              REPORT A NEED
            </Button>
            <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              RESPOND / VOLUNTEER
            </Button>
          </div>
        </div>
      </section>

      {/* What is Crisis Response Network */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 sm:mb-6">
                WHAT IS THE
                <br />
                <span className="text-gold">CRISIS RESPONSE NETWORK?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                This is a coordinated effort between churches to respond quickly and effectively to urgent needs in our community.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Instead of responding separately, we respond together—with unity, speed, and impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy-dark flex items-center justify-center">
                  <AlertCircle className="h-10 w-10 text-gold" />
                </div>
                <p className="font-semibold text-navy-dark">Report a Need</p>
              </div>
              <div className="hidden sm:flex items-center justify-center">
                <div className="border-t-2 border-dashed border-gray-300 w-full" />
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy-dark flex items-center justify-center">
                  <Bell className="h-10 w-10 text-gold" />
                </div>
                <p className="font-semibold text-navy-dark">Network Notified</p>
              </div>
              <div className="sm:col-span-3 flex justify-center">
                <div className="border-l-2 border-dashed border-gray-300 h-8" />
              </div>
              <div className="sm:col-span-3 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy-dark flex items-center justify-center">
                  <Heart className="h-10 w-10 text-gold" />
                </div>
                <p className="font-semibold text-navy-dark">Churches Take Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Needs Right Now */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-2">
                ACTIVE NEEDS RIGHT NOW
                <Badge className="ml-3 sm:ml-4 bg-red-600 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm">LIVE</Badge>
              </h2>
            </div>
            <Link href="/crisis-response/all">
              <Button variant="outline" className="w-full sm:w-auto border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white text-sm sm:text-base">
                VIEW ALL NEEDS →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {activeNeeds.map((need) => (
              <Card key={need.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={need.image}
                    alt={need.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white font-bold px-3 py-1">
                    {need.urgency}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-dark mb-2">{need.title}</h3>
                  <p className="text-gray-600 mb-4">{need.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {need.needs.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1 bg-navy-dark hover:bg-navy-medium text-white text-sm">
                      RESPOND TO THIS NEED
                    </Button>
                    <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-100 text-sm">
                      VIEW DETAILS →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Respond Together */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">HOW WE RESPOND TOGETHER</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-navy-dark" />
              </div>
              <h3 className="text-xl font-bold mb-4">Need Reported</h3>
              <p className="text-gray-300">
                A church or community member submits an urgent need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
                <Bell className="h-10 w-10 text-navy-dark" />
              </div>
              <h3 className="text-xl font-bold mb-4">Network Notified</h3>
              <p className="text-gray-300">
                Churches are alerted and can respond.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold flex items-center justify-center">
                <Heart className="h-10 w-10 text-navy-dark" />
              </div>
              <h3 className="text-xl font-bold mb-4">Churches Take Action</h3>
              <p className="text-gray-300">
                Support is coordinated quickly and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Crisis Response */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-3 sm:mb-4">
            TYPES OF CRISIS RESPONSE
          </h2>
          <p className="text-sm sm:text-base text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            We provide comprehensive support across multiple areas of need
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {responseTypes.map((type, idx) => {
              const Icon = type.icon
              return (
                <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <p className="font-semibold text-navy-dark text-sm">{type.label}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 sm:mb-6">REPORT AN URGENT NEED</h2>
              
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City or area" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Type of Need</Label>
                      <select 
                        id="type" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option>Select Type</option>
                        <option>Housing</option>
                        <option>Food</option>
                        <option>Medical</option>
                        <option>Financial</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description of Need</Label>
                      <Textarea 
                        id="description" 
                        rows={4}
                        placeholder="Please provide details about the situation..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <select 
                        id="urgency" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option>Select Level</option>
                        <option>Urgent</option>
                        <option>High</option>
                        <option>Medium</option>
                      </select>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-800">
                        This form is monitored. Urgent needs will be reviewed and responded to as quickly as possible.
                      </p>
                    </div>

                    <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      SUBMIT NEED
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Ready to Help */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 sm:mb-6">READY TO HELP?</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  If your church or team is able to respond, we want to connect you with real needs.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 text-lg justify-start">
                    <HandHeart className="mr-3 h-6 w-6" />
                    VOLUNTEER TO RESPOND
                  </Button>
                  <Button className="w-full bg-navy-dark hover:bg-navy-medium text-white font-semibold py-6 text-lg justify-start">
                    <Heart className="mr-3 h-6 w-6" />
                    OFFER RESOURCES
                  </Button>
                </div>
              </div>

              <Card className="bg-navy-dark text-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-navy-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">RESPONSIBLE & COORDINATED RESPONSE</h3>
                      <p className="text-gray-300 text-sm">
                        All needs are reviewed to ensure accuracy and proper coordination. Our goal is to respond with care, integrity, and unity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                  alt="Volunteers helping"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            TOGETHER, WE <span className="text-gold">RESPOND STRONGER</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            When we unite our churches, resources, and hearts, we can make a greater impact in times of crisis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Button className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg">
              <Users className="mr-2 h-5 w-5" />
              JOIN THE NETWORK
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg">
              <Heart className="mr-2 h-5 w-5" />
              STAY CONNECTED
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <Heart className="h-4 w-4 text-gold" />
            <p className="text-gray-400">
              Thank you for being the hands and feet of Jesus in our community.
            </p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-navy-medium">
            <p className="text-gold font-semibold">
              One Church. One Response. One Community.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
