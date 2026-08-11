'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ShoppingBag, 
  Sparkles, 
  Award, 
  ArrowUpRight, 
  Store, 
  Warehouse, 
  ShoppingCart,
  FileText,
  Search,
  MessageCircle,
  Crown,
  BarChart3,
  Link,
  Smartphone
} from 'lucide-react';
import Image from 'next/image';
import marqueeBg from '../assets/marquee.png';

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

const marqueeItems = [
  {
    product: 'Sekela Pos',
    badge: 'COMING SOON',
    title: 'Cloud-Native POS',
    desc: 'Designed to digitize and scale MSMEs across Tanzania and East Africa.',
    highlight: 'Digitize & Scale',
    icon: Store,
  },
  {
    product: 'Sekela Pos',
    badge: 'INVENTORY',
    title: 'Smart Fulfillment',
    desc: 'Balance inventory, automate replenishment, and optimize across stores, warehouses, & digital channels.',
    highlight: 'Automate Replenishment',
    icon: Warehouse,
  },
  {
    product: 'Sekela Pos',
    badge: 'REAL-TIME TRACKING',
    title: 'Branch Management',
    desc: 'Track units from warehouse to customer, manage transfers, and get instant stock valuations.',
    highlight: 'Warehouse to Hand',
    icon: ShoppingCart,
  },
  {
    product: 'Kava',
    badge: 'AI CV BUILDER',
    title: 'AI Resume Enhancer',
    desc: 'Multi-step builder with smart AI enhancement for summaries and achievements.',
    highlight: 'AI-Powered CV Builder',
    icon: FileText,
  },
  {
    product: 'Kava',
    badge: 'GAP ANALYSIS',
    title: 'Skill Gap Analysis',
    desc: 'Compare your CV against job descriptions to identify missing skills immediately.',
    highlight: 'Identify Missing Skills',
    icon: Search,
  },
  {
    product: 'Kava',
    badge: 'FITCHECK ME',
    title: 'Kenja AI Coach',
    desc: 'Context-aware career assistant supporting English & Swahili with personalized job matches.',
    highlight: 'FitCheck Me & Kenja AI',
    icon: MessageCircle,
  },
  {
    product: 'Kava',
    badge: 'SUBSCRIPTIONS',
    title: 'Tiered Access',
    desc: 'Tiered subscription options tailored for every professional: Bure (Free), Eva (Premium), & Sekela (Pro).',
    highlight: 'Bure, Eva & Sekela',
    icon: Crown,
  },
  {
    product: 'Sekela Pos',
    badge: 'ANALYTICS',
    title: 'Real-Time Insights',
    desc: 'Make data-driven decisions with real-time analytics and reporting dashboards.',
    highlight: 'Data-Driven Decisions',
    icon: BarChart3,
  },
  {
    product: 'Kava',
    badge: 'INTEGRATION',
    title: 'Seamless Integrations',
    desc: 'Connect with your favorite tools and platforms for a unified workflow experience.',
    highlight: 'Connect & Automate',
    icon: Link,
  },
  {
    product: 'Sekela Pos',
    badge: 'MOBILE FIRST',
    title: 'Mobile POS',
    desc: 'Manage your business on the go with our mobile-first point of sale solution.',
    highlight: 'Anywhere, Anytime',
    icon: Smartphone,
  },
];

export const NewProductsMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  
  // Duplicate the list to make seamless scrolling
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            New Products <span className="text-[#FA520F]">Soon</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We are building the future of business operations and career development in East Africa. Explore our upcoming platforms.
          </motion.p>
        </header>

        {/* Marquee Container with Diamond Decorations */}
        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <div className="relative border border-neutral-200 bg-white p-8 md:p-12 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-10">
              <Image
                src={marqueeBg}
                alt="Marquee background"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
            
            {/* Background grid pattern matching the design system */}
            <div className="absolute inset-0 opacity-40 pointer-events-none z-[1]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            {/* Soft fading overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-6 w-max relative z-10"
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
                  <motion.div
                    key={index}
                    className="w-[280px] md:w-[350px] shrink-0 bg-white/90 backdrop-blur-sm border border-neutral-200 p-6 flex flex-col justify-between hover:bg-white/95 hover:border-[#FA520F]/50 transition-all duration-300 group shadow-sm"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border ${
                          item.product === 'Kava'
                            ? 'text-[#FA520F] border-[#FA520F]/30'
                            : 'text-[#FA520F] border-[#FA520F]/30'
                        }`}>
                          {item.badge}
                        </span>
                        <span className="text-neutral-400 font-mono text-[11px] font-medium">
                          {item.product}
                        </span>
                      </div>

                      <div className="mb-3">
                        <Icon className="w-5 h-5 text-[#FA520F] opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
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
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
        </div>
      </div>
    </section>
  );
};