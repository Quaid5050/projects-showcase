import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Baby,
  Brain,
  Flame,
  Flower2,
  Hand,
  HeartPulse,
  Leaf,
} from 'lucide-react'

export type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
}

/** Mirrors `catalogServices` order for booking and contact flows. */
export const services: ServiceItem[] = [
  {
    title: 'Doctorate of Natural Medicine',
    description:
      'The assessment and treatment of emotional, mental and physical disorders using non-invasive modalities to promote and restore health and wellness. Acupressure, hydrotherapy, herbalism and botanical medicine, clinical nutrition, health coaching, and energy work are some of the modalities used.',
    icon: Leaf,
  },
  {
    title: 'Professional Herbalist',
    description:
      'A healthcare professional who uses plants and plant substances to support health, prevent illness, and help manage medical conditions—combining traditional knowledge with modern understanding of human biology, nutrition, and wellness for individualized care.',
    icon: Flower2,
  },
  {
    title: 'Manual Osteopathic Therapist',
    description:
      'Hands-on assessment and treatment to improve the body’s structure, function, and self-healing capacity—focusing on musculoskeletal and interconnected fascia, organ, and nervous system themes—with personalized plans and education.',
    icon: Hand,
  },
  {
    title: 'Certified Hypnotherapist',
    description:
      'Professionally credentialed hypnosis and evidence-informed techniques for emotional, behavioral, cognitive, and psychosomatic concerns—focused relaxation, therapeutic suggestions, habit skills, and self-hypnosis when appropriate.',
    icon: Brain,
  },
  {
    title: 'Massage Therapist',
    description:
      'Soft-tissue techniques for relaxation, pain relief, stress reduction, circulation, and overall well-being—including consultation, individualized plans, Swedish, deep tissue, sports work, trigger points, myofascial release, cupping, and client education.',
    icon: HeartPulse,
  },
  {
    title: 'Injury Rehabilitation Support',
    description:
      'Supportive care for motor vehicle accidents, workplace injuries, whiplash, sprains, strains, overuse injuries, and post-surgical pacing with medical guidance when appropriate.',
    icon: Activity,
  },
  {
    title: 'Prenatal & Postnatal Massage',
    description:
      'Specialized pregnancy and postpartum massage comfort for back discomfort, swelling, stress, tension, and postural strain.',
    icon: Baby,
  },
  {
    title: 'Cupping Therapy',
    description:
      'Cupping and fire cupping adjunct to massage—with myofascial release, trigger point therapy, or sports pacing when aligned with your goals.',
    icon: Flame,
  },
]
