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
        
        <div className="mb-12">
          <span className="block font-body-md text-body-md text-surface-variant mb-2">
            Investimento
          </span>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-headline-md text-headline-md">R$</span>
            <span className="font-headline-xl text-headline-xl">990,00</span>
          </div>
          <span className="block font-label-sm text-label-sm text-surface-variant mt-2 uppercase tracking-wide">
            Ou em até 12x no cartão
          </span>
        </div>
        
        <p className="font-body-md text-body-md text-surface-variant mb-8">
          Após a confirmação do pagamento, você receberá seus dados de acesso
          imediatamente por e-mail para a área do aluno, além de garantir a sua vaga na
          mentoria presencial.
        </p>

        <Link
          href="https://wa.me/5548992054803"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-secondary text-on-secondary font-label-sm text-label-sm py-5 px-8 rounded-lg uppercase tracking-widest hover:bg-on-secondary-fixed-variant transition-colors mb-4 shadow-lg"
        >
          Garantir Minha Vaga no WhatsApp
        </Link>
        <p className="font-body-md text-body-md text-surface-variant text-sm">
          Vagas limitadas para garantir a qualidade do ensino.
        </p>
      </motion.div>
    </section>
  );
}
