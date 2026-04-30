"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_STATS = [
  { value: "2.000+", label: "Atendimentos" },
  { value: "3+", label: "Anos" },
  { value: "100%", label: "Presencial" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to let the image load, then trigger entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 1,
      }
    });

    // On scroll: zoom into image + fade content
    tl.to(".hero-bg-image", {
      scale: 1.3,
      duration: 1,
      ease: "none",
    }, 0)
    .to(".hero-overlay", {
      opacity: 1,
      duration: 1,
      ease: "none",
    }, 0)
    .to(".hero-main-content", {
      opacity: 0,
      y: -80,
      duration: 1,
      ease: "power1.in",
    }, 0);
  }, { scope: containerRef });

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full h-[100svh] flex items-center overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          alt="Ana Machado - Lash Designer"
          className="hero-bg-image object-cover object-top md:object-center w-full h-full will-change-transform"
          src="/assets/hero-branca.jpg"
          fill
          priority
          sizes="100vw"
        />
        {/* Overlay that darkens on scroll */}
        <div className="hero-overlay absolute inset-0 bg-black/60 opacity-0 will-change-[opacity]"></div>
        {/* Static overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent md:from-white/90 md:via-white/50"></div>
      </div>

      {/* Main Content with entrance animation */}
      <div className="hero-main-content relative z-10 w-full px-container-padding md:px-[8%] will-change-transform">
        <div className="max-w-2xl">

          {/* Badge */}
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-5"
              >
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-semibold">
                  Estética Facial &amp; Mentoria VIP
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-headline-xl text-headline-xl text-neutral-900 mb-4 leading-[1.1]"
          >
            Transforme seu olhar.
            <br />
            <span className="text-secondary">Transforme sua carreira.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body-lg text-body-lg text-neutral-600 mb-8 max-w-xl leading-relaxed"
          >
            Cílios impecáveis, sobrancelhas de grife e uma mentoria que forma profissionais de elite. Palhoça/SC.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link
              href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-secondary text-white font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase tracking-widest hover:brightness-110 transition-all group shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
            >
              Agendar Horário
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#mentoria"
              className="inline-flex items-center justify-center border-2 border-neutral-900 text-neutral-900 font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              Conhecer a Mentoria
            </Link>
          </motion.div>

          {/* Stats Row + Trust Badge inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap items-center gap-6 md:gap-8"
          >
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {idx > 0 && <div className="w-px h-10 bg-neutral-300 -ml-3 mr-0"></div>}
                <div>
                  <span className="font-headline-md text-2xl md:text-3xl text-neutral-900 font-bold block">{stat.value}</span>
                  <span className="font-label-sm text-[10px] text-neutral-500 uppercase tracking-widest">{stat.label}</span>
                </div>
              </div>
            ))}

            {/* Trust Badge inline */}
            <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full px-4 py-2 shadow-sm ml-4">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-neutral-600 font-medium">+2.000 atendimentos</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-neutral-300 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-neutral-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
