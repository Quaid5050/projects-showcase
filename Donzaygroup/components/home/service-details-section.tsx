import { Sparkles, Leaf, Clock, Star } from 'lucide-react';

const serviceDetails = [
  {
    icon: Sparkles,
    title: 'Full Cleaning Service',
    description:
      'Donzay Group offers reliable specialty Office & Commercial Cleaning Services across the GTA and Ontario wide. From office buildings, to restaurants, medical offices and retail stores, we offer over 30+ years of experience providing top notch cleaning services.',
    image:
      'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Cleaning Service',
    description:
      'We take responsibility to using environmentally friendly cleaning products to minimize waste. Our steam detailing and steam disinfecting technology enables deep commercial cleaning services that cleanses objects and refreshes the atmosphere in your commercial space.',
    image:
      'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Clock,
    title: 'Daily, Regular, or One-Time Cleaning',
    description:
      'Donzay Group offers flexible scheduling when it comes to our commercial cleaning services and janitorial services. Whether your requirement is regular daily office cleaning or one-time post-construction cleanup, we are ready to undertake the cleaning service big or small.',
    image:
      'https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Star,
    title: 'Specialty Cleaning Service',
    description:
      'From carpet steam cleaning to power washing, window cleaning to floor work, our specialty services cover every unique need your facility may have. We use advanced equipment and proven techniques to deliver exceptional results every time.',
    image:
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export function ServiceDetailsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Comprehensive Solutions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Commercial Cleaning & Janitorial Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Keep your workspace spotless and professional with our reliable
            commercial cleaning services and janitorial services. We offer
            tailored cleaning solutions for offices, retail spaces, and
            industrial facilities.
          </p>
        </div>

          <div className="space-y-12 lg:space-y-16">
          {serviceDetails.map((detail, index) => (
            <div
              key={detail.title}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {detail.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {detail.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="rounded-2xl shadow-lg w-full object-cover h-[260px] sm:h-[300px] lg:h-[350px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
