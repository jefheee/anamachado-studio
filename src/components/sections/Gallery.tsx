import Image from "next/image";
import {
  ScrollRevealWrapper,
  ScrollRevealStaggerContainer,
  ScrollRevealItem,
} from "@/components/ui/ScrollRevealWrapper";

const images = [
  {
    src: "/assets/modelos clientes/brasileiro1.jpeg",
    alt: "Volume Brasileiro - Lash Design",
  },
  {
    src: "/assets/modelos clientes/egípcio1.jpeg",
    alt: "Volume Egípcio - Lash Design",
  },
  {
    src: "/assets/modelos clientes/foxy1.jpeg",
    alt: "Foxy Eyes - Lash Design",
  },
];

export function Gallery() {
  return (
    <section className="py-section-gap px-container-padding bg-surface md:px-[8%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollRevealWrapper className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Resultados Reais
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            A Arte em Prática
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
            Confira o nível de excelência que você aprenderá a entregar. Trabalhos
            que elevam a autoestima e fidelizam clientes.
          </p>
        </ScrollRevealWrapper>

        <ScrollRevealStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-element-gap md:gap-gutter">
          {images.map((image, idx) => (
            <ScrollRevealItem
              key={idx}
              className="aspect-[3/4] rounded-lg overflow-hidden border-[0.5px] border-outline-variant shadow-md group relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </ScrollRevealItem>
          ))}
        </ScrollRevealStaggerContainer>
      </div>
    </section>
  );
}
