import Image from "next/image";
import { User } from "lucide-react";
import { ScrollRevealWrapper } from "@/components/ui/ScrollRevealWrapper";

export function ProvaSocial() {
  return (
    <section className="py-section-gap px-container-padding bg-surface-container-low md:px-[8%] overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <ScrollRevealWrapper className="w-full md:w-1/2 order-2 md:order-1 flex justify-center">
          <div className="w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl border-[4px] border-white relative aspect-[9/16]">
            <Image
              alt="Perfil do Instagram Ana Machado Estética Facial"
              className="object-cover"
              src="/images/printpaginainstaana.jpeg"
              fill
              sizes="320px"
            />
          </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper direction="right" delay={0.2} className="w-full md:w-1/2 order-1 md:order-2">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
            Experiência Comprovada
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            + de 2000 atendimentos realizados desde 2023
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Resultados reais que construíram uma base de clientes fiéis e
            apaixonadas. Nossa metodologia é testada e aprovada diariamente em
            nossa clínica.
          </p>
          
          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-surface-variant border-2 border-white flex items-center justify-center overflow-hidden"
                >
                  <User className="text-outline w-5 h-5" />
                </div>
              ))}
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              +2000 Clientes Satisfeitas
            </span>
          </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
}
