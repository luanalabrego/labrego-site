'use client';

import React, { useState, useEffect } from 'react';
import Button from './Button';

interface MobileMenuProps {
  links: {
    href: string;
    label: string;
  }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Fechar o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Impedir rolagem do body quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  return (
    <>
      {/* Botão do menu hambúrguer */}
      <button 
        className="md:hidden text-white focus:outline-none min-h-[48px] min-w-[48px] flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {/* Menu móvel */}
      <div 
        className={`fixed inset-0 bg-[#0A1F44]/95 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-[#00B8D9]/20">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#00B8D9] flex items-center justify-center mr-3">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-white font-bold text-xl">LABREGO</span>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Fechar menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-6">
              {links.map((link, index) => (
                <li key={index} className="border-b border-[#00B8D9]/10 pb-4">
                  <a 
                    href={link.href}
                    className="text-xl text-white hover:text-[#00B8D9] transition-colors duration-300 block min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-6 border-t border-[#00B8D9]/20">
            <Button 
              href="/contato" 
              variant="primary" 
              size="lg" 
              className="w-full"
              ariaLabel="Fale Conosco"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
