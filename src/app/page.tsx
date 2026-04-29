import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Espaco } from "@/components/sections/Espaco";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { LashDesignerProfession } from "@/components/sections/LashDesignerProfession";
import { Mentoria } from "@/components/sections/Mentoria";
import { AlunasResults } from "@/components/sections/AlunasResults";
import { FAQ } from "@/components/sections/FAQ";
import { Oferta } from "@/components/sections/Oferta";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Location } from "@/components/sections/Location";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InformativeReels } from "@/components/sections/InformativeReels";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto md:pt-[72px]">
        <Hero />
        <Sobre />
        <Espaco />
        <Services />
        <Portfolio />
        <LashDesignerProfession />
        <Mentoria />
        <AlunasResults />
        <FAQ />
        <Oferta />
        <InstagramFeed />
        <InformativeReels />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
