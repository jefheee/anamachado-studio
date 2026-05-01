"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Gift, Heart, Coffee } from "lucide-react";
import Image from "next/image";

// Auto-swap media card — crossfade with readiness tracking (no blank frames)
function MediaSwapCard({
  media,
  label,
  className = "",
  delay = 0,
}: {
  media: { src: string; type: "image" | "video" }[];
  label: string;
  className?: string;
  delay?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [nextReady, setNextReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  // Auto-swap timer
  useEffect(() => {
    if (media.length <= 1) return;
    const timer = setInterval(() => {
      const upcoming = (activeIndex + 1) % media.length;
      setNextIndex(upcoming);
      // For images, mark ready immediately
      if (media[upcoming].type === "image") {
        setNextReady(true);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [media.length, activeIndex]);

  // When next is ready, commit the swap
  useEffect(() => {
    if (nextReady && nextIndex !== null) {
      // Small delay for crossfade effect
      const swapTimer = setTimeout(() => {
        setActiveIndex(nextIndex);
        setNextIndex(null);
        setNextReady(false);
      }, 800); // Slightly longer for a smoother crossfade
      return () => clearTimeout(swapTimer);
    }
  }, [nextReady, nextIndex]);

  // Play/pause active video
  useEffect(() => {
    if (activeVideoRef.current) {
      if (isInView) {
        activeVideoRef.current.play().catch(() => {});
      } else {
        activeVideoRef.current.pause();
      }
    }
  }, [isInView, activeIndex]);

  const handleNextCanPlay = useCallback(() => {
    setNextReady(true);
  }, []);

  const active = media[activeIndex];
  const next = nextIndex !== null ? media[nextIndex] : null;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-neutral-900 ${className}`}
    >
      {/* Active layer — always visible */}
      <div className="absolute inset-0 w-full h-full z-0">
        {active.type === "video" ? (
          <video
            ref={activeVideoRef}
            src={active.src}
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={active.src}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        )}
      </div>

      {/* Next layer — fades in on top when ready, then becomes the active */}
      {next && (
        <div
          className={`absolute inset-0 w-full h-full z-[1] transition-opacity duration-700 bg-neutral-900 ${
            nextReady ? "opacity-100" : "opacity-0"
          }`}
        >
          {next.type === "video" ? (
            <video
              ref={nextVideoRef}
              src={next.src}
              autoPlay
              muted
              playsInline
              onCanPlay={handleNextCanPlay}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={next.src}
              alt={label}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              onLoad={() => setNextReady(true)}
            />
          )}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10"></div>

      {/* Label */}
      <div className="absolute bottom-5 left-5 z-20 pointer-events-none">
        <span className="text-white font-headline-sm text-sm md:text-base drop-shadow-lg">{label}</span>
      </div>

      {/* Media count indicator */}
      {media.length > 1 && (
        <div className="absolute top-4 right-4 z-20 flex gap-1 pointer-events-none">
          {media.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Feature highlight pill
function FeaturePill({ icon: Icon, text, delay = 0 }: { icon: React.ElementType; text: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-md border border-neutral-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-secondary" />
      </div>
      <span className="font-body-md text-sm text-on-surface font-medium">{text}</span>
    </motion.div>
  );
}

export function Espaco() {
  return (
    <section id="espaco" className="py-16 md:py-24 px-container-padding bg-surface-container-lowest md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4 font-semibold">
            Estrutura Premium
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            O Nosso Espaço
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Projetado para oferecer a máxima imersão. Ambiente totalmente climatizado, equipamentos de ponta, iluminação impecável e mimos exclusivos para cada cliente.
          </p>
        </motion.div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <FeaturePill icon={Coffee} text="Ambiente Climatizado" delay={0.1} />
          <FeaturePill icon={Sparkles} text="Equipamentos de Ponta" delay={0.2} />
          <FeaturePill icon={Gift} text="Mimos Exclusivos" delay={0.3} />
          <FeaturePill icon={Heart} text="Conforto Total" delay={0.4} />
        </div>

        {/* Bento Grid - Media showcase with crossfade swap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">

          {/* Main space video - Tall left */}
          <MediaSwapCard
            media={[
              { src: "/assets/espaco/videoespaco.mp4", type: "video" },
              { src: "/assets/espaco/decoracoesespaco.jpg", type: "image" },
            ]}
            label="O Estúdio"
            className="col-span-2 row-span-2"
            delay={0}
          />

          {/* Studio photo - Top right */}
          <MediaSwapCard
            media={[
              { src: "/assets/espaco/fotoespaco.jpg", type: "image" },
            ]}
            label="Maca Premium"
            className="col-span-1 row-span-1"
            delay={0.1}
          />

          {/* Mimos - brindes pascoa */}
          <MediaSwapCard
            media={[
              { src: "/assets/espaco/mimos_brindes/brindesnatalespaco.jpg", type: "image" },
              { src: "/assets/espaco/mimos_brindes/brindespascoaespaco.mp4", type: "video" },
              { src: "/assets/espaco/mimos_brindes/sorteio_cesta_pascoa.jpg", type: "image" },
            ]}
            label="Brindes e Sorteios"
            className="col-span-1 row-span-1"
            delay={0.2}
          />

          {/* Montando brindes */}
          <MediaSwapCard
            media={[
              { src: "/assets/espaco/mimos_brindes/brindesnatalespaco.jpg", type: "image" },
              { src: "/assets/espaco/mimos_brindes/montando_brindes_estudio.mp4", type: "video" },
            ]}
            label="Preparando Mimos"
            className="col-span-1 row-span-1"
            delay={0.3}
          />

          {/* Decorações */}
          <MediaSwapCard
            media={[
              { src: "/assets/espaco/decoracoesespaco.jpg", type: "image" },
              { src: "/assets/espaco/mimos_brindes/sorteio_cesta_pascoa.jpg", type: "image" },
            ]}
            label="Decoração e Carinho"
            className="col-span-1 row-span-1"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
