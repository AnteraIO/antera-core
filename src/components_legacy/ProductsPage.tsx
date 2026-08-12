'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Layers, ShieldAlert, Cloud, Code, LineChart, Cpu } from 'lucide-react';

export const ProductsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div ref={containerRef} className="bg-[#fffaeb] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      {/* Progress Line */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header — LARGER */}
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Sovereign Products</div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-tight">
            Do it all with Antera.
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            Custom engineered software systems, tools, and platforms configured specifically to defend digital sovereignty and scale business workflows.
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
              <Layers className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Sekela Suite</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light max-w-md">
                  High-throughput communication integration platforms for SMS, USSD, and voice automation.
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
              <ShieldAlert className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Infrastructure Audit</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Systematic mapping and security auditing of distributed digital assets.
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
              <Cloud className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Cloud Orchestration</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Auto-scaling deployments optimized for latency across the African continent.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              className="group border-b border-r border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Code className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Custom SDKs</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Tailored integration kits for rapid deployment in mobile and web environments.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - Tall card (1x2) */}
            <motion.div 
              className="group md:row-span-2 border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <LineChart className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Applied AI Services</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  End-to-end AI solutions for enterprise transformation.
                </p>
              </div>
            </motion.div>

            {/* Card 6 - Large (2x1) */}
            <motion.div 
              className="group md:col-span-2 border-b border-r border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Cpu className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Frontier Models</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light max-w-md">
                  State-of-the-art machine learning models trained for African languages and contexts.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};