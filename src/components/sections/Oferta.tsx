"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Shield, Clock, Star, CreditCard, Zap, HeartHandshake } from "lucide-react";

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

export function Oferta() {
  return (
    <section
      id="garantir-vaga"
      className="py-16 md:py-24 px-container-padding md:px-[8%] bg-surface overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

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

        {/* Bento Grid Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5"
        >
          {/* Price Block — Span 2x2 */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden flex flex-col">
            {/* Top badge */}
            <div className="bg-secondary text-white text-center py-3 px-6">
              <span className="font-label-sm text-xs uppercase tracking-[0.25em] font-semibold">
                Mentoria Lash de Excelência
              </span>
            </div>

            {/* Price */}
            <div className="px-8 pt-10 pb-6 text-center flex-1 flex flex-col justify-center">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-neutral-400 text-lg font-medium">R$</span>
                <span className="text-6xl md:text-7xl font-bold text-neutral-900 tracking-tight">999</span>
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

            {/* CTA */}
            <div className="px-8 pb-8">
              <Link
                href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20garantir%20minha%20vaga%20na%20Mentoria%20VIP."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-secondary text-white font-label-sm text-label-sm py-4 px-8 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all group shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Garantir Minha Vaga
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-center text-xs text-neutral-400 mt-3">
                Você será redirecionada para o WhatsApp
              </p>
            </div>
          </div>

          {/* What's included — Span 2 rows */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl shadow-md border border-neutral-100 p-6 md:p-8 flex flex-col">
            <h4 className="font-headline-sm text-sm uppercase tracking-widest text-neutral-400 mb-6">
              Tudo que está incluso
            </h4>
            <ul className="space-y-3.5 flex-1">
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

          {/* Trust items — Bottom row, 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-white rounded-3xl p-6 shadow-md border border-neutral-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <span className="text-sm text-neutral-700 font-medium">Pagamento Seguro</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 bg-white rounded-3xl p-6 shadow-md border border-neutral-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm text-neutral-700 font-medium">Acesso Imediato</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 bg-white rounded-3xl p-6 shadow-md border border-neutral-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 text-amber-500" />
            </div>
            <span className="text-sm text-neutral-700 font-medium">+2.000 Atendimentos</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-1 bg-white rounded-3xl p-6 shadow-md border border-neutral-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="text-sm text-neutral-700 font-medium">ROI em ~10 Clientes</span>
          </motion.div>
        </motion.div>

        {/* PAS Section - Improved texts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <span className="text-red-500 font-bold text-lg">?</span>
            </div>
            <h4 className="font-headline-sm text-lg text-neutral-900 mb-3">O Problema</h4>
            <p className="font-body-md text-sm text-neutral-600 leading-relaxed">
              Você investiu em cursos online que prometiam tudo, mas no final ficou sem confiança para aplicar em clientes reais? Sozinha, sem suporte e sem saber como cobrar o valor justo pelo seu trabalho?
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <span className="text-amber-500 font-bold text-lg">!</span>
            </div>
            <h4 className="font-headline-sm text-lg text-neutral-900 mb-3">A Realidade</h4>
            <p className="font-body-md text-sm text-neutral-600 leading-relaxed">
              O mercado da beleza está saturado de profissionais que aprenderam &quot;por cima&quot;. Sem técnica sólida, sem prática supervisionada e sem estratégia, o resultado é agenda vazia e insegurança na hora de atender.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-5 h-5 text-emerald-500" />
            </div>
            <h4 className="font-headline-sm text-lg text-neutral-900 mb-3">A Solução</h4>
            <p className="font-body-md text-sm text-neutral-600 leading-relaxed">
              A Metodologia Ana Machado é 100% presencial. 8 horas de imersão com supervisão individual, kit premium incluso e acompanhamento vitalício. Você sai pronta para atender, faturar e se posicionar como referência na sua região.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
