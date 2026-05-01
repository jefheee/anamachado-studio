import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
});

/* ─── TODO: Substituir pela URL canônica real do domínio ─── */
const SITE_URL = "https://www.anamachadoestetica.com.br";

/* ─── Tracking IDs (lidos de variáveis de ambiente) ─── */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""; // ex: G-XXXXXXX
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ""; // ex: 123456789012345

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ana Machado Estética Facial | Lash Designer em Palhoça/SC",
    template: "%s | Ana Machado Estética Facial",
  },
  description:
    "Extensão de cílios, design de sobrancelhas, micropigmentação e mentoria VIP presencial em Palhoça/SC. +2.000 atendimentos realizados. Agende pelo WhatsApp.",
  keywords: [
    "extensão de cílios Palhoça",
    "lash designer SC",
    "design de sobrancelhas",
    "brow lamination",
    "micropigmentação labial",
    "curso de cílios presencial",
    "mentoria lash designer",
    "Ana Machado estética",
    "volume brasileiro cílios",
    "foxy eyes",
  ],
  authors: [{ name: "Ana Júlia Machado" }],
  creator: "Ana Machado Estética Facial",
  publisher: "Ana Machado Estética Facial",
  formatDetection: {
    telephone: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Ana Machado Estética Facial",
    title: "Ana Machado Estética Facial | Lash Designer em Palhoça/SC",
    description:
      "Extensão de cílios, design de sobrancelhas, micropigmentação e mentoria VIP presencial. +2.000 atendimentos. Agende pelo WhatsApp.",
    images: [
      {
        url: "/assets/hero-branca.jpg", // TODO: Substituir por OG image dedicada (1200x630)
        width: 1200,
        height: 630,
        alt: "Ana Machado - Lash Designer e Estética Facial em Palhoça/SC",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Machado Estética Facial | Lash Designer",
    description:
      "Extensão de cílios, design de sobrancelhas e mentoria VIP presencial em Palhoça/SC.",
    images: ["/assets/hero-branca.jpg"], // TODO: Substituir por OG image dedicada
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${notoSerif.variable}`}>
      {/* ── Google Analytics 4 (via @next/third-parties — optimized loading) ── */}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

      <body className="bg-background text-on-background antialiased selection:bg-secondary-container selection:text-on-secondary-container">
        <LocalBusinessSchema />
        {children}

        {/* ── Meta Pixel / Facebook Pixel (afterInteractive = não bloqueia LCP) ── */}
        {META_PIXEL_ID && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
