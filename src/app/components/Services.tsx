import React from 'react';
import { services } from '../data/services';

const Services = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">SERVICES</h1>
      
      <div className="space-y-8">
        {services.map((service) => (
          <div key={service.id} className="pb-8 border-b border-gray-200 last:border-0 last:pb-0">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h2>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;