import React from 'react';
import Calendly from './Calendly';

const CalendlySection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white pt-20">
      <section id="schedule" className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Merriweather, serif" }}>
              Programează o întâlnire
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "Outfit, sans-serif" }}>
              Hai să discutăm despre proiectul tău. Alege un moment potrivit pentru o conversație de 30 de minute.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 lg:p-8">
            <Calendly />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendlySection;

