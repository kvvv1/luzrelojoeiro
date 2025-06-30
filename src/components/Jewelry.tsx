import React from 'react';
import { Gem, Star, Smartphone } from 'lucide-react';

const metals = [
  { symbol: 'AU', name: 'Ouro', color: 'text-yellow-600' },
  { symbol: 'AG', name: 'Prata', color: 'text-gray-400' },
  { symbol: 'PT', name: 'Platina', color: 'text-gray-600' },
  { symbol: 'PD', name: 'Paládio', color: 'text-gray-500' },
  { symbol: 'IR', name: 'Irídio', color: 'text-purple-600' }
];

const Jewelry = () => {
  return (
    <section className="py-16 px-4 bg-beige-50">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Content */}
          <div className="animate-slide-up text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gem className="w-8 h-8 text-gold-500" />
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal-500">
                Restauração de Joias
              </h2>
            </div>
            
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-8"></div>
            
            <div className="space-y-6 max-w-2xl mx-auto text-left">
              <p className="text-lg text-charcoal-500 leading-relaxed">
                Bruno também realiza pequenos reparos em joias de ouro (AU), prata (AG), 
                platina (PT), paládio (PD) e irídio (IR).
              </p>

              <p className="text-lg text-charcoal-500 leading-relaxed">
                Trabalhos delicados com acabamento manual e atenção aos detalhes. 
                Cada peça recebe tratamento especial, preservando sua beleza e valor sentimental.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/5531994064160"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 w-full max-w-sm mx-auto min-h-[56px]"
              >
                <Smartphone className="w-5 h-5 flex-shrink-0" />
                <span>Consultar Restauração</span>
              </a>
            </div>
          </div>

          {/* Metals Showcase */}
          <div className="animate-fade-in">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal-500 mb-8 text-center">
                Metais Trabalhados
              </h3>
              
              <div className="space-y-4">
                {metals.map((metal, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-beige-50 rounded-lg hover:bg-beige-100 transition-colors duration-200"
                  >
                    <div className={`w-12 h-12 rounded-full border-2 border-current ${metal.color} flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                      {metal.symbol}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-charcoal-500 text-lg">{metal.name}</h4>
                      <p className="text-sm text-charcoal-500/70">Reparos especializados</p>
                    </div>
                    <Star className={`w-5 h-5 ${metal.color} flex-shrink-0`} />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-xl border border-gold-500/20">
                <p className="text-center text-charcoal-500 italic leading-relaxed">
                  "Trabalhos delicados com acabamento manual e respeito pela tradição"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jewelry;