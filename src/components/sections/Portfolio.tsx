"use client";

import { motion } from "framer-motion";

const portfolioImages = [
  { src: "/assets/modelos_clientes/brasileiro1.jpeg", alt: "Volume Brasileiro" },
  { src: "/assets/modelos_clientes/egipcio1.jpeg", alt: "Volume Egípcio" },
  { src: "/assets/modelos_clientes/foxy1.jpeg", alt: "Foxy Eyes" },
  { src: "/assets/modelos_clientes/brasileiro2.jpeg", alt: "Volume Brasileiro" },
  { src: "/assets/modelos_clientes/egipcio2.jpeg", alt: "Volume Egípcio" },
  { src: "/assets/modelos_clientes/foxy2.jpeg", alt: "Foxy Eyes" },
  { src: "/assets/modelos_clientes/fotobrownlamination.jpeg", alt: "Brow Lamination", fallback: "/assets/fotos_ana/foto2.jpeg" },
  { src: "/assets/modelos_clientes/fotomicropigmentacaolabial.jpeg", alt: "Micropigmentação Labial", fallback: "/assets/fotos_ana/foto6.jpeg" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-section-gap bg-surface-container-lowest overflow-hidden">
      <div className="px-container-padding md:px-[8%] mb-12">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
          Portfólio
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Trabalhos Recentes
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl">
          Arraste para o lado e confira de perto a excelência, retenção e simetria dos nossos atendimentos.
        </p>
      </div>

      <div className="w-full px-container-padding md:px-[8%]">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4">
          {portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className="snap-center min-w-[80vw] md:min-w-[300px] h-[400px] md:h-[500px] relative rounded-xl overflow-hidden shadow-lg border-[0.5px] border-outline-variant group flex-shrink-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  if (image.fallback) e.currentTarget.src = image.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <span className="absolute bottom-6 left-6 text-white font-headline-sm text-headline-sm shadow-sm z-10">
                {image.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
