import Image from "next/image";
import { Brush, Sparkles, Sprout, Eye } from "lucide-react";
import {
  ScrollRevealWrapper,
  ScrollRevealStaggerContainer,
  ScrollRevealItem,
} from "@/components/ui/ScrollRevealWrapper";

export function Tecnicas() {
  return (
    <section id="tecnicas" className="py-section-gap px-container-padding bg-background md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollRevealWrapper className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            O que você vai aprender
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Técnicas Dominadas
          </h2>
        </ScrollRevealWrapper>

        <ScrollRevealStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-element-gap md:gap-gutter">
          <ScrollRevealItem className="bg-surface-container-low p-8 rounded-lg border-[0.5px] border-surface-variant flex flex-col md:col-span-1 md:row-span-2 group hover:shadow-md transition-shadow duration-300">
            <div className="mb-auto">
              <Brush className="text-secondary w-8 h-8 mb-4" />
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Fio a Fio</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A base perfeita. Aprenda o isolamento impecável e o mapeamento clássico para um resultado natural e elegante.
              </p>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem className="bg-surface-container-low p-8 rounded-lg border-[0.5px] border-surface-variant flex flex-col md:col-span-2 group hover:shadow-md transition-shadow duration-300">
            <Sparkles className="text-secondary w-8 h-8 mb-4" />
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Volume Brasileiro</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A técnica queridinha do momento. Fios em formato de Y que entregam volume, retenção e leveza incomparáveis.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem className="bg-surface-container-low p-8 rounded-lg border-[0.5px] border-surface-variant flex flex-col md:col-span-1 group hover:shadow-md transition-shadow duration-300">
            <Sprout className="text-secondary w-8 h-8 mb-4" />
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Volume Egípcio</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Fios em formato de W. Ideal para clientes que buscam um preenchimento denso e marcante.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem className="bg-surface-container-low p-8 rounded-lg border-[0.5px] border-surface-variant flex flex-col md:col-span-1 group hover:shadow-md transition-shadow duration-300">
            <Eye className="text-secondary w-8 h-8 mb-4" />
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Foxy Eyes</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              O mapeamento de elevação. Efeito lifting imediato que alonga e seduz o olhar.
            </p>
          </ScrollRevealItem>
        </ScrollRevealStaggerContainer>

        {/* Expansão de Serviços: Sobrancelhas */}
        <ScrollRevealWrapper className="text-center mt-24 mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Especializações Adicionais
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Arquitetura do Olhar
          </h2>
        </ScrollRevealWrapper>

        <ScrollRevealStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-element-gap md:gap-gutter">
          <ScrollRevealItem className="bg-surface-container-low rounded-lg border-[0.5px] border-surface-variant flex flex-col group hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="h-64 w-full overflow-hidden relative">
              <Image
                src="/assets/fotos ana/foto2.jpeg"
                alt="Design de Sobrancelhas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Design de Sobrancelhas</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mapeamento facial avançado para criar a simetria perfeita. Aprenda a técnica de visagismo que harmoniza as sobrancelhas com os traços únicos de cada rosto.
              </p>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem className="bg-surface-container-low rounded-lg border-[0.5px] border-surface-variant flex flex-col group hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="h-64 w-full overflow-hidden relative">
              <Image
                src="/assets/fotos ana/foto3.jpeg"
                alt="Brow Lamination"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Brow Lamination</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Alinhamento e reestruturação dos fios para um visual volumoso e imponente. A técnica europeia que entrega um aspecto wild e sofisticado por semanas.
              </p>
            </div>
          </ScrollRevealItem>
        </ScrollRevealStaggerContainer>
      </div>
    </section>
  );
}
