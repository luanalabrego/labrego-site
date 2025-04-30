import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#0A1F44]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeIn">
            <h2 className="section-title">
              Sobre a <span className="text-[#00B8D9]">Labrego</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Na Labrego, cada entrega é pensada como se fosse para o nosso próprio negócio — com estratégia, cuidado e impacto real.
            </p>
            
            <p className="text-gray-300 mb-6">
              Com mais de 10 anos de experiência corporativa, desenvolvemos soluções digitais que combinam tecnologia de ponta, design inovador e estratégias eficientes para impulsionar o crescimento do seu negócio.
            </p>
            
            <p className="text-gray-300 mb-8">
              Nossa abordagem é prática, consultiva e adaptada à realidade de cada cliente, garantindo resultados mensuráveis e duradouros.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="border border-[#00B8D9]/30 rounded-lg p-4 text-center hover:border-[#00B8D9] transition-all duration-300">
                <div className="text-[#00B8D9] text-3xl font-bold mb-2">Estratégia</div>
                <p className="text-gray-400 text-sm">Planejamento personalizado para cada negócio</p>
              </div>
              
              <div className="border border-[#00B8D9]/30 rounded-lg p-4 text-center hover:border-[#00B8D9] transition-all duration-300">
                <div className="text-[#00B8D9] text-3xl font-bold mb-2">Tecnologia</div>
                <p className="text-gray-400 text-sm">Soluções inovadoras e eficientes</p>
              </div>
              
              <div className="border border-[#00B8D9]/30 rounded-lg p-4 text-center hover:border-[#00B8D9] transition-all duration-300">
                <div className="text-[#00B8D9] text-3xl font-bold mb-2">Resultados</div>
                <p className="text-gray-400 text-sm">Foco em crescimento e eficiência</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            {/* Placeholder para imagem - será substituído pela imagem real */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#00B8D9]/30 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#00B8D9] flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">L</span>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#FFD700]/20"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#00B8D9]/30"></div>
              <div className="absolute top-1/2 right-10 w-12 h-12 rounded-full bg-[#FF5630]/20"></div>
            </div>
            
            {/* Elemento decorativo - círculo gradiente */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#FFD700]/20 to-transparent blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
