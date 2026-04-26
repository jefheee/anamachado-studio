"use client";

import { motion } from "framer-motion";

const alunas = [
  {
    name: "Beatriz",
    trabalho: "/assets/curso vip/aluna beatriz/alunacilios.jpg",
    resultado: "/assets/curso vip/aluna beatriz/alunaciliiosmanequim.jpg",
    certificado: "/assets/curso vip/aluna beatriz/alunafotocertificado.jpg",
  },
  {
    name: "Gabriella Soares",
    trabalho: "/assets/curso vip/aluna gabriella soares/fotoalunacilios.jpg",
    resultado: "/assets/curso vip/aluna gabriella soares/fotoalunasobrancelha.jpg",
    certificado: "/assets/curso vip/aluna gabriella soares/fotocertificadoaluna.jpg",
  },
  {
    name: "Joyce",
    trabalho: "/assets/curso vip/aluna joyce/fotoalunacilios.jpg",
    resultado: null,
    certificado: "/assets/curso vip/aluna joyce/fotoalunacertificado.jpg",
  },
  {
    name: "Júlia",
    trabalho: null,
    resultado: null,
    certificado: "/assets/curso vip/aluna júlia/fotoalunacertificado.jpg",
  }
];

export function AlunasResults() {
  return (
    <section id="resultados-alunas" className="py-section-gap px-container-padding bg-surface md:px-[8%]">
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
            Da teoria à prática com excelência. Veja o desempenho e a evolução de quem confiou na metodologia Ana Machado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Beatriz - Destaque */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img 
              src={alunas[0].trabalho!} 
              alt="Aluna Beatriz em treinamento" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="font-label-sm text-secondary uppercase tracking-widest block mb-1">Prática Real</span>
              <h3 className="font-headline-md text-headline-md">Aluna Beatriz</h3>
            </div>
          </motion.div>

          {/* Beatriz Certificado */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img 
              src={alunas[0].certificado!} 
              alt="Beatriz com certificado" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Gabriella Trabalho */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img 
              src={alunas[1].trabalho!} 
              alt="Aluna Gabriella Soares" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             <span className="absolute bottom-4 left-4 text-white font-headline-sm">Gabriella</span>
          </motion.div>

          {/* Gabriella Certificado */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg group row-span-2"
          >
            <img 
              src={alunas[1].certificado!} 
              alt="Gabriella Soares com certificado" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

           {/* Joyce Certificado */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img 
              src={alunas[2].certificado!} 
              alt="Aluna Joyce com certificado" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             <span className="absolute bottom-4 left-4 text-white font-headline-sm">Joyce</span>
          </motion.div>

           {/* Júlia Certificado */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img 
              src={alunas[3].certificado!} 
              alt="Aluna Júlia com certificado" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             <span className="absolute bottom-4 left-4 text-white font-headline-sm">Júlia</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
