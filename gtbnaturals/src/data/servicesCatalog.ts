import type { LucideIcon } from 'lucide-react'
import { Activity, Baby, Brain, Flame, Flower2, Hand, HeartPulse, Leaf } from 'lucide-react'

export type CatalogService = {
  title: string
  summary: string
  icon: LucideIcon
  /** Internal detail route when available */
  detailPath?: string
}

/** Full services list (`/services` page + forms). Detail routes match primary modality pages. Order matches practice offerings. */
export const catalogServices: CatalogService[] = [
  {
    title: 'Doctorate of Natural Medicine',
    summary:
      'The assessment and treatment of emotional, mental and physical disorders using non-invasive modalities to promote and restore health and wellness. Acupressure, hydrotherapy, herbalism and botanical medicine, clinical nutrition, health coaching, and energy work are some of the modalities used.',
    icon: Leaf,
    detailPath: '/natural-medicine',
  },
  {
    title: 'Professional Herbalist',
    summary:
      'A healthcare professional who uses plants and plant substances to support health, prevent illness, and help manage medical conditions—combining traditional knowledge with modern understanding of human biology, nutrition, and wellness for individualized care.',
    icon: Flower2,
    detailPath: '/herbal-wellness',
  },
  {
    title: 'Manual Osteopathic Therapist',
    summary:
      'Hands-on assessment and treatment to improve the body’s structure, function, and self-healing capacity—focusing on the musculoskeletal system and the interrelationship of muscles, joints, fascia, organs, and the nervous system—with education and functional improvement.',
    icon: Hand,
    detailPath: '/manual-osteopathy',
  },
  {
    title: 'Certified Hypnotherapist',
    summary:
      'A professionally trained, credentialed practitioner using hypnosis and evidence-informed hypnotherapy for emotional, behavioral, cognitive, and psychosomatic concerns—facilitating focused relaxation and heightened awareness for positive change and symptom management.',
    icon: Brain,
    detailPath: '/hypnotherapy',
  },
  {
    title: 'Massage Therapist',
    summary:
      'Hands-on techniques on the soft tissues to promote relaxation, relieve pain, reduce stress, improve circulation, and support overall physical and mental well-being—with consultations, individualized plans, and varied massage modalities.',
    icon: HeartPulse,
    detailPath: '/massage-therapy',
  },
  {
    title: 'Injury Rehabilitation',
    summary:
      'Supportive pacing after motor vehicle accidents, workplace injuries, whiplash, sprains, strains, overuse injuries, and post-surgical phases—with medical guidance when appropriate.',
    icon: Activity,
  },
  {
    title: 'Prenatal & Postnatal Massage',
    summary:
      'Comfort-focused pregnancy and postpartum massage that may help with back discomfort, swelling, stress, and postural strain.',
    icon: Baby,
  },
  {
    title: 'Cupping Therapy',
    summary:
      'Adjunct cupping and fire cupping integrated with therapeutic massage when appropriate—including alongside myofascial release, trigger point work, and sports-focused sessions.',
    icon: Flame,
  },
]

/** Home “Services overview” tiles — mirrors key modalities with concise blurbs. */
export const homeServiceOverview: {
  title: string
  blurb: string
  to: string
  icon: LucideIcon
}[] = [
  {
    title: 'Doctorate of Natural Medicine',
    blurb: 'Non-invasive modalities across body, mind, and lifestyle for wellness and balance.',
    to: '/natural-medicine',
    icon: Leaf,
  },
  {
    title: 'Professional Herbalist',
    blurb: 'Plant-informed assessment, formulations, education, and quality-conscious sourcing.',
    to: '/herbal-wellness',
    icon: Flower2,
  },
  {
    title: 'Manual Osteopathic Therapist',
    blurb: 'Structural assessment, manual techniques, and education for movement and comfort.',
    to: '/manual-osteopathy',
    icon: Hand,
  },
  {
    title: 'Certified Hypnotherapist',
    blurb: 'Evidence-informed hypnosis for habits, stress patterns, and mind–body themes.',
    to: '/hypnotherapy',
    icon: Brain,
  },
  {
    title: 'Massage Therapist',
    blurb: 'Therapeutic massage and related techniques tailored to your goals.',
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
