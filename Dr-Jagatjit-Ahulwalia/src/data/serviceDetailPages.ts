export type ServiceDetailContent = {
  path: string
  title: string
  subtitle: string
  whatItIs: string
  whoMaySupport: string[]
  whatToExpect: string[]
  benefits: string[]
  process: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export const serviceDetailMap: Record<string, ServiceDetailContent> = {
  '/natural-medicine': {
    path: '/natural-medicine',
    title: 'Natural Medicine',
    subtitle: 'Wellness-focused assessment and complementary support across body, mind, and lifestyle.',
    whatItIs:
      'Natural medicine visits emphasize education, informed choice, and non-invasive modalities that may support emotional balance, restorative sleep, digestion, energy, and stress resilience. Care is collaborative and individualized—not a substitute for medical diagnosis or emergency services.',
    whoMaySupport: [
      'Clients seeking holistic context for chronic stress, low energy, or sleep disruption',
      'Those exploring nutrition-forward education alongside their physician’s guidance',
      'Individuals interested in hydrotherapy, acupressure, or energy-informed relaxation tools',
      'Anyone wanting a whole-person plan that may layer with massage or osteopathic care',
    ],
    whatToExpect: [
      'A thorough conversation about your goals, routines, and comfort with different modalities',
      'Clear explanation of scope, boundaries, and how natural medicine complements medical care',
      'Practical recommendations you can implement between visits, adjusted over time',
    ],
    benefits: [
      'Individualized wellness plans aligned with your priorities',
      'Education on botanical medicine, lifestyle patterns, and gentle self-care skills',
      'Supportive pacing that respects your nervous system capacity for change',
    ],
    process: [
      { title: 'Consultation', description: 'Clarify goals, history, and what “feeling better” means for you.' },
      { title: 'Holistic assessment', description: 'Review patterns across sleep, stress, movement, and nutrition themes.' },
      { title: 'Plan & education', description: 'Co-create next steps with transparent expectations—no guarantees.' },
      { title: 'Follow-up', description: 'Refine modalities, celebrate wins, and adapt as your needs evolve.' },
    ],
    faqs: [
      {
        question: 'Will this replace my doctor?',
        answer:
          'No. Natural medicine here is complementary wellness support. Continue prescribed care and reach out to your physician for medical questions or emergencies.',
      },
      {
        question: 'Do you use herbs in natural medicine visits?',
        answer:
          'Herbal wellness may be discussed when appropriate. Some clients also book dedicated herbal consultations for deeper formulation guidance.',
      },
    ],
  },
  '/herbal-wellness': {
    path: '/herbal-wellness',
    title: 'Herbal Wellness',
    subtitle: 'Plant-informed education, preparation guidance, and safety-forward herbal support.',
    whatItIs:
      'Herbal wellness support explores teas, tinctures, capsules, oils, and salves as potential complements to your broader care plan. Emphasis is placed on sourcing awareness, contraindications, interactions, and realistic timelines—never promises to “fix” complex conditions overnight.',
    whoMaySupport: [
      'Clients curious about botanical options alongside conventional care',
      'Those seeking education on dosage, preparation methods, and quality signals',
      'Individuals who want monitoring and check-ins as they try new herbal routines',
    ],
    whatToExpect: [
      'Review of medications, allergies, and sensitivities relevant to botanical safety',
      'Plain-language explanations of proposed preparations and why they may be considered',
      'Encouragement to coordinate with your prescribing clinician when appropriate',
    ],
    benefits: [
      'Personalized herbal preparation suggestions within a wellness scope',
      'Progress monitoring and adjustments based on your feedback',
      'Empowerment through education—not dependency',
    ],
    process: [
      { title: 'Intake', description: 'Understand goals, contraindications, and comfort with herbal formats.' },
      { title: 'Plan', description: 'Outline gentle, staged introductions where helpful.' },
      { title: 'Education', description: 'Teach preparation, timing, and what to notice week to week.' },
      { title: 'Review', description: 'Refine or pause approaches based on your experience and priorities.' },
    ],
    faqs: [
      {
        question: 'Are herbs safe with my medications?',
        answer:
          'Interactions can exist. We review your medication list carefully and may defer or refer when risk is unclear—your safety comes first.',
      },
      {
        question: 'Do you diagnose herbal deficiencies?',
        answer:
          'We do not diagnose disease states. Conversations stay within wellness education and supportive botanical planning.',
      },
    ],
  },
  '/manual-osteopathy': {
    path: '/manual-osteopathy',
    title: 'Manual Osteopathy',
    subtitle: 'Hands-on support for mobility, posture, comfort, and nervous system ease.',
    whatItIs:
      'Manual osteopathic therapy uses soft tissue techniques, myofascial release, joint mobilization, and muscle energy approaches to support how you move and rest. Sessions include education so you can reinforce changes with mindful movement and self-care between visits.',
    whoMaySupport: [
      'Clients with posture strain, desk-related tension, or recurring stiffness',
      'Athletes and active people seeking recovery-friendly bodywork',
      'Those exploring gentle support after medical clearance for injury or surgery',
    ],
    whatToExpect: [
      'Assessment that considers structure, breath, and daily movement habits',
      'Hands-on work at a pressure that feels sustainable for your body',
      'Suggestions for ergonomics, pacing, and home exercises when helpful',
    ],
    benefits: [
      'May help improve comfort with movement and daily activities for some clients',
      'Education that builds confidence in your body’s capacity to adapt',
      'Non-invasive modalities with transparent consent throughout',
    ],
    process: [
      { title: 'Listen & assess', description: 'Observe posture, mobility, and areas of sensitivity.' },
      { title: 'Hands-on session', description: 'Apply gentle techniques tailored to your presentation.' },
      { title: 'Integrate', description: 'Discuss what you noticed and how to support progress at home.' },
      { title: 'Re-evaluate', description: 'Adjust techniques and frequency based on your feedback.' },
    ],
    faqs: [
      {
        question: 'Is osteopathy the same as chiropractic?',
        answer:
          'They differ in philosophy and technique styles. Here, manual osteopathic therapy is provided within the practitioner’s training and scope—ask questions anytime.',
      },
      {
        question: 'Will it hurt?',
        answer:
          'Most techniques are gentle. You are encouraged to speak up immediately if anything feels too intense.',
      },
    ],
  },
  '/hypnotherapy': {
    path: '/hypnotherapy',
    title: 'Hypnotherapy',
    subtitle: 'Collaborative relaxation and visualization for habit and stress support.',
    whatItIs:
      'Hypnotherapy uses guided relaxation, focused attention, and suggestion therapy to support emotional regulation, habit change, and stress patterns. You remain in control, can pause at any time, and are invited to practice self-hypnosis skills that reinforce your goals between sessions.',
    whoMaySupport: [
      'Clients exploring support for stress, sleep initiation, or performance anxiety',
      'Those seeking gentle habit-support alongside other wellness modalities',
      'Individuals interested in visualization tools for comfort during medical procedures (with clinician coordination)',
    ],
    whatToExpect: [
      'Conversations about goals, boundaries, and what hypnosis is (and is not)',
      'Progressive relaxation inductions paced to your nervous system',
      'Optional audio or written anchors for home practice',
    ],
    benefits: [
      'May help some clients feel more grounded, focused, or resilient',
      'Skills-based approach you can carry beyond the therapy room',
      'Evidence-informed techniques delivered with warmth and clarity',
    ],
    process: [
      { title: 'Goal clarity', description: 'Define realistic outcomes and any contraindications.' },
      { title: 'Induction practice', description: 'Build comfort with relaxation depth over time.' },
      { title: 'Therapeutic themes', description: 'Use visualization and suggestion aligned with your values.' },
      { title: 'Integration', description: 'Reinforce skills and evaluate next steps respectfully.' },
    ],
    faqs: [
      {
        question: 'Can everyone be hypnotized?',
        answer:
          'Responsiveness varies. If hypnotherapy is not a fit, we explore other supportive modalities without judgment.',
      },
      {
        question: 'Will I lose control?',
        answer:
          'No. Hypnotherapy is collaborative; you can open your eyes or stop the session whenever you choose.',
      },
    ],
  },
  '/massage-therapy': {
    path: '/massage-therapy',
    title: 'Massage Therapy',
    subtitle: 'Therapeutic bodywork for relaxation, tension patterns, and movement ease.',
    whatItIs:
      'Massage therapy sessions may incorporate Swedish, deep tissue, sports massage, trigger point therapy, myofascial release, TMJ-focused work, and cupping when appropriate. Treatment plans are individualized and prioritize your comfort, pressure preferences, and any relevant medical guidance you are following.',
    whoMaySupport: [
      'Clients managing stress-related muscle tension or desk posture strain',
      'Those seeking supportive soft-tissue care alongside injury recovery (with clearance)',
      'Anyone wanting restorative bodywork as part of a broader wellness routine',
    ],
    whatToExpect: [
      'Intake covering health history, allergies, and areas to emphasize or avoid',
      'Clear draping, temperature comfort, and ongoing check-ins on pressure',
      'After-care tips such as hydration, movement, or gentle stretching',
    ],
    benefits: [
      'May help promote relaxation and circulation for many clients',
      'Can support posture awareness and everyday movement confidence',
      'Opportunities to combine with cupping or focused TMJ techniques when suitable',
    ],
    process: [
      { title: 'Plan the session', description: 'Agree on focus areas, depth, and duration.' },
      { title: 'Therapeutic massage', description: 'Blend modalities to match your goals that day.' },
      { title: 'Check-out', description: 'Note what helped and what to continue at home.' },
      { title: 'Next visit', description: 'Adjust frequency and techniques based on progress.' },
    ],
    faqs: [
      {
        question: 'Do you offer direct billing?',
        answer:
          'Policies vary by insurer. Ask during booking and we will share the most current options available.',
      },
      {
        question: 'Is cupping included?',
        answer:
          'Cupping or fire cupping may be offered when clinically appropriate and with your informed consent.',
      },
    ],
  },
}

export function getServiceDetail(path: string): ServiceDetailContent | undefined {
  return serviceDetailMap[path]
}
