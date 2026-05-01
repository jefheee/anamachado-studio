import Link from "next/link";
import { Check, ArrowRight, Shield, Clock, Star, CreditCard, Zap, HeartHandshake } from "lucide-react";
import { ScrollRevealWrapper } from "@/components/ui/ScrollRevealWrapper";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

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
        <ScrollRevealWrapper className="text-center mb-12">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-3 font-semibold">
            Sua Nova Jornada Começa Aqui
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Invista na Sua Carreira
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Uma formação completa para você se tornar uma profissional de excelência no mercado da beleza.
          </p>
        </ScrollRevealWrapper>

        {/* Bento Grid Pricing */}
        <ScrollRevealWrapper delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
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
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
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
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-neutral-700 font-body-md text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust items — Bottom row, 4 cols */}
            <div className="md:col-span-1 bg-white rounded-3xl p-6 shadow-md border border-neutral-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-sm text-neutral-700 font-medium">Pagamento Seguro</span>
            </div>

            <div className="md:col-span-1 bg-white rounded-3xl p-6 shadow-md border border-neutral-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-neutral-700 font-medium">Acesso Imediato</span>
            </div>

            <div className="md:col-span-1 bg-white rounded-3xl p-6 shadow-md border border-neutral-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-sm text-neutral-700 font-medium">+2.000 Atendimentos</span>
            </div>

            <div className="md:col-span-1 bg-white rounded-3xl p-6 shadow-md border border-neutral-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-sm text-neutral-700 font-medium">ROI em ~10 Clientes</span>
            </div>
          </div>
        </ScrollRevealWrapper>

        {/* PAS Section */}
        <ScrollRevealWrapper delay={0.2} className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
}
