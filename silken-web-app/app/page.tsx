import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTASection from "@/components/CTASection";
import StatsBar from "@/components/StatsBar";
import { Section, SectionHeading, AnimatedLink } from "@/components/Section";
import servicesData from "@/data/services.json";
import productsData from "@/data/products.json";
import reviewsData from "@/data/reviews.json";
import WhyChooseCard, { type WhyChooseIconName } from "@/components/WhyChooseCard";

const whyChoose: { icon: WhyChooseIconName; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Premium Materials",
    description: "We use only high-quality, durable materials that stand the test of time.",
  },
  {
    icon: "award",
    title: "Expert Installation",
    description: "Our trained technicians ensure a perfect fit and professional finish.",
  },
  {
    icon: "check-circle",
    title: "Perfect Fit Guarantee",
    description: "Custom-fitted products designed for your specific make and model.",
  },
  {
    icon: "lock",
    title: "Long Lasting Protection",
    description: "Protect your interior from wear, stains, and UV damage for years.",
  },
];

export default function HomePage() {
  const featuredProducts = productsData
    .filter(
      (p) =>
        p.category === "Seat Covers" ||
        p.category === "Car Mats" ||
        p.category === "Window Visors"
    )
    .slice(0, 6);

  return (
    <>
      <Hero />
      <StatsBar />

      {/* Main Services */}
      <Section variant="dark">
        <SectionHeading
          title={
            <>
              Our <span className="text-gold-primary">Services</span>
            </>
          }
          subtitle="Professional installation for seat covers, window visors, and car mats."
        />
        <div className="mt-10 grid gap-4 grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(
            servicesData as {
              slug: string;
              title: string;
              shortDescription: string;
              image: string;
            }[]
          ).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
        <div className="mt-12">
          <AnimatedLink href="/services">View all services</AnimatedLink>
        </div>
      </Section>

      {/* Featured Products */}
      <Section variant="gradient">
        <SectionHeading
          title={
            <>
              Featured <span className="text-gold-primary">Products</span>
            </>
          }
          subtitle="Premium seat covers, car mats, and window visors for every vehicle."
        />
        <div className="mt-10 grid gap-4 grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="mt-12">
          <AnimatedLink href="/products">Shop all products</AnimatedLink>
        </div>
      </Section>

      {/* Before / After */}
      <Section variant="dark">
        <SectionHeading
          title={
            <>
              Before / After{" "}
              <span className="text-gold-primary">Transformations</span>
            </>
          }
          subtitle="See the difference premium interiors make. Drag the slider to compare."
        />
        <div className="mt-10 w-full max-w-4xl mx-auto sm:mt-14">
          <BeforeAfterSlider
           beforeImage="/before.jpeg"
            afterImage="/after.jpeg"
            beforeLabel="Before"
            afterLabel="After"
          />
        </div>
      </Section>

      {/* Why Choose Silken Trading */}
      <Section variant="glow">
        <SectionHeading
          title={
            <>
              Why Choose <span className="text-gold-primary">Silken Trading</span>
            </>
          }
          subtitle="Quality, expertise, and customer satisfaction at the heart of everything we do."
        />
        <div className="mt-10 grid gap-4 grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {whyChoose.map((item, i) => (
            <WhyChooseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </Section>

      {/* Customer Reviews */}
      <Section variant="dark">
        <SectionHeading
          title={
            <>
              Customer <span className="text-gold-primary">Reviews</span>
            </>
          }
          subtitle="See what our customers say about their experience."
        />
        <div className="mt-10 grid gap-4 grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(
            reviewsData as {
              id: string;
              name: string;
              carModel: string;
              review: string;
              rating: number;
            }[]
          )
            .slice(0, 3)
            .map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
        </div>
        <div className="mt-12">
          <AnimatedLink href="/contact">Read more reviews</AnimatedLink>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
