"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Clock, Award, Headset, BookOpen, Users, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { trackCTAClick } from "@/utils/analytics";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Lazy-loaded video: only mounts when scrolled into view, uses poster frame
function LazyVideo({
  src,
  title,
  subtitle,
  gradientPos,
  objectPosition = "object-center"
}: {
  src: string;
  title: string;
  subtitle: string;
  gradientPos: "top" | "bottom";
  objectPosition?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });
  const [shouldMount, setShouldMount] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Mount video only when it enters viewport for the first time
  useEffect(() => {
    if (isInView && !shouldMount) {
      requestAnimationFrame(() => setShouldMount(true));
    }
  }, [isInView, shouldMount]);

  // Play/pause based on visibility — skip autoplay when reduced motion is preferred
  useEffect(() => {
    if (!videoRef.current || !shouldMount) return;
    if (prefersReducedMotion) {
      videoRef.current.pause();
      return;
    }
    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView, shouldMount, prefersReducedMotion]);

  return (
    <div ref={containerRef} className="relative w-full h-full group overflow-hidden bg-neutral-900">
      {shouldMount && (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setIsReady(true)}
          className={`w-full h-full object-cover ${objectPosition} transition-all duration-1000 scale-105 group-hover:scale-100 ${
            isReady ? "opacity-80 group-hover:opacity-100" : "opacity-0"
          }`}
        />
      )}
      {gradientPos === "bottom" ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 pointer-events-none">
          <span className="text-secondary font-label-sm uppercase tracking-widest text-[10px] mb-1">{subtitle}</span>
          <h3 className="text-white font-headline-sm text-sm sm:text-base leading-tight">{title}</h3>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent flex flex-col justify-start p-4 pointer-events-none">
          <span className="text-secondary font-label-sm uppercase tracking-widest text-[10px] mb-1">{subtitle}</span>
          <h3 className="text-white font-headline-sm text-sm sm:text-base leading-tight">{title}</h3>
        </div>
      )}
    </div>
  );
}

export function Mentoria() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (!sectionRef.current || !heroRef.current || !bgRef.current || prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // Desktop only: pin + parallax zoom
    mm.add("(min-width: 768px)", () => {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
        },
      });

      heroTl
        .fromTo(
          bgRef.current,
          { scale: 1.4, opacity: 1 },
          { scale: 1, opacity: 1, duration: 1, ease: "none" }
        )
        .fromTo(
          ".mentoria-hero-text",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          0.3
        );

      // Content reveal below hero
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      }

      return () => {
        heroTl.kill();
      };
    });

    // Mobile: make hero text visible immediately (no pin, no GSAP animation)
    mm.add("(max-width: 767px)", () => {
      gsap.set(".mentoria-hero-text", { opacity: 1, y: 0 });
      if (bgRef.current) {
        gsap.set(bgRef.current, { scale: 1 });
      }
    });

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef, dependencies: [prefersReducedMotion] });

  // Framer Motion transition for bento cards — disabled if reduced motion
  const cardTransition = prefersReducedMotion ? { duration: 0 } : undefined;

  return (
    <section id="mentoria" ref={sectionRef} className="overflow-hidden" aria-label="Mentoria VIP de Extensão de Cílios">

      {/* MENTORIA HERO — Pinned section with bg-mentoria.jpg */}
      <div ref={heroRef} className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image - Starts visible and zoomed in (scale 1.4 via GSAP) */}
        <div ref={bgRef} className="absolute inset-0 z-0 origin-center will-change-transform overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/bg-mentoria.jpg"
            className="w-full h-full object-cover"
            alt="Mentoria VIP Ana Machado"
          />
          {/* Stronger overlay for text readability */}
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* Text content — also starts invisible, revealed by GSAP */}
        <div className="mentoria-hero-text relative z-10 text-center px-container-padding md:px-[8%] max-w-4xl mx-auto opacity-0 md:opacity-0">
          {/* Backdrop for extra readability */}
          <div className="absolute inset-0 -m-8 bg-black/20 backdrop-blur-[2px] rounded-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="font-label-sm text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70 block mb-4 md:mb-6 font-medium" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              Metodologia Ana Júlia Machado
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 leading-[1.1] font-bold" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>
              Curso de Extensão de Cílios
              <span className="block text-secondary mt-1 md:mt-2">Lash Designer de Excelência</span>
            </h2>
            <p className="font-body-lg text-sm sm:text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Domine a técnica, aumente sua retenção e construa uma agenda lucrativa em um mercado de alta demanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <Link
                href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20garantir%20minha%20vaga%20na%20Mentoria%20VIP."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick('Mentoria_GarantirVaga')}
                className="w-full sm:w-auto max-w-[280px] sm:max-w-none inline-flex items-center justify-center bg-secondary text-white font-label-sm text-xs md:text-sm px-6 py-3.5 md:py-4 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all group shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300 min-h-[44px]"
              >
                Garantir Minha Vaga
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20baixar%20gratuitamente%20o%20Manual%20Definitivo%20de%20Cuidados%20P%C3%B3s-Extens%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto max-w-[280px] sm:max-w-none inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white font-label-sm text-xs md:text-sm px-6 py-3.5 md:py-4 rounded-xl uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-300 min-h-[44px]"
              >
                Baixe o Manual Gratuito
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BENTO GRID — What's included */}
      <div ref={contentRef} className="relative py-12 md:py-24 px-4 md:px-[8%] bg-neutral-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="font-label-sm text-[10px] md:text-label-sm text-secondary uppercase tracking-widest block mb-2 font-semibold">
              Formação Completa
            </span>
            <h2 className="font-headline-lg text-2xl md:text-headline-lg text-primary">
              O Que Está Incluso na Mentoria
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-auto md:auto-rows-[220px]">

            {/* Kit Premium (4 Vídeos) - Span 2x2 — LAZY LOADED */}
            <div className="col-span-2 md:col-span-2 md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-[0.5px] border-neutral-200 aspect-square md:aspect-auto flex flex-col">
              <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5 bg-neutral-900">
                <LazyVideo
                  src="/assets/curso_vip/montandocaixa.mp4"
                  title="Kit Exclusivo"
                  subtitle="Incluso"
                  gradientPos="top"
                  objectPosition="object-[center_78%]"
                />
                <LazyVideo
                  src="/assets/curso_vip/montandocaixacurso.mp4"
                  title="Preparado com Carinho"
                  subtitle="Detalhes"
                  gradientPos="top"
                  objectPosition="object-[center_67%]"
                />
                <LazyVideo
                  src="/assets/curso_vip/mostrandoitenscurso.mp4"
                  title="Produtos de Elite"
                  subtitle="Materiais"
                  gradientPos="bottom"
                />
                <LazyVideo
                  src="/assets/curso_vip/mostrandoitenscurso (2).mp4"
                  title="Fature Imediatamente"
                  subtitle="Pronto para uso"
                  gradientPos="bottom"
                  objectPosition="object-[center_70%]"
                />
              </div>
            </div>

            {/* 8h Curso - Span 1 Col on mobile, 2 Cols on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={cardTransition}
              className="col-span-1 md:col-span-2 bg-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 shadow-sm border border-neutral-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <Clock className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-16 h-16 md:w-32 md:h-32 text-surface-container opacity-30 md:opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none" aria-hidden="true" />
              <h4 className="font-headline-sm text-sm sm:text-base md:font-headline-md md:text-2xl text-primary mb-1 md:mb-3 relative z-10 leading-tight">8h de Curso Presencial</h4>
              <p className="text-on-surface-variant font-body-sm text-[11px] sm:text-xs md:text-sm md:font-body-md max-w-sm relative z-10 leading-snug md:leading-relaxed">Teoria e prática intensiva. Podendo dividir em 2 dias ou 1 dia focado.</p>
            </motion.div>

            {/* Treinamento Modelos - Span 1 Col on mobile, 2 Cols on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={cardTransition ?? { delay: 0.1 }}
              className="col-span-1 md:col-span-2 bg-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 shadow-sm border border-neutral-100 flex flex-col justify-center group hover:shadow-md transition-shadow"
            >
              <Users className="w-5 h-5 md:w-8 md:h-8 text-secondary mb-2 md:mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h4 className="font-headline-sm text-sm sm:text-base md:font-headline-md md:text-2xl text-primary mb-1 md:mb-3 leading-tight">Treinamento em Modelos</h4>
              <p className="text-on-surface-variant font-body-sm text-[11px] sm:text-xs md:text-sm md:font-body-md leading-snug md:leading-relaxed">Mão na massa desde o início com supervisão rigorosa e correção ao vivo.</p>
            </motion.div>

            {/* Apostila - Span 1 Col */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={cardTransition ?? { delay: 0.2 }}
              className="col-span-1 md:col-span-1 bg-secondary text-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow hover:-translate-y-1 duration-300"
            >
              <BookOpen className="w-5 h-5 md:w-8 md:h-8 mb-2 md:mb-4 opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <div>
                <h4 className="font-headline-sm text-sm sm:text-base md:font-headline-md md:text-xl mb-1 md:mb-2 leading-tight">Apostila Completa</h4>
                <p className="text-white/80 font-body-sm text-[11px] sm:text-xs md:text-sm leading-snug md:leading-relaxed">Material didático cobrindo desde a anatomia até biossegurança.</p>
              </div>
            </motion.div>

            {/* Captação - Span 1 Col */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={cardTransition ?? { delay: 0.3 }}
              className="col-span-1 md:col-span-1 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 shadow-sm border border-neutral-100 flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <Smartphone className="w-5 h-5 md:w-8 md:h-8 text-primary mb-2 md:mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div>
                <h4 className="font-headline-sm text-sm sm:text-base md:font-headline-md md:text-xl text-primary mb-1 md:mb-2 leading-tight">Marketing e Perfil</h4>
                <p className="text-on-surface-variant font-body-sm text-[11px] sm:text-xs md:text-sm leading-snug md:leading-relaxed">Captação de clientes, dicas de fotos e construção de perfil.</p>
              </div>
            </motion.div>

            {/* Acompanhamento - Span 2 Cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={cardTransition ?? { delay: 0.1 }}
              className="col-span-2 md:col-span-2 bg-primary text-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-md flex flex-col justify-center relative overflow-hidden group"
            >
              <Headset className="absolute right-0 bottom-0 w-24 h-24 md:w-40 md:h-40 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700" aria-hidden="true" />
              <h4 className="font-headline-sm text-base md:font-headline-md md:text-2xl mb-1.5 md:mb-3 relative z-10 leading-tight">Acompanhamento Vitalício</h4>
              <p className="text-white/80 font-body-sm text-xs md:font-body-md max-w-md relative z-10 leading-relaxed">Suporte contínuo para o seu dia a dia. Você não estará sozinha no seu processo de evolução técnica e comercial.</p>
            </motion.div>

            {/* Certificado e Retorno - Span 2/4 Cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={cardTransition}
              className="col-span-2 md:col-span-4 bg-white/90 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-neutral-100 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 group hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-surface flex items-center justify-center shrink-0 border border-neutral-100">
                <Award className="w-5 h-5 md:w-8 md:h-8 text-secondary group-hover:rotate-12 transition-transform" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-headline-sm text-base md:font-headline-md md:text-2xl text-primary mb-1 md:mb-2 leading-tight">Certificação e Retorno</h4>
                <p className="text-on-surface-variant font-body-sm text-xs md:font-body-md leading-relaxed">Validação oficial do seu aprendizado e um <strong>retorno de 20 dias para manutenção</strong> para garantir a segurança na prática após o curso.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
