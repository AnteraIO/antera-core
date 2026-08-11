'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Code, Settings, BarChart2, Cloud, Box, Brain } from 'lucide-react';

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

const PixelCloudIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Cloud className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelBoxIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Box className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelBrainIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Brain className="w-7 h-7 stroke-[1.5]" />
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

export const ProductsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div ref={containerRef} className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      {/* Progress Line */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
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
              <PixelCodeIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Sekela APIs</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  High-throughput communication endpoints for SMS, USSD, and voice automation.
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
              <PixelGearIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Infrastructure Audit</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Systematic mapping and security auditing of distributed digital assets.
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
              <PixelCloudIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Cloud Orchestration</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Auto-scaling deployments optimized for latency across the African continent.
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
              <PixelBoxIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Custom SDKs</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Tailored integration kits for rapid deployment in mobile and web environments.
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
              <PixelChartIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Applied AI Services</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  End-to-end AI solutions for enterprise transformation.
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
              <PixelBrainIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Frontier Models</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  State-of-the-art machine learning models trained for African languages and contexts.
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