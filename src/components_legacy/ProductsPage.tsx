'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Code, 
  Settings, 
  Cloud, 
  Box, 
  Brain
} from 'lucide-react';

export const ProductsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative text-black min-h-screen pt-16 md:pt-20 lg:pt-24 selection:bg-[#FA520F] selection:text-white overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-green-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-lime-300/20 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">

        {/* Header — Left Aligned */}
        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Antera.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            High-throughput communication endpoints, infrastructure auditing, and applied AI solutions for the African market.
          </motion.p>
        </header>

        {/* Bento Grid — Full width, flat cards, gap-4 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Card 1 - Large (2x1) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Code className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Sekela APIs</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                High-throughput communication endpoints for SMS, USSD, and voice automation.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Small (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Settings className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Infrastructure Audit</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Systematic mapping and security auditing of distributed digital assets.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Cloud className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Cloud Orchestration</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Auto-scaling deployments optimized for latency across the African continent.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Box className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Custom SDKs</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Tailored integration kits for rapid deployment in mobile and web environments.
              </p>
            </div>
          </motion.div>

          {/* Card 5 - Tall (1x2) */}
          <motion.div 
            variants={itemVariants}
            className="md:row-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Brain className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Applied AI Services</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                End-to-end AI solutions for enterprise transformation.
              </p>
            </div>
          </motion.div>

          {/* Card 6 - Large (2x1) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
          >
            <Brain className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Machine Learning Models</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                State-of-the-art machine learning models trained for African content and contexts.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProductsPage;