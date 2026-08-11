'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, MessageSquare, Workflow, Sparkles } from 'lucide-react';
import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';
import banner4 from '../assets/banner-4.png';
import banner5 from '../assets/banner-5.png';

const PixelShieldIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <ShieldCheck className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelChatbotIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <MessageSquare className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelWorkflowIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#10B981] border border-[#059669] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Workflow className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelCopilotIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#F59E0B] border border-[#B45309] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Sparkles className="w-7 h-7 stroke-[2]" />
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

export const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-7xl md:text-9xl lg:text-[10rem] font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Reduce Risk.<br/><span className="text-[#FA520F]">Strengthen Security.</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-[#1F1F1F] mx-auto mt-8 font-medium"
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

          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 bg-white">
            <motion.div 
              className="group relative border-b md:border-b-0 md:border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-20">
                <Image
                  src={banner1}
                  alt="Security preparedness"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">We're Always Prepared</h3>
                <p className="text-base md:text-lg text-[#1F1F1F] font-medium leading-relaxed">
                  Be ready for any security issue with faster response times and clear recovery plans.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-20">
                <Image
                  src={banner2}
                  alt="Secure access"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">Data Ownership</h3>
                <p className="text-base md:text-lg text-[#1F1F1F] font-medium leading-relaxed">
                  Protect your data with strong identity management and best practise.
                </p>
              </div>
            </motion.div>
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

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-7xl md:text-9xl lg:text-[10rem] font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Automate smarter.<br/><span className="text-[#FA520F]">Scale faster.</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-[#1F1F1F] mx-auto mt-8 font-medium"
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

          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
            <motion.div 
              className="group relative border-b md:border-b-0 md:border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-20">
                <Image
                  src={banner3}
                  alt="AI Chatbots"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">AI Chatbots</h3>
                  <p className="text-base md:text-lg text-[#1F1F1F] font-medium leading-relaxed">
                    Automate customer and internal support to improve response times and staff productivity.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative border-b md:border-b-0 md:border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-20">
                <Image
                  src={banner4}
                  alt="Workflow Automation"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">Workflow Automation</h3>
                  <p className="text-base md:text-lg text-[#1F1F1F] font-medium leading-relaxed">
                    Eliminate manual and repetitive tasks with practical AI solutions that expand your business.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-20">
                <Image
                  src={banner5}
                  alt="Secure AI Copilots"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">Secure AI Copilots</h3>
                  <p className="text-base md:text-lg text-[#1F1F1F] font-medium leading-relaxed">
                    Turn your documents into insights while keeping your systems secure and governed.
                  </p>
                </div>
              </div>
            </motion.div>
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}