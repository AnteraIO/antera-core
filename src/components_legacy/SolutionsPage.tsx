'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import anteraVideo from '../assets/antera-video.mp4';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelCodeIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M9 9l-3 3 3 3M15 9l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelGearIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/>
    <path d="M12 6v2M12 16v2M6 12h2M16 12h2M8.05 8.05l1.41 1.41M14.54 14.54l1.41 1.41M8.05 15.95l1.41-1.41M14.54 9.46l1.41-1.41" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelChartIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="8" y="12" width="3" height="5" fill="white"/>
    <rect x="13" y="8" width="3" height="9" fill="white"/>
  </motion.svg>
);

const PixelLaptopIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="7" y="8" width="10" height="7" rx="1" stroke="white" strokeWidth="1.5"/>
    <path d="M5 18h14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelWrenchIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelShieldIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelLayoutIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
    <rect x="8" y="8" width="8" height="4" rx="1" stroke="white" strokeWidth="1.5"/>
    <rect x="8" y="14" width="8" height="3" rx="1" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelBarChartIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <rect x="7" y="14" width="3" height="4" rx="0.5" fill="white"/>
    <rect x="11" y="10" width="3" height="8" rx="0.5" fill="white"/>
    <rect x="15" y="6" width="3" height="12" rx="0.5" fill="white"/>
  </motion.svg>
);

const PixelBotIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <rect x="8" y="9" width="8" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
    <circle cx="10" cy="12" r="1" fill="white"/>
    <circle cx="14" cy="12" r="1" fill="white"/>
    <path d="M12 6v3M9 6h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

export const SolutionsPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={containerRef} className="relative pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <GrainOverlay />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[9997] origin-left"
        style={{ scaleX }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header — Left Aligned */}
        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Antera.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            We implement practical AI and technology solutions that reduce repetitive work while keeping systems secure and governed.
          </motion.p>
        </header>

        {/* Video Section — FULL WIDTH */}
        <motion.div 
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
            <video
              src={anteraVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>

        {/* Bento Grid — Flat, gap-4 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-32"
        >
          {/* Card 1 - Large (2x1) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
          >
            <PixelLaptopIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Practical AI & Automation</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                AI chatbots, workflow automation, and secure copilots that reduce repetitive work and improve response times.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Small (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
          >
            <PixelWrenchIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Modern Infrastructure</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Cloud migration, DevOps automation, and monitoring to improve uptime, reliability, and cost control.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
          >
            <PixelShieldIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Security & Risk</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Security assessments, risk roadmaps, and incident response readiness to protect your digital platforms.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
          >
            <PixelLayoutIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Digital Platforms</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Scalable corporate websites, mobile applications, and system integrations aligned with real business needs.
              </p>
            </div>
          </motion.div>

          {/* Card 5 - Tall card (1x2) */}
          <motion.div 
            variants={itemVariants}
            className="md:row-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
          >
            <PixelBotIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Managed IT Support</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Proactive system monitoring, maintenance, and helpdesk support that lets your business focus on growth.
              </p>
            </div>
          </motion.div>

          {/* Card 6 - Large (2x1) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
          >
            <PixelBarChartIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Data & Analytics</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Executive dashboards, data pipelines, and predictive analytics to turn data into smarter business decisions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-xl">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to automate and scale?
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-neutral-600 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs, from customer engagement to internal operations. Request a free digital assessment and receive a clear, actionable roadmap.
            </motion.p>
          </div>

          <motion.a
            href="https://wa.me/255760984921"
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-[#FA520F] text-white font-medium text-sm px-8 py-4 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
          >
            Contact Sales
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
};

export default SolutionsPage;