# Junk Pro Service Website

Modern, premium, animated lead-generation website for Junk Pro Service.

## Quick Start

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Add Your Logo

Replace `src/assets/images/logo.svg` with your actual logo file (`logo.png` or `logo.svg`).  
If using PNG, update the 3 logo imports in:
- `src/components/Header.jsx`
- `src/components/Footer.jsx`  
- `src/components/IntroWrapper.jsx`

Change `logo.svg` → `logo.png` in each file.

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About Us | `/about` |
| Services | `/services` |
| Contact | `/contact` |

## Build for Production

```bash
npm run build
```

Output in `dist/` folder — ready to deploy to any host (Netlify, Vercel, etc.).

## File Structure

```
src/
  components/
    Header.jsx          – Sticky transparent → glass header
    Footer.jsx          – Premium black footer
    IntroWrapper.jsx    – Cinematic loading screen
    Hero.jsx            – Full-screen home hero
    PageHero.jsx        – Inner page heroes
    ServiceCard.jsx     – Animated service cards
    LeadForm.jsx        – Lead generation form
    CTASection.jsx      – Call-to-action sections
    ProcessSection.jsx  – 4-step process
    WhyChooseUs.jsx     – Reason cards
    AnimatedSection.jsx – Scroll reveal wrapper
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Contact.jsx
  styles/
    variables.css   – Colors, fonts, spacing tokens
    globals.css     – Reset & base styles
    layout.css      – Grids & layout utilities
    components.css  – UI component styles
    hero.css        – Hero section styles
    animations.css  – All animations & transitions
    responsive.css  – Mobile & tablet breakpoints
```

## Brand Colors

| Color | Hex |
|-------|-----|
| Yellow | `#FFC107` |
| Black | `#000000` |
| White | `#FFFFFF` |
