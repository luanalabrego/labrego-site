import React from 'react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#1A1A2E]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fadeIn">
            <h2 className="section-title">
              Vamos <span className="text-[#00B8D9]">conversar</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              Estamos prontos para entender seus desafios e desenvolver soluções personalizadas que impulsionem seu negócio.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#00B8D9]/20 flex items-center justify-center mr-4">
                  <span className="text-[#00B8D9]">📱</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Telefone</h4>
                  <p className="text-gray-400">(11) 93442-7070</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#00B8D9]/20 flex items-center justify-center mr-4">
                  <span className="text-[#00B8D9]">📧</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">contato@labregosolucoes.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#00B8D9]/20 flex items-center justify-center mr-4">
                  <span className="text-[#00B8D9]">📍</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Instagram</h4>
                  <p className="text-gray-400">@labregosolucoes</p>
                </div>
              </div>
            </div>
            
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
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <form className="bg-[#0A1F44] p-8 rounded-xl border border-[#00B8D9]/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Envie uma mensagem</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#1A1A2E] border border-[#00B8D9]/30 rounded-md p-3 text-white focus:border-[#00B8D9] focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#1A1A2E] border border-[#00B8D9]/30 rounded-md p-3 text-white focus:border-[#00B8D9] focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-[#1A1A2E] border border-[#00B8D9]/30 rounded-md p-3 text-white focus:border-[#00B8D9] focus:outline-none"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-[#1A1A2E] border border-[#00B8D9]/30 rounded-md p-3 text-white focus:border-[#00B8D9] focus:outline-none"
                    placeholder="Sua mensagem"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
