'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const PixelShieldIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <path d="M12 3s-7 3-7 9c0 3.5 3 7 7 7s7-3.5 7-7c0-6-7-9-7-9z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelChatbotIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <rect x="7" y="8" width="10" height="6" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <circle cx="10" cy="11" r="1" fill="white"/>
    <circle cx="14" cy="11" r="1" fill="white"/>
    <path d="M9 17v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelWorkflowIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <rect x="6" y="7" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="14" y="7" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="6" y="14" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="14" y="14" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <path d="M10 8.5h4M8 15.5h8M12 10v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelCopilotIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M12 7v6M9 10h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="7" y="14" width="10" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
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

export const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelShieldIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Reduce Risk.<br/><span className="text-[#FA520F]">Strengthen Security.</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We help you prepare for incidents and keep your digital platforms safe from cyber threats.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          <div className="absolute -top-3 right-0 w-2 h-2 bg-black hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 bg-white">
            <motion.div 
              className="group border-b md:border-b-0 md:border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              <PixelShieldIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">We're Always Prepared</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Be ready for any security issue with faster response times and clear recovery plans.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <PixelShieldIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Secure Access</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Protect your data with strong identity management and protected endpoints.
                </p>
              </div>
            </motion.div>

            <div className="absolute -bottom-3 left-0 w-2 h-2 bg-black hidden md:block" />
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <section ref={containerRef} id="products" className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelChatbotIcon />
          <PixelWorkflowIcon />
          <PixelCopilotIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Automate smarter.<br/><span className="text-[#FA520F]">Scale faster.</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          <div className="absolute -top-3 right-0 w-2 h-2 bg-black hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
            <motion.div 
              className="group border-b md:border-b-0 md:border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              <PixelChatbotIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">AI Chatbots</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Automate customer and internal support to improve response times and staff productivity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b md:border-b-0 md:border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <PixelWorkflowIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Workflow Automation</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Eliminate manual and repetitive tasks with practical AI solutions that scale your operations.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <PixelCopilotIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Secure AI Copilots</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Turn your documents into insights while keeping your systems secure and governed.
                </p>
              </div>
            </motion.div>

            <div className="absolute -bottom-3 left-0 w-2 h-2 bg-black hidden md:block" />
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}