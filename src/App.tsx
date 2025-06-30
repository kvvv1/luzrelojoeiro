import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Convenience from './components/Convenience';
import Gallery from './components/Gallery';
import Jewelry from './components/Jewelry';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-white font-lato">
      <Hero />
      <About />
      <Services />
      <Convenience />
      <Gallery />
      <Jewelry />
      <Testimonial />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default App;