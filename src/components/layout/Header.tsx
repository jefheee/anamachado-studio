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
        className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-neutral-100 flex justify-between items-center px-6 py-4"
      >
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden hover:opacity-70 transition-opacity duration-300 active:scale-95"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="text-neutral-900 w-6 h-6" />
          </button>
          <div className="h-16 flex items-center">
            <img
              alt="Ana Machado Logo"
              className="h-full w-auto object-contain mix-blend-multiply"
              src="/assets/brand/logoheader.jpeg"
            />
          </div>
        </div>
        
        {/* Nav Desktop */}
        <nav className="hidden md:flex gap-8 items-center font-noto-serif font-light tracking-wide text-neutral-900">
          <Link href="#inicio" className="hover:opacity-70 transition-opacity duration-300 font-medium">Início</Link>
          <Link href="#servicos" className="hover:opacity-70 transition-opacity duration-300">Serviços</Link>
          <Link href="#portfolio" className="hover:opacity-70 transition-opacity duration-300">Portfólio</Link>
          <Link href="#mentoria" className="hover:opacity-70 transition-opacity duration-300">Mentoria</Link>
        </nav>
        
        <div className="hidden md:flex gap-4">
          <Link
            href="#"
            className="border border-neutral-900 text-neutral-900 font-label-sm text-[12px] px-6 py-3 rounded uppercase hover:bg-neutral-100 transition-colors tracking-widest font-semibold"
          >
            Área do Aluno
          </Link>
          <Link
            href="https://wa.me/5548992054803"
            target="_blank"
            className="bg-[#800020] text-white font-label-sm text-[12px] px-6 py-3 rounded uppercase hover:bg-opacity-90 transition-colors tracking-widest font-semibold"
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
              <img
                alt="Ana Machado Logo"
                className="h-14 w-auto object-contain mix-blend-multiply"
                src="/assets/brand/logoheader.jpeg"
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-neutral-100 rounded-full"
              >
                <X className="w-6 h-6 text-neutral-900" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 font-headline-md text-headline-md mb-12 text-neutral-900">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#inicio" className="hover:opacity-70">Início</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#servicos" className="hover:opacity-70">Serviços</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#portfolio" className="hover:opacity-70">Portfólio</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="#mentoria" className="hover:opacity-70">Mentoria</Link>
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
                className="w-full text-center bg-[#800020] text-white font-label-sm py-4 rounded uppercase tracking-widest font-semibold"
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
