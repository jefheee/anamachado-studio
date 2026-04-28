"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "Cílios" | "Sobrancelhas" | "Micropigmentação" | "Manutenções";

export function Services() {
  const [activeTab, setActiveTab] = useState<Tab>("Cílios");

  const tabs: Tab[] = ["Cílios", "Sobrancelhas", "Micropigmentação", "Manutenções"];

  const content = {
    "Cílios": {
      description: "A extensão de cílios transforma o olhar, trazendo praticidade e elevação da autoestima. O Volume Brasileiro proporciona um olhar marcante, o Egípcio traz densidade e o Foxy Eyes cria um efeito lifting sofisticado.",
      images: [
        "/assets/modelos_clientes/brasileiro1.jpeg",
        "/assets/modelos_clientes/egipcio1.jpeg",
        "/assets/modelos_clientes/foxy1.jpeg",
      ],
      items: [
        { name: "Volume Brasileiro", price: "160" },
        { name: "Volume Egípcio", price: "180" },
        { name: "Foxy Eyes", price: "180" },
      ],
    },
    "Sobrancelhas": {
      description: "Um design bem estruturado é a moldura do rosto. O Design estratégico alinha a simetria, enquanto a Brow Lamination entrega volume, preenchimento e um aspecto moderno e selvagem (fluffy brows).",
      images: [
        "/assets/modelos_clientes/fotobrownlamination.jpeg",
        "/assets/modelos_clientes/brasileiro2.jpeg", // fallback
      ],
      items: [
        { name: "Design de Sobrancelhas", price: "35" },
        { name: "Brow Lamination", price: "120" },
      ],
    },
    "Micropigmentação": {
      description: "Correção e aprimoramento duradouros. A técnica Fio a Fio reproduz a naturalidade dos pelos da sobrancelha, enquanto a revitalização Labial devolve cor, contorno e saúde aos lábios.",
      images: [
        "/assets/modelos_clientes/fotomicropigmentacaolabial.jpeg",
        "/assets/modelos_clientes/brasileiro3.jpeg", // fallback
      ],
      items: [
        { name: "Sobrancelhas Fio a Fio", price: "250" },
        { name: "Micropigmentação Labial", price: "300" },
        { name: "Combo Prime", price: "430" },
      ],
    },
    "Manutenções": {
      description: "Para manter a saúde dos fios naturais e o preenchimento impecável, as manutenções devem ser realizadas rigorosamente dentro do prazo estabelecido. Após 25 dias, será cobrado o valor de uma nova aplicação.",
      images: [
        "/assets/modelos_clientes/egipcio2.jpeg",
        "/assets/modelos_clientes/foxy2.jpeg",
      ],
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
    <section id="servicos" className="py-24 px-container-padding bg-surface md:px-[8%]">
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
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-label-sm text-sm uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab
                  ? "bg-secondary text-on-secondary shadow-lg"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start min-h-[500px]">
          
          {/* Coluna Esquerda: Texto e Preços */}
          <div className="flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                    {activeTab}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {activeContent.description}
                  </p>
                </div>
                
                <ul className="space-y-6 mt-8">
                  {activeContent.items.map((item, index) => (
                    <li key={index} className="flex justify-between items-end gap-4">
                      <span className="font-headline-md text-headline-md text-on-surface">{item.name}</span>
                      <div className="flex-1 border-b border-dotted border-outline-variant mb-2"></div>
                      <span className="font-headline-md text-headline-md text-primary font-bold whitespace-nowrap">
                        R$ {item.price}
                      </span>
                    </li>
                  ))}
                </ul>

                {"notice" in activeContent && activeContent.notice && (
                  <div className="mt-8 p-6 bg-surface-container rounded-lg border-l-4 border-secondary">
                    <p className="font-label-sm text-label-sm text-on-surface text-center uppercase tracking-wide font-bold">
                      {activeContent.notice}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Coluna Direita: Mosaico de Imagens */}
          <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4 h-[500px]"
              >
                {activeContent.images.map((src, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-xl overflow-hidden shadow-md ${
                      activeContent.images.length === 3 && idx === 0 ? "col-span-2 h-[240px]" : "h-full min-h-[240px]"
                    } ${activeContent.images.length === 2 ? "h-[500px]" : ""}`}
                  >
                    <img
                      src={src}
                      alt={`Procedimento de ${activeTab} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        // Fallback se a imagem específica não existir (evita erro visual)
                        e.currentTarget.src = "/assets/modelos_clientes/brasileiro1.jpeg";
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
