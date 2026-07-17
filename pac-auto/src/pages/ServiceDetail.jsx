import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ServiceDetail.css'

// Enhanced service data with detailed information
const serviceData = {
  'vinyl-wrapping': {
    id: 'vinyl-wrapping',
    title: 'Vinyl Wrapping',
    tagline: 'Unique design that is formal and resilient to damage',
    description: 'Vinyl wrapping is a perfect solution to improve the appearance of your vehicle without requiring permanent paint modifications. This high-quality wrapping or film is applied professionally to the outer surface of your vehicle, which provides a protective layer against minor damage like sun damage and scratches. It also modifies the colour, finishing and design without affecting the original paint.',
    image: '/vinyl-wrapping-hero.jpg',
    gallery: ['/vinyl-1.jpg', '/vinyl-2.jpg', '/vinyl-3.jpg', '/vinyl-4.jpg', '/vinyl-5.jpg', '/vinyl-6.jpg'],
    features: [
      'Car wash, to get rid of dirt and dust',
      'Careful vinyl wrapping on surface',
      'Cutting and fitting to get smooth, clean edges',
      'Proper examination to make sure of finishing is perfect and even'
    ],
    benefits: [
      'It changes your car\'s look',
      'Helps protect the original paint from scratches',
      'You can easily remove it later without damage to the paint',
      'It is cheaper than a full repainting',
      'It\'s Ideal if: You drive your car every day and want to keep it clean',
      'It\'s a display car or custom model that needs a good polish',
      'People who want their car to look new and shiny every time',
      'It\'s a new car that needs to be protected immediately',
      'It\'s a luxury car that needs more care and attention'
    ],
    included: [
      'Professional vinyl film application',
      'Surface preparation and cleaning',
      'Precision cutting and fitting',
      'Edge finishing and quality inspection',
      'Heat treatment for durability',
      'Protective coating application'
    ],
    price: 'Starting from $299',
    duration: '2-3 days',
    warranty: '3 years warranty'
  },
  'paint-correction': {
    id: 'paint-correction',
    title: 'Paint Correction',
    tagline: 'Provides a cleaner and smoother appearance',
    description: 'Paint correction is a detailing process that helps your car look like new. It removes dull spots, light scratches, and swirl marks that may come from washing or everyday use. The surface is carefully polished using professional methods to bring back its shine and look. It doesn\'t change the paint, but it does make it look much cleaner, smoother, and more even.',
    image: '/paint-correction-hero.jpg',
    gallery: ['/paint-1.jpg', '/paint-2.jpg', '/paint-3.jpg', '/paint-4.jpg', '/paint-5.jpg', '/paint-6.jpg'],
    features: [
      'Detailed car wash to get it ready',
      'A check for scratches and marks on the paint',
      'Machine Polishing to get rid of swirls and small scratches',
      'Final touches to make the surface shiny and smooth'
    ],
    benefits: [
      'Helps to remove dull spots, swirl marks, and light scratches',
      'Restores a clean, smooth paint surface',
      'Improves the car\'s shine and gloss',
      'Increases the value of vehicle',
      'It is ideal if: Your car has swirl marks, light scratches, or dull paint',
      'You want to improve the shine and overall appearance of your car',
      'The paint looks faded or uneven in some areas',
      'You want your vehicle to look polished without repainting'
    ],
    included: [
      'Multi-stage paint correction process',
      'Professional polishing compounds',
      'Surface decontamination',
      'Paint protection application',
      'Final inspection and quality check'
    ],
    price: 'Starting from $199',
    duration: '1-2 days',
    warranty: '6 months protection'
  },
  'detailing': {
    id: 'detailing',
    title: 'Car Detailing',
    tagline: 'A deep clean and a new, restored look for your car',
    description: 'Car detailing is a thorough, deep-cleaning process that helps your car look and perform better. It cleans all areas of car more deeply than a regular wash, including dirt and stains. The goal is to keep the car clean and maintained.',
    image: '/detailing-hero.jpg',
    gallery: ['/detailing-1.jpg', '/detailing-2.jpg', '/detailing-3.jpg', '/detailing-4.jpg', '/detailing-5.jpg', '/detailing-6.jpg'],
    features: [
      'Detailed car washing to remove dirt and stains',
      'Cleaning of car from inside, which includes floor, dashboard, and seats',
      'Final touch-up to make the car appear tidy, clean, and well-maintained'
    ],
    benefits: [
      'It enhances the appearance of your vehicle',
      'Removes dirt and stains from inside and outside of car',
      'Helps to maintain the car\'s condition',
      'Improves the overall appearance and comfort of car',
      'It\'s ideal if: Your car is looking dirty; you haven\'t cleaned it in a while',
      'You want a fresh and clean feel inside your vehicle',
      'There are dust or stain marks on the seats and surfaces',
      'You want your car to look neat and well-maintained again'
    ],
    included: [
      'Complete exterior wash and wax',
      'Interior deep cleaning',
      'Upholstery and carpet cleaning',
      'Dashboard and console detailing',
      'Window cleaning',
      'Tire dressing'
    ],
    price: 'Starting from $149',
    duration: '4-6 hours',
    warranty: '1 week satisfaction guarantee'
  },
  'ambient-lighting': {
    id: 'ambient-lighting',
    title: 'Ambient Lighting',
    tagline: 'Soft lighting that changes the inside look of your car',
    description: 'Ambient lighting is a simple interior upgrade that adds soft lights inside your car. It is fixed around the doors, dashboard, and foot areas to create an aesthetic look. These lights can change colours and brightness. It makes night driving more relaxing and enhances your car\'s interior.',
    image: '/ambient-lighting-hero.jpg',
    gallery: ['/ambient-1.jpg', '/ambient-2.jpg', '/ambient-3.jpg', '/ambient-4.jpg', '/ambient-5.jpg', '/ambient-6.jpg'],
    features: [
      'Installation of tiny lights inside the car',
      'Connectivity and wiring for a tidy and secure setup',
      'Adjustment and testing of the colour and brightness of lights'
    ],
    benefits: [
      'Makes the interior of your car more contemporary and elegant',
      'At night, it gives off a soft, calming light that makes it easier to see things inside the car',
      'Adds a unique look to the interior',
      'It\'s ideal if: You want your car to stand out at night',
      'You like changing colours with your mood',
      'You want a custom interior feeling',
      'You want a simple upgrade that gets noticed'
    ],
    included: [
      'LED strip installation',
      'Color selection and customization',
      'Professional wiring setup',
      'Remote control for colors and brightness',
      'Clean installation with hidden wiring'
    ],
    price: 'Starting from $249',
    duration: '1 day',
    warranty: '2 years warranty'
  },
  'starlights': {
    id: 'starlights',
    title: 'Starlight Headliner',
    tagline: 'Little lights that make your car look like a sky full of stars',
    description: 'It\'s a car detailing process in which small LED lights are installed on the car\'s roof to make it look like a sky full of stars. These lights can be dim or bright, and in some setups, they can even change colours or twinkle. It gives your car a unique, luxurious look and makes driving at night more relaxing and visually beautiful.',
    image: '/starlights-hero.jpg',
    gallery: ['/starlights-1.jpg', '/starlights-2.jpg', '/starlights-3.jpg', '/starlights-4.jpg', '/starlights-5.jpg', '/starlights-6.jpg'],
    features: [
      'Careful starlight installation',
      'Customised star layout with colour and brightness control',
      'Clean, hidden wiring with safe connections',
      'Final testing and flawless finishing'
    ],
    benefits: [
      'An upgrade that really makes a difference, not just looks nice',
      'It feels like a luxury every time you get in the car, not just when you look at it',
      'Impressive and beautiful interior at night',
      'It is Ideal if: You want a luxury feel without spending much',
      'You drive a lot at night and want a better vibe',
      'You like unique, customised interiors',
      'You want your car to stand out effortlessly'
    ],
    included: [
      'Custom star pattern design',
      'LED starlight installation',
      'Remote control with multiple colors',
      'Professional wiring and installation',
      'Quality inspection and testing'
    ],
    price: 'Starting from $599',
    duration: '2-3 days',
    warranty: '3 years warranty'
  },
  'dashcams': {
    id: 'dashcams',
    title: 'Dashcam',
    tagline: 'Drive with proof, safety, and peace of mind',
    description: 'A dashcam in your car is a reliable way to record everything that happens on the road. It gives you clear video proof in case of accidents, making it drive safe, and helps you stay out of trouble. As long as the wiring is clean and the setup is right, it works perfectly and doesn\'t affect the interior of your car.',
    image: '/dashcam-hero.jpg',
    gallery: ['/dashcam-1.jpg', '/dashcam-2.jpg', '/dashcam-3.jpg', '/dashcam-4.jpg', '/dashcam-5.jpg', '/dashcam-6.jpg'],
    features: [
      'Clean wiring setup (no messy cables hanging)',
      'Proper camera placement for best front & rear view',
      'Secure mounting so it stays firm on every drive',
      'Basic setup & testing so it\'s ready to record instantly'
    ],
    benefits: [
      'Peace of mind while driving and parking',
      'Clear video proof in case of accidents',
      'Helps protect you from false claims',
      'Keep an extra eye on your car when you\'re away',
      'It\'s ideal if: You drive daily or spend long hours on the road',
      'You park your car outside or in public areas',
      'You want extra safety and security for your vehicle',
      'You prefer having video proof for insurance or disputes'
    ],
    included: [
      'Front and rear camera installation',
      'Professional wiring setup',
      'Secure mounting brackets',
      'Memory card installation',
      'Basic setup and testing'
    ],
    price: 'Starting from $199',
    duration: '3-4 hours',
    warranty: '1 year warranty'
  },
  'carplay-installs': {
    id: 'carplay-installs',
    title: 'CarPlay Installation',
    tagline: 'Drive in a smarter way, Stay connected, stay in control',
    description: 'CarPlay installation upgrades your car\'s infotainment system, so your phone connects directly to the screen. You can easily use maps, calls, messages, and music without touching your phone. Everything shows up in a clean, simple layout that\'s easy to control while driving. It helps you stay focused on the road while still staying connected.',
    image: '/carplay-hero.jpg',
    gallery: ['/carplay-1.jpg', '/carplay-2.jpg', '/carplay-3.jpg', '/carplay-4.jpg', '/carplay-5.jpg', '/carplay-6.jpg'],
    features: [
      'Professional installation with clean wiring',
      'Smooth connection with your car\'s screen/system',
      'Set up essential apps (maps, music, calls)',
      'Full testing to make sure everything runs perfectly'
    ],
    benefits: [
      'Easy navigation with live maps on your screen',
      'Safer driving with hands-free calls & controls',
      'Quick access to music, messages, and apps',
      'Gives your car a modern, upgraded feel',
      'Ideal If: Your car doesn\'t have a smart infotainment system',
      'You rely on maps and your phone while driving',
      'You want a safer, hands-free driving experience',
      'You like modern features without changing your car completely'
    ],
    included: [
      'CarPlay module installation',
      'Wiring and connection setup',
      'Screen calibration and testing',
      'App configuration and setup',
      'User training and demonstration'
    ],
    price: 'Starting from $399',
    duration: '1 day',
    warranty: '2 years warranty'
  },
  'paint-protection-film': {
    id: 'paint-protection-film',
    title: 'Paint Protection Film',
    tagline: 'Premium invisible shield for everyday driving protection',
    description: 'Paint Protection Film is a thin, transparent layer applied to your car\'s paint to protect it from scratches, chips, and daily wear. It acts like an invisible shield that keeps your car looking fresh and new. The film is durable, self-healing, and designed to handle harsh road conditions. It maintains your car\'s original colour while adding long-term protection. A perfect upgrade if you want your car to stay clean, glossy, and damage-free.',
    image: '/ppf-hero.jpg',
    gallery: ['/ppf-1.jpg', '/ppf-2.jpg', '/ppf-3.jpg', '/ppf-4.jpg', '/ppf-5.jpg', '/ppf-6.jpg'],
    features: [
      'Professional film application with precision fitting',
      'Coverage on key areas (bonnet, bumper, mirrors, etc.)',
      'Bubble-free finish with clean edges',
      'Final inspection and quality check'
    ],
    benefits: [
      'Protects against scratches, stone chips, and damage',
      'Self-healing surface for minor marks',
      'Keeps paint looking new for longer',
      'Helps maintain resale value',
      'Ideal If: You want to protect your car\'s original paint',
      'You drive daily or on rough roads',
      'You recently bought a new car',
      'You care about long-term shine and value'
    ],
    included: [
      'Full vehicle PPF application',
      'Surface preparation and cleaning',
      'High-quality film material',
      'Edge sealing and finishing',
      'Quality inspection and warranty'
    ],
    price: 'Starting from $799',
    duration: '2-3 days',
    warranty: '5 years warranty'
  },
  'ceramic-coating': {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    tagline: 'Long-lasting shine and protection, every time you drive',
    description: 'Ceramic coating is a liquid protective layer applied to your car\'s paint that bonds with the surface. It creates a strong, glossy shield that protects against dirt, UV rays, water spots, and light scratches. The coating makes your car easier to clean and keeps it looking freshly polished for much longer. It enhances shine while reducing damage from daily driving.',
    image: '/ceramic-coating-hero.jpg',
    gallery: ['/ceramic-1.jpg', '/ceramic-2.jpg', '/ceramic-3.jpg', '/ceramic-4.jpg', '/ceramic-5.jpg', '/ceramic-6.jpg'],
    features: [
      'Full exterior wash and surface preparation',
      'Professional ceramic coating application',
      'Even layering for a smooth, glossy finish',
      'Final curing and quality inspection'
    ],
    benefits: [
      'Deep, long-lasting glossy shine',
      'Protects against UV rays, dirt, and stains',
      'Water and dust slide off easily (easy cleaning)',
      'Preserves paint and improves resale value',
      'Ideal If: You want a long-lasting glossy finish',
      'You prefer low-maintenance car cleaning',
      'Your car is new or recently repainted',
      'You want protection against daily environmental damage'
    ],
    included: [
      'Multi-stage ceramic coating process',
      'Surface decontamination',
      'Professional application tools',
      'Curing time and quality check',
      'Maintenance instructions and care guide'
    ],
    price: 'Starting from $599',
    duration: '2-3 days',
    warranty: '3 years warranty'
  },
  'tires': {
    id: 'tires',
    title: 'Tire Repairing',
    tagline: 'Reliable tyre maintenance for safety, grip, and performance',
    description: 'Tire repairing service focuses on inspecting, repairing, and maintaining your tyres to ensure safe driving and proper performance. It includes checking tyre condition, pressure, alignment-related wear, and balancing issues. The goal is to improve road grip, stability, and extend tyre life. It ensures your vehicle runs smoothly and safely on all road conditions.',
    image: '/tires-hero.jpg',
    gallery: ['/tires-1.jpg', '/tires-2.jpg', '/tires-3.jpg', '/tires-4.jpg', '/tires-5.jpg', '/tires-6.jpg'],
    features: [
      'Tire inspection for wear, damage, and pressure check',
      'Wheel balancing for smooth driving',
      'Basic tire rotation (if required)',
      'Safety check for tread and road grip condition'
    ],
    benefits: [
      'Improves driving stability and safety',
      'Reduces uneven tyre wear',
      'Enhances fuel efficiency and performance',
      'Extends overall tyre lifespan',
      'Ideal If: Your car feels shaky at higher speeds',
      'You notice uneven tyre wear',
      'You drive regularly on long or rough routes',
      'You want a safer and smoother driving performance'
    ],
    included: [
      'Comprehensive tire inspection',
      'Pressure adjustment and balancing',
      'Tire rotation service',
      'Wheel alignment check',
      'Safety certification report'
    ],
    price: 'Starting from $49',
    duration: '1-2 hours',
    warranty: '30 days guarantee'
  },
  'brakes': {
    id: 'brakes',
    title: 'Brake Repair Service',
    tagline: 'Safe stopping power you can trust, every time you drive',
    description: 'Brake repair service focuses on inspecting and fixing your vehicle\'s braking system to ensure maximum safety and control. It includes checking brake pads, discs, fluid levels, and overall braking performance. Any worn or damaged parts are repaired or replaced to restore proper stopping power. The service ensures your brakes respond quickly and smoothly in all driving conditions. It\'s essential for safe and confident driving.',
    image: '/brakes-hero.jpg',
    gallery: ['/brakes-1.jpg', '/brakes-2.jpg', '/brakes-3.jpg', '/brakes-4.jpg', '/brakes-5.jpg', '/brakes-6.jpg'],
    features: [
      'Full brake system inspection (pads, discs, callipers)',
      'Brake pad cleaning or replacement if needed',
      'Brake fluid level check and top-up',
      'Testing braking performance for safety'
    ],
    benefits: [
      'Ensures quick and safe stopping response',
      'Improves overall driving safety',
      'Reduces risk of brake failure',
      'Enhances control in emergencies',
      'Ideal If: You hear squeaking or grinding noises while braking',
      'Your brakes feel weak or delayed',
      'Your car vibrates when stopping',
      'You want to ensure maximum road safety'
    ],
    included: [
      'Complete brake system diagnosis',
      'Brake pad replacement (if needed)',
      'Brake fluid service',
      'Disc inspection and resurfacing',
      'Safety performance testing'
    ],
    price: 'Starting from $99',
    duration: '2-3 hours',
    warranty: '6 months guarantee'
  },
  'oil-changes': {
    id: 'oil-changes',
    title: 'Oil Changing Service',
    tagline: 'Smooth engine performance in every drive',
    description: 'Oil changing service involves replacing old engine oil with fresh, high-quality oil to keep your engine running smoothly. It also includes replacing the oil filter to remove dirt and metal particles. Clean oil reduces friction, prevents overheating, and improves overall engine performance. Regular oil changes are essential to maintain engine health and efficiency. It keeps your car running strong and reliable for longer.',
    image: '/oil-changes-hero.jpg',
    gallery: ['/oil-1.jpg', '/oil-2.jpg', '/oil-3.jpg', '/oil-4.jpg', '/oil-5.jpg', '/oil-6.jpg'],
    features: [
      'Draining old engine oil completely',
      'Refilling with recommended fresh engine oil',
      'Oil filter replacement',
      'Basic engine check for leaks and condition'
    ],
    benefits: [
      'Improves engine performance and smoothness',
      'Reduces engine wear and overheating',
      'Increases fuel efficiency',
      'Extends engine lifespan',
      'Ideal If: Your car is due for regular maintenance',
      'The engine feels rough or less responsive',
      'You notice reduced fuel efficiency',
      'You want to keep your engine healthy long-term'
    ],
    included: [
      'Complete oil drain and replacement',
      'Oil filter change',
      'Fluid level check',
      'Basic engine inspection',
      'Service documentation'
    ],
    price: 'Starting from $39',
    duration: '30-45 minutes',
    warranty: '90 days guarantee'
  },
  'safety-certification': {
    id: 'safety-certification',
    title: 'Safety Certification Service',
    tagline: 'Certified safety you can rely on, every time you drive',
    description: 'Safety certification service is a complete vehicle inspection to ensure your car meets all required safety standards. It includes checking key systems like brakes, tyres, lights, steering, suspension, and overall roadworthiness. The goal is to confirm that your vehicle is safe to drive without any hidden risks. After inspection, a safety certificate is issued once the vehicle passes all checks. It ensures peace of mind for both daily use and long journeys.',
    image: '/safety-certification-hero.jpg',
    gallery: ['/safety-1.jpg', '/safety-2.jpg', '/safety-3.jpg', '/safety-4.jpg', '/safety-5.jpg', '/safety-6.jpg'],
    features: [
      'Full vehicle safety inspection',
      'Brake, tire, and steering system check',
      'Lights, indicators, and electrical check',
      'Suspension and structural condition review'
    ],
    benefits: [
      'Ensures your car is safe for road use',
      'Identifies hidden mechanical issues early',
      'Reduces risk of breakdowns or accidents',
      'Provides official proof of vehicle safety',
      'Ideal If: Your vehicle requires an official inspection or compliance',
      'You are planning long-distance travel',
      'You want to ensure complete driving safety',
      'You want peace of mind about your car\'s condition'
    ],
    included: [
      'Comprehensive safety inspection',
      'Roadworthiness certificate',
      'Safety standards compliance check',
      'Detailed inspection report',
      'Official certification documentation'
    ],
    price: 'Starting from $79',
    duration: '2-3 hours',
    warranty: '30 days validity'
  }
}

function ServiceDetail() {
  const { serviceId } = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  const service = serviceData[serviceId]

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="service-not-found">
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services" className="back-to-services">Back to Services</Link>
        </div>
      </div>
    )
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <div className="service-description">
              <p>{service.description}</p>
            </div>
            
            {/* Service Info Cards */}
            <div className="service-info-cards">
              <div className="info-card">
                <div className="info-icon price-icon">$</div>
                <div className="info-content">
                  <h4>Price</h4>
                  <p>{service.price}</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon duration-icon">⏱</div>
                <div className="info-content">
                  <h4>Duration</h4>
                  <p>{service.duration}</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon warranty-icon">✓</div>
                <div className="info-content">
                  <h4>Warranty</h4>
                  <p>{service.warranty}</p>
                </div>
              </div>
            </div>

            <div className="benefits-section">
              <h3>Benefits</h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      case 'features':
        return (
          <div className="tab-content">
            <div className="features-section">
              <h3>What's Included in Service</h3>
              <ul className="features-list">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )
            default:
        return null
    }
  }

  return (
    <div className={`service-detail-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background">
          <img src={service.image} alt={service.title} className="hero-bg-image" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-breadcrumb">
            <Link to="/services">Services</Link>
            <span> / </span>
            <span>{service.title}</span>
          </div>
          <h1 className="hero-title">{service.title}</h1>
          <p className="hero-tagline">{service.tagline}</p>
          <Link to="/mobile-detailing" className="hero-cta">
            Book This Service
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="service-content">
        <div className="container">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content-wrapper">
            {renderTabContent()}
          </div>
        </div>
      </section>

      
      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Service detail" />
            <button className="modal-close" onClick={closeImageModal}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceDetail
