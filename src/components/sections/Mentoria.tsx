"use client";

import { motion, Variants } from "framer-motion";
import { Clock, Gift, Award, Headset, BookOpen, Users, Smartphone } from "lucide-react";

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
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-headline-lg text-headline-lg text-tertiary-container mb-12 text-center"
        >
          O Que Está Incluso na Mentoria
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Duração */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Clock className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                8h de Curso Presencial
              </h4>
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">
                Teoria e prática intensiva. Podendo dividir em 2 dias ou finalizar em 1 dia.
              </p>
            </div>
          </motion.div>

          {/* Apostila */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <BookOpen className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                Apostila Completa
              </h4>
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">
                Material super didático para você consultar e revisar sempre que precisar.
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
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">
                Materiais de qualidade selecionados para você começar a praticar imediatamente.
              </p>
            </div>
          </motion.div>

          {/* Prática Real */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Users className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                Treinamento em Modelos
              </h4>
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">
                Mão na massa desde o início com supervisão de perto e correção de detalhes.
              </p>
            </div>
          </motion.div>

          {/* Marketing */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Smartphone className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                Captação e Posicionamento
              </h4>
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">
                Dicas de fotos, edições e estratégias para conseguir suas primeiras clientes.
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
                Acompanhamento Vitalício
              </h4>
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">
                Suporte contínuo para o seu dia a dia. Você não vai ficar sozinha no processo.
              </p>
            </div>
          </motion.div>

          {/* Certificado */}
          <motion.div variants={itemVariants} className="flex items-start gap-4 md:col-span-2 lg:col-span-3 mt-4 lg:w-1/3 lg:mx-auto">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Award className="text-on-tertiary-fixed-variant w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-tertiary-container mb-1">
                Certificado Exclusivo
              </h4>
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">
                Validação do seu aprendizado e diferencial para a sua carreira.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
