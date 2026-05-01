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
    <section id="profissao" className="relative py-12 md:py-24 px-5 md:px-[8%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/40 via-[#171717] to-[#171717] border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
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

            <div className="mt-8 flex">
              <a 
                href="#mentoria"
                className="w-full sm:w-auto text-center px-6 py-3.5 bg-white text-black font-label-sm text-sm uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-colors shadow-md"
              >
                Quero me Tornar Lash Designer
              </a>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper direction="right" delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-6">
              {benefits.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-white/10 transition-all group"
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-neutral-900 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    {/* Cloned icon to allow sizing overrides via className */}
                    <div className="scale-75 md:scale-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-sm md:text-base text-white mb-1.5 md:mb-2 leading-tight">{item.title}</h3>
                  <p className="font-body-sm text-xs md:text-sm text-neutral-400 leading-relaxed md:leading-relaxed">
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
