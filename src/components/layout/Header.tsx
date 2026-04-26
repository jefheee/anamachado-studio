"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 flex justify-between items-center px-6 py-4"
      >
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden hover:opacity-70 transition-opacity duration-300 active:scale-95"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="text-stone-900 dark:text-stone-50 w-6 h-6" />
          </button>
          <div className="h-10 flex items-center">
            <img
              alt="Ana Machado Logo"
              className="h-full w-auto object-contain rounded-sm"
              src="/assets/logoanamachado.jpeg"
            />
          </div>
        </div>
        
        {/* Nav Desktop */}
        <nav className="hidden md:flex gap-8 items-center font-noto-serif font-light tracking-wide">
          <Link href="#inicio" className="text-secondary font-medium hover:opacity-70 transition-opacity duration-300">Início</Link>
          <Link href="#servicos" className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Serviços</Link>
          <Link href="#portfolio" className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Portfólio</Link>
          <Link href="#mentoria" className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Mentoria</Link>
        </nav>
        
        <div className="hidden md:flex gap-4">
          <Link
            href="#"
            className="border border-primary text-primary font-label-sm text-[12px] px-6 py-3 rounded uppercase hover:bg-surface-container-low transition-colors tracking-widest font-semibold"
          >
            Área do Aluno
          </Link>
          <Link
            href="https://wa.me/5548992054803"
            target="_blank"
            className="bg-primary text-on-primary font-label-sm text-[12px] px-6 py-3 rounded uppercase hover:bg-opacity-90 transition-colors tracking-widest font-semibold"
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
            className="fixed inset-0 z-[60] bg-white dark:bg-stone-950 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <img
                alt="Ana Machado Logo"
                className="h-10 w-auto object-contain rounded-sm"
                src="/assets/logoanamachado.jpeg"
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-surface-container-low rounded-full"
              >
                <X className="w-6 h-6 text-on-surface" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 font-headline-md text-headline-md mb-12">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#inicio" className="text-on-surface">Início</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#servicos" className="text-on-surface">Serviços</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#portfolio" className="text-on-surface">Portfólio</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#mentoria" className="text-on-surface">Mentoria</Link>
            </nav>

            <div className="flex flex-col gap-4 mt-auto mb-8">
              <Link
                href="#"
                className="w-full text-center border border-primary text-primary font-label-sm py-4 rounded uppercase tracking-widest font-semibold"
              >
                Área do Aluno
              </Link>
              <Link
                href="https://wa.me/5548992054803"
                target="_blank"
                className="w-full text-center bg-primary text-on-primary font-label-sm py-4 rounded uppercase tracking-widest font-semibold"
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
