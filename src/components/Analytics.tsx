'use client';

import React, { useEffect } from 'react';

// Componente para carregar scripts de análise
export default function Analytics() {
  useEffect(() => {
    // Google Tag Manager
    const loadGTM = () => {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');
      `;
      document.head.appendChild(script);
      
      // GTM noscript fallback
      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX";
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.appendChild(noscript);
    };
    
    // Carrega os scripts apenas em produção
    if (process.env.NODE_ENV === 'production') {
      // Carrega os scripts após um pequeno atraso para priorizar o carregamento da página
      setTimeout(() => {
        loadGTM();
      }, 3000);
    }
    
    return () => {
      // Cleanup se necessário
    };
  }, []);

  return null;
}
