import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Baby,
  Brain,
  Flower2,
  Hand,
  HeartPulse,
  Leaf,
  Waves,
} from 'lucide-react'

export type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: ServiceItem[] = [
  {
    title: 'Doctorate of Natural Medicine',
    description:
      'Assessment and support for emotional, mental, and physical wellness using non-invasive modalities such as acupressure, hydrotherapy, herbalism, botanical medicine, clinical nutrition, health coaching, and energy work.',
    icon: Leaf,
  },
  {
    title: 'Professional Herbalist',
    description:
      'Personalized herbal wellness support using plant-based preparations such as teas, tinctures, capsules, oils, and salves, with education around dosage, preparation, safety, sourcing, and progress monitoring.',
    icon: Flower2,
  },
  {
    title: 'Manual Osteopathic Therapy',
    description:
      'Hands-on assessment and treatment focused on improving body structure, function, mobility, posture, and self-healing capacity through soft tissue work, myofascial release, joint mobilization, muscle energy techniques, and client education.',
    icon: Hand,
  },
  {
    title: 'Certified Hypnotherapy',
    description:
      'Guided hypnosis and evidence-informed hypnotherapeutic techniques to support emotional, behavioral, cognitive, and psychosomatic concerns through relaxation, visualization, suggestion therapy, habit support, stress support, and self-hypnosis skills.',
    icon: Brain,
  },
  {
    title: 'Massage Therapy',
    description:
      'Therapeutic soft-tissue techniques that may support relaxation, pain relief, stress reduction, circulation, mobility, posture, and physical wellbeing. Modalities include Swedish massage, deep tissue massage, sports massage, trigger point therapy, myofascial release, and cupping.',
    icon: HeartPulse,
  },
  {
    title: 'Injury Rehabilitation Support',
    description:
      'Supportive care for motor vehicle accident recovery, workplace injuries, whiplash, sprains, strains, and post-surgical support where appropriate and with medical guidance.',
    icon: Activity,
  },
  {
    title: 'Prenatal & Postnatal Massage',
    description:
      'Specialized pregnancy and postnatal massage support that may help reduce back pain, swelling, stress, and muscular tension.',
    icon: Baby,
  },
  {
    title: 'Specialized Techniques',
    description:
      'Cupping therapy, fire cupping, trigger point therapy, myofascial release, TMJ massage, and sports-focused massage support.',
    icon: Waves,
  },
]
