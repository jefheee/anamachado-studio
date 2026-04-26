"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[70vh] md:min-h-[600px] flex flex-col justify-end px-container-padding pb-section-gap pt-32 md:justify-center md:items-start md:px-[8%]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full bg-surface overflow-hidden">
        <img
          alt="Mentoria Vip Lash Designer"
          className="object-cover object-top w-full h-full"
          src="/assets/curso vip/artepricipalcursovip.jpg"
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
          Formando alunas do zero ao avançado. Domine as técnicas mais procuradas do mercado, 
          ganhe confiança e conquiste sua liberdade profissional.
        </p>
        <Link
          href="https://wa.me/5548992054803"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-secondary text-on-secondary font-label-sm text-label-sm px-8 py-4 rounded uppercase tracking-widest hover:bg-on-secondary-fixed-variant transition-colors group shadow-lg"
        >
          Garantir Minha Vaga
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
