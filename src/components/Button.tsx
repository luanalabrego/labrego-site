'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
}: ButtonProps) {
  // Definir classes base com base na variante
  const baseClasses = {
    primary: 'bg-[#00B8D9] hover:bg-[#00A3C4] text-white',
    secondary: 'bg-transparent border border-[#00B8D9] text-[#00B8D9] hover:bg-[#00B8D9]/10',
    outline: 'bg-transparent border border-white text-white hover:bg-white/10',
  };
  
  // Definir classes de tamanho
  const sizeClasses = {
    sm: 'text-sm py-2 px-4 min-h-[40px] min-w-[40px]',
    md: 'text-base py-3 px-6 min-h-[48px] min-w-[48px]',
    lg: 'text-lg py-4 px-8 min-h-[56px] min-w-[56px]',
  };
  
  // Combinar todas as classes
  const buttonClasses = `
    ${baseClasses[variant]}
    ${sizeClasses[size]}
    rounded-md font-medium transition-all duration-300
    flex items-center justify-center
    focus:outline-none focus:ring-2 focus:ring-[#00B8D9]/50
    ${className}
  `;
  
  // Renderizar como link ou botão
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
