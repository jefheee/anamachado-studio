import { MapPin, Clock, Navigation, Phone } from "lucide-react";
import { ScrollRevealWrapper } from "@/components/ui/ScrollRevealWrapper";

export function Location() {
  return (
    <section className="py-16 md:py-24 px-container-padding bg-neutral-900 text-white md:px-[8%]">
      <div className="max-w-6xl mx-auto">
        <ScrollRevealWrapper className="text-center mb-12">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            Onde Estamos
          </span>
          <h2 className="font-headline-lg text-headline-lg text-white">
            Nosso Estúdio
          </h2>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-auto">
          <ScrollRevealWrapper className="md:col-span-3 md:row-span-2 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[300px] md:min-h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.618037346736!2d-48.66014418493922!3d-27.636254182821425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527351fa56bd5c1%3A0xc3af7a829da141b7!2sR.%20Machado%20de%20Assis%2C%20995%20-%20Passa%20Vinte%2C%20Palho%C3%A7a%20-%20SC%2C%2088132-140!5e0!3m2!1spt-BR!2sbr!4v1714151234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Estúdio Ana Machado"
            />
          </ScrollRevealWrapper>

          <ScrollRevealWrapper direction="right" delay={0.1} className="md:col-span-1 bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 flex flex-col gap-4 hover:bg-white/8 transition-colors group">
            <div className="w-11 h-11 bg-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="text-secondary w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-md text-lg text-white mb-2">Endereço</h3>
              <address className="text-sm text-white/60 leading-relaxed not-italic">
                <span className="font-semibold text-white/80">Rua Machado de Assis, 995</span><br />
                Jardim Eldorado<br />
                Palhoça - SC, 88133-380
              </address>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper direction="right" delay={0.2} className="md:col-span-1 bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 flex flex-col gap-5 hover:bg-white/8 transition-colors group">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="text-secondary w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/80 mb-1">Funcionamento</h4>
                <p className="text-xs text-white/50">Seg a Sex: <span className="text-secondary font-medium">09h - 19h</span></p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="text-secondary w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/80 mb-1">WhatsApp</h4>
                <a href="https://wa.me/5548992054803" target="_blank" rel="noopener noreferrer" className="text-xs text-secondary hover:text-secondary/80 transition-colors font-medium">
                  (48) 99205-4803
                </a>
              </div>
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={0.3} className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="https://maps.app.goo.gl/VjwA4aEg3B1zfz4PA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 px-6 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
              <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">Google Maps</span>
            </a>
            <a href="https://maps.apple/p/~kdMwb74ruP5c8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 px-6 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
              <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">Apple Maps</span>
            </a>
            <a href="https://wa.me/5548992054803?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20como%20chegar%20ao%20est%C3%BAdio." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 px-6 bg-secondary/20 border border-secondary/30 text-white rounded-2xl hover:bg-secondary/30 hover:border-secondary/40 transition-all group">
              <Navigation className="w-5 h-5 text-secondary opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">Como Chegar</span>
            </a>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
}
