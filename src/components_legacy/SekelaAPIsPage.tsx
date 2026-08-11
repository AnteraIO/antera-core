'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Code, Settings, BarChart2, MessageSquare, Phone, Bot, Sprout } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelCodeIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Code className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelGearIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Settings className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelChartIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <BarChart2 className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelSmsIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <MessageSquare className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelPhoneIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Phone className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelBotIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Bot className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelSproutIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Sprout className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
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

export const SekelaAPIsPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative pt-24 pb-20 bg-[#FAFAF8] min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <GrainOverlay />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[9997] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Floating pixel icons */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelCodeIcon />
          <PixelGearIcon />
          <PixelChartIcon />
        </div>

        {/* Header — LARGER */}
        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Sekela.
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg max-w-3xl leading-relaxed text-neutral-500 mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('page.sekela.desc')}
          </motion.p>
        </header>

        {/* Bento Grid — WIDER with pixel icons */}
        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
            
            {/* Card 1 - Large (2x1) */}
            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              <PixelSmsIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">SMS Gateway</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Reliable SMS delivery for alerts, notifications, and customer engagement.
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#FA520F] transition-colors">
                  <span>View Documentation</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Card 2 - Small (1x1) */}
            <motion.div 
              className="group border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <PixelPhoneIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">USSD MENU</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Build interactive menus that work on any mobile phone, even without internet.
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#FA520F] transition-colors">
                  <span>View Documentation</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <PixelBotIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">ChatBot APIs</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Automate customer support and internal workflows with intelligent chat interfaces.
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#FA520F] transition-colors">
                  <span>View Documentation</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Card 4 - Large (2x1) */}
            <motion.div 
              className="group md:col-span-2 border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <PixelSproutIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Shamba API</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Plug-and-play alerts for farmers: weather updates, crop advice, and farming insights.
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#FA520F] transition-colors">
                  <span>View Documentation</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </motion.div>
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />

          </div>
        </div>

      </div>
    </div>
  );
};

export default SekelaAPIsPage;