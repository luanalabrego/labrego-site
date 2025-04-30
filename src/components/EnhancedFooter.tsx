'use client';

import React from 'react';
import Button from './Button';

interface FooterProps {
  className?: string;
}

export default function EnhancedFooter({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Labrego Pro Tools', href: '#' },
    { name: 'Labrego IA', href: '#' },
    { name: 'Labrego Social Pro', href: '#' },
    { name: 'Labrego Estratégico', href: '#' },
    { name: 'Labrego ImobDA', href: '#' },
  ];
  
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#' },
    { name: 'Serviços', href: '#' },
    { name: 'Cases', href: '#' },
    { name: 'Contato', href: '#' },
  ];
  
  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
  ];

  return (
    <footer className={`bg-[#0A1F44] py-16 ${className}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1 - Logo e Sobre */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[#00B8D9] flex items-center justify-center mr-3">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-white font-bold text-xl">LABREGO</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Soluções inteligentes, design inovador e tecnologia eficiente para seu negócio crescer e se destacar.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="w-10 h-10 rounded-full bg-[#00B8D9]/20 flex items-center justify-center hover:bg-[#00B8D9] transition-colors duration-300 min-w-[48px] min-h-[48px]"
                  aria-label={link.name}
                >
                  <span className="text-[#00B8D9] group-hover:text-white">
                    {getSocialIcon(link.icon)}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300 min-h-[44px] flex items-center"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 3 - Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300 min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-[#00B8D9] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-gray-400">contato@labregosolucoes.com.br</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00B8D9] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
            </ul>
            
            <Button 
              href="/contato" 
              variant="primary" 
              size="md" 
              className="w-full"
              ariaLabel="Entre em contato"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
        
        <div className="border-t border-[#00B8D9]/20 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Labrego Soluções Digitais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Função auxiliar para renderizar ícones de redes sociais
function getSocialIcon(name: string) {
  switch (name) {
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      );
    default:
      return null;
  }
}
