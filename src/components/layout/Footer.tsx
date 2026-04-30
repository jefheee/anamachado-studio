"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white/80 border-t border-white/10">
      {/* Dual CTA Bar */}
      <div className="border-b border-white/10 py-8 px-6 md:px-[8%]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-neutral-900 font-label-sm text-[11px] px-8 py-3.5 rounded-lg uppercase tracking-widest hover:bg-neutral-100 transition-all group shadow-md hover:shadow-lg duration-300 font-semibold"
          >
            Agendar Atendimento
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20garantir%20minha%20vaga%20na%20Mentoria%20VIP."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary text-white font-label-sm text-[11px] px-8 py-3.5 rounded-lg uppercase tracking-widest hover:brightness-110 transition-all group shadow-md hover:shadow-lg duration-300 font-semibold"
          >
            Garantir Vaga na Mentoria
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content - 3 Columns */}
      <div className="py-12 px-6 md:px-[8%]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Column 1: Brand + Description */}
          <div className="flex flex-col gap-6">
            <div className="h-12 flex items-center">
              <Image
                alt="Ana Machado Logo"
                className="h-full w-auto object-contain brightness-0 invert opacity-80"
                src="/assets/brand/logoheader_sem_fundo.png"
                width={120}
                height={48}
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Especialista em extensão de cílios, design de sobrancelhas e micropigmentação. Formando profissionais de excelência através da Mentoria VIP.
            </p>
            <p className="text-xs text-white/30 uppercase tracking-widest font-semibold">
              Palhoça, SC — Brasil
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/anamachadolashdesigner/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@anamachadolashdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="TikTok"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48 6.3 6.3 0 001.86-4.49V8.75a8.26 8.26 0 004.85 1.56V6.86a4.84 4.84 0 01-1.13-.17z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5548992054803"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-[16px] h-[16px]" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-white/40 font-semibold">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="#servicos" className="text-sm text-white/60 hover:text-white transition-colors">Serviços</Link>
              <Link href="#portfolio" className="text-sm text-white/60 hover:text-white transition-colors">Portfólio</Link>
              <Link href="#mentoria" className="text-sm text-white/60 hover:text-white transition-colors">Mentoria VIP</Link>
              <Link href="#resultados-alunas" className="text-sm text-white/60 hover:text-white transition-colors">Resultados</Link>
              <Link href="#garantir-vaga" className="text-sm text-white/60 hover:text-white transition-colors">Investimento</Link>
            </nav>

            <h4 className="font-label-sm text-xs uppercase tracking-widest text-white/40 font-semibold mt-4">
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/termos-e-condicoes" className="text-sm text-white/60 hover:text-white transition-colors">Termos e Condições</Link>
              <Link href="/politica-de-privacidade" className="text-sm text-white/60 hover:text-white transition-colors">Política de Privacidade</Link>
            </nav>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="flex flex-col gap-6">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-white/40 font-semibold">
              Contato
            </h4>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-white/80 font-medium">Rua Machado de Assis, 995</p>
                <p className="text-xs text-white/50">Jardim Eldorado — Palhoça/SC</p>
                <p className="text-xs text-white/50">88133-380</p>
                <a 
                  href="https://maps.app.goo.gl/VjwA4aEg3B1zfz4PA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-secondary hover:text-secondary/80 transition-colors mt-1 inline-block font-medium"
                >
                  Como Chegar →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-white/80 font-medium">Horário de Funcionamento</p>
                <p className="text-xs text-white/50">Segunda a Sexta: 09h às 19h</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-white/80 font-medium">WhatsApp</p>
                <a 
                  href="https://wa.me/5548992054803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-secondary hover:text-secondary/80 transition-colors font-medium"
                >
                  (48) 99205-4803
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 px-6 md:px-[8%]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/30 tracking-wider uppercase">
            © {new Date().getFullYear()} Ana Machado Estética Facial. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-white/20 tracking-wider">
            Palhoça, Santa Catarina — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
