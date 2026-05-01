import Script from "next/script";

export function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    "name": "Ana Machado Estética Facial",
    "image": "https://www.anamachadoestetica.com.br/assets/hero-branca.jpg",
    "url": "https://www.anamachadoestetica.com.br/",
    "telephone": "+5548992054803",
    "priceRange": "$$ - $$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Machado de Assis, 995, Jardim Eldorado",
      "addressLocality": "Palhoça",
      "addressRegion": "SC",
      "postalCode": "88133-380",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:30",
      "closes": "18:30"
    },
    "description": "Extensão de cílios, design de sobrancelhas, micropigmentação e mentoria VIP presencial em Palhoça/SC.",
    "appointmentRequired": true
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
