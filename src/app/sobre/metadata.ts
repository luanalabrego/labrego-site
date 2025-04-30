import type { Metadata } from "next";

// Metadados para a página sobre
export const metadata: Metadata = {
  title: "Sobre | Labrego Soluções Digitais",
  description: "Conheça a história, valores e diferenciais da Labrego Soluções Digitais. Mais de 10 anos de experiência em soluções digitais inovadoras.",
  keywords: "sobre, história, valores, equipe, labrego, soluções digitais, experiência",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://labregosolucoes.com.br/sobre",
    title: "Sobre | Labrego Soluções Digitais",
    description: "Conheça a história, valores e diferenciais da Labrego Soluções Digitais. Mais de 10 anos de experiência em soluções digitais inovadoras.",
    images: [
      {
        url: "/og-image-sobre.jpg",
        width: 1200,
        height: 630,
        alt: "Sobre a Labrego Soluções Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre | Labrego Soluções Digitais",
    description: "Conheça a história, valores e diferenciais da Labrego Soluções Digitais. Mais de 10 anos de experiência em soluções digitais inovadoras.",
    images: ["/og-image-sobre.jpg"],
  },
  alternates: {
    canonical: "https://labregosolucoes.com.br/sobre",
  },
}
