import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  // Ícones simplificados usando caracteres Unicode
  const services = [
    {
      title: "Labrego Pro Tools",
      description: "Automatize o que te prende e foque no que te move. Sistemas personalizados para rotinas de vendas, estoques e serviços.",
      icon: "⚙️",
      color: "#00B8D9"
    },
    {
      title: "Labrego IA",
      description: "Alta performance, zero falha. O futuro do seu time começa aqui. Agentes altamente treinados e personalizados.",
      icon: "🤖",
      color: "#FF5630"
    },
    {
      title: "Labrego Social Pro",
      description: "Presença digital com estratégia, constância e autoridade. Planejamento estratégico de conteúdo e design profissional.",
      icon: "📱",
      color: "#36B37E"
    },
    {
      title: "Labrego Estratégico",
      description: "Clareza, direção e resultados para o seu negócio. Diagnóstico completo e planejamento estratégico personalizado.",
      icon: "📊",
      color: "#FFD700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0A1F44]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nossas <span className="text-[#00B8D9]">Soluções</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Soluções personalizadas para impulsionar seu negócio com eficiência, tecnologia e estratégia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-slideUp" style={{ animationDelay: `${0.2 * index}s` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/servicos" className="btn-primary">
            Ver Todos os Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
