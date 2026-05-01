import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {/* Decorative accent line */}
        <div className="w-16 h-0.5 bg-secondary mx-auto mb-10" />

        {/* 404 number */}
        <h1 className="font-headline-xl text-[120px] md:text-[160px] leading-none text-white/10 font-bold select-none">
          404
        </h1>

        {/* Title */}
        <h2 className="font-headline-lg text-headline-lg text-white -mt-6 mb-4">
          Página não encontrada
        </h2>

        {/* Description */}
        <p className="font-body-md text-body-md text-white/60 mb-10 max-w-sm mx-auto leading-relaxed">
          O endereço que você acessou não existe ou foi movido. Volte para a
          página inicial e continue navegando.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-secondary text-white font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase tracking-widest hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
        >
          Voltar para o Início
        </Link>

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
