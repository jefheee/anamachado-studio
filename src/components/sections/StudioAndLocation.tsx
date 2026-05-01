"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Gift, Heart, Coffee, MapPin, Clock, Navigation, Phone } from "lucide-react";
import Image from "next/image";
import { trackCTAClick } from "@/utils/analytics";
import { ScrollRevealWrapper } from "@/components/ui/ScrollRevealWrapper";

// --- Components from Espaco ---

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

  useEffect(() => {
    if (media.length <= 1) return;
    const timer = setInterval(() => {
      const upcoming = (activeIndex + 1) % media.length;
      setNextIndex(upcoming);
      if (media[upcoming].type === "image") {
        setNextReady(true);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [media.length, activeIndex]);

  useEffect(() => {
    if (nextReady && nextIndex !== null) {
      const swapTimer = setTimeout(() => {
        setActiveIndex(nextIndex);
        setNextIndex(null);
        setNextReady(false);
      }, 800);
      return () => clearTimeout(swapTimer);
    }
  }, [nextReady, nextIndex]);

  useEffect(() => {
    if (activeVideoRef.current) {
      if (isInView) {
        activeVideoRef.current.play().catch(() => { });
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
      className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-neutral-800 ${className}`}
    >
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

      {next && (
        <div
          className={`absolute inset-0 w-full h-full z-[1] transition-opacity duration-700 bg-neutral-800 ${nextReady ? "opacity-100" : "opacity-0"
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

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10"></div>

      <div className="absolute bottom-5 left-5 z-20 pointer-events-none">
        <span className="text-white font-headline-sm text-sm md:text-base drop-shadow-lg">{label}</span>
      </div>

      {media.length > 1 && (
        <div className="absolute top-4 right-4 z-20 flex gap-1 pointer-events-none">
          {media.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-white scale-125" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function FeaturePill({ icon: Icon, text, delay = 0 }: { icon: React.ElementType; text: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-secondary" />
      </div>
      <span className="font-body-md text-sm text-white/80 font-medium">{text}</span>
    </motion.div>
  );
}

// --- Main Merged Component ---

export function StudioAndLocation() {
  return (
    <section id="espaco" className="py-16 md:py-24 px-container-padding bg-neutral-900 text-white md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Espaco Header */}
        <ScrollRevealWrapper className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4 font-semibold">
            Estrutura Premium & Localização
          </span>
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">
            O Nosso Espaço
          </h2>
          <p className="font-body-md text-body-md text-white/60">
            Projetado para oferecer a máxima imersão. Ambiente totalmente climatizado, equipamentos de ponta, iluminação impecável e localização privilegiada no coração de Palhoça.
          </p>
        </ScrollRevealWrapper>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <FeaturePill icon={Coffee} text="Ambiente Climatizado" delay={0.1} />
          <FeaturePill icon={Sparkles} text="Equipamentos de Ponta" delay={0.2} />
          <FeaturePill icon={Gift} text="Mimos Exclusivos" delay={0.3} />
          <FeaturePill icon={Heart} text="Conforto Total" delay={0.4} />
        </div>

        {/* Studio Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px] mb-16">
          <MediaSwapCard
            media={[
              { src: "/assets/espaco/videoespaco.mp4", type: "video" },
              { src: "/assets/espaco/decoracoesespaco.jpg", type: "image" },
            ]}
            label="O Estúdio"
            className="col-span-2 row-span-2"
            delay={0}
          />
          <MediaSwapCard
            media={[{ src: "/assets/espaco/fotoespaco.jpg", type: "image" }]}
            label="Maca Premium"
            className="col-span-1 row-span-1"
            delay={0.1}
          />
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
          <MediaSwapCard
            media={[
              { src: "/assets/espaco/mimos_brindes/brindesnatalespaco.jpg", type: "image" },
              { src: "/assets/espaco/mimos_brindes/montando_brindes_estudio.mp4", type: "video" },
            ]}
            label="Preparando Mimos"
            className="col-span-1 row-span-1"
            delay={0.3}
          />
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

        {/* Location Content (from Location.tsx) */}
        <div id="localizacao" className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-auto">
          <ScrollRevealWrapper className="md:col-span-3 md:row-span-2 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[300px] md:min-h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.618037346736!2d-48.66014418493922!3d-27.636254182821425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527351fa56bd5c1%3A0xc3af7a829da141b7!2sR.%20Machado%20de%20Assis%2C%20995%20-%20Passa%20Vinte%2C%20Palho%C3%A7a%20-%20SC%2C%2088132-140!5e0!3m2!1spt-BR!2sbr!4v1714151234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Estúdio Ana Machado"
            />
          </ScrollRevealWrapper>

          <ScrollRevealWrapper direction="right" delay={0.1} className="md:col-span-1 bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 flex flex-col gap-4 hover:bg-white/8 transition-colors group">
            <div className="w-11 h-11 bg-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="text-secondary w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-md text-lg text-white mb-2">Endereço</h3>
              <address className="text-sm text-white/60 leading-relaxed not-italic">
                <span className="font-semibold text-white/80">Rua Machado de Assis, 995</span><br />
                Jardim Eldorado<br />
                Palhoça - SC, 88133-380
              </address>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper direction="right" delay={0.2} className="md:col-span-1 bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 flex flex-col hover:bg-white/8 transition-colors group">
            <div className="flex flex-col gap-4">
              <div className="w-11 h-11 bg-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Clock className="text-secondary w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-white mb-2">Funcionamento</h3>
                <p className="text-sm text-white/60 mb-3">Seg a Sex: <span className="text-white/90 font-medium">09:30h - 18:30h</span></p>
                <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Exclusivo com Hora Marcada</span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-white/10 w-full">
              <a
                href="https://wa.me/5548992054803"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick('Location_AgendarHorario')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-white/50" />
                <span className="font-label-sm text-[11px] uppercase tracking-widest font-semibold text-white/80">Agendar Meu Horário</span>
              </a>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={0.3} className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="https://maps.app.goo.gl/VjwA4aEg3B1zfz4PA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 px-6 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
              <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">Google Maps</span>
            </a>
            <a href="https://maps.apple/p/~kdMwb74ruP5c8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 px-6 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
              <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">Apple Maps</span>
            </a>
            <a href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20como%20chegar%20ao%20est%C3%BAdio." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 px-6 bg-secondary/20 border border-secondary/30 text-white rounded-2xl hover:bg-secondary/30 hover:border-secondary/40 transition-all group">
              <Navigation className="w-5 h-5 text-secondary opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">Como Chegar</span>
            </a>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
}
