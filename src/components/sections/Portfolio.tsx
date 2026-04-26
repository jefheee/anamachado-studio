"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const portfolioImages = [
  { src: "/assets/modelos clientes/brasileiro1.jpeg", alt: "Volume Brasileiro" },
  { src: "/assets/modelos clientes/egípcio1.jpeg", alt: "Volume Egípcio" },
  { src: "/assets/modelos clientes/foxy1.jpeg", alt: "Foxy Eyes" },
  { src: "/assets/modelos clientes/brasileiro2.jpeg", alt: "Volume Brasileiro" },
  { src: "/assets/modelos clientes/egípcio2.jpeg", alt: "Volume Egípcio" },
  { src: "/assets/modelos clientes/foxy2.jpeg", alt: "Foxy Eyes" },
];

export function Portfolio() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

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

      <motion.div 
        ref={carousel} 
        className="cursor-grab overflow-hidden active:cursor-grabbing px-container-padding md:px-[8%]"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6"
        >
          {portfolioImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="min-w-[280px] md:min-w-[350px] h-[400px] md:h-[500px] relative rounded-xl overflow-hidden shadow-lg border-[0.5px] border-outline-variant group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <span className="absolute bottom-6 left-6 text-white font-headline-sm text-headline-sm shadow-sm">
                {image.alt}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
