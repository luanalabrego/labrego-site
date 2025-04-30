'use client';

import React, { useEffect, useState } from 'react';

// Componente para carregamento preguiçoso de imagens
export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#1A1A2E',
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Criar um novo objeto de imagem
    const img = new Image();
    img.src = src;
    
    // Quando a imagem carregar, atualizar o estado
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    // Cleanup
    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width || '100%', 
        height: height || 'auto',
        backgroundColor: placeholderColor,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A2E]">
          <div className="w-10 h-10 border-4 border-[#00B8D9] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
