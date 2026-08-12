'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import marqueeBg from '../assets/marquee.png';

const marqueeItems = [
  {
    product: 'Sekela Pos',
    badge: 'COMING SOON',
    title: 'Cloud-Native POS Platform',
    desc: 'Designed to digitize operations and scale MSMEs across East Africa.',
    highlight: 'Unified Ledger Modules',
  },
  {
    product: 'Sekela Pos',
    badge: 'INVENTORY ENGINE',
    title: 'Smart Stock Fulfillment',
    desc: 'Real-time multi-branch reconciliation and automated inventory distribution pathways.',
    highlight: 'Zero-Latency Replenishment',
  },
  {
    product: 'Sekela Pos',
    badge: 'UNIT RECONCILIATION',
    title: 'Branch Management Terminal',
    desc: 'Track components from warehouse to checkout. Generate instant asset valuation records.',
    highlight: 'Continuous Auditing',
  },
  {
    product: 'Kava AI',
    badge: 'CAREER PLATFORM',
    title: 'Resume Processing Model',
    desc: 'Automated document processing with cognitive model summaries and achievement validation.',
    highlight: 'Document Intelligence',
  },
  {
    product: 'Kava AI',
    badge: 'GAP ANALYSIS',
    title: 'Role Alignment Auditing',
    desc: 'Cross-reference professional telemetry with live role requirements to identify gaps.',
    highlight: 'Skill Mapping',
  },
  {
    product: 'Kava AI',
    badge: 'COACH INTERFACE',
    title: 'Kenja AI Coach Terminal',
    desc: 'Context-aware career advice engine supporting Swahili and English natural language processing.',
    highlight: 'Natural Language Processing',
  },
  {
    product: 'Kava AI',
    badge: 'PROVISIONS',
    title: 'Structured Tiers',
    desc: 'Operational packages configured for any depth: Bure (Basic), Eva (Core), & Sekela (Pro).',
    highlight: 'Configurable Access',
  },
  {
    product: 'Sekela Pos',
    badge: 'TELEMETRY',
    title: 'Operational Reporting',
    desc: 'Analyze transaction density and cash flows with modular dashboard views.',
    highlight: 'Structured Insights',
  },
  {
    product: 'Sekela Pos',
    badge: 'OPERATIONS',
    title: 'Mobile POS Console',
    desc: 'Maintain cash register systems and catalog operations fully off-site.',
    highlight: 'Decentralized Ledgers',
  },
];

export const NewProductsMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section ref={containerRef} className="bg-[#fffaeb] text-[#1F1F1F] antialiased w-full overflow-hidden border-b border-[#1F1F1F]/10 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Under Active Development</div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-none">
            Upcoming Sovereign Platforms.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            We are designing the core systems of East African business logistics and individual professional growth. Trace our preview nodes below.
          </p>
        </header>

        {/* Minimal Marquee Container in Warm Beige Theme */}
        <div className="relative border border-[#1F1F1F]/10 bg-white py-12 overflow-hidden shadow-sm">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-4 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F1F1F_1px,transparent_1px),linear-gradient(to_bottom,#1F1F1F_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
          </div>

          {/* Fading side gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max relative z-10"
            animate={{ x: [0, -2500] }}
            transition={{
              duration: 35,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {duplicatedItems.map((item, index) => (
              <motion.div
                key={index}
                className="w-[280px] md:w-[350px] shrink-0 bg-[#fffaeb]/70 backdrop-blur-sm border border-[#1F1F1F]/10 p-8 flex flex-col justify-between hover:border-neutral-400 transition-colors duration-300 group shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#FA520F]">
                      {item.badge}
                    </span>
                    <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-wider font-light">
                      {item.product}
                    </span>
                  </div>

                  <h4 className="text-lg font-light text-[#1F1F1F] tracking-tight mb-2 group-hover:text-[#FA520F] transition-colors duration-200">
                    {item.title}
                  </h4>

                  <p className="text-xs text-neutral-600 font-mono tracking-wide font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1F1F1F]/5 flex justify-between items-center text-[10px] font-mono tracking-wider font-light text-neutral-500">
                  <span>
                    {item.highlight}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FA520F] transition-colors duration-200" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};