# **🦋 Ana Machado Studio | Plataforma High-End & Motor de Marketing**

O **Ana Machado Studio** transcende uma simples Landing Page institucional. É uma aplicação web de alto padrão arquitetada para funcionar como uma **Máquina de Conversão** para a Mentoria VIP de Lash Designers (R$ 999,90) e como um **Motor de Marketing Orgânico** interno.

Desenvolvido com foco absoluto em conversão (Copywriting PAS), imersão visual (Z-Axis Scroll) e performance extrema para dispositivos móveis.

## **📖 A História e o Propósito do Projeto**

Este projeto nasceu de uma necessidade real de negócios. A Ana Júlia, amiga e Lash Designer de excelência, possuía uma demanda crescente por seus serviços (Volume Brasileiro, Foxy Eyes) e por seu Curso VIP presencial. O problema? Toda a captação dependia exclusivamente do Instagram e de links genéricos do WhatsApp.

O objetivo inicial era criar um "site para colocar as aulas do curso". No entanto, após uma análise profunda de mercado e de infraestrutura de nuvem, percebemos que **hospedar vídeos de aulas pesadas em uma hospedagem comum destruiria a performance e geraria custos altíssimos**.

**O Pivot Estratégico:** O projeto escalou para uma **Vitrine de Luxo**. O site Next.js capta a cliente com uma experiência visual inesquecível, quebra objeções e fecha a venda direto no WhatsApp. A entrega do conteúdo em vídeo foi terceirizada para uma plataforma consolidada (Kiwify), garantindo segurança anti-pirataria e **zero custo fixo** de infraestrutura.

## **🤖 Engenharia Híbrida: Orquestração de IAs**

Este projeto não foi apenas "codado", ele foi **orquestrado**. Como desenvolvedor, atuei como Arquiteto de Software e *Prompt Engineer*, coordenando um esquadrão de IAs para ir da ideação ao deploy em tempo recorde:

* 🧠 **NotebookLM (Pesquisa e Contexto):** Ingestão de materiais da faculdade, catálogos de preços em PDF, apostilas do curso e a documentação extensa de *Skills* do Antigravity. Gerou o embasamento teórico para a engenharia de prompts.  
* 🎨 **Stitch (Google) & Flow:** O Stitch foi utilizado para a idealização rápida da UI/UX e prototipagem inicial de componentes base. O Flow auxiliou na geração de artes de apoio.  
* 🧭 **Gemini (O Estrategista):** Atuou como meu co-piloto de Arquitetura e Negócios. Juntos, definimos o funil de vendas, a estratégia híbrida (Vercel \+ Kiwify), a correção de falhas de UX e a elaboração de prompts complexos.  
* ⌨️ **Antigravity (O Executor):** Agente de código integrado ao editor. Recebeu *prompts cirúrgicos* gerados pelo Gemini, utilizando *skills* específicas (@bug-hunter, @high-end-visual-design, @remotion) para escrever o código Next.js/Tailwind sob minha supervisão rígida.

## **🏗️ Arquitetura e Tech Stack**

O design foge do aspecto de "site gerado por IA". Ele aplica conceitos de design editorial e interações de alta fidelidade:

* **Framework Core:** Next.js (App Router) \+ TypeScript para tipagem estrita e renderização otimizada.  
* **Styling:** Tailwind CSS com variáveis semânticas de design system (Tons de Areia, Bordô para CTAs, Tipografia *Noto Serif*).  
* **Imersão 3D (Efeito GTA VI):** Uso do GSAP (ScrollTrigger) para criar o *Z-Axis Reveal*. Conforme a usuária faz o scroll, o *Hero* fixado sofre um zoom imersivo e as seções voam em direção à câmera.  
* **Microinterações:** Framer Motion e Embla Carousel para sliders de portfólio ultra-fluidos no mobile (touch-pan nativo).  

## **⚡ Decisões Críticas de Performance (O Filtro de Verdade)**

Para manter o projeto hospedado gratuitamente na **Vercel (Plano Hobby)** sem estourar o limite rígido de 100GB de banda, apliquei engenharia de performance restrita:

1. **Intersection Observer para Mídias:** O site possui dezenas de vídeos .mp4 (resultados, estúdio, kit de materiais). Nenhum deles usa autoPlay incondicional. Desenvolvi uma lógica onde o vídeo **só dá play se estiver 100% visível na tela**, pausando automaticamente ao sair do viewport.  
2. **Modais Anti-Conflito (Portals):** O FullscreenMediaWrapper (modal para ver fotos e vídeos em alta resolução) é renderizado via createPortal direto no document.body. Isso evita conflitos bizarros de z-index com o motor de física do GSAP, garantindo que a tela cheia sobreponha tudo sem bugar a rolagem.  
3. **Sistema de Arquivos Sanitizado:** Scripts em PowerShell automatizaram a limpeza de acentos e caracteres especiais (ç, \~, espaços) de dezenas de assets fotográficos, prevenindo falhas silenciosas de deploy no ambiente Linux da Vercel.

## **💻 Como rodar localmente**

1. **Clone este repositório:**  
   git clone \[https://github.com/jefheee/anamachado-studio.git\](https://github.com/jefheee/anamachado-studio.git)

2. **Acesse a pasta:**  
   cd anamachado-studio

3. **Instale as dependências:**  
   npm install

4. **Rode o servidor de desenvolvimento:**  
   npm run dev

   *O site estará disponível em http://localhost:3000*



*Desenvolvido com ☕, raciocínio lógico e muita Inteligência Artificial orquestrada por [Jefherson](https://github.com/jefheee).*
