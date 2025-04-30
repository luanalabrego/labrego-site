'use client';

import React from 'react';
import Button from './Button';
import MobileMenu from './MobileMenu';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a 
    href={href} 
    className="nav-link text-sm md:text-base font-medium px-3 py-2 hover:text-[#00B8D9] min-h-[48px] min-w-[48px] flex items-center justify-center"
  >
    {children}
  </a>
);

export default function EnhancedHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/cases', label: 'Cases' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0A1F44]/90 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center min-h-[48px] min-w-[48px]" aria-label="Labrego - Página inicial">
            <div className="w-10 h-10 rounded-full bg-[#00B8D9] flex items-center justify-center mr-3">
              <span className="text-white font-bold">L</span>
            </div>
            <span className="text-white font-bold text-xl">LABREGO</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="flex items-center">
          <Button 
            href="/contato" 
            variant="primary" 
            size="md" 
            className="hidden md:flex"
            ariaLabel="Fale Conosco"
          >
            Fale Conosco
          </Button>
          <div className="md:hidden ml-4">
            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </header>
  );
}
