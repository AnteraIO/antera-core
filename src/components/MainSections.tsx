'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Shield, Cpu, Sliders, Smartphone, CheckSquare } from 'lucide-react';
import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';
import banner4 from '../assets/banner-4.png';
import banner5 from '../assets/banner-5.png';

export const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <section ref={containerRef} className="bg-[#fffaeb] text-[#1F1F1F] antialiased w-full overflow-hidden border-b border-[#1F1F1F]/10 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Risk Management</div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-tight">
            Reduce Risk. Strengthen Security.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            We help you prepare for incidents and keep your digital platforms safe from cyber threats by implementing secure data layers and continuous verification.
          </p>
        </header>

        {/* Palantir-style 2-Column Sharp Border Grid using Warm Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#1F1F1F]/10 divide-y md:divide-y-0 md:divide-x divide-[#1F1F1F]/10 bg-white">
          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Image - low opacity */}
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={banner1}
                alt="Security preparedness"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="w-8 h-[1px] bg-[#FA520F] mb-12 relative z-10" />

            <div className="relative z-10">
              <span className="text-[8px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[01 // PREPAREDNESS]</span>
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">We're Always Prepared</h3>
              <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                Be ready for any security issue with faster response times and clear recovery plans.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={banner2}
                alt="Secure access"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="w-8 h-[1px] bg-[#FA520F] mb-12 relative z-10" />

            <div className="relative z-10">
              <span className="text-[8px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[02 // GOVERNANCE]</span>
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Data Ownership</h3>
              <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                Protect your data with strong identity management and industry best practices.
              </p>
            </div>
          </motion.div>
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
    <section ref={containerRef} id="products" className="bg-[#fffaeb] text-[#1F1F1F] antialiased w-full overflow-hidden border-b border-[#1F1F1F]/10 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Core Systems</div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-none">
            Automate Smarter. Scale Faster.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.
          </p>
        </header>

        {/* Palantir 3-Column Sharp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#1F1F1F]/10 divide-y md:divide-y-0 md:divide-x divide-[#1F1F1F]/10 bg-white">
          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={banner3}
                alt="AI Chatbots"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="w-8 h-[1px] bg-[#FA520F] mb-12 relative z-10" />

            <div className="relative z-10">
              <span className="text-[8px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[01 // AUTOMATION]</span>
              <h3 className="text-xl font-light tracking-tight text-[#1F1F1F] mb-3">AI Chatbots</h3>
              <p className="text-xs text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                Automate customer and internal support to improve response times and staff productivity.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={banner4}
                alt="Workflow Automation"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="w-8 h-[1px] bg-[#FA520F] mb-12 relative z-10" />

            <div className="relative z-10">
              <span className="text-[8px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[02 // INTELLIGENCE]</span>
              <h3 className="text-xl font-light tracking-tight text-[#1F1F1F] mb-3">Workflow Automation</h3>
              <p className="text-xs text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                Eliminate manual and repetitive tasks with practical AI solutions that expand your business.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={banner5}
                alt="Secure AI Copilots"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="w-8 h-[1px] bg-[#FA520F] mb-12 relative z-10" />

            <div className="relative z-10">
              <span className="text-[8px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[03 // ASSISTANTS]</span>
              <h3 className="text-xl font-light tracking-tight text-[#1F1F1F] mb-3">Secure AI Copilots</h3>
              <p className="text-xs text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                Turn your documents into insights while keeping your systems secure and governed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}