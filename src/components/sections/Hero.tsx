"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100svh] flex flex-col justify-end px-container-padding pb-section-gap pt-32 md:justify-center md:items-start md:px-[8%]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full bg-surface overflow-hidden">
        <img
          alt="Mentoria Vip Lash Designer"
          className="object-cover object-top md:object-center w-full h-full"
          src="/assets/curso_vip/curso_vip.jpeg"
        />
        {/* Camada dupla de contraste para garantir leitura no celular e desktop */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 max-w-3xl text-white"
      >
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-surface-container-high mb-4 block">
          Metodologia Ana Júlia Machado
        </span>
        <h1 className="font-headline-xl text-headline-xl mb-element-gap leading-tight">
          Curso de Extensão de Cílios
          <span className="block text-secondary">Lash Designer de Excelência</span>
        </h1>
        <p className="font-body-lg text-body-lg text-surface-container-lowest mb-8 max-w-xl text-shadow-sm">
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
            className="inline-flex items-center justify-center border-2 border-white/80 text-white font-label-sm text-label-sm px-8 py-4 rounded uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-colors shadow-lg"
          >
            Baixe o Manual Gratuito
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
