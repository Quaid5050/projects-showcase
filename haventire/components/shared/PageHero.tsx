import Link from 'next/link';
import Image from 'next/image';

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  bgImage?: string;
  centered?: boolean;
}

export default function PageHero({ title, subtitle, breadcrumbs, bgImage, centered }: Props) {
  if (centered && bgImage) {
    return (
      <section className="relative h-[340px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <Image src={bgImage} alt="" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.82)' }} />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            {title}
          </h1>
          <nav className="flex items-center justify-center gap-2">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white font-bold text-sm">.</span>}
                {crumb.href ? (
                  <Link href={crumb.href}
                    className="text-white text-xs font-bold uppercase tracking-widest hover:text-[#e01e25] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#e01e25] text-xs font-bold uppercase tracking-widest">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-[120px] pb-16 md:pb-20 bg-[#1a1a1a] overflow-hidden">
      {bgImage && (
        <>
          <Image src={bgImage} alt="" fill className="object-cover object-center" sizes="100vw" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.88) 40%, rgba(0,0,0,0.55) 100%)' }} />
        </>
      )}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e01e25]" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e01e25]" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 pt-8">
        <nav className="flex items-center gap-2 mb-5 flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-600 text-sm">›</span>}
              {crumb.href ? (
                <Link href={crumb.href}
                  className="text-gray-400 hover:text-[#e01e25] text-xs font-semibold uppercase tracking-wider transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#e01e25] text-xs font-semibold uppercase tracking-wider">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
