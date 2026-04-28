"use client";

import { motion } from "framer-motion";

export function AlunasResults() {
  return (
    <section id="resultados-alunas" className="py-24 px-container-padding bg-surface md:px-[8%]">
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

        <div className="space-y-16">
          
          {/* Aluna Gabriella (Vídeos + Certificado) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
          >
            <div className="border-b border-neutral-100 pb-4 mb-8">
              <h3 className="font-headline-md text-2xl text-primary">Trabalho da Aluna Gabriella Soares</h3>
              <p className="text-on-surface-variant mt-1">Prática supervisionada em Cílios e Sobrancelhas</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
              <div className="rounded-xl overflow-hidden shadow-md h-[400px] md:h-full bg-black relative">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/assets/curso_vip/aluna_gabriella_soares/videoalunacilios.mp4" type="video/mp4" />
                </video>
                <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Cílios</span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-[400px] md:h-full bg-black relative">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/assets/curso_vip/aluna_gabriella_soares/videoalunasobrancelha.mp4" type="video/mp4" />
                </video>
                <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Sobrancelhas</span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-[400px] md:h-full bg-neutral-100 relative">
                <img 
                  src="/assets/curso_vip/aluna_gabriella_soares/fotocertificadoaluna.jpg" 
                  alt="Gabriella com certificado" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Certificação</span>
              </div>
            </div>
          </motion.div>

          {/* Aluna Beatriz */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
          >
            <div className="border-b border-neutral-100 pb-4 mb-8">
              <h3 className="font-headline-md text-2xl text-primary">Trabalho da Aluna Beatriz</h3>
              <p className="text-on-surface-variant mt-1">Evolução do manequim ao modelo real</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
              <div className="rounded-xl overflow-hidden shadow-md h-[300px] md:h-full relative">
                <img 
                  src="/assets/curso_vip/aluna_beatriz/alunaciliiosmanequim.jpg" 
                  alt="Prática no manequim" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Treino</span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-[300px] md:h-full relative">
                <img 
                  src="/assets/curso_vip/aluna_beatriz/alunacilios.jpg" 
                  alt="Prática na modelo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Prática</span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-[300px] md:h-full relative">
                <img 
                  src="/assets/curso_vip/aluna_beatriz/alunafotocertificado.jpg" 
                  alt="Beatriz com certificado" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Certificação</span>
              </div>
            </div>
          </motion.div>

          {/* Dupla: Joyce e Júlia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
            >
              <div className="border-b border-neutral-100 pb-4 mb-6">
                <h3 className="font-headline-md text-xl text-primary">Aluna Joyce</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 h-[250px]">
                <div className="rounded-xl overflow-hidden shadow-sm relative">
                  <img 
                    src="/assets/curso_vip/aluna_joyce/fotoalunacilios.jpg" 
                    alt="Joyce trabalhando" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm relative">
                  <img 
                    src="/assets/curso_vip/aluna_joyce/fotoalunacertificado.jpg" 
                    alt="Joyce certificado" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
            >
              <div className="border-b border-neutral-100 pb-4 mb-6">
                <h3 className="font-headline-md text-xl text-primary">Aluna Júlia</h3>
              </div>
              <div className="w-full h-[250px] rounded-xl overflow-hidden shadow-sm relative">
                <img 
                  src="/assets/curso_vip/aluna_julia/fotoalunacertificado.jpg" 
                  alt="Júlia certificado" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 object-top"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
