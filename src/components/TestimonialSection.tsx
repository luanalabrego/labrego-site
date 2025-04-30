import React from 'react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "João Silva",
      company: "Tech Solutions",
      text: "A Labrego transformou completamente nossos processos internos. As automações implementadas economizaram horas de trabalho manual e reduziram erros em 90%.",
      image: "/placeholder-avatar.png" // Será substituído por imagem real
    },
    {
      name: "Maria Oliveira",
      company: "Agência Digital",
      text: "O redesign do nosso site e a estratégia de presença digital desenvolvida pela Labrego aumentaram nosso tráfego em 150% e as conversões em 75% em apenas 3 meses.",
      image: "/placeholder-avatar.png" // Será substituído por imagem real
    },
    {
      name: "Carlos Mendes",
      company: "Imobiliária Futuro",
      text: "A implementação do Labrego ImobDATA revolucionou nossa gestão de leads. Conseguimos aumentar nossas vendas em 40% com o mesmo time de corretores.",
      image: "/placeholder-avatar.png" // Será substituído por imagem real
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1F44] to-[#1A1A2E]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            O que nossos <span className="text-[#00B8D9]">clientes</span> dizem
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus negócios com nossas soluções.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card bg-[#0A1F44]/60 backdrop-blur-sm border border-[#00B8D9]/20 p-8 rounded-xl animate-fadeIn"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#00B8D9]/30 flex items-center justify-center mr-4">
                  <span className="text-[#00B8D9] text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="text-5xl text-[#00B8D9]/20 absolute -top-4 -left-2">"</div>
                <p className="text-gray-300 relative z-10 italic">
                  {testimonial.text}
                </p>
                <div className="text-5xl text-[#00B8D9]/20 absolute -bottom-10 -right-2">"</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
