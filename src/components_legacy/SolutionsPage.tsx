'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  Code,
  Settings,
  BarChart,
  Laptop,
  Wrench,
Lock,
  Layout,
  BarChart3,
  Bot
} from 'lucide-react';

import anteraVideo from '../assets/antera-video.mp4';

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
    <div 
      ref={containerRef} 
      className="relative pt-28 pb-20 min-h-screen text-black font-sans antialiased w-full overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl" />
      </div>
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[9997] origin-left"
        style={{ scaleX }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header — Left Aligned with extra top padding */}
        <header className="mb-16 pt-4">
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
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/20">
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
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Laptop className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
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
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Wrench className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
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
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Lock className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
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
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Layout className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
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
            className="md:row-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Bot className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
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
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <BarChart3 className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Data & Analytics</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Executive dashboards, data pipelines, and predictive analytics to turn data into smarter business decisions.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default SolutionsPage;