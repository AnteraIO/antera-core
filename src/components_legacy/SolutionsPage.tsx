'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Code, Settings, BarChart2, Laptop, Wrench, Shield, Layout, Bot } from 'lucide-react';

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
  <motion.div
    className="w-14 h-14 bg-[#F59E0B] border border-[#B45309] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Code className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelGearIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Settings className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelChartIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <BarChart2 className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelLaptopIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Laptop className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelWrenchIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Wrench className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelShieldIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#60A5FA] border border-[#3B82F6] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Shield className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelLayoutIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#60A5FA] border border-[#3B82F6] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Layout className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelBarChartIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#F59E0B] border border-[#B45309] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <BarChart2 className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelBotIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#10B981] border border-[#059669] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Bot className="w-7 h-7 stroke-[2]" />
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

export const SolutionsPage = () => {
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
            Do it all with Antera.
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We implement practical AI and technology solutions that reduce repetitive work while keeping systems secure and governed.
          </motion.p>
        </header>

        {/* Video Section — FULL WIDTH */}
        <motion.div 
          className="mb-24 md:mb-40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
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

        {/* Bento Grid — WIDER with pixel icons */}
        <div className="relative max-w-5xl mx-auto mb-32 md:mb-40">
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
              <PixelLaptopIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Practical AI & Automation</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  AI chatbots, workflow automation, and secure copilots that reduce repetitive work and improve response times.
                </p>
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
              <PixelWrenchIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Modern Infrastructure</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Cloud migration, DevOps automation, and monitoring to improve uptime, reliability, and cost control.
                </p>
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
              <PixelShieldIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Security & Risk</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Security assessments, risk roadmaps, and incident response readiness to protect your digital platforms.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <PixelLayoutIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Digital Platforms</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Scalable corporate websites, mobile applications, and system integrations aligned with real business needs.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - Tall card (1x2) */}
            <motion.div 
              className="group md:row-span-2 border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <PixelBotIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Managed IT Support</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Proactive system monitoring, maintenance, and helpdesk support that lets your business focus on growth.
                </p>
              </div>
            </motion.div>

            {/* Card 6 - Large (2x1) */}
            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <PixelBarChartIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Data & Analytics</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Executive dashboards, data pipelines, and predictive analytics to turn data into smarter business decisions.
                </p>
              </div>
            </motion.div>
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />

          </div>
        </div>

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
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to automate and scale?
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-neutral-500 leading-relaxed"
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