"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

function ResultVideo({
  src,
  title,
  tag,
  className
}: {
  src: string;
  title: string;
  tag: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <div className={`rounded-2xl overflow-hidden shadow-md bg-black relative group cursor-pointer ${className}`}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity flex flex-col justify-end p-6 pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <Play className="w-4 h-4 text-white fill-white" />
          <span className="text-white font-label-sm text-sm tracking-widest uppercase">{tag}</span>
        </div>
        <h3 className="text-white font-headline-sm text-lg">{title}</h3>
      </div>
    </div>
  );
}

function ResultImage({
  src,
  title,
  tag,
  className
}: {
  src: string;
  title: string;
  tag: string;
  className: string;
}) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-md relative group cursor-pointer bg-surface-variant ${className}`}>
      <img
        src={src}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 pointer-events-none">
        <span className="bg-white/90 text-primary w-max text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm backdrop-blur-md uppercase tracking-wider mb-1">{tag}</span>
        <h3 className="text-white font-headline-sm text-sm">{title}</h3>
      </div>
    </div>
  );
}

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
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]"
        >
          
          <ResultVideo
            src="/assets/curso_vip/alunas/aluna_gabriella_soares/videoalunacilios.mp4"
            title="Aluna Gabriella"
            tag="Prática Cílios"
            className="md:col-span-2 md:row-span-2"
          />

          <ResultImage
            src="/assets/curso_vip/alunas/aluna_beatriz/alunacilios.jpg"
            title="Aluna Beatriz"
            tag="Prática Real"
            className="md:col-span-1 md:row-span-1"
          />

          <ResultVideo
            src="/assets/curso_vip/alunas/aluna_gabriella_soares/videoalunasobrancelha.mp4"
            title="Aluna Gabriella"
            tag="Design"
            className="md:col-span-1 md:row-span-2"
          />

          <ResultImage
            src="/assets/curso_vip/alunas/aluna_joyce/fotoalunacilios.jpg"
            title="Aluna Joyce"
            tag="Cílios"
            className="md:col-span-1 md:row-span-1"
          />

          <ResultVideo
            src="/assets/curso_vip/alunas/aluna_leticia/videocilios.mp4"
            title="Aluna Letícia"
            tag="Resultado Final"
            className="md:col-span-1 md:row-span-2"
          />

          <ResultVideo
            src="/assets/curso_vip/alunas/aluna_maria/videociliosmodelo.mp4"
            title="Aluna Maria"
            tag="Cílios"
            className="md:col-span-2 md:row-span-2"
          />

          <ResultImage
            src="/assets/curso_vip/alunas/aluna_sara/alunatreinandocilios.jpeg"
            title="Aluna Sara"
            tag="Treinamento"
            className="md:col-span-1 md:row-span-1"
          />

          <ResultImage
            src="/assets/curso_vip/alunas/aluna_maria/treinandocilios.jpeg"
            title="Aluna Maria"
            tag="Mão na Massa"
            className="md:col-span-1 md:row-span-1"
          />

        </motion.div>
        
        {/* CTA Adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#garantir-vaga"
            className="inline-block px-8 py-4 bg-primary text-on-primary font-label-sm text-sm uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-colors shadow-md"
          >
            Quero Ser Aluna
          </a>
        </motion.div>
      </div>
    </section>
  );
}
