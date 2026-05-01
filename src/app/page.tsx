import dynamic from "next/dynamic";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Espaco } from "@/components/sections/Espaco";
import { Services } from "@/components/sections/Services";
import { LashDesignerProfession } from "@/components/sections/LashDesignerProfession";
import { FAQ } from "@/components/sections/FAQ";
import { Oferta } from "@/components/sections/Oferta";
import { Location } from "@/components/sections/Location";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

/* ─── Below-the-fold: lazy-loaded with next/dynamic ─── */

function SectionSkeleton({ height = "h-[600px]" }: { height?: string }) {
  return (
    <div className={`w-full ${height} bg-surface-container-lowest animate-pulse flex items-center justify-center`}>
      <div className="w-12 h-12 rounded-full border-2 border-outline-variant border-t-secondary animate-spin" />
    </div>
  );
}

const Portfolio = dynamic(
  () => import("@/components/sections/Portfolio").then((m) => m.Portfolio),
  { loading: () => <SectionSkeleton height="h-[650px]" /> }
);

const Mentoria = dynamic(
  () => import("@/components/sections/Mentoria").then((m) => m.Mentoria),
  { loading: () => <SectionSkeleton height="h-[100svh]" /> }
);

const AlunasResults = dynamic(
  () => import("@/components/sections/AlunasResults").then((m) => m.AlunasResults),
  { loading: () => <SectionSkeleton height="h-[550px]" /> }
);

const InstagramFeed = dynamic(
  () => import("@/components/sections/InstagramFeed").then((m) => m.InstagramFeed),
  { loading: () => <SectionSkeleton height="h-[400px]" /> }
);

const InformativeReels = dynamic(
  () => import("@/components/sections/InformativeReels").then((m) => m.InformativeReels),
  { loading: () => <SectionSkeleton height="h-[700px]" /> }
);

/* ─── JSON-LD Structured Data ─── */

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Ana Machado Estética Facial",
  alternateName: "Ana Machado Lash Designer",
  description:
    "Estúdio de estética facial especializado em extensão de cílios, design de sobrancelhas, brow lamination, micropigmentação e mentoria VIP presencial para lash designers.",
  url: "https://www.anamachadoestetica.com.br", // TODO: URL real do domínio
  telephone: "+5548992054803",
  email: "", // TODO: E-mail de contato
  image: "https://www.anamachadoestetica.com.br/assets/hero-branca.jpg", // TODO: URL absoluta da imagem
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "PIX, Cartão de Crédito, Cartão de Débito",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Machado de Assis, 995",
    addressLocality: "Palhoça",
    addressRegion: "SC",
    postalCode: "88133-380",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.636254,
    longitude: -48.660144,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Ana Júlia Machado",
    jobTitle: "Lash Designer & Mentora",
  },
  areaServed: {
    "@type": "City",
    name: "Palhoça",
    containedInPlace: {
      "@type": "State",
      name: "Santa Catarina",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Estética Facial",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Extensão de Cílios - Volume Brasileiro",
          description: "Fios em formato de Y para volume, retenção e leveza.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Extensão de Cílios - Foxy Eyes",
          description: "Mapeamento de elevação com efeito lifting no olhar.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Design de Sobrancelhas",
          description: "Mapeamento facial avançado com visagismo personalizado.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brow Lamination",
          description: "Alinhamento e reestruturação para visual volumoso.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Micropigmentação Labial",
          description: "Pigmentação semipermanente para lábios naturais.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mentoria VIP Lash Designer",
          description:
            "Curso presencial de 8h com kit premium, treinamento em modelos reais e acompanhamento vitalício.",
          offers: {
            "@type": "Offer",
            price: "999.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/anamachadoesteticafacial", // TODO: Instagram real
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quais são as formas de pagamento aceitas no estúdio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aceitamos PIX, Débito e Crédito. Pagamentos no cartão de crédito possuem acréscimo da taxa da maquininha. Pagamentos em dinheiro precisam ser com o valor exato, pois não trabalhamos com troco.",
      },
    },
    {
      "@type": "Question",
      name: "É necessário pagar sinal para agendar um atendimento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o agendamento de qualquer serviço está sujeito ao pagamento de um sinal de R$40,00. Esse valor garante o seu horário e é abatido do valor total no dia do atendimento.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a política de atrasos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Temos uma tolerância máxima de 15 minutos de atraso. Caso seja possível realizar o atendimento após esse período, será cobrada uma taxa adicional de R$15. Caso contrário, será necessário remarcar e o sinal não será devolvido.",
      },
    },
    {
      "@type": "Question",
      name: "Quais são as regras para manutenções de cílios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para ser considerada manutenção, é necessário comparecer dentro do prazo estabelecido (15, 20, 25 ou 30 dias), com os cílios higienizados e no mínimo 60% dos fios preservados. Caso contrário, ou após 30 dias, será cobrado o valor de uma nova aplicação.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês fazem manutenção de cílios de outras profissionais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não realizamos manutenção de extensões feitas em outros estúdios. Nestes casos, realizamos a remoção segura do trabalho antigo e fazemos uma nova aplicação impecável.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo dura a extensão de cílios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A durabilidade média é de 20 a 30 dias, dependendo do ciclo natural de crescimento dos seus fios e dos cuidados diários. Recomendamos manutenções a cada 15 ou 20 dias para manter o design sempre perfeito.",
      },
    },
    {
      "@type": "Question",
      name: "Grávidas podem realizar o procedimento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Utilizamos materiais de alta qualidade e com aprovação. No entanto, recomendamos sempre a liberação e autorização do seu médico obstetra por precaução.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso ter experiência na área da beleza para fazer a Mentoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não, a mentoria é desenhada do zero absoluto à prática avançada. Você aprenderá desde a anatomia dos fios até as técnicas de retenção e posicionamento profissional.",
      },
    },
    {
      "@type": "Question",
      name: "O material prático está incluso no curso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o treinamento garante um Kit Iniciante Premium completo e selecionado a dedo para você começar a atender imediatamente após a certificação.",
      },
    },
    {
      "@type": "Question",
      name: "Terei suporte após finalizar o curso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Com certeza. O curso inclui Acompanhamento Vitalício. Você nunca estará sozinha; daremos todo o suporte para a sua evolução técnica e comercial diária.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para recuperar o investimento do curso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Com as técnicas de marketing ensinadas no curso e cobrando um valor inicial médio de R$ 120 por aplicação, você pode recuperar todo o investimento inicial atendendo cerca de 10 clientes. O retorno é extremamente rápido.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data — invisible to users, consumed by Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />
      <main className="w-full mx-auto md:pt-[60px]">
        {/* ── Above the Fold (ATF) — static imports, SSR'd ── */}
        <Hero />
        <Espaco />
        <Services />

        {/* ── Below the Fold (BTF) — dynamic imports, code-split ── */}
        <Portfolio />
        <LashDesignerProfession />
        <Mentoria />
        <AlunasResults />
        <Oferta />
        <FAQ />
        <InstagramFeed />
        <InformativeReels />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
