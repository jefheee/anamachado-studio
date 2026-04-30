import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Ana Machado Estética Facial",
  description: "Política de privacidade do site Ana Machado Estética Facial. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto pt-20 md:pt-[72px]">
        {/* Hero Banner */}
        <section className="bg-neutral-900 text-white py-16 md:py-24 px-container-padding md:px-[8%]">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest hover:text-white/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h1 className="font-headline-xl text-3xl md:text-4xl font-bold">
                Política de Privacidade
              </h1>
            </div>
            <p className="text-white/60 font-body-md">
              Última atualização: 30 de Abril de 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20 px-container-padding md:px-[8%] bg-surface">
          <div className="max-w-3xl mx-auto prose-custom">

            <p className="text-on-surface-variant font-body-md leading-relaxed mb-8">
              A sua privacidade é importante para nós. É política do <strong>Ana Machado Estética Facial</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site{" "}
              <Link href="/" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                anamachado-studio.vercel.app
              </Link>
              , e outros sites que possuímos e operamos.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-headline-md text-xl text-primary mb-4">Coleta de Informações</h2>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-xl text-primary mb-4">Retenção de Dados</h2>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-xl text-primary mb-4">Compartilhamento</h2>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-xl text-primary mb-4">Links Externos</h2>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-xl text-primary mb-4">Cookies</h2>
                <ul className="space-y-3 text-on-surface-variant font-body-md leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></span>
                    <span>Utilizamos cookies para melhorar a experiência de navegação e fornecer conteúdo personalizado.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></span>
                    <span>Cookies de análise nos ajudam a entender como os visitantes interagem com o site, permitindo melhorias contínuas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></span>
                    <span>Você pode optar por recusar cookies através das configurações do seu navegador, embora isso possa afetar algumas funcionalidades do site.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-md text-xl text-primary mb-4">Seus Direitos</h2>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 shadow-sm">
                <h2 className="font-headline-md text-xl text-primary mb-4">Compromisso do Usuário</h2>
                <p className="text-on-surface-variant font-body-md leading-relaxed mb-4">
                  O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Ana Machado Estética Facial oferece no site e com caráter enunciativo, mas não limitativo:
                </p>
                <ul className="space-y-3 text-on-surface-variant font-body-md leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold shrink-0">A)</span>
                    <span>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold shrink-0">B)</span>
                    <span>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou qualquer tipo de conteúdo ilegal ou contra os direitos humanos;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold shrink-0">C)</span>
                    <span>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Ana Machado Estética Facial, de seus fornecedores ou terceiros.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-md text-xl text-primary mb-4">Mais Informações</h2>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco pelo{" "}
                  <a href="https://wa.me/5548992054803" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                    WhatsApp
                  </a>.
                </p>
              </div>
            </div>

            {/* Cross-link */}
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                Consulte também nossos{" "}
                <Link href="/termos-e-condicoes" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                  Termos e Condições
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
