"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FullscreenMediaWrapper } from "../ui/FullscreenMediaWrapper";

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
      "/assets/modelos_clientes/foxy/foxy (3).mp4",
      "/assets/modelos_clientes/foxy/foxy (4).mp4",
    ],
    images: [
      "/assets/modelos_clientes/foxy/foxy (1).jpeg",
      "/assets/modelos_clientes/foxy/foxy (1).jpg",
      "/assets/modelos_clientes/foxy/foxy (2).jpeg",
      "/assets/modelos_clientes/foxy/foxy (2).jpg",
      "/assets/modelos_clientes/foxy/foxy (3).jpg",
      "/assets/modelos_clientes/foxy/foxy (4).jpeg",
      "/assets/modelos_clientes/foxy/foxy (4).jpg",
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
      "/assets/modelos_clientes/egipcio/egipcio (5).mp4",
    ],
    images: [
      "/assets/modelos_clientes/egipcio/egipcio (1).jpeg",
      "/assets/modelos_clientes/egipcio/egipcio (1).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (3).jpeg",
      "/assets/modelos_clientes/egipcio/egipcio (3).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (4).jpeg",
      "/assets/modelos_clientes/egipcio/egipcio (4).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (5).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (6).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (7).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (8).jpg",
      "/assets/modelos_clientes/egipcio/egipcio (9).jpg",
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
    id: "brasileiro",
    title: "Volume Brasileiro",
    cover: "/assets/modelos_clientes/brasileiro/brasileiro (1).jpeg",
    videos: [
      "/assets/modelos_clientes/brasileiro/brasileiro (1).mp4",
      "/assets/modelos_clientes/brasileiro/brasileiro (2).mp4",
      "/assets/modelos_clientes/brasileiro/brasileiro (3).mp4",
      "/assets/modelos_clientes/brasileiro/brasileiro (5).mp4",
    ],
    images: [
      "/assets/modelos_clientes/brasileiro/brasileiro (1).jpeg",
      "/assets/modelos_clientes/brasileiro/brasileiro (1).jpg",
      "/assets/modelos_clientes/brasileiro/brasileiro (2).jpeg",
      "/assets/modelos_clientes/brasileiro/brasileiro (2).jpg",
      "/assets/modelos_clientes/brasileiro/brasileiro (3).jpeg",
      "/assets/modelos_clientes/brasileiro/brasileiro (3).jpg",
      "/assets/modelos_clientes/brasileiro/brasileiro (4).jpg",
      "/assets/modelos_clientes/brasileiro/brasileiro (5).jpg",
    ]
  },
  {
    id: "brow-lamination",
    title: "Brow Lamination",
    cover: "/assets/modelos_clientes/brown_lamination/brown_lamination (8).jpeg",
    videos: [
      "/assets/modelos_clientes/brown_lamination/brown_lamination (1).mp4",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (2).mp4",
    ],
    images: [
      "/assets/modelos_clientes/brown_lamination/brown_lamination (8).jpeg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (1).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (2).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (3).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (4).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (5).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (6).jpg",
      "/assets/modelos_clientes/brown_lamination/brown_lamination (7).jpg",
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
    id: "brasileiro_castanho",
    title: "Brasileiro Castanho",
    cover: "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (1).jpg",
    videos: [
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (1).mp4",
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (2).mp4",
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (3).mp4",
    ],
    images: [
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (1).jpg",
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (2).jpg",
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (3).jpg",
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (4).jpg",
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (5).jpg",
      "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (6).jpg",
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

function PortfolioCard({ group, setActiveGroup }: { group: PortfolioGroup, setActiveGroup: (g: PortfolioGroup) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const allMedia = Array.from(new Set([...group.videos, group.cover, ...group.images]));

  useEffect(() => {
    if (!isHovered || allMedia.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allMedia.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, allMedia.length]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentIndex(0);
  };

  const currentSrc = allMedia[currentIndex];

  return (
    <div 
      onClick={() => setActiveGroup(group)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="flex-[0_0_85vw] md:flex-[0_0_320px] h-[450px] relative rounded-xl overflow-hidden shadow-sm border-[0.5px] border-outline-variant group cursor-pointer bg-neutral-900"
    >
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {currentSrc.endsWith('.mp4') ? (
              <video
                src={currentSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <Image
                src={currentSrc}
                alt={group.title}
                fill
                sizes="(max-width: 768px) 85vw, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none transition-opacity duration-300"></div>
      
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10 pointer-events-none">
        <span className="text-white font-headline-sm text-headline-sm shadow-sm">
          {group.title}
        </span>
        <span className="text-white/80 text-xs font-medium uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
          {allMedia.length} itens
        </span>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [activeGroup, setActiveGroup] = useState<PortfolioGroup | null>(null);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps" 
  });

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
        
        <div className="flex gap-2 self-start md:self-end" role="group" aria-label="Controles do carrossel">
          <button 
            onClick={() => emblaApi?.scrollPrev()}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface"
            aria-label="Categoria anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => emblaApi?.scrollNext()}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface"
            aria-label="Próxima categoria"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="w-full px-container-padding md:px-[8%]">
        <div className="overflow-hidden" ref={emblaRef} role="region" aria-roledescription="carrossel" aria-label="Portfólio de trabalhos">
          <div className="flex gap-6 py-4 touch-pan-y">
            {portfolioGroups.map((group) => (
              <PortfolioCard key={group.id} group={group} setActiveGroup={setActiveGroup} />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal com Auto-Identificação de Mídia (Video vs Image) */}
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
              {Array.from(new Set([...activeGroup.videos, activeGroup.cover, ...activeGroup.images])).map((src, idx) => (
                <motion.div
                  key={`media-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full max-w-2xl relative rounded-xl shadow-2xl overflow-hidden bg-black/50"
                  style={{ minHeight: "300px" }}
                >
                  {src.endsWith('.mp4') ? (
                    <FullscreenMediaWrapper src={src} type="video" className="block w-full h-full">
                      <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-contain"
                      />
                    </FullscreenMediaWrapper>
                  ) : (
                    <FullscreenMediaWrapper src={src} type="image" className="block w-full h-full">
                      <Image
                        src={src}
                        alt={`${activeGroup.title} - Item ${idx + 1}`}
                        width={800}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                    </FullscreenMediaWrapper>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
