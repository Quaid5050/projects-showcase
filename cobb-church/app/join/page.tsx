'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2 } from 'lucide-react'
import SectionContainer from '@/components/sections/SectionContainer'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  churchName: string
  churchCity: string
  churchWebsite: string
  role: string
  connectionQuestion: string
  howToConnect: string[]
}

interface FormErrors {
  [key: string]: string
}

const connectOptions = [
  { id: 'gatherings', label: 'Attend gatherings' },
  { id: 'outreach', label: 'Partner in outreach' },
  { id: 'resources', label: 'Share resources' },
  { id: 'connect', label: 'Connect with other pastors' },
  { id: 'learn', label: 'Just want to learn more' },
]

export default function Join() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    churchName: '',
    churchCity: '',
    churchWebsite: '',
    role: '',
    connectionQuestion: '',
    howToConnect: [],
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.churchName.trim()) newErrors.churchName = 'Church name is required'
    if (!formData.churchCity.trim()) newErrors.churchCity = 'Church city is required'
    if (!formData.role) newErrors.role = 'Please select your role'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      role: value,
    }))
    if (errors.role) {
      setErrors((prev) => ({
        ...prev,
        role: '',
      }))
    }
  }

  const handleCheckboxChange = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      howToConnect: prev.howToConnect.includes(id)
        ? prev.howToConnect.filter((item) => item !== id)
        : [...prev.howToConnect, id],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError(null)
    if (!validateForm()) return

    setLoading(true)
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          churchName: formData.churchName,
          churchCity: formData.churchCity,
          churchWebsite: formData.churchWebsite || undefined,
          role: formData.role,
          connectionQuestion: formData.connectionQuestion || undefined,
          howToConnect: formData.howToConnect,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setApiError(typeof data.error === 'string' ? data.error : 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        churchName: '',
        churchCity: '',
        churchWebsite: '',
        role: '',
        connectionQuestion: '',
        howToConnect: [],
      })
    } catch {
      setApiError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <SectionContainer
        background="image"
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&h=800&fit=crop&q=80"
        padding="large"
        className="min-h-72 sm:min-h-96 flex items-center justify-center"
      >
        <div className="max-w-3xl mx-auto text-center text-white px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white font-display">
            You Don&apos;t Have to Do This Alone.
          </h1>
          <p className="text-base sm:text-xl text-gray-200">
            Join a growing network of pastors and churches working together to strengthen Cobb County.
          </p>
        </div>
      </SectionContainer>

      {/* Why Join Section */}
      <SectionContainer background="white" padding="large">
        <div className="mb-12">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-dark-blue mb-8 sm:mb-12 font-display">Why Join?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Build Meaningful Relationships',
              description:
                'Connect with pastors and church leaders who share your passion for Kingdom impact and community transformation.',
              features: [
                'Find ministry partners',
                'Build lasting relationships',
                'Stay connected throughout the year',
              ],
            },
            {
              title: 'Share Resources & Support',
              description:
                'Access a network of churches and resources ready to help. Share what you have and receive what you need.',
              features: [
                'Request support',
                'Share resources',
                'Access what others have to offer',
              ],
            },
            {
              title: 'Collaborate on Community Initiatives',
              description:
                'Partner with other churches on outreach projects and community initiatives that create greater impact.',
              features: [
                'Join outreach projects',
                'Support schools & families',
                'Serve together for greater impact',
              ],
            },
          ].map((item, index) => (
            <div key={index} className="bg-light-gray rounded-lg p-8">
              <h4 className="text-xl font-bold text-dark-blue mb-4">{item.title}</h4>
              <p className="text-medium-gray mb-6 text-sm">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-medium-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Personal Invitation */}
      <SectionContainer background="gray" padding="large">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 border-2 border-gold/20">
          <h2 className="text-2xl font-bold text-dark-blue mb-6 font-display">A Personal Invitation</h2>
          <p className="text-medium-gray leading-relaxed mb-4">
            Whether you&apos;re a senior pastor, associate pastor, ministry leader, or simply interested in what God is
            doing through the Cobb Church Network—we want you to be part of this.
          </p>
          <p className="text-medium-gray leading-relaxed">
            There&apos;s no membership fee, no hidden agenda, and no pressure. Just real connection, meaningful
            collaboration, and a genuine desire to see our community impacted for Christ.
          </p>
        </div>
      </SectionContainer>

      {/* Join Form Section */}
      <SectionContainer background="white" padding="large">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-dark-blue mb-2 font-display text-center">Join the Network</h2>
          <p className="text-center text-medium-gray mb-8">
            Fill out the form below and we&apos;ll follow up with you personally.
          </p>

          {apiError && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{apiError}</div>
          )}

          {submitted && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg space-y-3">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-green-900 mb-1">Thank you for joining!</h3>
                  <p className="text-green-800">
                    We&apos;ve received your information and will follow up with you shortly.
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                className="text-dark-blue border-gold"
                onClick={() => {
                  setSubmitted(false)
                  setApiError(null)
                }}
              >
                Submit another application
              </Button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark-blue mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-blue mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Smith"
                  className={errors.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark-blue mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-blue mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(770) 555-0000"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Church Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark-blue mb-2">
                  Church Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="churchName"
                  value={formData.churchName}
                  onChange={handleInputChange}
                  placeholder="First Baptist Church"
                  className={errors.churchName ? 'border-red-500' : ''}
                />
                {errors.churchName && <p className="text-red-500 text-xs mt-1">{errors.churchName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-blue mb-2">
                  Church City <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="churchCity"
                  value={formData.churchCity}
                  onChange={handleInputChange}
                  placeholder="Powder Springs"
                  className={errors.churchCity ? 'border-red-500' : ''}
                />
                {errors.churchCity && <p className="text-red-500 text-xs mt-1">{errors.churchCity}</p>}
              </div>
            </div>

            {/* Church Website */}
            <div>
              <label className="block text-sm font-semibold text-dark-blue mb-2">Church Website (optional)</label>
              <Input
                type="text"
                name="churchWebsite"
                value={formData.churchWebsite}
                onChange={handleInputChange}
                placeholder="www.churchname.org"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-dark-blue mb-2">
                Your Role <span className="text-red-500">*</span>
              </label>
              <Select value={formData.role} onValueChange={handleSelectChange}>
                <SelectTrigger className={errors.role ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="senior-pastor">Senior Pastor</SelectItem>
                  <SelectItem value="associate-pastor">Associate Pastor</SelectItem>
                  <SelectItem value="ministry-leader">Ministry Leader</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
            </div>

            {/* Connection Question */}
            <div>
              <label className="block text-sm font-semibold text-dark-blue mb-2">
                What are you hoping to connect or contribute?
              </label>
              <Textarea
                name="connectionQuestion"
                value={formData.connectionQuestion}
                onChange={handleInputChange}
                placeholder="Tell us a bit about your church and what you're looking for..."
                rows={4}
              />
            </div>

            {/* How to Connect Checkboxes */}
            <div>
              <label className="block text-sm font-semibold text-dark-blue mb-4">
                How would you like to connect or contribute?
              </label>
              <div className="space-y-3">
                {connectOptions.map((option) => (
                  <div key={option.id} className="flex items-center gap-3">
                    <Checkbox
                      id={option.id}
                      checked={formData.howToConnect.includes(option.id)}
                      onCheckedChange={() => handleCheckboxChange(option.id)}
                    />
                    <label htmlFor={option.id} className="text-sm text-medium-gray cursor-pointer">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-gold hover:bg-yellow-600 text-dark-blue font-semibold py-3 text-base disabled:opacity-60"
              >
                {loading ? 'Submitting…' : 'JOIN THE NETWORK'}
              </Button>
              <p className="text-xs text-medium-gray text-center mt-4 italic">
                We&apos;ll follow up with you personally—this isn&apos;t automated.
              </p>
            </div>
          </form>
        </div>
      </SectionContainer>

      {/* What Happens Next */}
      <SectionContainer background="gray" padding="large">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-dark-blue mb-8 sm:mb-12 font-display">What Happens Next</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              step: '1',
              title: 'You Submit',
              description: 'Complete the form and we receive your information.',
            },
            {
              step: '2',
              title: 'We Connect',
              description: 'One of our team members reaches out personally to welcome you.',
            },
            {
              step: '3',
              title: 'We Invite',
              description: 'Get details on our next gathering and how to get involved.',
            },
            {
              step: '4',
              title: 'You Belong',
              description: 'Join a community of pastors committed to unity and impact.',
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold text-dark-blue font-bold mb-4">
                {item.step}
              </div>
              <h4 className="font-bold text-dark-blue mb-2">{item.title}</h4>
              <p className="text-sm text-medium-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}
