'use client';

import React, { useState, useEffect } from 'react';

interface EnhancedServicesProps {
  services: {
    title: string;
    description: string;
    icon: string;
    color: string;
    features?: string[];
  }[];
}

export default function EnhancedServices({ 
  services = [
    {
      title: "Labrego Pro Tools",
      description: "Automatize o que te prende e foque no que te move. Sistemas personalizados para rotinas de vendas, estoques e serviços.",
      icon: "⚙️",
      color: "#00B8D9",
      features: [
        "Automação de processos",
        "Integração com sistemas existentes",
        "Dashboards personalizados",
        "Relatórios automáticos"
      ]
    },
    {
      title: "Labrego IA",
      description: "Alta performance, zero falha. O futuro do seu time começa aqui. Agentes altamente treinados e personalizados.",
      icon: "🤖",
      color: "#FF5630",
      features: [
        "Assistentes virtuais personalizados",
        "Análise preditiva de dados",
        "Automação de atendimento",
        "Otimização de processos com IA"
      ]
    },
    {
      title: "Labrego Social Pro",
      description: "Presença digital com estratégia, constância e autoridade. Planejamento estratégico de conteúdo e design profissional.",
      icon: "📱",
      color: "#36B37E",
      features: [
        "Gestão de redes sociais",
        "Criação de conteúdo",
        "Design para mídias sociais",
        "Estratégia de engajamento"
      ]
    },
    {
      title: "Labrego Estratégico",
      description: "Clareza, direção e resultados para o seu negócio. Diagnóstico completo e planejamento estratégico personalizado.",
      icon: "📊",
      color: "#FFD700",
      features: [
        "Consultoria estratégica",
        "Análise de mercado",
        "Planejamento de crescimento",
        "KPIs e métricas de sucesso"
      ]
    }
  ]
}: Partial<EnhancedServicesProps>) {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="services-section" className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0A1F44]">
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
            <div 
              key={index} 
              className={`
                card group cursor-pointer transition-all duration-500
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${activeService === index ? 'scale-105 border-[#00B8D9]' : 'hover:translate-y-[-5px]'}
              `}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                boxShadow: activeService === index ? `0 10px 25px -5px ${service.color}30` : ''
              }}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <div className="text-3xl" style={{ color: service.color }}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#00B8D9] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              
              {activeService === index && service.features && (
                <div className="mt-4 pt-4 border-t border-[#00B8D9]/20 animate-fadeIn">
                  <h4 className="text-[#00B8D9] font-medium mb-2">Recursos:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00B8D9] mr-2">✓</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-4 text-[#00B8D9] text-sm font-medium">
                {activeService === index ? 'Clique para fechar' : 'Clique para mais detalhes'}
              </div>
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
