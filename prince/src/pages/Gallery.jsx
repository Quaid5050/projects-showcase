import PageHero from '../components/PageHero';
import GalleryGrid from '../components/GalleryGrid';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';

export default function Gallery() {
  return (
    <main>
      <PageHero
        title="Our Work"
        subtitle="Browse our portfolio of pressure washing projects from across Surrey, White Rock, and Langley."
        bgImage="/images/gallery-hero.jpg"
        breadcrumbs={[{ name: 'Gallery' }]}
        badge="Portfolio & Results"
        size="medium"
      />

      <section className="section section--white">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Our Portfolio</div>
            <h2 className="section-title">Real Results, Real Properties</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Every photo represents a homeowner who trusted us to care for their property.
              Browse by service type to see what we can do for yours.
            </p>
          </AnimatedSection>

          <GalleryGrid />
        </div>
      </section>

      <CTASection
        title="Love What You See?"
        subtitle="Get the same results for your property. Book your service today."
        showPrice={true}
      />
    </main>
  );
}
