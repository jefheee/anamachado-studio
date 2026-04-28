"use client";

import { motion } from "framer-motion";

export function Sobre() {
  return (
    <section className="py-24 px-container-padding bg-surface md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Coluna de Imagens Sobrepostas */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Imagem Principal (Ana) */}
          <div className="aspect-[3/4] w-[80%] max-w-[400px] bg-surface-container rounded-DEFAULT overflow-hidden relative border-[0.5px] border-outline-variant shadow-xl z-10">
            <img
              alt="Ana Júlia"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105 object-top"
              src="/assets/fotos_ana/foto1.jpeg"
            />
          </div>

          {/* Imagem Deslocada (O Espaço) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-[-10%] right-0 lg:right-[-10%] w-[60%] aspect-[4/3] rounded-DEFAULT overflow-hidden shadow-2xl border-4 border-surface z-20"
          >
            <img
              alt="O Espaço Ana Machado"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              src="/assets/espaco/fotoespaco.jpg"
              onError={(e) => { e.currentTarget.src = "/assets/fotos_ana/foto4.jpeg" }} // Fallback
            />
          </motion.div>
        </motion.div>
        
        {/* Coluna de Texto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 mt-12 lg:mt-0"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
            Sobre a Especialista
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            A Arte do Olhar
          </h2>
          <div className="border-l-4 border-secondary pl-6 mb-8">
            <p className="font-headline-sm text-headline-sm text-secondary italic">
              "Eu não ensino só técnica! Eu ensino você a realmente entrar e se destacar no mercado da beleza."
            </p>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Com mais de 3 anos de experiência dedicados exclusivamente à estética facial,
            Ana Júlia encontrou na estética muito mais do que uma profissão, encontrou um
            propósito: transformar vidas através do conhecimento.
          </p>
          
          <h3 className="font-headline-md text-headline-md text-primary mt-8 mb-4">
            Nosso Espaço
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Nossa estrutura foi projetada para oferecer a máxima imersão. Você terá à disposição 
            equipamentos de ponta, iluminação ideal e um ambiente premium, preparado tanto para os 
            atendimentos de excelência quanto para o aprimoramento da sua técnica na mentoria.
          </p>

          <div className="flex items-center gap-4 border-t border-outline-variant pt-6">
            <span className="font-headline-md text-headline-md text-primary">3+</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              Anos de<br />Experiência
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
