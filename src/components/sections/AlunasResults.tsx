"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function AlunasResults() {
  return (
    <section id="resultados-alunas" className="py-16 md:py-24 px-container-padding bg-surface md:px-[8%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            A Arte em Prática
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Resultados Reais das Nossas Alunas
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Da teoria à prática com excelência. Veja o desempenho e a evolução na hora de aplicar as técnicas em modelos reais.
          </p>
        </motion.div>

        {/* Dynamic Bento/Masonry Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          
          {/* Item 1: Vídeo Gabriella (Cílios) */}
          <div className="md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-md bg-black relative group cursor-pointer">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105">
              <source src="/assets/curso_vip/aluna_gabriella_soares/videoalunacilios.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-1">
                <Play className="w-4 h-4 text-white fill-white" />
                <span className="text-white font-label-sm text-sm tracking-widest uppercase">Prática</span>
              </div>
              <h3 className="text-white font-headline-sm text-lg">Aluna Gabriella</h3>
            </div>
          </div>

          {/* Item 2: Foto Beatriz (Manequim) */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer">
            <img 
              src="/assets/curso_vip/aluna_beatriz/alunaciliiosmanequim.jpg" 
              alt="Prática no manequim" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md uppercase tracking-wider">Treino no Manequim</span>
            </div>
          </div>

          {/* Item 3: Vídeo Gabriella (Sobrancelha) */}
          <div className="md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-md bg-black relative group cursor-pointer">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105">
              <source src="/assets/curso_vip/aluna_gabriella_soares/videoalunasobrancelha.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-1">
                <Play className="w-4 h-4 text-white fill-white" />
                <span className="text-white font-label-sm text-sm tracking-widest uppercase">Design</span>
              </div>
              <h3 className="text-white font-headline-sm text-lg">Aluna Gabriella</h3>
            </div>
          </div>

          {/* Item 4: Foto Beatriz (Prática Modelo) */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer">
            <img 
              src="/assets/curso_vip/aluna_beatriz/alunacilios.jpg" 
              alt="Prática na modelo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md uppercase tracking-wider">Aplicação em Modelo</span>
            </div>
          </div>

          {/* Item 5: Foto Joyce (Prática Cílios) - Wide on Desktop */}
          <div className="md:col-span-3 md:row-span-1 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer">
            <img 
              src="/assets/curso_vip/aluna_joyce/fotoalunacilios.jpg" 
              alt="Joyce trabalhando" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <span className="text-white font-label-sm text-sm tracking-widest uppercase mb-1">Foco e Precisão</span>
              <h3 className="text-white font-headline-sm text-xl">Aluna Joyce em Atendimento</h3>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
