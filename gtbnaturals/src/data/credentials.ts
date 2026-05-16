/** Recognitions and qualifications — order matches site “My credentials” source list. */
import type { LucideIcon } from 'lucide-react'
import { Brain, GraduationCap, Hand, ShieldCheck } from 'lucide-react'

export const credentialCards = [
  'Doctorate of Natural Medicine – Canada',
  'Licensed Holistic Health Practitioner – Canada',
  'Board Certified by American Alternative Medical Association – USA',
  'Board Certified by International Practitioners of Holistic Medicine – UK',
  'Manual Osteopathic Therapist – Alberta, Canada',
  'Certified Hypnotherapist – Canada',
  'Professional Herbalist – Canada',
  'RMT – Alberta, Canada',
  'Ph.D. (Natural Medicine), M.D. (AM), B.Sc.',
] as const

export const credentialTimeline: {
  year: string
  title: string
  detail: string
  icon: LucideIcon
}[] = [
  {
    year: 'Doctoral',
    icon: GraduationCap,
    title: 'Natural medicine & holistic health',
    detail: 'Advanced training in non-invasive modalities, wellness assessment, and integrative support.',
  },
  {
    year: 'Clinical',
    icon: Hand,
    title: 'Manual therapy & bodywork',
    detail: 'Manual osteopathic approaches and registered massage therapy aligned with scope and safety.',
  },
  {
    year: 'Mind–body',
    icon: Brain,
    title: 'Hypnotherapy & client education',
    detail: 'Certified hypnotherapy with emphasis on relaxation skills, habit support, and collaborative goal-setting.',
  },
  {
    year: 'Ongoing',
    icon: ShieldCheck,
    title: 'Board recognition & professional standards',
    detail: 'Commitment to continuing education, ethical practice, and clear communication with your care team.',
  },
]
