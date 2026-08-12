'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const tripledPartners = [...partners, ...partners, ...partners];

  return (
    <section ref={containerRef} className="bg-[#fffaeb] text-[#1F1F1F] antialiased w-full overflow-hidden border-b border-[#1F1F1F]/10 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Infrastructure Partners</div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-none">
            Engineered with World-Class Systems.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            Leveraging secure cloud infrastructure nodes and low-latency CDNs to ensure maximum availability, resilience, and operational safety.
          </p>
        </header>

        {/* Minimal Marquee frame with stark border */}
        <div className="border border-[#1F1F1F]/10 bg-white p-8 md:p-12 overflow-hidden shadow-sm relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 md:gap-24 animate-carousel"
            animate={{ x: [0, -1920] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            style={{ width: "max-content" }}
          >
            {tripledPartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain grayscale opacity-45 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};