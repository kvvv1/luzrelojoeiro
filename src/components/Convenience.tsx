import React from 'react';
import { Truck, Smartphone, Shield } from 'lucide-react';

const Convenience = () => {
  return (
    <section className="py-16 px-4 bg-charcoal-500">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Content */}
          <div className="animate-slide-up text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Comodidade que Conta
            </h2>
            
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-white leading-relaxed mb-6 max-w-2xl mx-auto">
              Busca e entrega no conforto da sua casa.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Agende via WhatsApp e cuidamos de tudo com segurança e responsabilidade. 
              Seu relógio em boas mãos, do início ao fim.
            </p>

            <a
              href="https://wa.me/5531994064160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 w-full max-w-sm mx-auto min-h-[56px]"
            >
              <Smartphone className="w-5 h-5 flex-shrink-0" />
              <span>Agendar Busca e Entrega</span>
            </a>
          </div>

          {/* Features - Mobile Stack */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white text-lg mb-2">Busca e Entrega</h3>
                <p className="text-gray-300 leading-relaxed">Coletamos e entregamos seu relógio em domicílio</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white text-lg mb-2">Segurança Total</h3>
                <p className="text-gray-300 leading-relaxed">Manuseio cuidadoso e transporte seguro</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white text-lg mb-2">Agendamento Fácil</h3>
                <p className="text-gray-300 leading-relaxed">Tudo via WhatsApp, rápido e prático</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convenience;