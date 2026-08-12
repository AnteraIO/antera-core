'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Cpu, Database, Mail, Phone, Sprout, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SekelaAPIsPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative pt-24 pb-20 bg-[#fffaeb] min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[9997] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Floating icons */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <Terminal className="w-8 h-8 text-[#FA520F]" />
          <Cpu className="w-8 h-8 text-[#FA520F]" />
          <Database className="w-8 h-8 text-[#FA520F]" />
        </div>

        {/* Header — LARGER */}
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Sovereign Channels</div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-tight">
            Do it all with Sekela.
          </h1>
          
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            {t('page.sekela.desc')}
          </p>
        </header>

        {/* Bento Grid — WIDER with thin borders */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#1F1F1F]/10 divide-y md:divide-y-0 lg:divide-y-0 divide-[#1F1F1F]/10 bg-white shadow-sm">
            
            {/* Card 1 - Large (2x1) */}
            <motion.div 
              className="group md:col-span-2 border-b border-r border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Mail className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">SMS Gateway</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Reliable SMS delivery for alerts, notifications, and customer engagement.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Small (1x1) */}
            <motion.div 
              className="group border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Phone className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">USSD MENU</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Build interactive menus that work on any mobile phone, even without internet.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="group border-b border-r border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MessageSquare className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">ChatBot Integrations</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Automate customer support and internal workflows with intelligent chat interfaces.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Large (2x1) */}
            <motion.div 
              className="group md:col-span-2 border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Sprout className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Shamba Suite</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light max-w-md">
                  Plug-and-play alerts for farmers: weather updates, crop advice, and farming insights.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SekelaAPIsPage;