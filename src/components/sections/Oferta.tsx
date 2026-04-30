"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Shield, Clock, Star, CreditCard } from "lucide-react";

const INCLUDED = [
  "8h de curso presencial intensivo",
  "Kit completo de materiais premium",
  "Treinamento em modelos reais",
  "Apostila completa (teoria + prática)",
  "Marketing e captação de clientes",
  "Certificado de conclusão",
  "Acompanhamento vitalício",
  "Retorno de 20 dias para manutenção",
];

const TRUST_ITEMS = [
  { icon: Shield, text: "Pagamento seguro" },
  { icon: Clock, text: "Acesso imediato" },
  { icon: Star, text: "+2.000 atendimentos" },
];

export function Oferta() {
  return (
    <section
      id="garantir-vaga"
      className="py-16 md:py-24 px-container-padding md:px-[8%] bg-surface overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3 font-semibold">
            Sua Nova Jornada Começa Aqui
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Invista na Sua Carreira
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Uma formação completa para você se tornar uma profissional de excelência no mercado da beleza.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
            
            {/* Top badge */}
            <div className="bg-secondary text-white text-center py-3 px-6">
              <span className="font-label-sm text-xs uppercase tracking-[0.25em] font-semibold">
                Mentoria Lash de Excelência
              </span>
            </div>

            {/* Price */}
            <div className="px-8 pt-10 pb-6 text-center">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-neutral-400 text-lg font-medium">R$</span>
                <span className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">999</span>
                <span className="text-2xl font-bold text-neutral-900">,90</span>
              </div>
              <p className="text-sm text-neutral-500 font-medium">
                à vista no PIX / Dinheiro / Débito
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <CreditCard className="w-4 h-4 text-neutral-400" />
                <span className="text-xs text-neutral-400 uppercase tracking-wider">
                  ou até 12x no cartão de crédito
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-8 h-px bg-neutral-100"></div>

            {/* What&apos;s included */}
            <div className="px-8 py-8">
              <h4 className="font-headline-sm text-sm uppercase tracking-widest text-neutral-400 mb-6">
                Tudo que está incluso
              </h4>
              <ul className="space-y-4">
                {INCLUDED.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * idx }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-neutral-700 font-body-md text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="px-8 pb-8">
              <Link
                href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20garantir%20minha%20vaga%20na%20Mentoria%20VIP."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-secondary text-white font-label-sm text-label-sm py-4 px-8 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all group shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
              >
                Garantir Minha Vaga
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-center text-xs text-neutral-400 mt-4">
                Vagas limitadas para garantir a qualidade do ensino e supervisão.
              </p>
            </div>
          </div>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {TRUST_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <item.icon className="w-4 h-4 text-secondary" />
                <span className="text-xs text-neutral-500 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PAS Section - Below the card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center mb-4">
              <span className="text-red-500 font-bold text-sm">?</span>
            </div>
            <h4 className="font-headline-sm text-base text-neutral-900 mb-2">O Problema</h4>
            <p className="font-body-sm text-sm text-neutral-600 leading-relaxed">
              Sente insegurança na retenção dos fios ou não consegue atrair clientes que pagam o valor justo?
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
              <span className="text-amber-500 font-bold text-sm">!</span>
            </div>
            <h4 className="font-headline-sm text-base text-neutral-900 mb-2">A Realidade</h4>
            <p className="font-body-sm text-sm text-neutral-600 leading-relaxed">
              O mercado está cheio de profissionais cobrando barato e entregando resultados que duram menos de 15 dias.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
              <Check className="w-4 h-4 text-emerald-500" />
            </div>
            <h4 className="font-headline-sm text-base text-neutral-900 mb-2">A Solução</h4>
            <p className="font-body-sm text-sm text-neutral-600 leading-relaxed">
              A Metodologia Ana Machado. 8 horas de imersão presencial com suporte vitalício e materiais de elite.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
