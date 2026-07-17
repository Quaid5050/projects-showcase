// Central image configuration file
// All paths reference files inside /public/images/

export interface ImageConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const images = {
  home: {
    hero: {
      src: "/images/home/hero.jpg",
      alt: "Children playing and learning in a bright, cheerful daycare classroom",
      width: 1600,
      height: 900,
    },
    welcome1: {
      src: "/images/home-welcome1.png",
      alt: "A child exploring colorful educational materials at a daycare",
      width: 800,
      height: 1000,
    },
    welcome2: {
      src: "/images/home-welcome2png.png",
      alt: "Children engaged in creative art activities",
      width: 600,
      height: 600,
    },
    welcome3: {
      src: "/images/home-welcome3.png",
      alt: "A caregiver reading a colorful storybook to a group of children",
      width: 600,
      height: 600,
    },
    spanish: {
      src: "/images/home-spanish.png",
      alt: "Children learning language through songs and play activities",
      width: 900,
      height: 600,
    },
    meals: {
      src: "/images/home-meals.png",
      alt: "Healthy, colorful meals prepared for children at daycare",
      width: 900,
      height: 600,
    },
    day1: {
      src: "/images/home-day1.png",
      alt: "Children arriving and settling in for a warm morning at daycare",
      width: 700,
      height: 500,
    },
    day2: {
      src: "/images/home-day2.png",
      alt: "Children engaged in hands-on learning play activities",
      width: 700,
      height: 500,
    },
    day3: {
      src: "/images/home-day3.png",
      alt: "Creative art and craft time at the daycare",
      width: 700,
      height: 500,
    },
    day4: {
      src: "/images/home-day4.png",
      alt: "Children learning Spanish through songs and play at daycare",
      width: 700,
      height: 500,
    },
    day5: {
      src: "/images/home-day5.png",
      alt: "Healthy and nutritious meals served to children at daycare",
      width: 700,
      height: 500,
    },
    day6: {
      src: "/images/home-day6.png",
      alt: "A parent reuniting with their child at the end of a happy daycare day",
      width: 700,
      height: 500,
    },
  },
  about: {
    hero: {
      src: "/images/about-hero.png",
      alt: "A warm and welcoming childcare environment with soft lighting",
      width: 1600,
      height: 900,
    },
    story1: {
      src: "/images/about-story1.png",
      alt: "Children playing together in a nurturing daycare setting",
      width: 700,
      height: 500,
    },
    story2: {
      src: "/images/about-story2.png",
      alt: "A caregiver giving gentle attention to a young child",
      width: 700,
      height: 500,
    },
  },
  services: {
    hero: {
      src: "/images/services-hero.png",
      alt: "Children engaged in colorful learning activities at a daycare program",
      width: 1600,
      height: 900,
    },
    infant: {
      src: "/images/services-infant.png",
      alt: "A caregiver gently caring for an infant in a safe nursery setting",
      width: 700,
      height: 500,
    },
    toddler: {
      src: "/images/services-toddler.png",
      alt: "Toddlers exploring toys and learning materials together",
      width: 700,
      height: 500,
    },
    preschool: {
      src: "/images/services-preschool.png",
      alt: "Preschool-age children engaged in early learning activities",
      width: 700,
      height: 500,
    },
  },
  booking: {
    hero: {
      src: "/images/Booking-hero.png",
      alt: "A welcoming daycare space ready to receive visiting families",
      width: 1600,
      height: 900,
    },
    sidebar: {
      src: "/images/booking-sidebar.png",
      alt: "A warm and welcoming daycare space ready to receive visiting families",
      width: 600,
      height: 700,
    },
  },
  contact: {
    hero: {
      src: "/images/contact-hero.png",
      alt: "A friendly and approachable daycare environment for families",
      width: 1600,
      height: 900,
    },
  },
  privacy: {
    hero: {
      src: "/images/privacy-hero.png",
      alt: "A caring childcare provider with a young child",
      width: 1600,
      height: 900,
    },
  },
};
