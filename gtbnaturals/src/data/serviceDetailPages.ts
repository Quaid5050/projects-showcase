export type ServiceDetailContent = {
  path: string
  title: string
  subtitle: string
  whatItIs: string
  /** Ordered scope / duties from the practice description (shown in full on detail + services pages). */
  roleInPractice?: string[]
  whoMaySupport: string[]
  whatToExpect: string[]
  benefits: string[]
  process: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export const serviceDetailMap: Record<string, ServiceDetailContent> = {
  '/natural-medicine': {
    path: '/natural-medicine',
    title: 'Doctorate of Natural Medicine',
    subtitle:
      'Assessment and complementary support for emotional, mental, and physical . themes through non-invasive modalities.',
    whatItIs:
      'The assessment and treatment of emotional, mental and physical disorders using non-invasive modalities to promote and restore health and ..\n\nAcupressure, hydrotherapy, herbalism and botanical medicine, clinical nutrition, health coaching, and energy work are some of the modalities used.',
    whoMaySupport: [
      'Clients seeking whole-person education and non-invasive . strategies alongside their medical team',
      'Those exploring stress resilience, sleep, digestion, energy, or mood balance in a holistic framework',
      'Anyone wanting coordinated care that may layer with massage, herbal, or manual therapy visits when appropriate',
    ],
    whatToExpect: [
      'A thorough review of your goals, routines, comfort with modalities, and boundaries of natural medicine scope',
      'Plain-language explanations of how different modalities may fit your situation—without diagnostic or cure claims',
      'Collaborative planning with practical steps you can take between visits, adjusted over time',
    ],
    benefits: [
      'Individualized attention across body, mind, and lifestyle themes',
      'Education on botanical medicine, nutrition, gentle modalities, and self-care skills',
      'Supportive pacing aligned with your capacity for change',
    ],
    process: [
      { title: 'Consultation', description: 'Clarify goals, history, and what “feeling better” means for you.' },
      { title: 'Holistic assessment', description: 'Review patterns across stress, sleep, movement, and nutrition themes.' },
      { title: 'Plan & education', description: 'Co-create next steps with transparent expectations—no guarantees.' },
      { title: 'Follow-up', description: 'Refine modalities, celebrate progress, and adapt as your needs evolve.' },
    ],
    faqs: [
      {
        question: 'Will this replace my doctor?',
        answer:
          'No. Natural medicine here is complementary . support. Continue prescribed care and reach out to your physician for medical questions or emergencies.',
      },
      {
        question: 'Is herbalism part of every visit?',
        answer:
          'Some visits emphasize herbs; others focus on nutrition, acupressure, hydrotherapy, coaching, or energy-informed relaxation. Dedicated herbal consultations are available when deeper formulation work is needed.',
      },
    ],
  },
  '/herbal-.': {
    path: '/herbal-.',
    title: 'Professional Herbalist',
    subtitle:
      'Plant-informed . support—from assessment and formulations to education, safety, and sustainable sourcing.',
    whatItIs:
      'A professional herbalist is a healthcare professional who uses plants and plant substances to support health, prevent illness, and help manage medical conditions. Herbalists combine traditional knowledge with modern understanding of human biology, nutrition, and . to create individualized plans.',
    roleInPractice: [
      "Assess clients’ health concerns, lifestyle, and medical history",
      'Identify appropriate herbs and natural remedies for specific conditions',
      'Prepare and dispense herbal formulations (teas, tinctures, capsules, oils, salves)',
      'Educate clients on dosage, preparation methods, and safety considerations',
      "Monitor clients’ progress and adjust treatments as needed",
      'Maintain detailed client records and confidentiality',
      'Source and quality-check herbs (cultivation, harvesting, storage, sustainability)',
    ],
    whoMaySupport: [
      'Clients curious about botanical options with careful attention to interactions and contraindications',
      'Those seeking education on preparation, dosage, and quality signals for herbs',
      'Individuals who want monitoring as they adjust herbal routines over time',
    ],
    whatToExpect: [
      'Review of medications, allergies, and sensitivities relevant to botanical safety',
      'Clear explanation of proposed preparations and why they may be considered',
      'Encouragement to coordinate with your prescribing clinician when appropriate',
    ],
    benefits: [
      'Personalized herbal preparation suggestions within a . scope',
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
        question: 'Do you diagnose nutritional or disease states?',
        answer:
          'We do not diagnose disease. Conversations stay within . education and supportive botanical planning.',
      },
    ],
  },
  '/manual-osteopathy': {
    path: '/manual-osteopathy',
    title: 'Manual Osteopathic Therapist',
    subtitle: 'Hands-on assessment and treatment to support structure, function, and the body’s self-healing capacity.',
    whatItIs:
      'A manual osteopathic therapist is a healthcare professional who uses hands-on assessment and treatment techniques to improve the body’s structure, function, and self-healing capacity. The role focuses on the musculoskeletal system while recognizing the interrelationship between muscles, joints, fascia, organs, and the nervous system. Treatment is individualized and holistic, emphasizing patient education and functional improvement.',
    roleInPractice: [
      'Conduct detailed client assessments, including:',
      'Case history and lifestyle review',
      'Postural and biomechanical evaluation',
      'Palpation and movement testing',
      'Identify somatic dysfunctions affecting mobility and function',
      'Apply manual treatment techniques, such as:',
      'Soft tissue and myofascial release',
      'Joint mobilization and articulation',
      'Muscle energy techniques',
      'Cranial and visceral techniques (scope-dependent)',
      'Develop and implement personalized treatment plans',
      'Educate clients on posture, ergonomics, exercise, and injury prevention',
    ],
    whoMaySupport: [
      'Clients with posture strain, recurring stiffness, or movement limitations (with appropriate medical clearance when needed)',
      'Active people seeking recovery-friendly supportive bodywork',
      'Those exploring gentle structural care alongside other . services',
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
        question: 'Is this the same as chiropractic?',
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
    title: 'Certified Hypnotherapist',
    subtitle:
      'Professionally credentialed hypnosis and evidence-informed hypnotherapy for emotional, behavioral, cognitive, and psychosomatic themes.',
    whatItIs:
      'A certified hypnotherapist is a professionally trained and credentialed practitioner who uses hypnosis and evidence-informed hypnotherapeutic techniques to help clients address emotional, behavioral, cognitive, and psychosomatic concerns. A certified hypnotherapist facilitates focused relaxation and heightened awareness to support positive change, personal development, and symptom management.',
    roleInPractice: [
      'Explain hypnotherapy processes, obtain informed consent, and set realistic expectations',
      'Design individualized hypnotherapy treatment plans aligned with certification standards',
      'Guide clients into hypnotic states using approved induction and deepening techniques',
      'Apply therapeutic interventions such as:',
      'Suggestion therapy, visualization, and imagery',
      'Regression or parts work (scope-dependent)',
      'Habit modification techniques',
      'Stress, anxiety, and confidence support methods',
      'Teach self-hypnosis and relaxation skills when appropriate',
      "Monitor client progress and adapt techniques accordingly",
    ],
    whoMaySupport: [
      'Clients exploring relaxation-based support for stress, habits, or confidence',
      'Those interested in visualization and suggestion techniques aligned with their values',
      'Individuals seeking skills-based tools they can practice between sessions',
    ],
    whatToExpect: [
      'Conversations about goals, boundaries, and what hypnosis is (and is not)',
      'Progressive relaxation inductions paced to your nervous system',
      'Optional anchors for home practice, such as brief recordings or written cues',
    ],
    benefits: [
      'May help some clients feel more grounded, focused, or resilient',
      'Collaborative approach—you can pause or stop at any time',
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
    title: 'Massage Therapist',
    subtitle: 'Hands-on soft-tissue care for relaxation, comfort, circulation, stress reduction, and movement ease.',
    whatItIs:
      'A massage therapist is a trained healthcare or . professional who uses hands-on techniques to manipulate soft tissues of the body to promote relaxation, relieve pain, reduce stress, improve circulation, and support overall physical and mental well-being.',
    roleInPractice: [
      'Conduct client consultations to assess health history, concerns, and treatment goals',
      'Evaluate posture, muscle tension, range of motion, and physical limitations',
      'Develop individualized massage treatment plans',
      'Perform a variety of massage techniques, such as:',
      'Cupping therapy, including fire cupping',
      'Swedish massage',
      'Deep tissue massage',
      'Sports massage',
      'Trigger point therapy',
      'Myofascial release',
      'Adjust pressure and techniques to client comfort and clinical needs',
      'Educate clients on stretching and self-care, posture and ergonomics, stress management, and injury prevention',
    ],
    whoMaySupport: [
      'Clients managing stress-related muscle tension or postural strain',
      'Those seeking supportive soft-tissue care alongside injury recovery (with medical clearance when needed)',
      'Anyone wanting restorative bodywork as part of a broader . routine',
    ],
    whatToExpect: [
      'Intake covering health history, allergies, and areas to emphasize or avoid',
      'Clear draping, temperature comfort, and ongoing check-ins on pressure',
      'After-care tips such as hydration, movement, or gentle stretching',
    ],
    benefits: [
      'May help promote relaxation and circulation for many clients',
      'Can support posture awareness and everyday movement comfort',
      'Therapeutic options layered to match your goals that day',
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
          'Cupping or fire cupping may be offered when appropriate and with your informed consent.',
      },
    ],
  },
}

export function getServiceDetail(path: string): ServiceDetailContent | undefined {
  return serviceDetailMap[path]
}
