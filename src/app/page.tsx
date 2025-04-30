'use client';

import React, { useEffect } from 'react';
import Analytics from "../components/Analytics";
import PerformanceOptimization from '@/components/PerformanceOptimization';
import EnhancedHeader from '@/components/EnhancedHeader';
import EnhancedHero from '@/components/EnhancedHero';
import EnhancedServices from '@/components/EnhancedServices';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { metadata } from './metadata';

export default function Home() {
  // Função para inicializar animações ou scripts adicionais
  useEffect(() => {
    // Adicionar classe ao body para garantir estilo correto
    document.body.classList.add('bg-[#1A1A2E]');
    
    // Função para scroll suave para links de âncora
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <PerformanceOptimization>
      <main>
        <EnhancedHeader />
        
        <EnhancedHero />
        
        <ScrollReveal>
          <EnhancedServices />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <ProcessSection />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <TestimonialSection />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <ContactSection />
        </ScrollReveal>
        
        <Footer />
        
        {/* Botão de voltar ao topo */}
        <BackToTop />
        
        {/* Componente de Analytics */}
        <Analytics />
      </main>
    </PerformanceOptimization>
  );
}

// Componente de botão para voltar ao topo
function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-[#00B8D9] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="Voltar ao topo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
