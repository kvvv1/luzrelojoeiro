import React from 'react';
import { MapPin, Phone, CreditCard, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="py-16 px-4 bg-charcoal-500 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Main Contact Section */}
        <div className="space-y-12 mb-16">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-8 text-center">
              Entre em Contato
            </h2>
            
            <div className="space-y-6">
              {/* WhatsApp Principal */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <Phone className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-2 text-lg">WhatsApp Principal</h3>
                  <a
                    href="https://wa.me/5531994064160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-500 hover:text-gold-400 transition-colors text-lg"
                  >
                    (31) 99406-4160
                  </a>
                </div>
              </div>

              {/* WhatsApp Secundário */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <Phone className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-2 text-lg">WhatsApp Secundário</h3>
                  <a
                    href="https://wa.me/5531993277884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-500 hover:text-gold-400 transition-colors text-lg"
                  >
                    (31) 99327-7884
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <MapPin className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-2 text-lg">Endereço</h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    Rua João Evangelista Pinheiro, 342, Apto 202<br />
                    Santa Lúcia, Belo Horizonte - MG
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rua+João+Evangelista+Pinheiro,+342,+Apto+202,+Santa+Lúcia,+Belo+Horizonte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver no Google Maps
                  </a>
                </div>
              </div>

              {/* Formas de Pagamento */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <CreditCard className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-2 text-lg">Formas de Pagamento</h3>
                  <p className="text-gray-300">Pix e Cartão de Crédito/Débito</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <Clock className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-2 text-lg">Atendimento</h3>
                  <p className="text-gray-300">
                    Segunda a Sábado<br />
                    8:00 às 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20">
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-6 text-center">
                Seu Relógio Merece o Melhor Cuidado
              </h3>
              
              <p className="text-gray-300 text-center mb-8 leading-relaxed">
                Entre em contato agora e devolva vida ao seu tempo. 
                Atendimento personalizado e serviço de busca e entrega disponível.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5531994064160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 min-h-[56px]"
                >
                  WhatsApp Principal
                </a>
                <a
                  href="https://wa.me/5531993277884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-6 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 min-h-[56px]"
                >
                  WhatsApp Secundário
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              Relojoeiro artesanal em Belo Horizonte – Conserto de relógios de pulso, antigos, joias e mais.
            </p>
            <p className="text-gray-500 text-xs">
              © 2024 Bruno Luz Relojoaria. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              Desenvolvido por{' '}
              <a href="https://instagram.com/codexy.ti" target="_blank" rel="noopener noreferrer" className="hover:underline">
                CODE<span style={{ color: '#2563eb', fontWeight: 'bold' }}>X</span>Y
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;