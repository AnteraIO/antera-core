'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: '"ANTERA transformed our digital infrastructure with high-throughput systems and seamless API integrations. Their technical execution in East Africa is unmatched."',
    author: "Raymond Shirima",
    role: "Head of Digital Operations",
    company: "BLACKSAND"
  },
  {
    quote: '"The team delivered custom data pipelines and real-time telemetry dashboards that empowered our leadership to make faster, data-backed decisions."',
    author: "Sarah Kimaro",
    role: "Managing Director",
    company: "TRAVEL NEST"
  },
  {
    quote: '"Sekela POS and ANTERA\'s business automation solutions completely streamlined our retail ops. Reliable, scalable, and tailored to local market needs."',
    author: "Geofrey M.",
    role: "Chief Technology Officer",
    company: "KAZIBOX"
  },
  {
    quote: '"We needed to start scaling and building out autonomous orchestration across all enterprise services with high reliability and zero downtime."',
    author: "Alex K.",
    role: "VP of Engineering",
    company: "ENTERPRISE"
  }
];

export const PartnerTestimonials = () => {
  return (
    <section className="w-full bg-white text-neutral-900 py-16 md:py-24 font-sans border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-12 md:mb-16"
        >
          What our partners say about us
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',
              }}
              className="bg-[#EFEFEF] p-6 md:p-7 flex flex-col justify-between min-h-[360px] hover:bg-[#E8E8E8] transition-colors duration-200"
            >
              {/* Top: Company Header */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-800 block mb-8 font-medium">
                  {item.company}
                </span>
              </div>

              {/* Bottom: Quote Text */}
              <div>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-10 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.a
            href="#request-demo"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#E5E5E5] hover:bg-[#DCDCDC] transition-colors p-8 md:p-10 flex items-center justify-between group cursor-pointer"
          >
            <span className="text-2xl md:text-3xl font-normal tracking-tight text-neutral-900">
              Request a Demo
            </span>
            <ArrowRight className="w-6 h-6 text-neutral-900 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#start-building"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#141414] hover:bg-[#222222] transition-colors text-white p-8 md:p-10 flex items-center justify-between group cursor-pointer"
          >
            <span className="text-2xl md:text-3xl font-normal tracking-tight">
              Start Building
            </span>
            <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default PartnerTestimonials;