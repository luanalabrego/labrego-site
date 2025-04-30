import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Labrego Soluções Digitais | Tecnologia, Estratégia e Inovação",
  description: "Soluções inteligentes, design inovador e tecnologia eficiente para seu negócio crescer e se destacar no universo digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="particles-container">
          {/* Partículas serão adicionadas via JavaScript */}
        </div>
        {children}
      </body>
    </html>
  );
}
