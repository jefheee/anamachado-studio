"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { FullscreenMediaWrapper } from "../ui/FullscreenMediaWrapper";

function getStandardizedTag(src: string): string {
  const lowerSrc = src.toLowerCase();
  if (lowerSrc.includes("cilios") || lowerSrc.includes("ciliios")) return "Aplicação Prática";
  if (lowerSrc.includes("sobrancelha")) return "Design de Sobrancelha";
  if (lowerSrc.includes("manequim")) return "Treino em Manequim";
  if (lowerSrc.includes("certificado")) return "Certificação VIP";
  return "Treinamento Prático";
}

function ResultVideo({
  src,
  title,
  className
}: {
  src: string;
  title: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.3 });
  const tag = getStandardizedTag(src);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <FullscreenMediaWrapper src={src} type="video" className={`rounded-2xl overflow-hidden shadow-md bg-black relative group block h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity flex flex-col justify-end p-6 pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <Play className="w-4 h-4 text-white fill-white" />
          <span className="text-white font-label-sm text-sm tracking-widest uppercase">{tag}</span>
        </div>
        <h3 className="text-white font-headline-sm text-lg">{title}</h3>
      </div>
    </FullscreenMediaWrapper>
  );
}

function ResultImage({
  src,
  title,
  className
}: {
  src: string;
  title: string;
  className: string;
}) {
  const tag = getStandardizedTag(src);
  return (
    <FullscreenMediaWrapper src={src} type="image" className={`rounded-2xl overflow-hidden shadow-md relative group block h-full bg-surface-variant ${className}`}>
      <img
        src={src}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity flex flex-col justify-end p-6 pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-label-sm text-sm tracking-widest uppercase">{tag}</span>
        </div>
        <h3 className="text-white font-headline-sm text-lg">{title}</h3>
      </div>
    </FullscreenMediaWrapper>
  );
}

const alunasMedia = [
  { src: "/assets/curso_vip/alunas/aluna_gabriella_soares/videoalunacilios.mp4", title: "Aluna Gabriella", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_beatriz/alunacilios.jpg", title: "Aluna Beatriz", type: "image" },
  { src: "/assets/curso_vip/alunas/aluna_gabriella_soares/videoalunasobrancelha.mp4", title: "Aluna Gabriella", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_joyce/fotoalunacilios.jpg", title: "Aluna Joyce", type: "image" },
  { src: "/assets/curso_vip/alunas/aluna_leticia/videociliospessoa.mp4", title: "Aluna Letícia", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_maria/videociliosmodelo.mp4", title: "Aluna Maria", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_maria/ciliosmodelo.jpg", title: "Aluna Maria", type: "image" },
  { src: "/assets/curso_vip/alunas/aluna_maria/treinandocilios.mp4", title: "Aluna Maria", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_gabriella_soares/fotoalunacilios.jpg", title: "Aluna Gabriella", type: "image" },
  { src: "/assets/curso_vip/alunas/aluna_gabriella_soares/fotoalunasobrancelha.jpg", title: "Aluna Gabriella", type: "image" },
  { src: "/assets/curso_vip/alunas/aluna_joyce/videoalunacilios.mp4", title: "Aluna Joyce", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_mariana/video_mariana.mp4", title: "Aluna Mariana", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_sara/alunatreinando.mp4", title: "Aluna Sara", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_sara/video_sara.mp4", title: "Aluna Sara", type: "video" },
  { src: "/assets/curso_vip/alunas/sem_id/videociliosmodelo.mp4", title: "Aluna", type: "video" },
  { src: "/assets/curso_vip/alunas/aluna_beatriz/alunaciliiosmanequim.jpg", title: "Aluna Beatriz", type: "image" }
];

export function AlunasResults() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });

  return (
    <section id="resultados-alunas" className="py-16 md:py-24 px-container-padding bg-surface md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            A Arte em Prática
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Resultados Reais das Nossas Alunas
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Da teoria à prática com excelência. Arraste para o lado e veja o desempenho e a evolução na hora de aplicar as técnicas.
          </p>
        </motion.div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6 touch-pan-y">
            {alunasMedia.map((media, index) => (
              <div 
                key={index} 
                className="relative flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_28%] h-[400px] md:h-[500px] select-none"
              >
                {media.type === "video" ? (
                  <ResultVideo src={media.src} title={media.title} className="w-full h-full" />
                ) : (
                  <ResultImage src={media.src} title={media.title} className="w-full h-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
