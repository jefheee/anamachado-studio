import dynamic from "next/dynamic";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Espaco } from "@/components/sections/Espaco";
import { Services } from "@/components/sections/Services";
import { LashDesignerProfession } from "@/components/sections/LashDesignerProfession";
import { FAQ } from "@/components/sections/FAQ";
import { Oferta } from "@/components/sections/Oferta";
import { Location } from "@/components/sections/Location";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

/* ─── Below-the-fold: lazy-loaded with next/dynamic ─── */

function SectionSkeleton({ height = "h-[600px]" }: { height?: string }) {
  return (
    <div className={`w-full ${height} bg-surface-container-lowest animate-pulse flex items-center justify-center`}>
      <div className="w-12 h-12 rounded-full border-2 border-outline-variant border-t-secondary animate-spin" />
    </div>
  );
}

const Portfolio = dynamic(
  () => import("@/components/sections/Portfolio").then((m) => m.Portfolio),
  { loading: () => <SectionSkeleton height="h-[650px]" /> }
);

const Mentoria = dynamic(
  () => import("@/components/sections/Mentoria").then((m) => m.Mentoria),
  { loading: () => <SectionSkeleton height="h-[100svh]" /> }
);

const AlunasResults = dynamic(
  () => import("@/components/sections/AlunasResults").then((m) => m.AlunasResults),
  { loading: () => <SectionSkeleton height="h-[550px]" /> }
);

const InstagramFeed = dynamic(
  () => import("@/components/sections/InstagramFeed").then((m) => m.InstagramFeed),
  { loading: () => <SectionSkeleton height="h-[400px]" /> }
);

const InformativeReels = dynamic(
  () => import("@/components/sections/InformativeReels").then((m) => m.InformativeReels),
  { loading: () => <SectionSkeleton height="h-[700px]" /> }
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto md:pt-[60px]">
        {/* ── Above the Fold (ATF) — static imports, SSR'd ── */}
        <Hero />
        <Espaco />
        <Services />

        {/* ── Below the Fold (BTF) — dynamic imports, code-split ── */}
        <Portfolio />
        <LashDesignerProfession />
        <Mentoria />
        <AlunasResults />
        <Oferta />
        <FAQ />
        <InstagramFeed />
        <InformativeReels />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
