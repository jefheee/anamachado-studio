"use client";

import { motion, Variants } from "framer-motion";

const images = [
  {
    src: "/assets/modelos clientes/brasileiro1.jpeg",
    alt: "Volume Brasileiro - Lash Design",
  },
  {
    src: "/assets/modelos clientes/egípcio1.jpeg",
    alt: "Volume Egípcio - Lash Design",
  },
  {
    src: "/assets/modelos clientes/foxy1.jpeg",
    alt: "Foxy Eyes - Lash Design",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Gallery() {
  return (
    <section className="py-section-gap px-container-padding bg-surface md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Resultados Reais
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            A Arte em Prática
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
            Confira o nível de excelência que você aprenderá a entregar. Trabalhos
            que elevam a autoestima e fidelizam clientes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-element-gap md:gap-gutter"
        >
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="aspect-[3/4] rounded-lg overflow-hidden border-[0.5px] border-outline-variant shadow-md group relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
