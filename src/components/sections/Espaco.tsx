"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export function Espaco() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  
  // Hook useInView do framer-motion para verificar visibilidade no viewport
  // amount: 0.5 significa que 50% do elemento deve estar visível para ativar
  const isInView1 = useInView(videoRef1, { amount: 0.5 });
  const isInView2 = useInView(videoRef2, { amount: 0.5 });

  useEffect(() => {
    if (isInView1 && videoRef1.current) {
      videoRef1.current.play().catch(e => console.log("Play interrupted", e));
    } else if (!isInView1 && videoRef1.current) {
      videoRef1.current.pause();
    }
  }, [isInView1]);

  useEffect(() => {
    if (isInView2 && videoRef2.current) {
      videoRef2.current.play().catch(e => console.log("Play interrupted", e));
    } else if (!isInView2 && videoRef2.current) {
      videoRef2.current.pause();
    }
  }, [isInView2]);

  return (
    <section id="espaco" className="py-16 md:py-24 px-container-padding bg-surface-container-lowest md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
            Estrutura Premium
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            O Nosso Espaço
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Projetado para oferecer a máxima imersão. Você terá à disposição um ambiente totalmente climatizado, com equipamentos de ponta, iluminação impecável, maca confortável e mimos exclusivos. Tudo preparado para a sua excelência, seja como cliente ou aluna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Main Video */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-8 aspect-video bg-surface-container rounded-2xl overflow-hidden shadow-sm relative group"
          >
            <video
              ref={videoRef1}
              className="w-full h-full object-cover"
              src="/assets/espaco/videoespaco.mp4"
              loop
              muted
              playsInline
              preload="none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-white font-headline-md shadow-sm">Ambiente Climatizado</span>
            </div>
          </motion.div>

          {/* Vertical Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 aspect-square md:aspect-auto bg-surface-container rounded-2xl overflow-hidden shadow-sm relative group"
          >
            <img
              src="/assets/espaco/fotoespaco.jpg"
              alt="Maca do Estúdio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          {/* Secondary Video */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-5 aspect-square bg-surface-container rounded-2xl overflow-hidden shadow-sm relative group"
          >
            <video
              ref={videoRef2}
              className="w-full h-full object-cover"
              src="/assets/espaco/freezerespaco.mp4"
              loop
              muted
              playsInline
              preload="none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-white font-headline-sm shadow-sm">Mimos Exclusivos</span>
            </div>
          </motion.div>

          {/* Third Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-7 aspect-[16/9] md:aspect-auto bg-surface-container rounded-2xl overflow-hidden shadow-sm relative group"
          >
            <img
              src="/assets/espaco/decoracoesespaco.jpg"
              alt="Decorações do Estúdio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
