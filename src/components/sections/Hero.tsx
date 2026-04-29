"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // O painel fica fixo por 150% da altura da tela
        pin: true,
        scrub: 1,
      }
    });

    // Oculta o conteúdo 1 (Hero principal) e sobe ele
    tl.to(".hero-content-1", { 
      opacity: 0, 
      y: -50, 
      duration: 1,
      ease: "power1.inOut" 
    })
    // Mostra o conteúdo 2 (Biografia da Ana) subindo de baixo
    .fromTo(".hero-content-2", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full h-[100svh] flex flex-col justify-center px-container-padding md:items-start md:px-[8%] overflow-hidden bg-white"
    >
      {/* Background Cinematográfico - Pinned com a seção */}
      <div className="absolute inset-0 z-0 w-full h-[100svh] bg-surface overflow-hidden">
        <img
          alt="Ana Machado e Mentoria"
          className="object-cover object-top md:object-center w-full h-full"
          src="/assets/hero-branca.jpg"
        />
        {/* Overlay clara para garantir contraste do texto escuro sem perder a foto branca */}
        <div className="absolute inset-0 bg-white/40 md:bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>

      {/* Container de Animação com grid para sobreposição */}
      <div className="relative z-10 w-full max-w-3xl grid grid-cols-1 grid-rows-1">
        
        {/* CONTEÚDO 1: Títulos do Curso (Original Hero) */}
        <div className="hero-content-1 col-start-1 row-start-1 text-neutral-900 pointer-events-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-neutral-600 mb-4 block font-semibold">
            Metodologia Ana Júlia Machado
          </span>
          <h1 className="font-headline-xl text-headline-xl mb-element-gap leading-tight">
            Curso de Extensão de Cílios
            <span className="block text-secondary">Lash Designer de Excelência</span>
          </h1>
          <p className="font-body-lg text-body-lg text-neutral-700 mb-8 max-w-xl">
            Domine a técnica, aumente sua retenção e construa uma agenda lucrativa em um mercado de alta demanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20garantir%20minha%20vaga%20na%20Mentoria%20VIP."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-secondary text-on-secondary font-label-sm text-label-sm px-8 py-4 rounded uppercase tracking-widest hover:bg-on-secondary-fixed-variant transition-colors group shadow-lg"
            >
              Garantir Minha Vaga
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20baixar%20gratuitamente%20o%20Manual%20Definitivo%20de%20Cuidados%20P%C3%B3s-Extens%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-neutral-900 text-neutral-900 font-label-sm text-label-sm px-8 py-4 rounded uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors shadow-lg"
            >
              Baixe o Manual Gratuito
            </Link>
          </div>
        </div>

        {/* CONTEÚDO 2: Biografia (Original Sobre) - Inicia oculto pelo GSAP */}
        <div className="hero-content-2 col-start-1 row-start-1 text-neutral-900 pointer-events-none opacity-0">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4 font-bold">
            Sobre a Especialista
          </span>
          <h2 className="font-headline-lg text-headline-lg text-neutral-900 mb-6">
            A Arte do Olhar
          </h2>
          <div className="border-l-4 border-secondary pl-6 mb-8">
            <p className="font-headline-sm text-headline-sm text-secondary italic">
              &quot;Eu não ensino só técnica! Eu ensino você a realmente entrar e se destacar no mercado da beleza.&quot;
            </p>
          </div>
          <p className="font-body-md text-body-md text-neutral-800 mb-6 leading-relaxed">
            Instrutora especialista em extensão de cílios e sobrancelhas, Ana Júlia encontrou na estética muito mais do que uma profissão: um propósito. Com <strong>mais de 2.000 atendimentos realizados desde 2023</strong>, sua missão é transformar vidas através do conhecimento, entregando resultados marcantes e formando novas profissionais de sucesso.
          </p>
          <p className="font-body-md text-body-md text-neutral-800 mb-8 leading-relaxed">
            Seja no cuidado com o design perfeito ou na mentoria meticulosa de cada aluna, o foco sempre foi e será a excelência, aliando durabilidade, retenção e visagismo.
          </p>
          
          <div className="flex flex-wrap items-center gap-8 border-t border-neutral-300 pt-8">
            <div className="flex items-center gap-4">
              <span className="font-headline-lg text-4xl text-neutral-900 font-bold">2k+</span>
              <span className="font-label-sm text-xs text-neutral-600 uppercase tracking-widest leading-tight">
                Atendimentos<br />Realizados
              </span>
            </div>
            <div className="w-px h-12 bg-neutral-300 hidden sm:block"></div>
            <div className="flex items-center gap-4">
              <span className="font-headline-lg text-4xl text-neutral-900 font-bold">3+</span>
              <span className="font-label-sm text-xs text-neutral-600 uppercase tracking-widest leading-tight">
                Anos de<br />Experiência
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
