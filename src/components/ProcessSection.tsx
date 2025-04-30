import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Entendimento do problema",
      description: "Analisamos profundamente as necessidades e desafios do seu negócio para entender o contexto completo."
    },
    {
      number: "02",
      title: "Análise estratégica",
      description: "Desenvolvemos uma estratégia personalizada baseada em dados e nas melhores práticas do mercado."
    },
    {
      number: "03",
      title: "Planejamento de Solução",
      description: "Criamos um plano detalhado com objetivos claros, prazos e métricas de sucesso."
    },
    {
      number: "04",
      title: "Execução e implementação",
      description: "Implementamos as soluções com agilidade e precisão, mantendo comunicação constante."
    },
    {
      number: "05",
      title: "Validação e ajustes",
      description: "Avaliamos os resultados, coletamos feedback e realizamos ajustes para otimização contínua."
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A2E]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nossa <span className="text-[#00B8D9]">Metodologia</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Um processo estruturado e transparente para garantir resultados excepcionais em cada projeto.
          </p>
        </div>
        
        <div className="relative">
          {/* Linha de timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00B8D9] to-[#FFD700] transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse text-right' : ''
                }`}
              >
                {/* Número do passo */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative animate-pulse-slow">
                    <div className="w-20 h-20 rounded-full bg-[#0A1F44] border-2 border-[#00B8D9] flex items-center justify-center z-10">
                      <span className="text-[#00B8D9] text-2xl font-bold">{step.number}</span>
                    </div>
                    
                    {/* Conectores para a linha de timeline */}
                    <div className="absolute top-1/2 left-full w-8 h-1 bg-[#00B8D9] transform -translate-y-1/2 hidden md:block"></div>
                    <div className="absolute top-1/2 right-full w-8 h-1 bg-[#00B8D9] transform -translate-y-1/2 hidden md:block"></div>
                  </div>
                </div>
                
                {/* Conteúdo do passo */}
                <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
                  <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
