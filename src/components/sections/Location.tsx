"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section className="py-section-gap px-container-padding bg-surface md:px-[8%] border-t border-outline-variant">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Onde Estamos
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Nosso Estúdio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch h-auto md:min-h-[400px]">
          {/* 1/3: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-1 bg-surface-container p-8 rounded-xl border border-neutral-100 flex flex-col justify-start h-full min-h-[400px]"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
              <MapPin className="text-secondary w-6 h-6" />
            </div>
            
            <h3 className="font-headline-md text-2xl text-primary mb-2">
              Como Chegar
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Rua Machado de Assis, 995<br />
              Palhoça - SC
            </p>

            <h4 className="font-headline-md text-lg text-primary mb-2">
              Horário de Funcionamento
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Segunda a Sexta: 09h às 19h<br />
            </p>
          </motion.div>

          {/* 2/3: Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:col-span-2 w-full rounded-xl overflow-hidden border border-neutral-100 shadow-sm h-full min-h-[400px]"
          >
            {/* Embed do Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.618037346736!2d-48.66014418493922!3d-27.636254182821425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527351fa56bd5c1%3A0xc3af7a829da141b7!2sR.%20Machado%20de%20Assis%2C%20995%20-%20Passa%20Vinte%2C%20Palho%C3%A7a%20-%20SC%2C%2088132-140!5e0!3m2!1spt-BR!2sbr!4v1714151234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
