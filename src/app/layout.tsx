import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

export const metadata: Metadata = {
  title: "Ana Machado Estética Facial | Lash Designer",
  description: "Mentoria Premium: Domine as técnicas mais procuradas do mercado e transforme sua carreira com a mentoria exclusiva de Ana Júlia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${notoSerif.variable}`}>
      <body className="bg-background text-on-background antialiased selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
