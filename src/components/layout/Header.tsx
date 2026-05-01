"use client";

import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { trackCTAClick } from "@/utils/analytics";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    // Hide when scrolling down past 100px, show when scrolling up
    if (diff > 5 && latest > 100) {
      setIsHidden(true);
    } else if (diff < -5) {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-neutral-100 flex justify-between items-center px-6 py-2.5"
      >
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden hover:opacity-70 transition-opacity duration-300 active:scale-95"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="text-neutral-900 w-5 h-5" />
          </button>
          <Link href="#inicio" className="flex items-center h-12">
            <Image
              alt="Ana Machado Logo"
              className="object-contain"
              style={{ width: "auto", height: "100%" }}
              src="/assets/brand/logoheader_sem_fundo.png"
              width={200}
              height={48}
              priority
            />
          </Link>
        </div>
        
        {/* Nav Desktop */}
        <nav className="hidden md:flex gap-8 items-center uppercase tracking-widest text-xs font-medium text-neutral-900">
          <Link href="#inicio" className="hover:opacity-70 transition-opacity duration-300">Início</Link>
          <Link href="#espaco" className="hover:opacity-70 transition-opacity duration-300">Espaço</Link>
          <Link href="#servicos" className="hover:opacity-70 transition-opacity duration-300">Serviços</Link>
          <Link href="#portfolio" className="hover:opacity-70 transition-opacity duration-300">Portfólio</Link>
          <Link href="#mentoria" className="hover:opacity-70 transition-opacity duration-300">Mentoria</Link>
          <Link href="#faq" className="hover:opacity-70 transition-opacity duration-300">FAQ</Link>
        </nav>
        
        <div className="hidden md:flex gap-3">
          <Link
            href="#"
            className="border border-neutral-900 text-neutral-900 font-label-sm text-[11px] px-5 py-2.5 rounded uppercase hover:bg-neutral-100 transition-colors tracking-widest font-semibold"
          >
            Área do Aluno
          </Link>
          <Link
            href="https://wa.me/5548992054803"
            target="_blank"
            onClick={() => trackCTAClick('Header_AgendarHorario')}
            className="bg-secondary text-white font-label-sm text-[11px] px-5 py-2.5 rounded uppercase hover:brightness-110 hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-widest font-semibold"
          >
            Agendar
          </Link>
        </div>
      </motion.header>

      {/* Nav Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="h-12 flex items-center">
                <Image
                  alt="Ana Machado Logo"
                  className="object-contain"
                  style={{ width: "auto", height: "100%" }}
                  src="/assets/brand/logoheader_sem_fundo.png"
                  width={180}
                  height={48}
                />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-neutral-100 rounded-full"
              >
                <X className="w-5 h-5 text-neutral-900" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 uppercase tracking-widest text-sm font-medium mb-12 text-neutral-900">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#inicio" className="hover:opacity-70 min-h-[44px] flex items-center">Início</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#espaco" className="hover:opacity-70 min-h-[44px] flex items-center">Espaço</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#servicos" className="hover:opacity-70 min-h-[44px] flex items-center">Serviços</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#portfolio" className="hover:opacity-70 min-h-[44px] flex items-center">Portfólio</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#mentoria" className="hover:opacity-70 min-h-[44px] flex items-center">Mentoria</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#faq" className="hover:opacity-70 min-h-[44px] flex items-center">FAQ</Link>
            </nav>

            <div className="flex flex-col gap-4 mt-auto mb-8">
              <Link
                href="#"
                className="w-full text-center border border-neutral-900 text-neutral-900 font-label-sm py-4 rounded uppercase tracking-widest font-semibold"
              >
                Área do Aluno
              </Link>
              <Link
                href="https://wa.me/5548992054803"
                target="_blank"
                onClick={() => trackCTAClick('HeaderMobile_AgendarHorario')}
                className="w-full text-center bg-secondary text-white font-label-sm py-4 rounded uppercase tracking-widest font-semibold"
              >
                Agendar Horário
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
