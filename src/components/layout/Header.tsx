"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 flex justify-between items-center px-6 py-4 hidden md:flex"
    >
      <div className="flex items-center gap-4">
        <button className="hover:opacity-70 transition-opacity duration-300 active:scale-95">
          <Menu className="text-stone-900 dark:text-stone-50 w-6 h-6" />
        </button>
        <div className="h-8 flex items-center">
          {/* O logo será substituído pela imagem local se houver ou manter a original */}
          <img
            alt="Ana Machado Logo"
            className="h-full w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/ADBb0ui8sne6Qr9RqP7IAafQd50Lh9iiLncLJC-L5Cw1LjveDyaaixyprejTSBmJ1sFaAdriZa7ip05irPe_IX05c-0TYOjzEcG64gXczjSqNXWyN1FF_cvcq2dMXqQY5_qiKbEcMwG9tR0Zi-1TrBvAFNMl2T_y-g7kX2RGpw-nS4DxrY9XX2y-FjvCn24qdRWPG418dsRQ8e58eGP7vN5rNIlUeco1oRhO8hgL3U_fWpOiqPKsRTlaHOr2gzwSag4wNlD1WdF3CHYOq0E"
          />
        </div>
      </div>
      <nav className="hidden md:flex gap-8 items-center font-noto-serif font-light tracking-wide">
        <Link
          href="#inicio"
          className="text-secondary font-medium hover:opacity-70 transition-opacity duration-300"
        >
          Início
        </Link>
        <Link
          href="#tecnicas"
          className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300"
        >
          Técnicas
        </Link>
        <Link
          href="#mentoria"
          className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300"
        >
          Mentoria
        </Link>
        <Link
          href="#contato"
          className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300"
        >
          Contato
        </Link>
      </nav>
      <Link
        href="#garantir-vaga"
        className="bg-primary text-on-primary font-label-sm text-[12px] px-6 py-3 rounded uppercase hover:bg-opacity-90 transition-colors tracking-widest font-semibold"
      >
        Agendar
      </Link>
    </motion.header>
  );
}
