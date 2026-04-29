"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqServicos: FAQItem[] = [
  {
    question: "Quais são as formas de pagamento aceitas no estúdio?",
    answer: "Aceitamos PIX, Débito e Crédito. Pagamentos no cartão de crédito possuem acréscimo da taxa da maquininha. Pagamentos em dinheiro precisam ser com o valor exato, pois não trabalhamos com troco."
  },
  {
    question: "É necessário pagar sinal para agendar um atendimento?",
    answer: "Sim, o agendamento de qualquer serviço está sujeito ao pagamento de um sinal de R$40,00. Esse valor garante o seu horário e é abatido do valor total no dia do atendimento."
  },
  {
    question: "Como funciona a política de atrasos?",
    answer: "Temos uma tolerância máxima de 15 minutos de atraso. Caso seja possível realizar o atendimento após esse período, será cobrada uma taxa adicional de R$15. Caso contrário, será necessário remarcar e o sinal não será devolvido."
  },
  {
    question: "Quais são as regras para manutenções de Cílios?",
    answer: "Para ser considerada manutenção, é necessário comparecer dentro do prazo estabelecido (15, 20, 25 ou 30 dias), com os cílios higienizados e no mínimo 60% dos fios preservados. Caso contrário, ou após 30 dias, será cobrado o valor de uma nova aplicação."
  },
  {
    question: "Vocês fazem manutenção de cílios de outras profissionais?",
    answer: "Não realizamos manutenção de extensões feitas em outros estúdios. Nestes casos, realizamos a remoção segura do trabalho antigo e fazemos uma nova aplicação impecável."
  }
];

const faqCurso: FAQItem[] = [
  {
    question: "Preciso ter experiência na área da beleza para fazer a Mentoria?",
    answer: "Não, a mentoria é desenhada do zero absoluto à prática avançada. Você aprenderá desde a anatomia dos fios até as técnicas de retenção e posicionamento profissional."
  },
  {
    question: "Como funciona o acesso aos vídeos da Mentoria?",
    answer: "Após o curso presencial, você receberá acesso exclusivo à nossa área de membros na Kiwify para revisar as técnicas em alta resolução sempre que precisar."
  },
  {
    question: "O material prático está incluso no curso?",
    answer: "Sim, o treinamento garante um Kit Iniciante Premium completo e selecionado a dedo para você começar a atender imediatamente após a certificação."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"Serviços" | "Curso">("Serviços");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = activeTab === "Serviços" ? faqServicos : faqCurso;

  return (
    <section className="py-16 md:py-24 px-container-padding bg-surface md:px-[8%] border-t border-neutral-100">
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
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
            Perguntas Frequentes
          </h2>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => { setActiveTab("Serviços"); setOpenIndex(null); }}
              className={`px-6 py-2 rounded-full font-label-sm text-sm tracking-widest uppercase transition-colors ${
                activeTab === "Serviços" 
                  ? "bg-secondary text-on-secondary shadow-md" 
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              Atendimentos
            </button>
            <button
              onClick={() => { setActiveTab("Curso"); setOpenIndex(null); }}
              className={`px-6 py-2 rounded-full font-label-sm text-sm tracking-widest uppercase transition-colors ${
                activeTab === "Curso" 
                  ? "bg-secondary text-on-secondary shadow-md" 
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              Mentoria VIP
            </button>
          </div>
        </motion.div>

        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <motion.div
              key={index + activeTab} // forces re-animation on tab change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-neutral-50 transition-colors"
              >
                <span className="font-headline-md text-lg text-primary pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
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
