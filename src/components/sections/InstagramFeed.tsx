"use client";

import Script from "next/script";
import { motion } from "framer-motion";

export function InstagramFeed() {
  return (
    <section className="py-section-gap px-container-padding bg-surface-container-lowest md:px-[8%]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Acompanhe o Dia a Dia
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Nosso Instagram
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full min-h-[300px]"
        >
          {/* Script do Elfsight carregado de forma otimizada com next/script */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          
          {/* Widget do Instagram */}
          <div 
            className="elfsight-app-e7cb116e-1c9b-4e14-b326-bc4934785d4d" 
            data-elfsight-app-lazy 
          ></div>
        </motion.div>
      </div>
    </section>
  );
}

