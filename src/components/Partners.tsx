'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

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
  { name: 'Kazibox', logo: kaziboksiLogo },
  { name: 'Brevo', logo: brevoLogo },
  { name: 'Sekela POS', logo: sekelaPosLogo },
];

export const PartnersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const isSw = language === 'sw';
  const tripledPartners = [...partners, ...partners, ...partners];

  return (
    <section
      ref={containerRef}
      className="text-black font-sans w-full overflow-hidden relative selection:bg-[#FA520F] selection:text-white"
      style={{ backgroundColor: '#F9FAFB' }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-100/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="w-full py-20 md:py-28 relative z-10">

        {/* HEADER — centered two-tone + rotated side text */}
        <header className="relative max-w-5xl mx-auto text-center mb-20 px-6 md:px-10">
          <motion.div
            className="absolute right-0 top-0 hidden lg:flex items-start justify-center h-full pointer-events-none"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-black whitespace-nowrap"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              {t('partners.side_tag') || (isSw ? 'Mawazo Bora ya Waundaji wa Programu Tanzania.' : 'Tanzanian Best Software Engineers.')}
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-black">
              {t('partners.title_line1') || (isSw ? 'Imeundwa na walio bora' : 'Engineered with the best')}
            </span>
            <span className="block text-[#3E9C8F]">
              {t('partners.title_line2') || (isSw ? 'inaendeshwa na walio bora' : 'powered by the best')}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('partners.desc') || (isSw ? 'Tunatumia miundombinu ya kiwango cha kimataifa kutoa suluhisho zinazoweza kukua na zenye utendaji wa juu.' : 'We are leveraging world-class infrastructure to deliver scalable, high-performance solutions.')}
          </motion.p>
        </header>

        <div className="relative w-full overflow-hidden border-y border-neutral-200/50 py-16">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-20 md:gap-32 items-center"
            animate={{ x: [0, -2400] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "loop" }}
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
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://wa.me/255760984921"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EAEAEA] text-black p-8 md:p-10 flex items-center justify-between group cursor-pointer hover:bg-[#DCDCDC] transition-colors duration-200"
          >
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t('partners.request_demo') || (isSw ? 'Omba Onyesho' : 'Request a Demo')}
            </h3>
            <ArrowUpRight className="w-8 h-8 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
          <a
            href="https://wa.me/255760984921"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C1C1C] text-white p-8 md:p-10 flex items-center justify-between group cursor-pointer hover:bg-black transition-colors duration-200"
          >
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t('partners.start_building') || (isSw ? 'Anza Kujenga' : 'Start Building')}
            </h3>
            <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};