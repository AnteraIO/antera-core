'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Award, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import marqueeBg from '../assets/marquee.png';

const PixelRocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FA520F]">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" fillOpacity="0.1" stroke="#FA520F" strokeWidth="2" />
    <path d="M12 7l3 3-3 3-3-3 3-3z" fill="#FA520F" />
  </svg>
);

const marqueeItems = [
  {
    product: 'Sekela Pos',
    badge: 'COMING SOON',
    title: 'Cloud-Native POS',
    desc: 'Designed to digitize and scale MSMEs across Tanzania and East Africa.',
    highlight: 'Digitize & Scale',
    icon: ShoppingBag,
  },
  {
    product: 'Sekela Pos',
    badge: 'INVENTORY',
    title: 'Smart Fulfillment',
    desc: 'Balance inventory, automate replenishment, and optimize across stores, warehouses, & digital channels.',
    highlight: 'Automate Replenishment',
    icon: Sparkles,
  },
  {
    product: 'Sekela Pos',
    badge: 'REAL-TIME TRACKING',
    title: 'Branch Management',
    desc: 'Track units from warehouse to customer, manage transfers, and get instant stock valuations.',
    highlight: 'Warehouse to Hand',
    icon: Award,
  },
  {
    product: 'Kava',
    badge: 'AI CV BUILDER',
    title: 'AI Resume Enhancer',
    desc: 'Multi-step builder with smart AI enhancement for summaries and achievements.',
    highlight: 'AI-Powered CV Builder',
    icon: Sparkles,
  },
  {
    product: 'Kava',
    badge: 'GAP ANALYSIS',
    title: 'Skill Gap Analysis',
    desc: 'Compare your CV against job descriptions to identify missing skills immediately.',
    highlight: 'Identify Missing Skills',
    icon: Award,
  },
  {
    product: 'Kava',
    badge: 'FITCHECK ME',
    title: 'Shunu AI Coach',
    desc: 'Context-aware career assistant supporting English & Swahili with personalized job matches.',
    highlight: 'FitCheck Me & Shunu AI',
    icon: Sparkles,
  },
  {
    product: 'Kava',
    badge: 'SUBSCRIPTIONS',
    title: 'Tiered Access',
    desc: 'Tiered subscription options tailored for every professional: Bure (Free), Eva (Premium), & Sekela (Pro).',
    highlight: 'Bure, Eva & Sekela',
    icon: ShoppingBag,
  },
];

export const NewProductsMarquee = () => {
  // Duplicate the list to make seamless scrolling
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative w-full bg-[#FAFAF8] py-16 overflow-hidden border-y border-neutral-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={marqueeBg}
          alt="Marquee background"
          fill
          className="object-cover opacity-10" // Adjust opacity as needed
          priority={false}
        />
      </div>
      
      {/* Background grid pattern matching Partners & MainSections */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-normal text-black tracking-tight leading-none">
            New Products <span className="text-[#FA520F] font-serif italic">Soon</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-neutral-500 max-w-md font-light leading-relaxed">
          We are building the future of business operations and career development in East Africa. Explore our upcoming platforms.
        </p>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden py-4 select-none z-10">
        {/* Soft fading overlays for a premium cinematic effect using light-to-transparent gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: [0, -2500] }}
          transition={{
            duration: 35,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          whileHover={{ transition: { duration: 60 } }}
        >
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-[280px] md:w-[350px] shrink-0 bg-white/90 backdrop-blur-sm border border-neutral-200 p-6 rounded-none flex flex-col justify-between hover:bg-white/95 hover:border-[#FA520F]/50 transition-all duration-300 group shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border ${
                      item.product === 'Kava'
                        ? 'text-[#FA520F]'
                        : 'text-[#FA520F]'
                    }`}>
                      {item.badge}
                    </span>
                    <span className="text-neutral-400 font-mono text-[11px] font-medium">
                      {item.product}
                    </span>
                  </div>

                  <h4 className="text-lg md:text-xl font-normal text-black tracking-tight mb-2 group-hover:text-[#FA520F] transition-colors duration-200">
                    {item.title}
                  </h4>

                  <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                  <span className="text-xs font-medium text-neutral-400 group-hover:text-black transition-colors duration-200">
                    {item.highlight}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FA520F] transition-colors duration-200" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};