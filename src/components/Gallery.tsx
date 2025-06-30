import React, { useEffect, useState } from 'react';

interface GalleryItem {
  src: string;
  alt: string;
  fixed: boolean;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('portfolioItems');
    if (saved) {
      const all = JSON.parse(saved) as GalleryItem[];
      setImages(all.filter(item => item.fixed).slice(0, 6));
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500 mb-6">
            Artesania em Detalhes
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
            Cada peça conta uma história. Veja de perto o cuidado e a precisão do nosso trabalho.
          </p>
        </div>

        {/* Mobile Horizontal Scroll Gallery */}
        <div className="block sm:hidden mb-8">
          <div className="flex gap-4 overflow-x-auto pb-4 px-2 -mx-2 scrollbar-hide">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 flex-shrink-0 w-72"
              >
                <div className="aspect-square bg-beige-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 sepia hover:sepia-0"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-beige-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 sepia hover:sepia-0"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
              
              {/* Corner Detail */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1 left-1/2 w-0.5 h-2 bg-gold-500 transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-0 w-1.5 h-0.5 bg-gold-500 transform -translate-y-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a href="/portifolio" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 text-lg">
          Ver Portifólio Completo
        </a>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;