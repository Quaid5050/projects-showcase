# Royal Empire Renovation Inc. - Website

A modern, fully responsive construction business website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Premium white, black, and red color scheme
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **5 Complete Pages**:
  - Home (with hero, services, projects, testimonials, CTA sections)
  - About
  - Services
  - Projects/Gallery (with category filtering)
  - Contact (with form and map)
- **Reusable Components**: Modular architecture for easy maintenance
- **Smooth Animations**: Hover effects and transitions throughout
- **Sticky Navigation**: Fixed header with mobile hamburger menu
- **SEO Optimized**: Proper meta tags and semantic HTML
- **TypeScript**: Fully typed for better developer experience
- **Mock Data**: Ready-to-use sample data for services, projects, and testimonials

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image component with Pexels placeholder images

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services page
│   ├── projects/page.tsx     # Projects page
│   ├── contact/page.tsx      # Contact page
│   ├── layout.tsx            # Root layout with Navbar & Footer
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation with mobile menu
│   ├── Footer.tsx            # Footer with links and contact info
│   ├── Hero.tsx              # Reusable hero section
│   ├── ServiceCard.tsx       # Service display card
│   ├── ProjectCard.tsx       # Project display card
│   ├── TestimonialCard.tsx   # Testimonial display card
│   ├── CTASection.tsx        # Call-to-action section
│   └── ContactForm.tsx       # Contact form component
├── data/
│   ├── services.ts           # Mock services data
│   ├── projects.ts           # Mock projects data
│   └── testimonials.ts       # Mock testimonials data
├── types/
│   └── index.ts              # TypeScript type definitions
└── public/                   # Static assets
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Services Offered

- Home Renovation
- Kitchen Remodeling
- Bathroom Remodeling
- Landscaping
- Interlocking
- Exterior Upgrades

## Key Components

### Navbar
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Call-to-action button
- Smooth scroll behavior

### Hero Section
- Full-width background images
- Customizable title, subtitle, and description
- Dual CTA buttons
- Responsive design

### Service Cards
- Image with overlay
- Feature lists
- Icon support
- Hover animations

### Project Cards
- Category tags
- Hover effects with details reveal
- Responsive grid layout

### Testimonial Cards
- Star ratings
- Client photos
- Hover effects

### Contact Form
- Form validation
- Service selection dropdown
- Success message feedback
- Fully styled inputs

## Customization

### Colors
The color scheme uses Tailwind CSS classes. Main colors:
- Primary Red: `red-600` (hover: `red-700`)
- Black: `black`
- White: `white`
- Gray shades: `gray-50` to `gray-900`

### Images
Replace Pexels placeholder URLs in the data files with your own images:
- `data/services.ts`
- `data/projects.ts`
- `data/testimonials.ts`
- Hero sections in each page

### Content
Update mock data in:
- `data/services.ts` - Service offerings
- `data/projects.ts` - Portfolio projects
- `data/testimonials.ts` - Client reviews

### Contact Information
Update contact details in:
- `components/Footer.tsx`
- `components/Navbar.tsx`
- `app/contact/page.tsx`

## Performance

- Optimized images with Next.js Image component
- Static page generation for fast loading
- Minimal JavaScript bundle
- CSS optimized with Tailwind's JIT compiler

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This is a demonstration project for Royal Empire Renovation Inc.

## Contact

For inquiries about this project, please contact:
- Phone: +1 (555) 123-4567
- Email: info@royalempire.com
- Address: 123 Renovation Ave, Toronto, ON M5H 2N2
