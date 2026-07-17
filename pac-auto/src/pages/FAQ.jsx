import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiMinus, FiHelpCircle, FiClock, FiMapPin, FiDroplet, FiTool, FiShield, FiCalendar } from 'react-icons/fi'
import './FAQ.css'
import '../styles/hero-headings.css'

// Hook for scroll-triggered animations
function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

const faqCategories = [
  {
    id: 'mobile',
    title: 'Mobile Detailing',
    icon: FiMapPin,
    questions: [
      {
        id: 1,
        question: 'Do you provide mobile detailing at home?',
        answer: 'Yes! Our mobile detailing service brings professional car care directly to your doorstep. We serve residential areas, office complexes, and commercial locations with our fully equipped mobile units.'
      },
      {
        id: 2,
        question: 'Which areas do you serve?',
        answer: 'We currently operate throughout the metropolitan area and surrounding suburbs within a 30-mile radius. Contact us to confirm service availability in your specific location.'
      },
      {
        id: 3,
        question: 'Do I need to provide water or electricity?',
        answer: 'No, our mobile units are completely self-contained. We bring our own water supply, power generators, and all necessary equipment to provide a premium detailing experience anywhere.'
      }
    ]
  },
  {
    id: 'services',
    title: 'Our Services',
    icon: FiTool,
    questions: [
      {
        id: 4,
        question: 'How long does a detailing service take?',
        answer: 'Service times vary by package: Express Detail (1.5-2 hours), Premium Detail (3-4 hours), and Ultimate Detail (5-6 hours). We\'ll provide an exact timeframe when you book.'
      },
      {
        id: 5,
        question: 'What products do you use?',
        answer: 'We exclusively use premium, professional-grade products from leading brands including ceramic coatings, paint protection films, and eco-friendly cleaning solutions that are safe for your vehicle and the environment.'
      },
      {
        id: 6,
        question: 'Do you offer paint protection services?',
        answer: 'Yes, we provide comprehensive paint protection including ceramic coatings, paint protection film (PPF), and high-quality waxes and sealants to keep your vehicle looking its best.'
      }
    ]
  },
  {
    id: 'booking',
    title: 'Booking & Payment',
    icon: FiCalendar,
    questions: [
      {
        id: 7,
        question: 'How far in advance should I book?',
        answer: 'We recommend booking 3-5 days in advance for regular services and 1-2 weeks for premium packages. However, we often have same-day availability for express services.'
      },
      {
        id: 8,
        question: 'Can I reschedule or cancel my booking?',
        answer: 'Yes, you can reschedule or cancel your booking up to 24 hours before your appointment without any charges. Late cancellations may incur a fee.'
      },
      {
        id: 9,
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, debit cards, cash, and digital payment methods including Apple Pay and Google Pay for your convenience.'
      }
    ]
  },
  {
    id: 'guarantee',
    title: 'Guarantee & Support',
    icon: FiShield,
    questions: [
      {
        id: 10,
        question: 'Do you offer a satisfaction guarantee?',
        answer: 'Absolutely! We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely satisfied, we\'ll re-address any concerns at no additional cost.'
      },
      {
        id: 11,
        question: 'Are your services insured?',
        answer: 'Yes, we are fully insured with comprehensive liability coverage. Your vehicle is protected while in our care, giving you complete peace of mind.'
      },
      {
        id: 12,
        question: 'What if weather affects my mobile service?',
        answer: 'In case of inclement weather, we\'ll contact you to reschedule at your convenience. We always prioritize safety and service quality.'
      }
    ]
  }
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-question__text">{item.question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </span>
      </button>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

function FAQCategory({ category, openId, onToggle }) {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const Icon = category.icon

  return (
    <div
      ref={ref}
      className={`faq-category ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="category-header">
        <div className="category-icon">
          <Icon size={24} />
        </div>
        <h3>{category.title}</h3>
      </div>
      <div className="category-questions">
        {category.questions.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

function FAQ() {
  const [openId, setOpenId] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  const filteredCategories = activeCategory === 'all' 
    ? faqCategories 
    : faqCategories.filter(cat => cat.id === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero__overlay" />
        <div className="faq-hero__content">
          <div className="hero-icon">
            <FiHelpCircle size={48} />
          </div>
          <h1 className="faq-hero__title">Frequently Asked Questions</h1>
          <p className="faq-hero__subtitle">Quick answers • Common inquiries • Expert guidance</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="faq-categories">
        <div className="faq-categories__container">
          <div className="category-filter">
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Questions
            </button>
            {faqCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon size={16} />
                  {category.title}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="faq-content__container">
          <div className="faq-grid">
            {filteredCategories.map((category) => (
              <FAQCategory
                key={category.id}
                category={category}
                openId={openId}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta">
        <div className="faq-cta__container">
          <div className="cta-content">
            <h2>STILL HAVE QUESTIONS?</h2>
            <p>Our team is here to help you with any inquiries about our services</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn primary">
                Contact Us
              </Link>
              <Link to="/mobile-detailing" className="cta-btn secondary">
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
