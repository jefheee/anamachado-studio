import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Mentoria } from "@/components/sections/Mentoria";
import { AlunasResults } from "@/components/sections/AlunasResults";
import { Oferta } from "@/components/sections/Oferta";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Location } from "@/components/sections/Location";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto md:pt-[72px]">
        <Hero />
        <Sobre />
        <Services />
        <Portfolio />
        <Mentoria />
        <AlunasResults />
        <Oferta />
        <InstagramFeed />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
