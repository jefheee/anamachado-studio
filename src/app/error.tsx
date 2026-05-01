"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Silent error logging — replace with Sentry.captureException(error) if integrated
    console.error("[App Error Boundary]", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <main className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {/* Decorative accent line */}
        <div className="w-16 h-0.5 bg-error mx-auto mb-10" />

        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-error/10 border border-error/20 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-error"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="font-headline-lg text-headline-lg text-white mb-4">
          Algo deu errado
        </h1>

        {/* Description */}
        <p className="font-body-md text-body-md text-white/60 mb-10 max-w-sm mx-auto leading-relaxed">
          Ocorreu um erro inesperado ao carregar esta página. Tente novamente ou
          volte para a página inicial.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center bg-secondary text-white font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase tracking-widest hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
          >
            Tentar Novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border-2 border-white text-white font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
          >
            Voltar ao Início
          </Link>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex items-center justify-center gap-3 text-white/30">
          <div className="w-8 h-px bg-white/20" />
          <span className="font-label-sm text-[10px] uppercase tracking-[0.3em]">
            Ana Machado Estética Facial
          </span>
          <div className="w-8 h-px bg-white/20" />
        </div>
      </div>
    </main>
  );
}
