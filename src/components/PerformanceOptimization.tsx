'use client';

import React, { useEffect } from 'react';

interface PerformanceOptimizationProps {
  children: React.ReactNode;
}

export default function PerformanceOptimization({ children }: PerformanceOptimizationProps) {
  useEffect(() => {
    // Função para adiar o carregamento de scripts não críticos
    const deferNonCriticalScripts = () => {
      document.querySelectorAll('script[defer-load]').forEach((script) => {
        const newScript = document.createElement('script');
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'defer-load') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
        newScript.innerHTML = script.innerHTML;
        script.parentNode?.replaceChild(newScript, script);
      });
    };

    // Função para pré-carregar links quando o mouse passar por cima
    const setupLinkPrefetching = () => {
      document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        });
      });
    };

    // Função para otimizar o carregamento de fontes
    const optimizeFontLoading = () => {
      // Adicionar preconnect para Google Fonts
      const preconnect1 = document.createElement('link');
      preconnect1.rel = 'preconnect';
      preconnect1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement('link');
      preconnect2.rel = 'preconnect';
      preconnect2.href = 'https://fonts.gstatic.com';
      preconnect2.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect2);
    };

    // Executar otimizações quando a página estiver carregada
    if (document.readyState === 'complete') {
      deferNonCriticalScripts();
      setupLinkPrefetching();
      optimizeFontLoading();
    } else {
      window.addEventListener('load', () => {
        deferNonCriticalScripts();
        setupLinkPrefetching();
        optimizeFontLoading();
      });
    }

    return () => {
      // Cleanup se necessário
    };
  }, []);

  return <>{children}</>;
}
