import type { Metadata } from "next";

// Metadados para a página de contato
export const metadata: Metadata = {
  title: "Contato | Labrego Soluções Digitais",
  description: "Entre em contato com a Labrego Soluções Digitais para discutir como podemos ajudar seu negócio a crescer no ambiente digital.",
  keywords: "contato, orçamento, consultoria, labrego, soluções digitais",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://labregosolucoes.com.br/contato",
    title: "Contato | Labrego Soluções Digitais",
    description: "Entre em contato com a Labrego Soluções Digitais para discutir como podemos ajudar seu negócio a crescer no ambiente digital.",
    images: [
      {
        url: "/og-image-contato.jpg",
        width: 1200,
        height: 630,
        alt: "Contato Labrego Soluções Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | Labrego Soluções Digitais",
    description: "Entre em contato com a Labrego Soluções Digitais para discutir como podemos ajudar seu negócio a crescer no ambiente digital.",
    images: ["/og-image-contato.jpg"],
  },
  alternates: {
    canonical: "https://labregosolucoes.com.br/contato",
  },
}
