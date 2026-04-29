"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type PortfolioGroup = {
  id: string;
  title: string;
  cover: string;
  images: string[];
};

const portfolioGroups: PortfolioGroup[] = [
  {
    id: "brasileiro",
    title: "Volume Brasileiro",
    cover: "/assets/modelos_clientes/brasileiro1.jpeg",
    images: [
      "/assets/modelos_clientes/brasileiro1.jpeg",
      "/assets/modelos_clientes/brasileiro2.jpeg",
      "/assets/modelos_clientes/brasileiro3.jpeg",
    ]
  },
  {
    id: "egipcio",
    title: "Volume Egípcio",
    cover: "/assets/modelos_clientes/egipcio1.jpeg",
    images: [
      "/assets/modelos_clientes/egipcio1.jpeg",
      "/assets/modelos_clientes/egipcio2.jpeg",
      "/assets/modelos_clientes/egipcio3.jpeg",
    ]
  },
  {
    id: "foxy",
    title: "Foxy Eyes",
    cover: "/assets/modelos_clientes/foxy1.jpeg",
    images: [
      "/assets/modelos_clientes/foxy1.jpeg",
      "/assets/modelos_clientes/foxy2.jpeg",
      "/assets/modelos_clientes/foxy3.jpeg",
    ]
  },
  {
    id: "brow-lamination",
    title: "Brow Lamination e Design",
    cover: "/assets/modelos_clientes/fotobrownlamination.jpeg",
    images: [
      "/assets/modelos_clientes/fotobrownlamination.jpeg",
      "/assets/modelos_clientes/fotodesigndesobrancelhas.jpeg",
    ]
  },
  {
    id: "micropigmentacao",
    title: "Micropigmentação Labial",
    cover: "/assets/modelos_clientes/fotomicropigmentacaolabial.jpeg",
    images: [
      "/assets/modelos_clientes/fotomicropigmentacaolabial.jpeg",
    ]
  }
];

export function Portfolio() {
  const [activeGroup, setActiveGroup] = useState<PortfolioGroup | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-surface-container-lowest overflow-hidden">
      <div className="px-container-padding md:px-[8%] mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Portfólio
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Trabalhos Recentes
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl">
            Clique num modelo para ver mais detalhes e confira de perto a excelência, retenção e simetria dos nossos atendimentos.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-2 self-start md:self-end">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="w-full px-container-padding md:px-[8%]">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 touch-pan-x"
        >
          {portfolioGroups.map((group) => (
            <div 
              key={group.id} 
              onClick={() => setActiveGroup(group)}
              className="snap-center w-[85vw] md:w-[320px] h-[450px] relative rounded-xl overflow-hidden shadow-sm border-[0.5px] border-outline-variant group flex-shrink-0 cursor-pointer"
            >
              <img
                src={group.cover}
                alt={group.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                <span className="text-white font-headline-sm text-headline-sm shadow-sm">
                  {group.title}
                </span>
                <span className="text-white/80 text-xs font-medium uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  {group.images.length} fotos
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeGroup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
          >
            <div className="p-6 flex justify-between items-center text-white">
              <h3 className="font-headline-md text-xl">{activeGroup.title}</h3>
              <button 
                onClick={() => setActiveGroup(null)}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 items-center">
              {activeGroup.images.map((src, idx) => (
                <motion.img
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  src={src}
                  alt={`${activeGroup.title} - Foto ${idx + 1}`}
                  className="w-full max-w-2xl rounded-xl shadow-2xl object-cover"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
