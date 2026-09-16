'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "ANTERA transformed our digital infrastructure with high-throughput systems and seamless API integrations. Their technical execution in East Africa is unmatched.",
    author: "Raymond Shirima",
    role: "Head of Digital Operations",
    company: "Blacksand Adventures"
  },
  {
    quote: "The team delivered custom data pipelines and real-time telemetry dashboards that empowered our leadership to make faster, data-backed decisions.",
    author: "Sarah Kimaro",
    role: "Managing Director",
    company: "Travel Nest Africa"
  },
  {
    quote: "Sekela POS and ANTERA's business automation solutions completely streamlined our retail ops. Reliable, scalable, and tailored to local market needs.",
    author: "Geofrey M.",
    role: "Chief Technology Officer",
    company: "Kazibox Logistics"
  }
];

export const PartnerTestimonials = () => {
  return (
    <section className="w-full bg-[#FAF9F6] text-[#171321] py-20 md:py-28 font-sans relative overflow-hidden border-t border-gray-200/60 selection:bg-[#FA520F] selection:text-white">
      {/* Background ambient light */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/60 text-xs font-mono uppercase tracking-widest text-neutral-700 mb-4"
          >
            <Star className="w-3.5 h-3.5 text-[#FA520F] fill-[#FA520F]" />
            <span>Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#171321] leading-tight"
          >
            What our partners say about us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed font-normal"
          >
            Hear from enterprise leaders and partners who build and scale their technology with ANTERA.
          </motion.p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <Quote className="w-10 h-10 text-[#FA520F]/40 mb-6 group-hover:text-[#FA520F] transition-colors duration-300" />
                <p className="text-base md:text-lg text-neutral-800 leading-relaxed font-normal italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col">
                <span className="text-base font-bold text-[#171321]">
                  {item.author}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {item.role}, <span className="text-[#171321] font-semibold">{item.company}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;
