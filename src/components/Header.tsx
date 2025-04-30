import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className="nav-link text-sm md:text-base font-medium px-3 py-2 hover:text-[#00B8D9]">
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#0A1F44]/80 backdrop-blur-md border-b border-[#00B8D9]/20">
      <div className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* Placeholder para o logo - será substituído pela imagem real */}
            <div className="w-10 h-10 rounded-full bg-[#00B8D9] flex items-center justify-center mr-3">
              <span className="text-white font-bold">L</span>
            </div>
            <span className="text-white font-bold text-xl">LABREGO</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/sobre">Sobre</NavLink>
          <NavLink href="/servicos">Serviços</NavLink>
          <NavLink href="/cases">Cases</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contato">Contato</NavLink>
        </nav>
        
        <div className="flex items-center">
          <Link href="/contato" className="btn-primary text-sm">
            Fale Conosco
          </Link>
          <button className="md:hidden ml-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
