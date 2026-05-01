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
    question: "Quais são as regras para manutenções de cílios?",
    answer: "Para ser considerada manutenção, é necessário comparecer dentro do prazo estabelecido (15, 20, 25 ou 30 dias), com os cílios higienizados e no mínimo 60% dos fios preservados. Caso contrário, ou após 30 dias, será cobrado o valor de uma nova aplicação."
  },
  {
    question: "Vocês fazem manutenção de cílios de outras profissionais?",
    answer: "Não realizamos manutenção de extensões feitas em outros estúdios. Nestes casos, realizamos a remoção segura do trabalho antigo e fazemos uma nova aplicação impecável."
  },
  {
    question: "Quanto tempo dura a extensão de cílios?",
    answer: "A durabilidade média é de 20 a 30 dias, dependendo do ciclo natural de crescimento dos seus fios e dos cuidados diários. Recomendamos manutenções a cada 15 ou 20 dias para manter o design sempre perfeito."
  },
  {
    question: "Grávidas podem realizar o procedimento?",
    answer: "Sim! Utilizamos materiais de alta qualidade e com aprovação. No entanto, recomendamos sempre a liberação e autorização do seu médico obstetra por precaução."
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
  },
  {
    question: "Terei suporte após finalizar o curso?",
    answer: "Com certeza. O curso inclui Acompanhamento Vitalício. Você nunca estará sozinha; daremos todo o suporte para a sua evolução técnica e comercial diária."
  },
  {
    question: "A prática é feita em pessoas reais?",
    answer: "Sim! Durante a mentoria você terá Treinamento em Modelos reais, onde corrigimos minuciosamente a sua postura, isolamento e aplicação ao vivo para garantir total segurança."
  },
  {
    question: "Quanto tempo leva para recuperar o investimento do curso?",
    answer: "Com as técnicas de marketing ensinadas no curso e cobrando um valor inicial médio de R$ 120 por aplicação, você pode recuperar todo o investimento inicial atendendo cerca de 10 clientes. O retorno é extremamente rápido."
  }
];

function FAQGroup({ title, items, tabId }: { title: string; items: FAQItem[]; tabId: string }) {
  return (
    <div role="group" aria-labelledby={`faq-tab-${tabId}`}>
      <h3 id={`faq-tab-${tabId}`} className="sr-only">{title}</h3>
      <div className="space-y-3">
        {items.map((faq, index) => (
          <details
            key={`${tabId}-${index}`}
            className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm group"
          >
            <summary className="w-full text-left px-6 py-5 flex justify-between items-center cursor-pointer hover:bg-neutral-50 transition-colors min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
              <span className="font-headline-md text-lg text-primary pr-8">
                {faq.question}
              </span>
              <ChevronDown className="text-secondary w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-5 pt-1 border-t border-neutral-100">
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-container-padding bg-white md:px-[8%] border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Tire suas dúvidas
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Atendimentos */}
        <div className="mb-10">
          <h3 className="text-center font-label-sm text-sm uppercase tracking-widest text-on-surface-variant mb-6">
            Atendimentos
          </h3>
          <FAQGroup title="Perguntas sobre Atendimentos" items={faqServicos} tabId="servicos" />
        </div>

        {/* Mentoria VIP */}
        <div>
          <h3 className="text-center font-label-sm text-sm uppercase tracking-widest text-on-surface-variant mb-6">
            Mentoria VIP
          </h3>
          <FAQGroup title="Perguntas sobre a Mentoria" items={faqCurso} tabId="curso" />
        </div>
      </div>
    </section>
  );
}
