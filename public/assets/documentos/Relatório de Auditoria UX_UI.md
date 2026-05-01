# **Relatório de Auditoria UX/UI: Projeto Lash Designer**

**Disciplina:** Interação Humano-Computador e UX

**Avaliador:** Especialista em UX/UI (IA)

## **1\. Modelo PACT (People, Activities, Context, Technologies)**

**Análise Geral:** O contexto mobile (*Context* e *Technologies*) está bem resolvido através do design responsivo. No entanto, existe um conflito na dimensão *People* e *Activities*. A interface atende a dois públicos distintos na mesma página: clientes que querem colocar pestanas (Lashes) e profissionais que querem mentoria/cursos.

* **Problema:** Mistura abrupta de jornadas de utilizador na mesma página (Serviços de Estética vs. Mentoria Profissional), o que gera hesitação no momento da decisão.  
* **Justificativa Teórica:** Segundo o Modelo PACT, atividades diferentes exigem arquiteturas de informação diferentes. Utilizadores (People) com modelos mentais de "compra de serviço" vs. "educação profissional" possuem fluxos de atenção distintos. A mistura aumenta a fricção.  
* **Proposta de Melhoria (UI/UX):** Criar uma distinção visual drástica entre a área de serviços e a área de formação, ou adicionar uma navegação âncora (tabs/botões) no topo (ex: "Para Si" vs "Para Profissionais").  
* **Ação no Código (Tailwind/Next.js):** No Header.tsx, adicione botões de navegação em âncora. Na secção Mentoria.tsx, altere a cor de fundo para quebrar o padrão visual e sinalizar uma mudança de contexto.  
  // Em Mentoria.tsx \- Mude a cor de fundo para criar contraste contextual  
  \<section id="mentoria" className="bg-rose-950/20 py-16"\>  
     {/\* Conteúdo \*/}  
  \</section\>

## **2\. Ergonomia Visual e Carga Cognitiva**

**Análise Geral:** O uso de cores escuras e douradas confere um aspeto premium. No entanto, os cartões de "Serviços" (onde estão os preços) e "Técnicas" contêm demasiada informação em formato de bloco de texto.

* **Problema:** Alta Carga Cognitiva Extrínseca nos cartões de serviços. O utilizador tem de ler blocos de texto para tentar comparar a retenção, duração e materiais de cada técnica.  
* **Justificativa Teórica:** Como visto na "Aula 3 \- Ergonomia", a nossa memória de trabalho é limitada (4 a 7 itens). Textos longos exigem atenção seletiva pesada. Devemos reduzir a Carga Cognitiva Extrínseca otimizando a escaneabilidade.  
* **Proposta de Melhoria (UI/UX):** Transformar os parágrafos descritivos dos cartões de serviços em *bullet points* (listas) com ícones de "check". Adicionar mais "respiro" (whitespace) entre os itens.  
* **Ação no Código (Tailwind/Next.js):** No ficheiro Services.tsx, substitua a tag \<p\> descritiva por uma \<ul\>.  
  // Em vez de: \<p className="text-sm text-gray-300"\>Retenção de 20 a 30 dias...\</p\>  
  // Use:  
  \<ul className="text-sm text-gray-300 space-y-2 mb-4"\>  
    \<li className="flex items-center gap-2"\>  
      \<CheckCircleIcon className="w-4 h-4 text-gold-500" /\>   
      Retenção de 20 a 30 dias  
    \</li\>  
    \<li className="flex items-center gap-2"\>  
      \<CheckCircleIcon className="w-4 h-4 text-gold-500" /\>   
      Volume expressivo  
    \</li\>  
  \</ul\>

## **3\. Heurísticas de Usabilidade e Prevenção de Erros**

**Análise Geral:** Os botões (Call to Actions) estão visíveis, mas o comportamento ao clicar nem sempre tem uma indicação prévia do que vai acontecer.

* **Problema:** Os botões "Agendar Horário" ou "Quero a mentoria" levam diretamente para o WhatsApp sem gerir a expectativa do utilizador.  
* **Justificativa Teórica:** Fere a heurística de Nielsen de *Visibilidade do estado do sistema* e *Correspondência com o mundo real*. Uma transição abrupta do browser para uma aplicação externa (WhatsApp) sem aviso prévio causa desorientação.  
* **Proposta de Melhoria (UI/UX):** Adicionar o ícone do WhatsApp aos botões de agendamento/compra ou incluir um micro-copy (texto auxiliar) por baixo do botão, informando "Será reencaminhado para o WhatsApp".  
* **Ação no Código (Tailwind/Next.js):**  
  // No componente de botão usado no Hero.tsx e Oferta.tsx  
  \<a href="link-whatsapp" target="\_blank" rel="noopener noreferrer"   
     className="flex justify-center items-center gap-2 w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"\>  
    \<FaWhatsapp className="text-xl" /\>  
    Agendar pelo WhatsApp  
  \</a\>

## **4\. Acessibilidade**

**Análise Geral:** O design com fundo escuro (Dark Mode nativo) ajuda a reduzir a fadiga visual, mas gera desafios de contraste em áreas onde há imagens de fundo.

* **Problema:** Possível quebra das diretrizes de Acessibilidade (WCAG) em dois pontos:  
  1. Textos sobre a imagem de fundo no Hero podem perder legibilidade em telemóveis dependendo do brilho do ecrã.  
  2. As áreas de clique (Touch Targets) em alguns links do rodapé ou elementos do FAQ podem estar pequenas demais para dedos mais grossos.  
* **Justificativa Teórica:** O material "Aula de UX/Usabilidade" enfatiza o uso inclusivo. Touch targets no telemóvel devem ter um mínimo ergonómico de 44x44px. Falta de contraste penaliza utilizadores com baixa visão (ou em ambientes com muito sol).  
* **Proposta de Melhoria (UI/UX):** Aumentar a opacidade do filtro (overlay) escuro sobre as imagens do Hero. Garantir que todas as perguntas do FAQ (accordion) tenham um padding vertical generoso para facilitar o toque.  
* **Ação no Código (Tailwind/Next.js):** No Hero.tsx: mude bg-black/50 para bg-black/70 (ou adicione um gradiente mais escuro na zona do texto). No FAQ.tsx: garanta que os botões do accordion tenham a classe py-4 ou min-h-\[44px\].  
  // No botão do FAQ:  
  \<button className="w-full text-left flex justify-between items-center py-4 px-2 hover:bg-white/5 transition-colors"\>  
    \<h3 className="font-semibold text-lg"\>{pergunta}\</h3\>  
    \<ChevronDownIcon className="w-6 h-6 text-gold-500" /\>  
  \</button\>

## **5\. Arquitetura da Informação**

**Análise Geral:** A estrutura da página *landing page* está longa (Hero \> Espaço \> Serviços \> Galeria \> Mentoria \> Prova Social \> FAQ).

* **Problema:** A ordenação exige que a utilizadora faça muito *scroll* se quiser apenas ver as perguntas frequentes ou saber a localização do espaço físico.  
* **Justificativa Teórica:** A Arquitetura da Informação visa ajudar as pessoas a encontrar a informação rapidamente. Num contexto *mobile*, um scroll muito longo sem navegação de apoio leva à desistência (Bounce Rate).  
* **Proposta de Melhoria (UI/UX):** Implementar um menu *Sticky* (fixo no topo) ou botões de atalho rápidos logo abaixo do ecrã inicial (Hero) do tipo: "Serviços", "Cursos", "Localização".  
* **Ação no Código (Tailwind/Next.js):** No Header.tsx, crie uma barra fixa com âncoras.  
  \<header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10"\>  
    \<nav className="container mx-auto px-4 py-3 flex justify-between items-center overflow-x-auto"\>  
       \<a href="\#servicos" className="text-sm font-medium text-gray-300 hover:text-white"\>Serviços\</a\>  
       \<a href="\#mentoria" className="text-sm font-medium text-gray-300 hover:text-white"\>Cursos\</a\>  
       \<a href="\#espaco" className="text-sm font-medium text-gray-300 hover:text-white"\>O Espaço\</a\>  
    \</nav\>  
  \</header\>  
