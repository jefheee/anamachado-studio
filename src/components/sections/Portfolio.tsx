"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type PortfolioGroup = {
  id: string;
  title: string;
  cover: string;
  videos: string[];
  images: string[];
};

const portfolioGroups: PortfolioGroup[] = [
  {
    id: "foxy",
    title: "Foxy Eyes",
    cover: "/assets/modelos_clientes/foxy/foxy (1).jpeg",
    videos: [
      "/assets/modelos_clientes/foxy/foxy (1).mp4",
      "/assets/modelos_clientes/foxy/foxy (2).mp4",
      "/assets/modelos_clientes/foxy/foxy (5).mp4",
      "/assets/modelos_clientes/foxy/foxy (6).mp4",
    ],
    images: [
      "/assets/modelos_clientes/foxy/foxy (1).jpeg",
      "/assets/modelos_clientes/foxy/foxy (1).jpg",
      "/assets/modelos_clientes/foxy/foxy (2).jpeg",
      "/assets/modelos_clientes/foxy/foxy (2).jpg",
      "/assets/modelos_clientes/foxy/foxy (3).jpeg",
      "/assets/modelos_clientes/foxy/foxy (3).jpg",
      "/assets/modelos_clientes/foxy/foxy (5).jpg",
      "/assets/modelos_clientes/foxy/foxy (6).jpg",
      "/assets/modelos_clientes/foxy/foxy (7).jpg",
    ]
  },
  {
    id: "egipcio",
    title: "Volume Egípcio",
    cover: "/assets/modelos_clientes/egipcio/egipcio (1).jpeg",
    videos: [
      "/assets/modelos_clientes/egipcio/egipcio (1).mp4",
      "/assets/modelos_clientes/egipcio/egipcio (2).mp4",
      "/assets/modelos_clientes/egipcio/egipcio (3).mp4",
      "/assets/modelos_clientes/egipcio/egipcio (4).mp4",
    ],
    images: [
      "/assets/modelos_clientes/egipcio/egipcio (1).jpeg",
      "/assets/modelos_clientes/egipcio/egipcio (1).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (2).jpeg",
      "/assets/modelos_clientes/egipcio/egipcio (2).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (3).jpeg",
      "/assets/modelos_clientes/egipcio/egipcio (3).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (4).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (5).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (6).jpg",
    ]
  },
  {
    id: "henna",
    title: "Sobrancelhas de Henna",
    cover: "/assets/modelos_clientes/henna/henna (1).jpg",
    videos: [
      "/assets/modelos_clientes/henna/henna (1).mp4",
      "/assets/modelos_clientes/henna/henna (2).mp4",
      "/assets/modelos_clientes/henna/henna (3).mp4",
      "/assets/modelos_clientes/henna/henna (4).mp4",
      "/assets/modelos_clientes/henna/henna (5).mp4",
    ],
    images: [
      "/assets/modelos_clientes/henna/henna (1).jpg",
      "/assets/modelos_clientes/henna/henna (2).jpg",
      "/assets/modelos_clientes/henna/henna (3).jpg",
      "/assets/modelos_clientes/henna/henna (4).jpg",
      "/assets/modelos_clientes/henna/henna (5).jpg",
      "/assets/modelos_clientes/henna/henna (6).jpg",
      "/assets/modelos_clientes/henna/henna (7).jpg",
    ]
  },
  {
    id: "design_simples",
    title: "Design Simples",
    cover: "/assets/modelos_clientes/design_simples/design_simples (1).jpg",
    videos: [
      "/assets/modelos_clientes/design_simples/design_simples (1).mp4",
      "/assets/modelos_clientes/design_simples/design_simples (2).mp4",
      "/assets/modelos_clientes/design_simples/design_simples (3).mp4",
    ],
    images: [
      "/assets/modelos_clientes/design_simples/design_simples (1).jpg",
      "/assets/modelos_clientes/design_simples/design_simples (2).jpg",
      "/assets/modelos_clientes/design_simples/design_simples (3).jpg",
      "/assets/modelos_clientes/design_simples/design_simples (4).jpg",
      "/assets/modelos_clientes/design_simples/design_simples (5).jpeg",
    ]
  },
  {
    id: "brow-lamination",
    title: "Brow Lamination",
    cover: "/assets/modelos_clientes/brown_lamination/brown_lamination (8).jpeg",
    videos: [
      "/assets/modelos_clientes/brown_lamination/brown_lamination (2).mp4",
    ],
    images: [
      "/assets/modelos_clientes/brown_lamination/brown_lamination (8).jpeg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (3).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (4).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (5).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (6).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (7).jpg",
    ]
  },
  {
    id: "brasileiro",
    title: "Volume Brasileiro",
    cover: "/assets/modelos_clientes/brasileiro1.jpeg",
    videos: [],
    images: [
      "/assets/modelos_clientes/brasileiro1.jpeg",
      "/assets/modelos_clientes/brasileiro2.jpeg",
      "/assets/modelos_clientes/brasileiro3.jpeg",
    ]
  },
  {
    id: "egipcio_castanho",
    title: "Egípcio Castanho",
    cover: "/assets/modelos_clientes/egipcio_castanho/volume_egipcio_castanho (1).jpg",
    videos: [
      "/assets/modelos_clientes/egipcio_castanho/volume_egipcio_castanho (1).mp4",
    ],
    images: [
      "/assets/modelos_clientes/egipcio_castanho/volume_egipcio_castanho (1).jpg",
      "/assets/modelos_clientes/egipcio_castanho/volume_egipcio_castanho (2).jpg",
    ]
  },
  {
    id: "micropigmentacao_fio_a_fio",
    title: "Micropigmentação Fio a Fio",
    cover: "/assets/modelos_clientes/micropigmentacao_fio_a_fio/micropigmentacao_fio_a_fio (1).jpeg",
    videos: [],
    images: [
      "/assets/modelos_clientes/micropigmentacao_fio_a_fio/micropigmentacao_fio_a_fio (1).jpeg",
      "/assets/modelos_clientes/micropigmentacao_fio_a_fio/micropigmentacao_fio_a_fio (1).jpg",
      "/assets/modelos_clientes/micropigmentacao_fio_a_fio/micropigmentacao_fio_a_fio (2).jpg",
      "/assets/modelos_clientes/micropigmentacao_fio_a_fio/micropigmentacao_fio_a_fio (3).jpg",
      "/assets/modelos_clientes/micropigmentacao_fio_a_fio/micropigmentacao_fio_a_fio (4).jpg",
    ]
  },
  {
    id: "micropigmentacao_labial",
    title: "Micropigmentação Labial",
    cover: "/assets/modelos_clientes/micropigmentacao_labial/micropigmentacao_labial_depois.jpeg",
    videos: [],
    images: [
      "/assets/modelos_clientes/micropigmentacao_labial/micropigmentacao_labial_depois.jpeg",
      "/assets/modelos_clientes/micropigmentacao_labial/micropigmentacao_labial_antes_e_depois.jpg",
      "/assets/modelos_clientes/micropigmentacao_labial/micropigmentacao_labial_antes.jpg",
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
            Clique num modelo para ver mais detalhes em vídeo e confira de perto a excelência, retenção e simetria dos nossos atendimentos.
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
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                <span className="text-white font-headline-sm text-headline-sm shadow-sm">
                  {group.title}
                </span>
                <span className="text-white/80 text-xs font-medium uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  {group.videos.length + group.images.length} itens
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal com Renderização Condicional de Vídeo */}
      <AnimatePresence>
        {activeGroup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
          >
            <div className="p-6 flex justify-between items-center text-white shrink-0">
              <h3 className="font-headline-md text-xl">{activeGroup.title}</h3>
              <button 
                onClick={() => setActiveGroup(null)}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 items-center">
              {/* Vídeos renderizados apenas quando modal está aberto */}
              {activeGroup.videos.map((src, idx) => (
                <motion.div
                  key={`video-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden bg-black/50"
                >
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              ))}

              {/* Fotos */}
              {activeGroup.images.map((src, idx) => (
                <motion.img
                  key={`img-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (activeGroup.videos.length + idx) * 0.1 }}
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
