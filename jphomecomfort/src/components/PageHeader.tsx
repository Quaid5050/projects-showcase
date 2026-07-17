"use client";

export default function PageHeader({ title, highlight, subtitle }: { title: string; highlight: string; subtitle: string }) {
  return (
    <section className="relative bg-brand-navy-dark py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-red/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-brand-cyan/5 rounded-full blur-[80px]" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          {title} <span className="text-brand-red">{highlight}</span>
        </h1>
        <p className="text-slate-300 text-lg lg:text-xl max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-6 flex justify-center gap-2 text-sm text-slate-400">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-brand-cyan">{highlight || title}</span>
        </div>
      </div>
    </section>
  );
}
