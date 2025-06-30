import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Quote - Mobile Optimized */}
          <blockquote className="font-playfair text-2xl sm:text-3xl md:text-4xl italic text-charcoal-500 leading-relaxed mb-8 px-4">
            "Cada relógio tem uma história. Meu papel é restaurá-la com precisão, 
            respeito e gratidão."
          </blockquote>

          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto mb-6"></div>

          {/* Attribution */}
          <cite className="font-lato text-xl font-semibold text-charcoal-500 not-italic">
            Bruno Luz
          </cite>
          <p className="text-charcoal-500/70 mt-2">
            Relojoeiro Artesanal
          </p>
        </div>
      </div>

      {/* Background Elements - Subtle on mobile */}
      <div className="absolute left-1/4 top-1/4 w-16 sm:w-32 h-16 sm:h-32 border border-gold-500/10 sm:border-gold-500/20 rounded-full opacity-50"></div>
      <div className="absolute right-1/4 bottom-1/4 w-12 sm:w-20 h-12 sm:h-20 border border-gold-500/10 sm:border-gold-500/20 rounded-full opacity-30"></div>
    </section>
  );
};

export default Testimonial;