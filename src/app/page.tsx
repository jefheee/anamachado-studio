import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Tecnicas } from "@/components/sections/Tecnicas";
import { Mentoria } from "@/components/sections/Mentoria";
import { ProvaSocial } from "@/components/sections/ProvaSocial";
import { Oferta } from "@/components/sections/Oferta";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto md:pt-[72px]">
        <Hero />
        <Sobre />
        <Tecnicas />
        <Mentoria />
        <ProvaSocial />
        <Oferta />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
