"use client";

import { motion, Variants } from "framer-motion";
import { Brush, Sparkles, Sprout, Eye } from "lucide-react";

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Tecnicas() {
  return (
    <section id="tecnicas" className="py-section-gap px-container-padding bg-background md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            O que você vai aprender
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Técnicas Dominadas
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-element-gap md:gap-gutter"
        >
          {/* Fio a Fio (Tall) */}
          <motion.div
            variants={itemVariants}
            className="bg-surface-container-low p-8 rounded-lg border-[0.5px] border-surface-variant flex flex-col md:col-span-1 md:row-span-2 group hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-auto">
              <Brush className="text-secondary w-8 h-8 mb-4" />
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Fio a Fio</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A base perfeita. Aprenda o isolamento impecável e o mapeamento
                clássico para um resultado natural e elegante.
              </p>
            </div>
          </motion.div>

          {/* Volume Brasileiro */}
          <motion.div
            variants={itemVariants}
            className="bg-surface-container-low p-8 rounded-lg border-[0.5px] border-surface-variant flex flex-col md:col-span-2 group hover:shadow-md transition-shadow duration-300"
          >
            <Sparkles className="text-secondary w-8 h-8 mb-4" />
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Volume Brasileiro
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A técnica queridinha do momento. Fios em formato de Y que entregam
              volume, retenção e leveza incomparáveis.
            </p>
          </motion.div>

          {/* Volume Egípcio */}
          <motion.div
            variants={itemVariants}
            className="bg-surface-container-low p-8 rounded-lg border-[0.5px] border-surface-variant flex flex-col md:col-span-1 group hover:shadow-md transition-shadow duration-300"
          >
            <Sprout className="text-secondary w-8 h-8 mb-4" />
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Volume Egípcio
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Fios em formato de W. Ideal para clientes que buscam um preenchimento
              denso e marcante.
            </p>
          </motion.div>

          {/* Foxy Eyes */}
          <motion.div
            variants={itemVariants}
            className="bg-surface-container-low p-8 rounded-lg border-[0.5px] border-surface-variant flex flex-col md:col-span-1 group hover:shadow-md transition-shadow duration-300"
          >
            <Eye className="text-secondary w-8 h-8 mb-4" />
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Foxy Eyes
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              O mapeamento de elevação. Efeito lifting imediato que alonga e seduz
              o olhar.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
