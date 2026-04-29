"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section className="py-section-gap px-container-padding bg-neutral-900 text-white md:px-[8%]">
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
          <h2 className="font-headline-lg text-headline-lg text-white">
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
            className="md:col-span-1 bg-neutral-800/50 p-8 rounded-xl border border-white/10 flex flex-col justify-start h-full min-h-[400px] shadow-2xl backdrop-blur-sm"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shadow-sm mb-8 border border-white/5">
              <MapPin className="text-secondary w-6 h-6" />
            </div>

            <h3 className="font-headline-md text-2xl text-white mb-2">
              Como Chegar
            </h3>
            <p className="font-body-md text-white/70 mb-8 leading-relaxed">
              <span className="font-bold text-white/90">Rua Machado de Assis, 995</span><br />
              Bairro Jardim Eldorado<br />
              Palhoça - SC, 88133-380
            </p>

            <h4 className="font-headline-md text-lg text-white mb-2">
              Horário de Funcionamento
            </h4>
            <p className="font-body-md text-white/70 mb-8">
              Segunda a Sexta: <span className="text-secondary font-medium">09h às 19h</span>
            </p>

            <div className="mt-auto flex flex-col sm:flex-row gap-3 w-full">
              <a
                href="https://maps.app.goo.gl/VjwA4aEg3B1zfz4PA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] border border-white/10 text-white rounded-lg font-label-sm text-xs sm:text-sm uppercase tracking-widest hover:bg-[#2A2A2A] hover:border-white/20 transition-colors shadow-sm font-semibold"
              >
                <svg className="w-4 h-4" viewBox="0 0 488 512" fill="currentColor">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                </svg>
                Google Maps
              </a>

              <a
                href="https://maps.apple/p/~kdMwb74ruP5c8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] border border-white/10 text-white rounded-lg font-label-sm text-xs sm:text-sm uppercase tracking-widest hover:bg-[#2A2A2A] hover:border-white/20 transition-colors shadow-sm font-semibold"
              >
                <svg className="w-4 h-4 mb-0.5" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                Apple Maps
              </a>
            </div>
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
