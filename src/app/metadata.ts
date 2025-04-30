import type { Metadata } from "next";

// Metadados padrão para todas as páginas
export const metadata: Metadata = {
  title: "Labrego Soluções Digitais | Tecnologia, Estratégia e Inovação",
  description: "Soluções inteligentes, design inovador e tecnologia eficiente para seu negócio crescer e se destacar no universo digital.",
  keywords: "automação, design, marketing digital, tráfego pago, estratégia digital, labrego, soluções digitais",
  authors: [{ name: "Labrego Soluções Digitais" }],
  creator: "Labrego Soluções Digitais",
  publisher: "Labrego Soluções Digitais",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://labregosolucoes.com.br",
    siteName: "Labrego Soluções Digitais",
    title: "Labrego Soluções Digitais | Tecnologia, Estratégia e Inovação",
    description: "Soluções inteligentes, design inovador e tecnologia eficiente para seu negócio crescer e se destacar no universo digital.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Labrego Soluções Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labrego Soluções Digitais | Tecnologia, Estratégia e Inovação",
    description: "Soluções inteligentes, design inovador e tecnologia eficiente para seu negócio crescer e se destacar no universo digital.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://labregosolucoes.com.br",
  },
};
