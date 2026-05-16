import { SITE } from "@/lib/site";

export function ContactJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    telephone: SITE.phoneTel,
    email: SITE.email,
    contactType: "customer service",
    areaServed: "CA",
    availableLanguage: ["English"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
