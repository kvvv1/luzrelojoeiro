import React from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Image - Mobile First */}
          <div className="relative animate-fade-in">
            <div className="aspect-square max-w-sm mx-auto bg-gradient-to-br from-beige-100 to-beige-200 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/bruno3.jpg"
                alt="Bruno Luz trabalhando em relógio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
            {/* Floating Clock Icon */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-lg animate-float">
              <div className="w-6 h-6 border-2 border-white rounded-full relative">
                <div className="absolute top-0.5 left-1/2 w-0.5 h-1.5 bg-white transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-0.5 w-1 h-0.5 bg-white transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Content - Mobile Optimized */}
          <div className="animate-slide-up text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500 mb-6">
              Sobre o Bruno
            </h2>
            
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-8"></div>
            
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <p className="text-lg text-charcoal-500 leading-relaxed">
                Com mais de duas décadas de experiência, Bruno Luz se dedica à manutenção e 
                restauração de relógios de pulso com precisão artesanal.
              </p>

              <p className="text-lg text-charcoal-500 leading-relaxed">
                Cada peça recebe atenção única, mantendo viva a história por trás do tempo. 
                Seu compromisso vai além do conserto técnico – é um resgate de memórias.
              </p>
            </div>

            {/* Location - Mobile Friendly */}
            <div className="mt-10 p-6 bg-beige-50 rounded-xl border border-beige-200 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-charcoal-500 mb-2 text-lg">Localização</h3>
                  <p className="text-charcoal-500 leading-relaxed">
                    Rua João Evangelista Pinheiro, 342, Apto 202<br />
                    <span className="font-medium">Santa Lúcia, Belo Horizonte</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;