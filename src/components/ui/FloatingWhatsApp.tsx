import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/5548992054803"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 bg-secondary text-on-secondary rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </Link>
  );
}
