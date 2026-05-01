import { TrendingUp, Sparkles, Target, Award, ChevronDown } from "lucide-react";
import { ScrollRevealWrapper } from "@/components/ui/ScrollRevealWrapper";

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6 text-[#800020]" />,
    title: "Alta Rentabilidade",
    description: "Fature entre R$ 3.000 e R$ 12.000 mensais logo no início, podendo ultrapassar R$ 20.000 com técnicas de elite."
  },
  {
    icon: <Target className="w-6 h-6 text-[#800020]" />,
    title: "Mercado em Expansão",
    description: "A busca por extensões de cílios cresce exponencialmente. Estar preparada é garantir seu espaço no topo."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#800020]" />,
    title: "Autoestima e Impacto",
    description: "Transforme olhares e mude a vida de suas clientes com técnicas que realçam a beleza única."
  },
  {
    icon: <Award className="w-6 h-6 text-[#800020]" />,
    title: "Flexibilidade",
    description: "Seja dona do seu tempo. Atenda em seu próprio espaço ou construa uma marca de sucesso."
  }
];

export function LashDesignerProfession() {
  return (
    <section id="profissao" className="relative py-16 md:py-24 px-container-padding bg-[#171717] md:px-[8%] border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <ScrollRevealWrapper direction="left">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
              Oportunidade de Ouro
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">
              A Profissão que Transforma Vidas e Realidades Financeiras
            </h2>
            <div className="space-y-6 font-body-md text-neutral-400">
              <p>
                Ser Lash Designer é unir arte e técnica para transformar olhares e construir uma carreira de sucesso. 
                O mercado busca profissionais de elite, e o próximo passo para o seu crescimento começa aqui.
              </p>
              <p>
                É uma das áreas da estética com <strong className="text-white">retorno mais rápido sobre o investimento</strong>, permitindo margens de lucro que aceleram sua independência financeira.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="#mentoria"
                className="inline-block px-8 py-4 bg-white text-black font-label-sm text-sm uppercase tracking-widest rounded-lg hover:bg-neutral-200 transition-colors shadow-md"
              >
                Quero me Tornar Lash Designer
              </a>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper direction="right" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-neutral-800/40 p-6 rounded-2xl border border-neutral-800 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-headline-sm text-white mb-2">{item.title}</h3>
                  <p className="font-body-sm text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollRevealWrapper>

        </div>
        
        {/* Scroll Incentive */}
        <div className="mt-24 flex flex-col items-center">
          <ScrollRevealWrapper direction="up" delay={0.4}>
            <a 
              href="#mentoria" 
              className="flex flex-col items-center gap-3 text-white/40 hover:text-white/80 transition-colors group"
            >
              <span className="font-label-sm text-[11px] uppercase tracking-[0.3em] font-medium">Conheça a Mentoria</span>
              <ChevronDown className="w-8 h-8 text-[#800020] animate-bounce" />
            </a>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
}
