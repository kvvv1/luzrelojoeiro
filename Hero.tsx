import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/herosection.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Camada de transparência */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
      {/* Conteúdo da Hero */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-8 w-full h-full">
        {/* ... aqui permanece o conteúdo já existente da Hero ... */}
        {/* ... existing code ... */}
      </div>
    </section>
  );
};

export default Hero; 