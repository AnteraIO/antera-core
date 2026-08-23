'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import awsLogo from '../assets/aws.png';
import digitalOceanLogo from '../assets/digital-ocean.png';
import netlifyLogo from '../assets/netlify.png';
import vercelLogo from '../assets/vercel-logo.png';
import supabaseLogo from '../assets/supabase.png';
import kaziboksiLogo from '../assets/kaziboksi.jpg';
import sekelaPosLogo from '../assets/sekela-pos.png';
import brevoLogo from '../assets/Brevo.png';

const partners = [
  { name: 'Digital Ocean', logo: digitalOceanLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Netlify', logo: netlifyLogo },
  { name: 'Vercel', logo: vercelLogo },
  { name: 'Supabase', logo: supabaseLogo },
  { name: 'kaziboksi', logo: kaziboksiLogo },
  { name: 'Brevo', logo: brevoLogo },
  { name: 'Sekela POS', logo: sekelaPosLogo },
];

export const PartnersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tripledPartners = [...partners, ...partners, ...partners];

  return (
    <section 
      ref={containerRef} 
      className="text-black font-sans w-full overflow-hidden selection:bg-[#FA520F] selection:text-white relative"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-violet-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full py-24 md:py-32 relative z-10">
        <header className="text-left px-6 md:px-12 lg:px-20 mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineered with the best. Powered by the best.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            We are leveraging world-class infrastructure to deliver scalable, high-performance solutions.
          </motion.p>
        </header>

        {/* Full Width Clean Marquee Strip */}
        <div className="relative w-full overflow-hidden bg-white/50 backdrop-blur-sm border-y border-neutral-200/50 py-12">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white/50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 md:gap-24"
            animate={{ x: [0, -1920] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            style={{ width: "max-content" }}
          >
            {tripledPartners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://wa.me/255760984921"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EAEAEA] text-black p-8 md:p-10 flex items-center justify-between group cursor-pointer hover:bg-[#E0E0E0] transition-colors duration-200"
          >
            <h3 className="text-3xl md:text-4xl font-normal tracking-tight">Request a Demo</h3>
            <ArrowUpRight className="w-8 h-8 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
          <a
            href="https://wa.me/255760984921"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] text-white p-8 md:p-10 flex items-center justify-between group cursor-pointer hover:bg-black transition-colors duration-200"
          >
            <h3 className="text-3xl md:text-4xl font-normal tracking-tight">Start Building</h3>
            <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};