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
    <section ref={containerRef} className="bg-white text-black font-sans w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Reduce Risk. Strengthen Security.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            We help you prepare for incidents and keep your digital platforms safe from cyber threats.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="relative bg-[#F5F5F5] p-10 md:p-16 min-h-[400px] flex flex-col justify-end overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <Image src={banner1} alt="Security preparedness" fill className="object-cover" priority={false} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">We're Always Prepared</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Be ready for any security issue with faster response times and clear recovery plans.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative bg-[#F5F5F5] p-10 md:p-16 min-h-[400px] flex flex-col justify-end overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <Image src={banner2} alt="Secure access" fill className="object-cover" priority={false} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Data Ownership</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Protect your data with strong identity management and best practise.
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
    <section ref={containerRef} id="products" className="bg-white text-black font-sans w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Automate smarter. Scale faster.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="relative bg-[#F5F5F5] p-10 md:p-16 min-h-[400px] flex flex-col justify-end overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <Image src={banner3} alt="AI Chatbots" fill className="object-cover" priority={false} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">AI Chatbots</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Automate customer and internal support to improve response times and staff productivity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative bg-[#F5F5F5] p-10 md:p-16 min-h-[400px] flex flex-col justify-end overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <Image src={banner4} alt="Workflow Automation" fill className="object-cover" priority={false} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Workflow Automation</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Eliminate manual and repetitive tasks with practical AI solutions that expand your business.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative bg-[#F5F5F5] p-10 md:p-16 min-h-[400px] flex flex-col justify-end overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <Image src={banner5} alt="Secure AI Copilots" fill className="object-cover" priority={false} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Secure AI Copilots</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Turn your documents into insights while keeping your systems secure and governed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}