'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { StaticImageData } from 'next/image';

import awsLogo from '../assets/aws.png';
import digitalOceanLogo from '../assets/digital-ocean.png';
import netlifyLogo from '../assets/netlify.png';
import vercelLogo from '../assets/vercel-logo.png';
import supabaseLogo from '../assets/supabase.png';
import kaziboksiLogo from '../assets/kaziboksi.jpg';
//import pawaLogo from '../assets/pawa-ai.png';
import sekelaPosLogo from '../assets/sekela-pos.png';
import brevoLogo from '../assets/Brevo.png';

const PixelPartnerIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <path d="M12 7l4 4-4 4-4-4 4-4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

const partners = [
  { name: 'Digital Ocean', logo: digitalOceanLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Netlify', logo: netlifyLogo },
  { name: 'Vercel', logo: vercelLogo },
  { name: 'Supabase', logo: supabaseLogo },
  { name: 'kaziboksi', logo: kaziboksiLogo },
  //{ name: 'Pawa AI', logo: pawaLogo },
  { name: 'Brevo', logo: brevoLogo },
  { name: 'Sekela POS', logo: sekelaPosLogo },
];

export const PartnersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const tripledPartners = [...partners, ...partners, ...partners];

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelPartnerIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Our <span className="text-[#FA520F]">Partners.</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Trusted by leading technology providers and innovative businesses across the region.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <div className="border border-neutral-200 bg-white p-8 md:p-12 overflow-hidden">
            <motion.div
              className="flex gap-16 md:gap-24"
              animate={{ x: [0, -1920] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "loop" }}
              style={{ width: "max-content" }}
            >
              {tripledPartners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center flex-shrink-0">
                  <img
                    src={(partner.logo as any).src || partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
        </div>
      </div>
    </section>
  );
};