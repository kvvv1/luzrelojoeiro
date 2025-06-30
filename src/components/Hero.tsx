import React from 'react';
import { Clock, MapPin, CreditCard, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/herosection.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Camada de transparência mais escura */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />
      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-3 md:opacity-5 z-20 pointer-events-none">
        <div className="absolute top-20 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 border border-gold-500 rounded-full"></div>
        <div className="absolute bottom-32 right-4 md:right-16 w-12 md:w-24 h-12 md:h-24 border border-gold-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 md:w-16 h-8 md:h-16 border border-gold-500 rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-30 w-full">
        {/* Caixa branca translúcida para o conteúdo principal */}
        <div className="bg-white/80 rounded-2xl shadow-xl px-4 py-8 md:px-12 md:py-12 inline-block">
          {/* Main Title */}
          <div className="animate-fade-in mb-8">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-charcoal-500 mb-6 leading-tight text-black">
              Luz Relojoeiro
            </h1>
            <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl text-charcoal-500 italic mb-6 text-black/80">
              Tradição em Relojoaria Artesanal
            </h2>
          </div>
          {/* Subtitle */}
          <div className="animate-slide-up mb-8">
            <p className="text-lg sm:text-xl md:text-xl text-charcoal-500 mb-8 max-w-2xl mx-auto leading-relaxed px-2 text-black/80">
              Há mais de 25 anos restaurando o tempo com precisão e respeito às memórias.
            </p>
            {/* Main CTA Button - Mobile Optimized */}
            <a
              href="https://wa.me/5531994064160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-12 w-full max-w-sm mx-auto min-h-[56px]"
            >
              <Smartphone className="w-6 h-6 flex-shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
        {/* Service Highlights - Mobile Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 animate-slide-up px-2">
          <div className="flex items-center justify-center gap-3 text-charcoal-500 p-3 bg-white/80 rounded-lg shadow-md">
            <CreditCard className="w-5 h-5 text-gold-500 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base text-black/80">Aceita Pix e Cartão</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-charcoal-500 p-3 bg-white/80 rounded-lg shadow-md">
            <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base text-black/80">Busca e entrega</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-charcoal-500 p-3 bg-white/80 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
            <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base text-black/80">Santa Lúcia – BH</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;