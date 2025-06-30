import React from 'react';
import { Clock, Settings, Eye, Wrench, Droplets, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: 'Manutenção de relógios de pulso',
    description: 'Revisão completa e ajustes precisos para relógios de pulso'
  },
  {
    icon: Settings,
    title: 'Restauração de relógios antigos',
    description: 'Devolução da vida útil a peças históricas e coleções'
  },
  {
    icon: Wrench,
    title: 'Conserto de relógios de mesa e parede',
    description: 'Reparos especializados em relógios de mesa e parede'
  },
  {
    icon: Eye,
    title: 'Troca de vidro e pulseiras',
    description: 'Substituição de componentes com materiais de qualidade'
  },
  {
    icon: Droplets,
    title: 'Limpeza e lubrificação profissional',
    description: 'Processo técnico para prolongar a vida útil do mecanismo'
  },
  {
    icon: Settings,
    title: 'Ajuste fino e calibração',
    description: 'Precisão temporal e funcionamento perfeito'
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-beige-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-500 mb-6">
            Serviços Especializados
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
            Cada serviço é executado com técnica artesanal e atenção aos detalhes
          </p>
        </div>

        {/* Services Grid - Mobile Single Column */}
        <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gold-500 rounded-full mb-6 group-hover:bg-gold-600 transition-colors duration-300 mx-auto">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-charcoal-500 mb-4 text-center leading-tight">
                {service.title}
              </h3>
              
              <p className="text-charcoal-500 mb-6 leading-relaxed text-center">
                {service.description}
              </p>

              <a
                href="https://wa.me/5531994064160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 bg-green-50 hover:bg-green-100 py-3 px-4 rounded-lg min-h-[48px]"
              >
                <Smartphone className="w-4 h-4 flex-shrink-0" />
                <span>Solicitar por WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;