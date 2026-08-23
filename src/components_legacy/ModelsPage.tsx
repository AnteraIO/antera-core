'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  Database, 
  LineChart, 
  Brain,
  BarChart3
} from 'lucide-react';

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`w-16 h-16 border border-neutral-200/50 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

export const ModelsPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div 
      ref={containerRef} 
      className="relative text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white overflow-hidden"
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
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Data Intelligence.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('page.models.desc')}
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto mb-24 md:mb-40">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 border border-white/30 bg-white/40 backdrop-blur-sm">
            
            <motion.div 
              className="group border-b md:border-b-0 md:border-r border-white/30 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-white/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <Database className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
              </motion.div>
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">
                  Data Architecture
                </h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  We design and build robust data pipelines that collect, clean, and structure information from multiple sources into unified, queryable systems.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-white/30 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-white/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ duration: 0.3 }}
              >
                <LineChart className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
              </motion.div>
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">
                  Predictive Analytics
                </h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Machine learning models trained to forecast trends, identify risks, and surface opportunities before they become obvious.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b md:border-b-0 md:border-r border-white/30 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-white/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <Brain className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
              </motion.div>
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">
                  Applied AI
                </h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  End-to-end AI integration for enterprise transformation, from natural language processing to computer vision and automated decision systems.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-white/30 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-white/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ duration: 0.3 }}
              >
                <BarChart3 className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
              </motion.div>
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">
                  Business Intelligence
                </h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Real-time dashboards and reporting tools that turn raw data into actionable insights leadership can trust and act upon.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group md:col-span-2 border-b border-white/30 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-white/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <LineChart className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
              </motion.div>
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">
                  How We Work
                </h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl">
                  We start by understanding your data landscape, then build custom solutions that integrate with your existing infrastructure. Every model is trained, tested, and deployed with governance and explainability in mind.
                </p>
              </div>
            </motion.div>
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModelsPage;