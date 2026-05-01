import { TrendingUp, Sparkles, Target, Award, ChevronDown } from "lucide-react";
import { ScrollRevealWrapper } from "@/components/ui/ScrollRevealWrapper";

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6 text-secondary" />,
    title: "Alta Rentabilidade",
    description: "Com média de 4 atendimentos por dia, é possível faturar entre R$ 3.000 e R$ 12.000 mensais logo no início, podendo chegar a mais de R$ 20.000 com técnicas avançadas."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Mercado em Expansão",
    description: "A busca por procedimentos estéticos não invasivos e que valorizam o olhar cresce a cada dia. O mercado nunca esteve tão aquecido."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-secondary" />,
    title: "Flexibilidade",
    description: "Seja dona do seu próprio tempo. Atenda a domicílio, em um espaço compartilhado ou construa seu próprio estúdio de sucesso."
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Autoestima",
    description: "Muito mais do que colar fios: a Lash Designer tem o poder de transformar o olhar e resgatar a confiança e a autoestima das mulheres."
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
                Você sabe o que é ser uma <strong className="text-white">Lash Designer</strong>? Muito além de aplicar extensões, é a profissional especializada em desenhar e personalizar o olhar de cada cliente, unindo arte, técnica e visagismo.
              </p>
              <p>
                Enquanto antigamente o mercado contava apenas com &quot;extensionistas&quot;, hoje a Lash Designer é uma <strong className="text-white">especialista altamente valorizada</strong>. Com o domínio de técnicas como Fio a Fio, Volume Brasileiro e Fox Eyes, você não apenas melhora a estética, mas entrega praticidade e confiança.
              </p>
              <p>
                E o melhor: é uma das áreas da estética com <strong className="text-white">retorno mais rápido sobre o investimento</strong>. O custo de material por procedimento é baixo, permitindo margens de lucro que aceleram sua independência financeira.
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
        <div className="mt-16 flex flex-col items-center">
          <ScrollRevealWrapper direction="up" delay={0.4}>
            <a 
              href="#mentoria" 
              className="flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors group"
            >
              <span className="font-label-sm text-[10px] uppercase tracking-[0.3em]">Conheça a Mentoria</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
}
