import { Shield, Leaf, DollarSign, Clock } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'Fully Insured & Bonded',
    description: 'Complete coverage for your peace of mind',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Solutions',
    description: 'Green products that protect the environment',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Cost-effective rates without compromising quality',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'Consistent, on-time service you can count on',
  },
];

export function TrustBar() {
  return (
    <section className="bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
