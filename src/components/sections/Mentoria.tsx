"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Award, Headset, BookOpen, Users, Smartphone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Subcomponente para controle de performance dos vídeos
function PremiumVideo({
  src,
  title,
  subtitle,
  gradientPos,
  objectPosition = "object-center"
}: {
  src: string;
  title: string;
  subtitle: string;
  gradientPos: "top" | "bottom";
  objectPosition?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => { });
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <div className="relative w-full h-full group overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="none"
        className={`w-full h-full object-cover ${objectPosition} opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100`}
      />
      {gradientPos === "bottom" ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 pointer-events-none">
          <span className="text-secondary font-label-sm uppercase tracking-widest text-[10px] mb-1">{subtitle}</span>
          <h3 className="text-white font-headline-sm text-sm sm:text-base leading-tight">{title}</h3>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent flex flex-col justify-start p-4 pointer-events-none">
          <span className="text-secondary font-label-sm uppercase tracking-widest text-[10px] mb-1">{subtitle}</span>
          <h3 className="text-white font-headline-sm text-sm sm:text-base leading-tight">{title}</h3>
        </div>
      )}
    </div>
  );
}

export function Mentoria() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !contentRef.current || !bgRef.current) return;

    // Animação de Reveal do Background (expande)
    gsap.fromTo(bgRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        }
      }
    );

    // Z-Axis Reveal Effect
    gsap.fromTo(contentRef.current,
      { scale: 0.8, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", 
          end: "center center",   
          scrub: 1,         
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="mentoria" 
      ref={containerRef} 
      className="relative py-16 md:py-24 px-container-padding md:px-[8%] overflow-hidden"
    >
      {/* Background Expandível */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full z-0 origin-center">
        <img src="/assets/bg-mentoria.jpg" className="w-full h-full object-cover" alt="Background" />
        <div className="absolute inset-0 bg-[#F9F7F5]/90 backdrop-blur-[2px]"></div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto origin-center">

        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2 font-semibold">
            Formação Completa
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            O Que Está Incluso na Mentoria
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[220px]">
          
          {/* Kit Premium (4 Vídeos) - Span 2x2 */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-xl border-[0.5px] border-neutral-200 aspect-square md:aspect-auto flex flex-col">
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5 bg-neutral-900">
              <PremiumVideo
                src="/assets/curso_vip/montandocaixa.mp4"
                title="Kit Exclusivo"
                subtitle="Incluso"
                gradientPos="top"
                objectPosition="object-[center_78%]"
              />
              <PremiumVideo
                src="/assets/curso_vip/montandocaixacurso.mp4"
                title="Preparado com Carinho"
                subtitle="Detalhes"
                gradientPos="top"
                objectPosition="object-[center_67%]"
              />
              <PremiumVideo
                src="/assets/curso_vip/mostrandoitenscurso.mp4"
                title="Produtos de Elite"
                subtitle="Materiais"
                gradientPos="bottom"
              />
              <PremiumVideo
                src="/assets/curso_vip/mostrandoitenscurso (2).mp4"
                title="Fature Imediatamente"
                subtitle="Pronto para uso"
                gradientPos="bottom"
                objectPosition="object-[center_70%]"
              />
            </div>
          </div>

          {/* 8h Curso - Span 2 Cols */}
          <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-md border border-neutral-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-lg transition-shadow">
            <Clock className="absolute -right-4 -bottom-4 w-32 h-32 text-surface-container opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
            <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-3 relative z-10">8h de Curso Presencial</h4>
            <p className="text-on-surface-variant font-body-md max-w-sm relative z-10">Teoria e prática intensiva. Podendo dividir em 2 dias ou finalizar em 1 dia focado para acelerar sua jornada.</p>
          </div>

          {/* Treinamento Modelos - Span 2 Cols */}
          <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-md border border-neutral-100 flex flex-col justify-center group hover:shadow-lg transition-shadow">
            <Users className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-3">Treinamento em Modelos</h4>
            <p className="text-on-surface-variant font-body-md">Mão na massa desde o início com supervisão rigorosa. Corrigimos cada detalhe da sua postura e aplicação ao vivo.</p>
          </div>

          {/* Apostila - Span 1 Col */}
          <div className="md:col-span-1 bg-secondary text-white rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-between group hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
            <BookOpen className="w-8 h-8 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div>
              <h4 className="font-headline-md text-xl mb-2">Apostila Completa</h4>
              <p className="text-white/80 font-body-sm text-sm">Material super didático cobrindo desde a anatomia dos fios até biossegurança e tendências.</p>
            </div>
          </div>

          {/* Captação - Span 1 Col */}
          <div className="md:col-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-md border border-neutral-100 flex flex-col justify-between group hover:shadow-lg transition-shadow">
            <Smartphone className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="font-headline-md text-xl text-primary mb-2">Marketing e Perfil</h4>
              <p className="text-on-surface-variant font-body-sm text-sm">Captação de clientes, dicas de fotos, edições e construção de perfil profissional.</p>
            </div>
          </div>

          {/* Acompanhamento - Span 2 Cols */}
          <div className="md:col-span-2 bg-primary text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-center relative overflow-hidden group">
            <Headset className="absolute right-0 bottom-0 w-40 h-40 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <h4 className="font-headline-md text-xl md:text-2xl mb-3 relative z-10">Acompanhamento Vitalício</h4>
            <p className="text-white/80 font-body-md max-w-md relative z-10">Suporte contínuo para o seu dia a dia. Você não estará sozinha no seu processo de evolução técnica e comercial.</p>
          </div>

          {/* Certificado e Retorno - Span 4 Cols */}
          <div className="md:col-span-4 bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-md border border-neutral-100 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center shrink-0 border border-neutral-100">
              <Award className="w-8 h-8 text-secondary group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-2">Certificação e Retorno</h4>
              <p className="text-on-surface-variant font-body-md">Validação oficial do seu aprendizado e um <strong>retorno de 20 dias para manutenção</strong> para garantir a segurança na prática após o curso.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
