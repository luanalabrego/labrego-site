import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] border-t border-[#00B8D9]/20 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
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
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#00B8D9]/20 flex items-center justify-center hover:bg-[#00B8D9] transition-colors duration-300">
                <span className="text-[#00B8D9] hover:text-white transition-colors duration-300">📱</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#00B8D9]/20 flex items-center justify-center hover:bg-[#00B8D9] transition-colors duration-300">
                <span className="text-[#00B8D9] hover:text-white transition-colors duration-300">📧</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#00B8D9]/20 flex items-center justify-center hover:bg-[#00B8D9] transition-colors duration-300">
                <span className="text-[#00B8D9] hover:text-white transition-colors duration-300">📍</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Labrego Pro Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Labrego IA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Labrego Social Pro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Labrego Estratégico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Labrego ImobDATA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Sobre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Cases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00B8D9] transition-colors duration-300">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#00B8D9] mr-3">📱</span>
                <span className="text-gray-400">(11) 93442-7070</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00B8D9] mr-3">📧</span>
                <span className="text-gray-400">contato@labregosolucoes.com.br</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00B8D9] mr-3">📍</span>
                <span className="text-gray-400">@labregosolucoes</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#00B8D9]/20 pt-8 mt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Labrego Soluções Digitais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
