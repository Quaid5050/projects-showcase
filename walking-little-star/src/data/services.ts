export interface ServiceProgram {
  id: string;
  title: string;
  subtitle: string;
  ageRange: string;
  description: string;
  features: string[];
  color: string;
  icon: string;
}

export const programs: ServiceProgram[] = [
  {
    id: "infant",
    title: "Infant Care",
    subtitle: "Ages 2–12 months",
    ageRange: "2–12 months",
    description:
      "A gentle, nurturing space where your baby's earliest days are filled with comfort, connection, and safe exploration.",
    features: [
      "Gentle and comforting daily routines",
      "Safe sensory experiences and exploration",
      "Age-appropriate interaction and stimulation",
      "Early communication and bonding",
      "Individual attention and responsive care",
      "Warm, calm, and safe environment",
    ],
    color: "peach",
    icon: "Heart",
  },
  {
    id: "toddler",
    title: "Toddler Care",
    subtitle: "Ages 1–3 years",
    ageRange: "1–3 years",
    description:
      "An active, encouraging environment where toddlers can move, communicate, and grow with confidence.",
    features: [
      "Language development and communication",
      "Movement and physical activity",
      "Social skills and peer interactions",
      "Creative play and imaginative exploration",
      "Consistent daily routines",
      "Growing independence and confidence",
    ],
    color: "sky",
    icon: "Star",
  },
  {
    id: "preschool",
    title: "Preschool Preparation",
    subtitle: "Ages 3–5 years",
    ageRange: "3–5 years",
    description:
      "A playful, structured learning environment that helps children build the skills and confidence they need for preschool.",
    features: [
      "Early literacy and storytelling",
      "Numbers, shapes, and early math concepts",
      "Listening and communication skills",
      "Fine motor activities and creative arts",
      "Spanish language exposure",
      "School-readiness experiences",
    ],
    color: "navy",
    icon: "BookOpen",
  },
];

export const enrichmentActivities = [
  {
    id: "spanish",
    title: "Spanish Learning",
    description:
      "Fun, natural Spanish language exposure woven into songs, greetings, stories, and everyday routines.",
    icon: "Languages",
  },
  {
    id: "art",
    title: "Art & Creative Expression",
    description:
      "Painting, drawing, sculpting, and crafting activities that encourage self-expression and fine motor development.",
    icon: "Palette",
  },
  {
    id: "music",
    title: "Music & Movement",
    description:
      "Songs, rhythm activities, dancing, and movement games that build coordination, listening skills, and joy.",
    icon: "Music",
  },
  {
    id: "stories",
    title: "Storytime & Early Literacy",
    description:
      "Daily reading, storytelling, and language-rich activities that spark a lifelong love of books and learning.",
    icon: "BookOpen",
  },
  {
    id: "sensory",
    title: "Sensory Play",
    description:
      "Thoughtfully planned sensory experiences that support cognitive development, curiosity, and creative thinking.",
    icon: "Sparkles",
  },
  {
    id: "social",
    title: "Social & Emotional Growth",
    description:
      "Activities and routines that help children build friendships, manage feelings, and develop empathy.",
    icon: "Users",
  },
];

export const dailySchedule = [
  { time: "Morning", activity: "Arrival & Welcome Connection", description: "Warm greetings, settling in, and morning circle time" },
  { time: "Mid-Morning", activity: "Learning Through Play", description: "Age-appropriate activities, exploration, and discovery" },
  { time: "Late Morning", activity: "Creative Activities", description: "Art, music, sensory play, and imaginative exploration" },
  { time: "Late Morning", activity: "Spanish Learning", description: "Songs, words, and stories in Spanish" },
  { time: "Midday", activity: "Healthy Meals & Snacks", description: "Nutritious meals served family-style" },
  { time: "Early Afternoon", activity: "Rest & Quiet Time", description: "Restful time suited to each child's needs" },
  { time: "Afternoon", activity: "Outdoor or Movement Activities", description: "Fresh air, movement, and active play" },
  { time: "Late Afternoon", activity: "Family Updates & Pickup", description: "Daily updates shared with families" },
];
