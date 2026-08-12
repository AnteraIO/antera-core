'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
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
    <section ref={containerRef} className="bg-[#0B0B0B] text-white antialiased w-full overflow-hidden border-t border-b border-neutral-900 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Risk Mitigation</div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-none">
            Reduce Operational Risk. Secure Critical Assets.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-400 font-mono tracking-wider font-light max-w-2xl">
            We build defenses into your digital ecosystems from day zero, establishing strong data access layers, contingency models, and continuous automated verification structures.
          </p>
        </header>

        {/* Palantir-style 2-Column Sharp Border Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800 bg-black">
          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Image - low opacity */}
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={banner1}
                alt="Security preparedness"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            {/* Structural Indicator line */}
            <div className="w-8 h-[1px] bg-[#FA520F] mb-12 relative z-10" />

            <div className="relative z-10">
              <span className="text-[9px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[01 // REDUNDANCY]</span>
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-white mb-3">Continuous Preparedness</h3>
              <p className="text-xs md:text-sm text-neutral-400 font-mono tracking-wide leading-relaxed font-light">
                Develop redundant frameworks to survive external outages, cyber incidents, and operations drift with highly predictable recovery architectures.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.02]">
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
              <span className="text-[9px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[02 // SOVEREIGNTY]</span>
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-white mb-3">Sovereign Data Governance</h3>
              <p className="text-xs md:text-sm text-neutral-400 font-mono tracking-wide leading-relaxed font-light">
                Assert control over localized customer and ledger telemetry. Keep data pathways private, compliant, and structurally auditable.
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
    <section ref={containerRef} id="products" className="bg-[#0B0B0B] text-white antialiased w-full overflow-hidden border-b border-neutral-900 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Core Capacities</div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-none">
            Automate Workflows. Modernize Legacy Systems.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-400 font-mono tracking-wider font-light max-w-2xl">
            Sleek machine learning pipelines and custom operations platforms that interface with distributed business nodes to replace slow, manual workflows.
          </p>
        </header>

        {/* Palantir 3-Column Sharp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800 bg-black">
          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.02]">
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
              <span className="text-[9px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[01 // INTELLIGENT COMM.]</span>
              <h3 className="text-xl font-light tracking-tight text-white mb-3">AI Chatbot Integrations</h3>
              <p className="text-xs text-neutral-400 font-mono tracking-wide leading-relaxed font-light">
                Automate large-scale support channels with private models trained on company schemas and guidelines.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.02]">
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
              <span className="text-[9px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[02 // AGENTS & PIPELINES]</span>
              <h3 className="text-xl font-light tracking-tight text-white mb-3">Workflow Systems</h3>
              <p className="text-xs text-neutral-400 font-mono tracking-wide leading-relaxed font-light">
                Eliminate administrative and operational bottlenecks by connecting automated agents directly to database event streams.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 z-0 opacity-15 filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.02]">
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
              <span className="text-[9px] font-mono tracking-widest text-[#FA520F] block mb-2 uppercase">[03 // COGNITIVE CO-PILOTS]</span>
              <h3 className="text-xl font-light tracking-tight text-white mb-3">Secure AI Co-Pilots</h3>
              <p className="text-xs text-neutral-400 font-mono tracking-wide leading-relaxed font-light">
                Empower your workforce with custom retrieval-augmented indexing platforms that respect document classification hierarchies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}