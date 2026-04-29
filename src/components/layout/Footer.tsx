import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-[#050505] text-white/80 border-t border-white/10 flex flex-col items-center gap-6 px-4 text-center md:pb-12">
      <div className="flex gap-6 font-label-sm text-xs font-light tracking-widest uppercase">
        <Link href="#" className="opacity-60 hover:opacity-100 hover:text-white transition-all">
          Termos de Uso
        </Link>
        <Link href="#" className="opacity-60 hover:opacity-100 hover:text-white transition-all">
          Política de Privacidade
        </Link>
        <Link href="https://wa.me/5548992054803" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-white transition-all">
          WhatsApp
        </Link>
      </div>
      <p className="font-label-sm text-xs font-light tracking-widest uppercase opacity-60">
        © {new Date().getFullYear()} Ana Machado Estética Facial. Todos os direitos reservados.
      </p>
    </footer>
  );
}
