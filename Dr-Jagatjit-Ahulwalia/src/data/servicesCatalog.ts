import type { LucideIcon } from 'lucide-react'
import { Activity, Baby, Brain, Flame, Flower2, Hand, HeartPulse, Leaf, Waves } from 'lucide-react'

export type CatalogService = {
  title: string
  summary: string
  icon: LucideIcon
  /** Internal detail route when available */
  detailPath?: string
}

export const catalogServices: CatalogService[] = [
  {
    title: 'Doctorate of Natural Medicine',
    summary:
      'Assessment and support for emotional, mental, and physical wellness using non-invasive modalities such as acupressure, hydrotherapy, herbalism, botanical medicine, clinical nutrition, health coaching, and energy work.',
    icon: Leaf,
    detailPath: '/natural-medicine',
  },
  {
    title: 'Professional Herbalist',
    summary:
      'Plant-based wellness support using teas, tinctures, capsules, oils, and salves, with education, safety guidance, sourcing, quality awareness, and progress monitoring.',
    icon: Flower2,
    detailPath: '/herbal-wellness',
  },
  {
    title: 'Manual Osteopathic Therapy',
    summary:
      'Hands-on assessment and treatment focused on structure, function, mobility, posture, muscles, joints, fascia, and nervous system relationships through soft tissue release, myofascial release, joint mobilization, muscle energy techniques, and education.',
    icon: Hand,
    detailPath: '/manual-osteopathy',
  },
  {
    title: 'Certified Hypnotherapy',
    summary:
      'Guided relaxation and hypnosis-based support for emotional, behavioral, cognitive, and psychosomatic concerns using visualization, suggestion therapy, habit support, stress support, and self-hypnosis skills.',
    icon: Brain,
    detailPath: '/hypnotherapy',
  },
  {
    title: 'Massage Therapy',
    summary:
      'Soft tissue care supporting relaxation, stress reduction, circulation, muscle tension, comfort, posture, and mobility. Includes Swedish, deep tissue, sports massage, trigger point therapy, myofascial release, TMJ massage, and cupping therapy.',
    icon: HeartPulse,
    detailPath: '/massage-therapy',
  },
  {
    title: 'Injury Rehabilitation',
    summary:
      'Support for motor vehicle accident recovery, workplace injuries, whiplash, sprains, strains, overuse injuries, and post-surgical support with medical guidance where appropriate.',
    icon: Activity,
  },
  {
    title: 'Prenatal & Postnatal Massage',
    summary:
      'Pregnancy and postpartum massage support that may help with back discomfort, swelling, stress, postural strain, and relaxation.',
    icon: Baby,
  },
  {
    title: 'Specialized Techniques',
    summary:
      'Cupping therapy, fire cupping, myofascial release, trigger point therapy, sports-focused care, and TMJ massage—selected based on your goals and comfort.',
    icon: Waves,
  },
]

export const homeServiceOverview: {
  title: string
  blurb: string
  to: string
  icon: LucideIcon
}[] = [
  {
    title: 'Natural Medicine',
    blurb: 'Whole-person assessment and complementary wellness strategies.',
    to: '/natural-medicine',
    icon: Leaf,
  },
  {
    title: 'Herbal Wellness',
    blurb: 'Plant-informed education and personalized herbal preparation support.',
    to: '/herbal-wellness',
    icon: Flower2,
  },
  {
    title: 'Manual Osteopathy',
    blurb: 'Gentle hands-on care focused on structure, mobility, and comfort.',
    to: '/manual-osteopathy',
    icon: Hand,
  },
  {
    title: 'Hypnotherapy',
    blurb: 'Relaxation-forward mind–body support for habits and stress patterns.',
    to: '/hypnotherapy',
    icon: Brain,
  },
  {
    title: 'Massage Therapy',
    blurb: 'Therapeutic bodywork for relaxation, tension, and movement confidence.',
    to: '/massage-therapy',
    icon: HeartPulse,
  },
  {
    title: 'Injury Rehabilitation',
    blurb: 'Supportive pacing after accidents, sprains, strains, and overuse.',
    to: '/services#injury',
    icon: Activity,
  },
  {
    title: 'Prenatal & Postnatal Massage',
    blurb: 'Specialized comfort-focused sessions for pregnancy and postpartum.',
    to: '/services#prenatal',
    icon: Baby,
  },
  {
    title: 'Cupping Therapy',
    blurb: 'Adjunct cupping options integrated with therapeutic massage care.',
    to: '/services#cupping',
    icon: Flame,
  },
]
