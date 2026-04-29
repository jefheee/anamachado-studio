"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FullscreenMediaWrapper } from "../ui/FullscreenMediaWrapper";

type Tab = "Cílios" | "Sobrancelhas" | "Micropigmentação" | "Manutenções";

export function Services() {
  const [activeTab, setActiveTab] = useState<Tab>("Cílios");

  const tabs: Tab[] = ["Cílios", "Sobrancelhas", "Micropigmentação", "Manutenções"];

  const content = {
    "Cílios": {
      description: "A extensão de cílios transforma o olhar, trazendo praticidade e elevação da autoestima. O Volume Brasileiro proporciona um olhar marcante, o Egípcio traz densidade e o Foxy Eyes cria um efeito lifting sofisticado.",
      images: [
        { src: "/assets/modelos_clientes/brasileiro/brasileiro (1).jpeg", label: "Volume Brasileiro" },
        { src: "/assets/modelos_clientes/egipcio/egipcio (1).jpeg", label: "Volume Egípcio" },
        { src: "/assets/modelos_clientes/foxy/foxy (1).jpeg", label: "Foxy Eyes" },
      ],
      items: [
        { name: "Volume Brasileiro", price: "160", badge: "Mais Pedido" },
        { name: "Volume Egípcio", price: "180", badge: "" },
        { name: "Foxy Eyes", price: "180", badge: "Mais Pedido" },
        { name: "Brasileiro Castanho", price: "170", badge: "" },
        { name: "Egípcio Castanho", price: "190", badge: "" },
      ],
    },
    "Sobrancelhas": {
      description: "Um design bem estruturado é a moldura do rosto. O Design estratégico alinha a simetria, enquanto a Brow Lamination entrega volume, preenchimento e um aspecto moderno e selvagem (fluffy brows).",
      images: [
        { src: "/assets/modelos_clientes/brown_lamination/brown_lamination (8).jpeg", label: "Brow Lamination" },
        { src: "/assets/modelos_clientes/design_simples/design_simples (1).jpg", label: "Design de Sobrancelhas" },
      ],
      items: [
        { name: "Design de Sobrancelhas", price: "35", badge: "" },
        { name: "Brow Lamination", price: "120", badge: "Mais Pedido" },
      ],
    },
    "Micropigmentação": {
      description: "Correção e aprimoramento duradouros. A técnica Fio a Fio reproduz a naturalidade dos pelos da sobrancelha, enquanto a revitalização Labial devolve cor, contorno e saúde aos lábios.",
      images: [
        { src: "/assets/modelos_clientes/micropigmentacao_fio_a_fio/micropigmentacao_fio_a_fio (1).jpeg", label: "Sobrancelha Fio a Fio" },
        { src: "/assets/modelos_clientes/micropigmentacao_labial/micropigmentacao_labial_depois.jpeg", label: "Micropigmentação Labial" },
      ],
      items: [
        { name: "Sobrancelhas Fio a Fio", price: "250", badge: "" },
        { name: "Micropigmentação Labial", price: "300", badge: "" },
        { name: "Combo Prime", price: "430", badge: "" },
      ],
    },
    "Manutenções": {
      description: "Para manter a saúde dos fios naturais e o preenchimento impecável, as manutenções devem ser realizadas dentro do prazo estabelecido e com pelo menos 60% dos fios intactos e limpos. Caso contrário, será cobrado o valor de uma nova aplicação.",
      images: [
        { src: "/assets/modelos_clientes/egipcio/egipcio (2).jpg", label: "Manutenção Volume Egípcio" },
        { src: "/assets/modelos_clientes/foxy/foxy (2).jpeg", label: "Manutenção Foxy Eyes" },
        { src: "/assets/modelos_clientes/brasileiro/brasileiro (2).jpeg", label: "Manutenção Brasileiro" },
        { src: "/assets/modelos_clientes/brasileiro_castanho/brasileiro_castanho (2).jpg", label: "Manutenção Castanho" },
      ],
      items: [
        { name: "Manutenção 15 dias", price: "80", badge: "" },
        { name: "Manutenção 20 dias", price: "90", badge: "" },
        { name: "Manutenção 25 dias", price: "110", badge: "" },
        { name: "Manutenção 30 dias", price: "130", badge: "" },
      ],
      notice: "Atenção: Não realizo manutenção de outras profissionais. Agendamento sujeito a sinal de R$40,00 abatido no atendimento.",
    },
  };

  const activeContent = content[activeTab];

  return (
    <section id="servicos" className="py-16 md:py-24 px-container-padding bg-surface md:px-[8%]">
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
              className={`px-8 py-3 rounded-full font-label-sm text-sm uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                  ? "bg-secondary text-on-secondary shadow-lg"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start min-h-[500px]">

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
                    <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <span className="font-headline-md text-headline-md text-on-surface">{item.name}</span>
                        {item.badge && (
                          <span className="bg-secondary/10 text-secondary text-[10px] uppercase font-bold px-2 py-1 rounded-full whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="hidden sm:block flex-1 border-b border-dotted border-outline-variant mb-2"></div>
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
                
                <div className="mt-8">
                  <a 
                    href="https://wa.me/5548992054803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 border border-primary text-primary font-label-sm text-sm uppercase tracking-widest rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    Agendar Avaliação
                  </a>
                </div>
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
                className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]"
              >
                {activeContent.images.map((img, idx) => (
                  <FullscreenMediaWrapper
                    key={idx}
                    src={img.src}
                    type="image"
                    className={`rounded-xl overflow-hidden shadow-md relative group block ${
                      activeContent.images.length === 3 && idx === 0 
                        ? "col-span-2 h-[200px] md:h-[240px]" 
                        : activeContent.images.length === 4 
                          ? "h-[190px] md:h-[240px]" // Para manutenções (4 fotos)
                          : "h-full min-h-[190px] md:min-h-[240px]"
                    } ${activeContent.images.length === 2 ? "h-[400px] md:h-[500px]" : ""}`}
                  >
                    <img
                      src={img.src}
                      alt={`Procedimento: ${img.label}`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/modelos_clientes/egipcio/egipcio (1).jpeg";
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-white font-label-sm tracking-wide text-sm">{img.label}</span>
                    </div>
                  </FullscreenMediaWrapper>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
