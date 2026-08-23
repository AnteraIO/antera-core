'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';
import banner4 from '../assets/banner-4.png';
import banner5 from '../assets/banner-5.png';

const trustCards = [
  {
    title: "We're Always Prepared",
    desc: "Be ready for any security issue with faster response times and clear recovery plans.",
    image: banner1,
    accent: "text-blue-500",
  },
  {
    title: "Data Ownership",
    desc: "Protect your data with strong identity management and best practise.",
    image: banner2,
    accent: "text-orange-400",
  }
];

export const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return (
    <section 
      ref={containerRef} 
      className="text-black font-sans w-full overflow-hidden relative selection:bg-[#FA520F] selection:text-white"
      style={{ backgroundColor: '#F9FAFB' }}
    >
      {/* Subtle background gradient mimicking the light atmosphere */}
      <motion.div 
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
        style={{ y: smoothProgress }}
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-100/40 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-orange-100/30 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </motion.div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1400px] mx-auto relative z-10">
        
        {/* Header matched to the split layout in the design */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Reduce Risk.<br />Strengthen<br />Security.
          </motion.h1>
          <motion.div 
            className="pb-2 md:pb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <p className="text-lg md:text-xl max-w-md leading-relaxed text-neutral-600 font-medium">
              We help you prepare for incidents and keep your digital platforms safe from cyber threats.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustCards.map((card, index) => {
            const itemNumber = String(index + 1).padStart(2, '0');
            return (
              <motion.div 
                key={index}
                className="relative bg-[#1C1C1C] p-8 md:p-10 h-[480px] flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 group cursor-default"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Background image reduced to a subtle texture */}
                <div className="absolute inset-0 z-0 opacity-[0.07] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <Image src={card.image} alt={card.title} fill className="object-cover" priority={false} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Number */}
                  <div className="text-white/30 text-sm font-mono mb-8">
                    {itemNumber}
                  </div>

                  <h3 className="text-[26px] md:text-3xl font-semibold text-white tracking-tight leading-snug mb-5">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const serviceCards = [
  {
    title: "AI Chatbots",
    desc: "Automate customer and internal support to improve response times and staff productivity.",
    image: banner3,
    accent: "text-blue-500",
  },
  {
    title: "Workflow Automation",
    desc: "Eliminate manual and repetitive tasks with practical AI solutions that expand your business.",
    image: banner4,
    accent: "text-orange-400",
  },
  {
    title: "Secure AI Copilots",
    desc: "Turn your documents into insights while keeping your systems secure and governed.",
    image: banner5,
    accent: "text-purple-400",
  }
];

export const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef} 
      id="products" 
      className="text-black font-sans w-full overflow-hidden relative selection:bg-[#FA520F] selection:text-white"
      style={{ backgroundColor: '#F9FAFB' }}
    >
      {/* Subtle background gradient mimicking the light atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-100/30 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1400px] mx-auto relative z-10">
        
        {/* Header matched to the split layout in the design */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Automate smarter.<br />Scale faster.
          </motion.h1>
          <motion.div 
            className="pb-2 md:pb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <p className="text-lg md:text-xl max-w-md leading-relaxed text-neutral-600 font-medium">
              We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card, index) => {
            const itemNumber = String(index + 1).padStart(2, '0');
            return (
              <motion.div 
                key={index}
                className="relative bg-[#1C1C1C] p-8 md:p-10 h-[480px] flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 group cursor-default"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Background image reduced to a subtle texture */}
                <div className="absolute inset-0 z-0 opacity-[0.07] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <Image src={card.image} alt={card.title} fill className="object-cover" priority={false} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Number */}
                  <div className="text-white/30 text-sm font-mono mb-8">
                    {itemNumber}
                  </div>

                  <h3 className="text-[26px] md:text-3xl font-semibold text-white tracking-tight leading-snug mb-5">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}