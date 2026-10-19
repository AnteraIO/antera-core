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

import leftImage from '../assets/graphics/17.png';
import rightImage from '../assets/graphics/104.png';
import topImage from '../assets/graphics/40.png';
import bottomImage from '../assets/graphics/33.png';

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

  const row1 = [...partners, ...partners, ...partners, ...partners];
  const row2 = [...partners, ...partners, ...partners, ...partners];

  return (
    <section
      ref={containerRef}
      className="text-black font-sans w-full overflow-hidden relative selection:bg-black/10"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-neutral-100/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="w-full py-20 md:py-28 relative z-10">

        <header className="relative max-w-5xl mx-auto text-center mb-16 px-6 md:px-10 flex flex-col items-center">
          
          {/* TOP IMAGE */}
          <motion.div
            className="w-full flex justify-center pointer-events-none relative z-10 mb-[-4rem]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src={topImage} alt="" className="w-64 md:w-80 lg:w-[400px] h-auto object-contain opacity-50 -translate-y-8" />
          </motion.div>

          <div className="relative w-full">
            {/* LEFT IMAGE */}
            <motion.div
              className="absolute left-0 lg:-left-40 xl:-left-64 top-1/2 -translate-y-1/2 hidden lg:block w-48 xl:w-80 pointer-events-none z-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={leftImage} alt="" className="w-full h-auto object-contain" />
            </motion.div>

            {/* RIGHT IMAGE & ROTATED TEXT */}
            <motion.div
              className="absolute right-0 lg:-right-40 xl:-right-64 top-0 h-full hidden lg:flex items-start justify-end gap-4 pointer-events-none z-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-48 xl:w-80 mt-4">
                 <Image src={rightImage} alt="" className="w-full h-auto object-contain" />
              </div>
              <span
                className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-black whitespace-nowrap mt-12 mr-4"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                {t('partners.side_tag') || (isSw ? 'Mawazo Bora ya Waundaji wa Programu Tanzania.' : 'Tanzanian Best Software Engineers.')}
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98] relative z-10 pt-4"
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
          </div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-8 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('partners.desc') || (isSw ? 'Tunatumia miundombinu ya kiwango cha kimataifa kutoa suluhisho zinazoweza kukua na zenye utendaji wa juu.' : 'We are using top-quality computer systems and powerful technology to build fast, reliable services that can easily grow right along with your needs, no matter how large your business becomes.')}
          </motion.p>

          {/* BOTTOM IMAGE */}
          <motion.div
            className="w-full flex justify-center mt-6 pointer-events-none relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src={bottomImage} alt="" className="w-32 md:w-44 lg:w-56 h-auto object-contain opacity-50 -translate-y-4" />
          </motion.div>
        </header>

        {/* TWO ROWS OF CONNECTED LOGOS */}
        <div className="relative w-full overflow-hidden flex flex-col gap-6 md:gap-10 py-10">
          
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent z-20 pointer-events-none" />

          {/* ROW 1 */}
          <motion.div
            className="flex items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {row1.map((partner, index) => (
              <React.Fragment key={`row1-${index}`}>
                <div className="flex-shrink-0 flex items-center justify-center bg-[#F2F2F1] rounded-[2rem] md:rounded-[2.5rem] w-24 h-24 md:w-36 md:h-36 z-10">
                  <div className="relative w-[80%] h-[80%]">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                  </div>
                </div>
                <div className="w-6 md:w-10 h-10 md:h-16 bg-[#F2F2F1] -mx-2 md:-mx-4 z-0" />
              </React.Fragment>
            ))}
          </motion.div>

          {/* ROW 2 */}
          <motion.div
            className="flex items-center w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            {row2.map((partner, index) => (
              <React.Fragment key={`row2-${index}`}>
                <div className="flex-shrink-0 flex items-center justify-center bg-[#F2F2F1] rounded-[2rem] md:rounded-[2.5rem] w-24 h-24 md:w-36 md:h-36 z-10">
                  <div className="relative w-[80%] h-[80%]">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                  </div>
                </div>
                <div className="w-6 md:w-10 h-10 md:h-16 bg-[#F2F2F1] -mx-2 md:-mx-4 z-0" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
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