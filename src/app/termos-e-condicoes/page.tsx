import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos e Condições | Ana Machado Estética Facial",
  description: "Termos e condições de uso do site Ana Machado Estética Facial. Leia antes de utilizar nossos serviços.",
};

export default function TermosECondicoes() {
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
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <h1 className="font-headline-xl text-3xl md:text-4xl font-bold">
                Termos e Condições
              </h1>
            </div>
            <p className="text-white/60 font-body-md">
              Última atualização: 30 de Abril de 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20 px-container-padding md:px-[8%] bg-surface">
          <div className="max-w-3xl mx-auto space-y-10">

            <div>
              <h2 className="font-headline-md text-xl text-primary mb-4">1. Termos</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Ao acessar o site{" "}
                <Link href="/" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                  Ana Machado Estética Facial
                </Link>
                , concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-xl text-primary mb-4">2. Uso de Licença</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed mb-4">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Ana Machado Estética Facial, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>
              <ol className="space-y-3 text-on-surface-variant font-body-md leading-relaxed list-none">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-xs font-bold text-neutral-500">1</span>
                  <span>Modificar ou copiar os materiais;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-xs font-bold text-neutral-500">2</span>
                  <span>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-xs font-bold text-neutral-500">3</span>
                  <span>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-xs font-bold text-neutral-500">4</span>
                  <span>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-xs font-bold text-neutral-500">5</span>
                  <span>Transferir os materiais para outra pessoa ou &quot;espelhar&quot; os materiais em qualquer outro servidor.</span>
                </li>
              </ol>
              <p className="text-on-surface-variant font-body-md leading-relaxed mt-4">
                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Ana Machado Estética Facial a qualquer momento.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 shadow-sm">
              <h2 className="font-headline-md text-xl text-primary mb-4">3. Isenção de Responsabilidade</h2>
              <ol className="space-y-4 text-on-surface-variant font-body-md leading-relaxed list-none">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-xs font-bold text-secondary">I</span>
                  <span>Os materiais no site da Ana Machado Estética Facial são fornecidos &quot;como estão&quot;. Ana Machado Estética Facial não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-xs font-bold text-secondary">II</span>
                  <span>Além disso, o Ana Machado Estética Facial não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site.</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="font-headline-md text-xl text-primary mb-4">4. Limitações</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Em nenhum caso o Ana Machado Estética Facial ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Ana Machado Estética Facial, mesmo que um representante autorizado tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-xl text-primary mb-4">5. Precisão dos Materiais</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Os materiais exibidos no site da Ana Machado Estética Facial podem incluir erros técnicos, tipográficos ou fotográficos. Ana Machado Estética Facial não garante que qualquer material em seu site seja preciso, completo ou atual. Ana Machado Estética Facial pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, não se compromete a atualizar os materiais.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-xl text-primary mb-4">6. Links</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                O Ana Machado Estética Facial não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Ana Machado Estética Facial do site. O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-xl text-primary mb-4">Modificações</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                O Ana Machado Estética Facial pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-xl text-primary mb-4">Lei Aplicável</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Estes termos e condições são regidos e interpretados de acordo com as leis brasileiras e você se submete irrevogavelmente à jurisdição dos tribunais competentes de Palhoça, Santa Catarina.
              </p>
            </div>

            {/* Cross-link */}
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                Consulte também nossa{" "}
                <Link href="/politica-de-privacidade" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                  Política de Privacidade
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
