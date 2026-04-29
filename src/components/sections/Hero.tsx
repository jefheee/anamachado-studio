"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !bgRef.current) return;

    gsap.to(bgRef.current, {
      scale: 1.5,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-end px-container-padding pb-section-gap pt-32 md:justify-center md:items-start md:px-[8%] overflow-hidden"
    >
      {/* Background Image Setup 3D */}
      <div className="absolute inset-0 z-0 w-full h-full bg-surface overflow-hidden">
        <img
          ref={bgRef}
          alt="Mentoria Vip Lash Designer"
          className="object-cover object-top md:object-center w-full h-full origin-center"
          src="/assets/hero-branca.jpg"
        />
        {/* Camada branca muito sutil para não perder leitura, mas manter o aspecto clean */}
        <div className="absolute inset-0 bg-white/40 md:bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 max-w-3xl text-neutral-900"
      >
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-neutral-600 mb-4 block font-semibold">
          Metodologia Ana Júlia Machado
        </span>
        <h1 className="font-headline-xl text-headline-xl mb-element-gap leading-tight">
          Curso de Extensão de Cílios
          <span className="block text-secondary">Lash Designer de Excelência</span>
        </h1>
        <p className="font-body-lg text-body-lg text-neutral-700 mb-8 max-w-xl">
          Domine a técnica, aumente sua retenção e construa uma agenda lucrativa em um mercado de alta demanda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20garantir%20minha%20vaga%20na%20Mentoria%20VIP."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary text-on-secondary font-label-sm text-label-sm px-8 py-4 rounded uppercase tracking-widest hover:bg-on-secondary-fixed-variant transition-colors group shadow-lg"
          >
            Garantir Minha Vaga
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20baixar%20gratuitamente%20o%20Manual%20Definitivo%20de%20Cuidados%20P%C3%B3s-Extens%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-neutral-900 text-neutral-900 font-label-sm text-label-sm px-8 py-4 rounded uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors shadow-lg"
          >
            Baixe o Manual Gratuito
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
