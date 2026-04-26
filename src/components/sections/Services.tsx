"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Tab = "Cílios" | "Sobrancelhas" | "Micropigmentação" | "Manutenções";

export function Services() {
  const [activeTab, setActiveTab] = useState<Tab>("Cílios");

  const tabs: Tab[] = ["Cílios", "Sobrancelhas", "Micropigmentação", "Manutenções"];

  const content = {
    "Cílios": {
      image: "/assets/modelos clientes/brasileiro1.jpeg",
      items: [
        { name: "Volume Brasileiro", price: "160" },
        { name: "Volume Egípcio", price: "180" },
        { name: "Foxy Eyes", price: "180" },
      ],
    },
    "Sobrancelhas": {
      image: "/assets/modelos clientes/fotobrownlamination.jpeg",
      fallbackImage: "/assets/fotos ana/foto2.jpeg", // Usado caso a imagem acima ainda não exista
      items: [
        { name: "Design de Sobrancelhas", price: "35" },
        { name: "Brow Lamination", price: "120" },
      ],
    },
    "Micropigmentação": {
      image: "/assets/modelos clientes/fotomicropigmentacaolabial.jpeg",
      fallbackImage: "/assets/fotos ana/foto6.jpeg", // Usado caso a imagem acima ainda não exista
      items: [
        { name: "Sobrancelhas Fio a Fio", price: "250" },
        { name: "Micropigmentação Labial", price: "300" },
        { name: "Combo Prime", price: "430" },
      ],
    },
    "Manutenções": {
      image: "/assets/modelos clientes/egípcio1.jpeg",
      items: [
        { name: "Manutenção até 15 dias", price: "60" },
        { name: "Manutenção até 20 dias", price: "70" },
        { name: "Manutenção até 25 dias", price: "80" },
      ],
      notice: "Não realizo manutenção de trabalhos de outras profissionais.",
    },
  };

  const activeContent = content[activeTab];

  return (
    <section id="servicos" className="py-section-gap px-container-padding bg-surface md:px-[8%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Catálogo de Serviços
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Nossos Atendimentos
          </h2>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-label-sm text-sm uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-on-primary shadow-md"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start min-h-[500px]">
          {/* Menu / Lista de Preços */}
          <div className="flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant pb-4">
                  {activeTab}
                </h3>
                
                <ul className="space-y-6">
                  {activeContent.items.map((item, index) => (
                    <li key={index} className="flex justify-between items-end gap-4">
                      <span className="font-body-lg text-body-lg text-on-surface">{item.name}</span>
                      <div className="flex-1 border-b border-dotted border-outline-variant mb-2"></div>
                      <span className="font-headline-sm text-headline-sm text-secondary whitespace-nowrap">
                        R$ {item.price}
                      </span>
                    </li>
                  ))}
                </ul>

                {"notice" in activeContent && activeContent.notice && (
                  <div className="mt-8 p-4 bg-tertiary-container rounded-lg">
                    <p className="font-label-sm text-label-sm text-on-tertiary-container text-center uppercase tracking-wide">
                      {activeContent.notice}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Imagem Referência */}
          <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg border-[0.5px] border-outline-variant">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Fallback image strategy using object tag or standard img */}
                <img
                  src={activeContent.image}
                  alt={`Procedimento de ${activeTab}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if ("fallbackImage" in activeContent && activeContent.fallbackImage) {
                      e.currentTarget.src = activeContent.fallbackImage;
                    } else {
                      e.currentTarget.src = "/assets/modelos clientes/brasileiro1.jpeg";
                    }
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
