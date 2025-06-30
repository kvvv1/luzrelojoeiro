import React, { useEffect, useState } from 'react';

interface PortfolioItem {
  src: string;
  alt: string;
  fixed: boolean;
}

const Portfolio = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('portfolioItems');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-beige-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-500 mb-4 drop-shadow-lg">
            Portifólio Completo
          </h2>
          <p className="text-lg md:text-xl text-charcoal-500 max-w-2xl mx-auto leading-relaxed mb-4">
            Inspiração, técnica e paixão em cada detalhe. Veja alguns dos trabalhos realizados com dedicação artesanal.
          </p>
          <a href="/" className="inline-block mt-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all duration-300 text-base">
            Voltar para Home
          </a>
        </div>
        {items.length === 0 ? (
          <div className="text-center text-gray-400 text-xl py-24 animate-fade-in">
            Nenhuma imagem cadastrada no portfólio ainda.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl shadow-xl bg-beige-100 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Legenda sobreposta */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-4 py-3">
                  <p className="text-white text-base font-medium drop-shadow-md line-clamp-2">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio; 