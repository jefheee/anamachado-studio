"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[795px] flex flex-col justify-end px-container-padding pb-section-gap pt-32 md:justify-center md:items-start md:px-[8%]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full bg-surface overflow-hidden">
        <img
          alt="Lash Designer de Excelência"
          className="object-cover object-top w-full h-full"
          src="/images/cursovipana.jpg"
        />
        {/* Subtle linear gradient on bottom/left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-tr from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 max-w-2xl text-on-primary"
      >
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-surface-container-high mb-4 block">
          Mentoria Premium
        </span>
        <h1 className="font-headline-xl text-headline-xl mb-element-gap">
          Lash Designer de Excelência
        </h1>
        <p className="font-body-lg text-body-lg text-surface-container-low mb-8 max-w-md">
          Domine as técnicas mais procuradas do mercado e transforme sua carreira
          com a mentoria exclusiva de Ana Júlia.
        </p>
        <Link
          href="#garantir-vaga"
          className="inline-flex items-center justify-center bg-secondary text-on-secondary font-label-sm text-label-sm px-8 py-4 rounded uppercase tracking-widest hover:bg-on-secondary-fixed-variant transition-colors group shadow-lg"
        >
          Garantir Minha Vaga
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
