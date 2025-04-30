import type { Metadata } from "next";

// Metadados para a página de serviços
export const metadata: Metadata = {
  title: "Serviços | Labrego Soluções Digitais",
  description: "Conheça nossos serviços de automação, design, marketing digital e estratégia para impulsionar seu negócio no ambiente digital.",
  keywords: "automação, design, marketing digital, tráfego pago, estratégia digital, labrego, soluções digitais, serviços",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://labregosolucoes.com.br/servicos",
    title: "Serviços | Labrego Soluções Digitais",
    description: "Conheça nossos serviços de automação, design, marketing digital e estratégia para impulsionar seu negócio no ambiente digital.",
    images: [
      {
        url: "/og-image-servicos.jpg",
        width: 1200,
        height: 630,
        alt: "Serviços da Labrego Soluções Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços | Labrego Soluções Digitais",
    description: "Conheça nossos serviços de automação, design, marketing digital e estratégia para impulsionar seu negócio no ambiente digital.",
    images: ["/og-image-servicos.jpg"],
  },
  alternates: {
    canonical: "https://labregosolucoes.com.br/servicos",
  },
};
