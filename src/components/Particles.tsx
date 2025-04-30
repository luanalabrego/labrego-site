import React, { useEffect } from 'react';

interface ParticlesProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
}

export default function Particles({ 
  count = 50, 
  color = '#00B8D9', 
  minSize = 1, 
  maxSize = 4 
}: ParticlesProps) {
  
  useEffect(() => {
    // Função para criar partículas
    const createParticles = () => {
      const container = document.querySelector('.particles-container');
      if (!container) return;
      
      // Limpar partículas existentes
      container.innerHTML = '';
      
      // Criar novas partículas
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamanho aleatório
        const size = Math.random() * (maxSize - minSize) + minSize;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posição aleatória
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Cor com opacidade aleatória
        const opacity = Math.random() * 0.5 + 0.1;
        particle.style.backgroundColor = color;
        particle.style.opacity = opacity.toString();
        
        // Animação
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        // Adicionar ao container
        container.appendChild(particle);
      }
    };
    
    // Adicionar keyframes para animação float
    const addKeyframes = () => {
      if (document.querySelector('#particle-keyframes')) return;
      
      const style = document.createElement('style');
      style.id = 'particle-keyframes';
      style.innerHTML = `
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px); }
          100% { transform: translate(0, 0); }
        }
      `;
      document.head.appendChild(style);
    };
    
    // Inicializar
    addKeyframes();
    createParticles();
    
    // Recriar partículas ao redimensionar a janela
    window.addEventListener('resize', createParticles);
    
    // Limpar
    return () => {
      window.removeEventListener('resize', createParticles);
      const style = document.querySelector('#particle-keyframes');
      if (style) style.remove();
    };
  }, [count, color, minSize, maxSize]);
  
  return null;
}
