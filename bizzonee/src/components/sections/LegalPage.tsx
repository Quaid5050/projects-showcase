type SubSection = {
  heading: string;
  list: string[];
};

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
  subsections?: SubSection[];
  footer?: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <section className="section py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-mint">
          {intro}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h1>

        <div className="mt-10 space-y-10">
          {sections.map((sec) => (
            <div key={sec.heading} className="border-t border-white/10 pt-8">
              <h2 className="font-display text-lg font-bold text-white">
                {sec.heading}
              </h2>

              {sec.body?.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-white/60">
                  {p}
                </p>
              ))}

              {sec.list && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/60">
                  {sec.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {sec.subsections?.map((sub) => (
                <div key={sub.heading} className="mt-4">
                  <h3 className="text-sm font-bold text-white/85">{sub.heading}</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/60">
                    {sub.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {sec.footer?.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-white/60">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
