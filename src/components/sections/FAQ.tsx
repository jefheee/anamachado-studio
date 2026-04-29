"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Preciso ter experiência na área da beleza?",
    answer: "Não, a mentoria é desenhada do zero absoluto à prática avançada. Você aprenderá desde a anatomia dos fios até as técnicas de retenção e posicionamento profissional."
  },
  {
    question: "Como funciona o acesso aos vídeos?",
    answer: "Após o curso presencial, você receberá acesso exclusivo à nossa área de membros na Kiwify para revisar as técnicas em alta resolução sempre que precisar."
  },
  {
    question: "O material prático está incluso?",
    answer: "Sim, o treinamento garante um Kit Iniciante Premium completo e selecionado a dedo para você começar a atender imediatamente após a certificação."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-container-padding bg-surface md:px-[8%] border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Tire suas dúvidas
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-neutral-50 transition-colors"
              >
                <span className="font-headline-md text-lg text-primary">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-secondary w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-1 border-t border-neutral-100">
                      <p className="font-body-md text-on-surface-variant leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
