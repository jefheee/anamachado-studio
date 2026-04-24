"use client";

import { motion } from "framer-motion";

export function Sobre() {
  return (
    <section className="py-section-gap px-container-padding bg-surface md:px-[8%] overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 order-2 md:order-1 relative"
        >
          <div className="aspect-[4/5] bg-surface-container w-full rounded-DEFAULT overflow-hidden relative border-[0.5px] border-outline-variant shadow-md">
            <img
              alt="Ana Júlia"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdJOU0nUKh0AT6GKPEY4B6mnAxGzF0_39WQsGiorlVrsCl28t66c8gbo2kLLvkh_BpO1ANdSOT3JGdvuTkOsbM2Vj4eY_RCES1V0ZyDADMGHHSSTKxoMTSuCaS92vSBNK0uIcZBXZGeVeZ8XR4HUp5-eE0EB5NfWbLGJGnD7tuV-j2-T9aLktgQH44LQVc2A5ceceueeP3hkTKs9-JhQyl5wDPUIdUGysV0ltcQoqvUSaIVqV-pXx6naAtu3SrrX3Ey00husTDhzAj"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 order-1 md:order-2"
        >
          <h2 className="font-headline-lg text-headline-lg text-primary mb-element-gap">
            A Arte do Olhar
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Com mais de 3 anos de experiência dedicados exclusivamente à estética facial,
            Ana Júlia não apenas transforma olhares, mas também vidas. Sua paixão pelo
            ensino a levou a criar uma metodologia única que guia profissionais desde os
            primeiros passos até técnicas avançadas de volumização.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Nesta mentoria, você terá acesso aos segredos de um atendimento premium e
            à precisão exigida pelo mercado de luxo.
          </p>
          <div className="flex items-center gap-4 border-t border-outline-variant pt-6">
            <span className="font-headline-md text-headline-md text-primary">3+</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              Anos de<br />Experiência
            </span>
          </div>
        </motion.div>
      </div>

      {/* O Espaço */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center mt-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
            Infraestrutura
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-element-gap">
            O Espaço
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Nosso estúdio foi projetado para oferecer o máximo de conforto e imersão
            durante as suas 8 horas de mentoria presencial.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Você terá à disposição equipamentos de ponta, iluminação ideal e um
            ambiente calmo, preparado para focar no aprimoramento da sua técnica.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[4/3] bg-surface-container w-full rounded-DEFAULT overflow-hidden relative border-[0.5px] border-outline-variant shadow-md">
            <img
              alt="O Espaço Ana Machado"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              src="/images/image_785870.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
