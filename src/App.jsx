import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import WhatIsSEO from './components/WhatIsSEO';
import SEOServices from './components/SEOServices';
import ROICalculator from './components/ROICalculator';
import Pricing from './components/Pricing';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="clients">
          <ClientLogos />
        </section>
        <section id="about">
          <WhatIsSEO />
        </section>
        <section id="services">
          <SEOServices />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="case-studies">
          <CaseStudies />
        </section>
        <section id="roi-calculator">
          <ROICalculator />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;