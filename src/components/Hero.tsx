import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ 
  title = "Criamos para que marcas conquistem o Universo Digital!",
  subtitle = "Soluções inteligentes, design inovador e tecnologia eficiente para seu negócio crescer e se destacar.",
  ctaText = "Fale Conosco",
  ctaLink = "/contato"
}: Partial<HeroProps>) {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container-custom py-20">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 3 === 0 ? 'text-[#00B8D9]' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <Link href={ctaLink} className="btn-primary">
              {ctaText}
            </Link>
            <Link href="/servicos" className="btn-secondary">
              Conheça Nossos Serviços
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 animate-slideUp" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="text-[#FFD700] text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-400 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-[#FFD700] text-4xl font-bold mb-2">52+</div>
              <div className="text-gray-400 text-sm">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-[#FFD700] text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-400 text-sm">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elemento decorativo - círculo gradiente */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-[#00B8D9]/20 to-transparent blur-3xl -z-10"></div>
      
      {/* Elemento decorativo - círculo gradiente */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-t from-[#FFD700]/10 to-transparent blur-3xl -z-10"></div>
    </section>
  );
}
