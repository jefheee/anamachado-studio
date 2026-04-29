"use client";

import { motion } from "framer-motion";
import { TrendingUp, Sparkles, Target, Award } from "lucide-react";

export function LashDesignerProfession() {
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

  return (
    <section id="profissao" className="py-16 md:py-24 px-container-padding bg-surface md:px-[8%] border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
              Oportunidade de Ouro
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              A Profissão que Transforma Vidas e Realidades Financeiras
            </h2>
            <div className="space-y-6 font-body-md text-on-surface-variant">
              <p>
                Você sabe o que é ser uma <strong>Lash Designer</strong>? Muito além de aplicar extensões, é a profissional especializada em desenhar e personalizar o olhar de cada cliente, unindo arte, técnica e visagismo.
              </p>
              <p>
                Enquanto antigamente o mercado contava apenas com &quot;extensionistas&quot;, hoje a Lash Designer é uma <strong>especialista altamente valorizada</strong>. Com o domínio de técnicas como Fio a Fio, Volume Brasileiro e Fox Eyes, você não apenas melhora a estética, mas entrega praticidade e confiança.
              </p>
              <p>
                E o melhor: é uma das áreas da estética com <strong>retorno mais rápido sobre o investimento</strong>. O custo de material por procedimento é baixo, permitindo margens de lucro que aceleram sua independência financeira.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="#mentoria"
                className="inline-block px-8 py-4 bg-primary text-on-primary font-label-sm text-sm uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              >
                Quero me Tornar Lash Designer
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {benefits.map((item, index) => (
              <div 
                key={index} 
                className="bg-surface-container-lowest p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-headline-sm text-primary mb-2">{item.title}</h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
