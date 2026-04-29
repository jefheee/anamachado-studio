"use client";

import { motion } from "framer-motion";

export function Sobre() {
  return (
    <section className="py-16 md:py-24 px-container-padding bg-surface md:px-[8%] overflow-hidden border-t border-outline-variant">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Coluna de Imagens Mosaico (Fotos da Ana) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative grid grid-cols-2 gap-4"
        >
          {/* Imagem Principal (Ana) */}
          <div className="col-span-2 aspect-[16/10] md:aspect-[4/3] bg-surface-container rounded-xl overflow-hidden shadow-sm relative group">
            <img
              alt="Ana Júlia Especialista"
              className="object-cover w-full h-full object-center transition-transform duration-700 group-hover:scale-105"
              src="/assets/fotos_ana/foto5.jpeg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Imagens Menores */}
          <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative group">
            <img
              alt="Detalhe Atendimento Ana Machado"
              className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
              src="/assets/fotos_ana/foto7.jpeg"
              loading="lazy"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative group">
            <img
              alt="Estúdio Ana Machado"
              className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
              src="/assets/fotos_ana/foto3.jpeg"
              loading="lazy"
            />
          </div>
        </motion.div>
        
        {/* Coluna de Texto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
            Sobre a Especialista
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            A Arte do Olhar
          </h2>
          <div className="border-l-4 border-secondary pl-6 mb-8">
            <p className="font-headline-sm text-headline-sm text-secondary italic">
              &quot;Eu não ensino só técnica! Eu ensino você a realmente entrar e se destacar no mercado da beleza.&quot;
            </p>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
            Instrutora especialista em extensão de cílios e sobrancelhas, Ana Júlia encontrou na estética muito mais do que uma profissão: um propósito. Com <strong>mais de 2.000 atendimentos realizados desde 2023</strong>, sua missão é transformar vidas através do conhecimento, entregando resultados marcantes e formando novas profissionais de sucesso.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
            Seja no cuidado com o design perfeito ou na mentoria meticulosa de cada aluna, o foco sempre foi e será a excelência, aliando durabilidade, retenção e visagismo.
          </p>

          <div className="flex flex-wrap items-center gap-8 border-t border-outline-variant pt-8">
            <div className="flex items-center gap-4">
              <span className="font-headline-lg text-4xl text-primary font-bold">2k+</span>
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest leading-tight">
                Atendimentos<br />Realizados
              </span>
            </div>
            <div className="w-px h-12 bg-outline-variant hidden sm:block"></div>
            <div className="flex items-center gap-4">
              <span className="font-headline-lg text-4xl text-primary font-bold">3+</span>
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest leading-tight">
                Anos de<br />Experiência
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
