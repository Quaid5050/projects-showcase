export type FaqItem = { id: string; question: string; answer: string }

export const faqItems: FaqItem[] = [
  {
    id: 'first-consult',
    question: 'What happens during the first consultation?',
    answer:
      'Your first visit focuses on understanding your story, wellness goals, and what you hope to shift. We review relevant history at a pace that feels comfortable, discuss consent and scope, and outline options for holistic support. You leave with clarity on next steps—not pressure.',
  },
  {
    id: 'replacement',
    question: 'Is natural medicine a replacement for medical care?',
    answer:
      'No. Complementary wellness care may support wellbeing alongside conventional care when appropriate. It is not a substitute for diagnosis, prescription medication management, or emergency services. We encourage coordination with your licensed physician for medical concerns.',
  },
  {
    id: 'which-service',
    question: 'Which service is right for me?',
    answer:
      'Many clients benefit from a blend of modalities. During consultation and holistic assessment, we explore what may best match your goals—whether that is bodywork, herbal wellness support, mind–body tools, or natural medicine education—and build an individualized wellness plan together.',
  },
  {
    id: 'plans',
    question: 'Do you create personalized wellness plans?',
    answer:
      'Yes. Plans are individualized and evolve over time. They may include lifestyle education, herbal preparation guidance where appropriate, manual therapy pacing, hypnotherapy themes, and home-care suggestions—all framed as wellness support, not guaranteed outcomes.',
  },
  {
    id: 'osteopathy-expect',
    question: 'What should I expect from manual osteopathy?',
    answer:
      'Sessions typically include assessment, hands-on soft tissue and joint-friendly techniques, and education you can use between visits. The experience is generally gentle; communication about comfort and pressure is encouraged throughout.',
  },
  {
    id: 'herbal',
    question: 'What is herbal wellness support?',
    answer:
      'Herbal wellness support uses plant-based preparations such as teas, tinctures, oils, or salves when appropriate, with emphasis on safety, sourcing, dosage education, and monitoring. It is educational and supportive—not a promise to resolve every concern.',
  },
  {
    id: 'hypno-safe',
    question: 'Is hypnotherapy safe?',
    answer:
      'Hypnotherapy is a collaborative, consent-based process using relaxation and guided imagery. You remain in control and can pause at any time. It may not be suitable for every person or situation; we screen thoughtfully and refer when needed.',
  },
  {
    id: 'massage-stress',
    question: 'Do you offer massage for stress and pain?',
    answer:
      'Yes. Therapeutic massage may help with relaxation, muscle tension, stress reduction, and mobility support. Modalities are selected based on your presentation, preferences, and any relevant medical guidance you are receiving.',
  },
  {
    id: 'multiple',
    question: 'Can I book for multiple concerns?',
    answer:
      'Absolutely. Whole-person care often touches more than one area. We prioritize what matters most to you now, then layer supportive modalities in a way that feels sustainable.',
  },
  {
    id: 'emergency',
    question: 'What symptoms require emergency medical care?',
    answer:
      'Seek emergency care for chest pain, severe breathing difficulty, sudden weakness or numbness, confusion, severe allergic reactions, uncontrolled bleeding, thoughts of self-harm, or any symptom that feels urgent or rapidly worsening.',
  },
]

export const faqPreviewIds = ['first-consult', 'replacement', 'which-service', 'emergency'] as const
