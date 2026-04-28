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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Mentoria() {
  return (
    <section id="mentoria" className="py-24 px-container-padding bg-[#F9F7F5] md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Formação Completa
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-headline-lg text-headline-lg text-primary"
          >
            O Que Está Incluso na Mentoria
          </motion.h2>
        </div>

        {/* Vídeo do Kit em Destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-2xl border-[4px] border-white relative aspect-[16/9] md:aspect-[21/9]"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/assets/curso_vip/montandocaixacurso.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h3 className="text-white font-headline-md text-2xl drop-shadow-md">
              O Seu Kit Iniciante de Alto Padrão
            </h3>
          </div>
        </motion.div>

        {/* Grelha de Benefícios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Duração */}
          <motion.div variants={itemVariants} className="flex flex-col h-full p-8 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#F9F7F5] flex items-center justify-center mb-6">
              <Clock className="text-secondary w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              8h de Curso Presencial
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
              Teoria e prática intensiva. Podendo dividir em 2 dias ou finalizar em 1 dia focado.
            </p>
          </motion.div>

          {/* Apostila */}
          <motion.div variants={itemVariants} className="flex flex-col h-full p-8 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#F9F7F5] flex items-center justify-center mb-6">
              <BookOpen className="text-secondary w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              Apostila Completa
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
              Material super didático para você consultar e revisar sempre que precisar.
            </p>
          </motion.div>

          {/* Kit Iniciante */}
          <motion.div variants={itemVariants} className="flex flex-col h-full p-8 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#F9F7F5] flex items-center justify-center mb-6">
              <Gift className="text-secondary w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              Kit Iniciante Exclusivo
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
              Materiais de qualidade Premium selecionados para você começar a praticar imediatamente.
            </p>
          </motion.div>

          {/* Prática Real */}
          <motion.div variants={itemVariants} className="flex flex-col h-full p-8 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#F9F7F5] flex items-center justify-center mb-6">
              <Users className="text-secondary w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              Treinamento em Modelos
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
              Mão na massa desde o início com supervisão rigorosa e correção de detalhes.
            </p>
          </motion.div>

          {/* Marketing */}
          <motion.div variants={itemVariants} className="flex flex-col h-full p-8 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#F9F7F5] flex items-center justify-center mb-6">
              <Smartphone className="text-secondary w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              Captação e Posicionamento
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
              Dicas de fotos, edições e estratégias de Marketing para conseguir suas primeiras clientes.
            </p>
          </motion.div>

          {/* Suporte Vitalício */}
          <motion.div variants={itemVariants} className="flex flex-col h-full p-8 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#F9F7F5] flex items-center justify-center mb-6">
              <Headset className="text-secondary w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              Acompanhamento Vitalício
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
              Suporte contínuo para o seu dia a dia. Você não estará sozinha no seu processo de evolução.
            </p>
          </motion.div>

          {/* Certificado (Destaque Centralizado na última linha se sobrar espaço) */}
          <motion.div variants={itemVariants} className="flex flex-col h-full p-8 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow md:col-start-2">
            <div className="w-12 h-12 rounded-full bg-[#F9F7F5] flex items-center justify-center mb-6">
              <Award className="text-secondary w-6 h-6" />
            </div>
            <h4 className="font-headline-md text-headline-md text-primary mb-3">
              Certificado Exclusivo
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
              Validação oficial do seu aprendizado e diferencial incontestável para a sua carreira.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
