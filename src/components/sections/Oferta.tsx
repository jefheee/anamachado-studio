"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Oferta() {
  return (
    <section
      id="garantir-vaga"
      className="py-section-gap px-container-padding bg-primary text-on-primary md:px-[8%] flex justify-center text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full"
      >
        <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-widest block mb-4">
          Sua Nova Jornada Começa Aqui
        </span>
        <h2 className="font-headline-lg text-headline-lg mb-8">
          Mentoria Lash de Excelência
        </h2>
        
        <div className="mb-8">
          <span className="block font-body-md text-body-md text-surface-variant mb-2">
            Investimento
          </span>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-headline-md text-headline-md">R$</span>
            <span className="font-headline-xl text-headline-xl">999,90</span>
          </div>
          <span className="block font-label-sm text-label-sm text-surface-variant mt-2 uppercase tracking-wide">
            à vista no PIX / Dinheiro / Débito
          </span>
          <span className="block font-label-sm text-label-sm text-surface-variant/70 mt-1 uppercase tracking-wide text-[10px]">
            *Ou em até 12x no cartão de crédito
          </span>
        </div>
        
        {/* Fórmula PAS (Problema, Agitação, Solução) */}
        <div className="text-left mb-10 max-w-xl mx-auto space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
          <div>
            <span className="text-secondary font-bold uppercase tracking-wider text-xs mb-1 block">O Problema</span>
            <p className="font-body-md text-white/90">
              Sente insegurança na retenção dos fios ou não consegue atrair clientes que pagam o valor justo?
            </p>
          </div>
          <div>
            <span className="text-secondary font-bold uppercase tracking-wider text-xs mb-1 block">A Realidade</span>
            <p className="font-body-md text-white/80">
              O mercado está cheio de profissionais cobrando barato e entregando resultados que duram menos de 15 dias. Continuar errando na técnica significa perder indicações e estagnar o faturamento.
            </p>
          </div>
          <div>
            <span className="text-secondary font-bold uppercase tracking-wider text-xs mb-1 block">A Solução</span>
            <p className="font-body-md text-white font-medium">
              A Metodologia Ana Machado. 8 horas de imersão presencial focada na prática exata para dominar o Volume Brasileiro e Egípcio, com suporte vitalício.
            </p>
          </div>
        </div>

        <Link
          href="https://wa.me/5548992054803"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-secondary text-on-secondary font-label-sm text-label-sm py-5 px-8 rounded-lg uppercase tracking-widest hover:bg-on-secondary-fixed-variant transition-colors mb-4 shadow-lg"
        >
          Garantir Minha Vaga no WhatsApp
        </Link>
        <p className="font-body-md text-body-md text-surface-variant text-sm">
          Vagas limitadas para garantir a qualidade do ensino e supervisão.
        </p>
      </motion.div>
    </section>
  );
}
