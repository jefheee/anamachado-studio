"use client";

import { motion, Variants } from "framer-motion";
import { Clock, Gift, Award, Headset } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Mentoria() {
  return (
    <section id="mentoria" className="py-section-gap px-container-padding bg-tertiary-fixed md:px-[8%] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-headline-lg text-headline-lg text-tertiary-container mb-12 text-center"
        >
          A Estrutura da Mentoria
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Duração */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Clock className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                Duração de 8 horas (1 ou 2 dias)
              </h4>
              <p className="font-body-md text-body-md text-on-tertiary-fixed-variant">
                Um dia intenso de muito conteúdo teórico e prática intensiva.
              </p>
            </div>
          </motion.div>

          {/* Kit Iniciante */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Gift className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                Kit Iniciante
              </h4>
              <p className="font-body-md text-body-md text-on-tertiary-fixed-variant">
                Material premium selecionado para você começar a atender
                imediatamente.
              </p>
            </div>
          </motion.div>

          {/* Certificado */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Award className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                Certificado
              </h4>
              <p className="font-body-md text-body-md text-on-tertiary-fixed-variant">
                Reconhecimento oficial da sua capacitação profissional.
              </p>
            </div>
          </motion.div>

          {/* Suporte Vitalício */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Headset className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                Suporte Vitalício
              </h4>
              <p className="font-body-md text-body-md text-on-tertiary-fixed-variant">
                Acesso direto à Ana Júlia para tirar dúvidas após o curso.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
