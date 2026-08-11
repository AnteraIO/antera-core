'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Play, Code, Settings, BarChart2, Search, Layout, Zap, Shield, Lock, Target, Eye, BookOpen, Check, Globe, Users } from 'lucide-react';

import anteraVideo from '../assets/company-video.mp4';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

// Pixel-style decorative icons — LARGER (56x56)
const PixelCodeIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#F59E0B] border border-[#B45309] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Code className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelGearIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Settings className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelChartIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <BarChart2 className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelSearchIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Search className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelDesignIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Layout className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelZapIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#60A5FA] border border-[#3B82F6] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Zap className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelShieldIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#10B981] border border-[#059669] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Shield className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelLockIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Lock className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelTargetIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Target className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelEyeIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#60A5FA] border border-[#3B82F6] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Eye className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelBookIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#F59E0B] border border-[#B45309] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <BookOpen className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelCheckIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#10B981] border border-[#059669] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Check className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelGlobeIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Globe className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelUsersIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#60A5FA] border border-[#3B82F6] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Users className="w-7 h-7 stroke-[2]" />
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

export const CompanyPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div ref={containerRef} className="bg-[#FAFAF8] min-h-screen text-black font-sans antialiased selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        
        {/* Floating pixel icons with animation */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelCodeIcon />
          <PixelGearIcon />
          <PixelChartIcon />
        </div>

        {/* Centered heading — LARGER */}
        <section className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Antera.
          </motion.h1>
        </section>

        {/* Video Section — FULL WIDTH */}
        <motion.div 
          className="mb-24 md:mb-40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <video
              ref={videoRef}
              src={anteraVideo}
              className="w-full h-full object-cover"
              loop
              playsInline
              controls={isPlaying}
            />
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                </motion.div>
              </button>
            )}
          </div>
        </motion.div>

        {/* Bento Grid — WIDER (max-w-5xl) */}
        <div className="relative max-w-5xl mx-auto mb-32 md:mb-40">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
            
            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              <PixelCodeIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Our Mission</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  To enable organizations across Africa to compete and grow in a digital-first world.
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
              <PixelGlobeIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">African Reach</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Delivering practical technology solutions tailored to African businesses.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="hidden md:block border-b border-r border-neutral-200 bg-[#F5F5F0] min-h-[360px] md:min-h-[420px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            />

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <PixelUsersIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Our Expertise</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Built by engineers with hands-on experience in cloud, AI, and cybersecurity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group md:row-span-2 border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <PixelChartIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Applied AI</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  End-to-end AI solutions for enterprise transformation.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <PixelGearIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Frontier Models</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  State-of-the-art ML models trained for African languages and contexts.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="hidden md:block border-b border-neutral-200 bg-[#F5F5F0] min-h-[360px] md:min-h-[420px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
            />
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />

          </div>
        </div>

        {/* How We Work — WIDER bento */}
        <div className="relative max-w-5xl mx-auto mb-32 md:mb-40">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              How We Work.
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
            
            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              <PixelSearchIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Assess</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Understand business goals, systems, and risks before any work begins.
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
              <PixelDesignIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Design</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Create secure, scalable, and practical architectures.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <PixelZapIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Deliver</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Implement solutions in clear phases and milestones.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group md:col-span-2 border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <PixelShieldIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Optimize</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Measure impact and continuously improve performance.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Values + Expertise — WIDER bento */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
            
            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              <PixelLockIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Security-first</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Every solution starts with protecting your data and systems.
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
              <PixelTargetIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Outcome-driven</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Practical solutions that deliver real business results.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <PixelEyeIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Transparency</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Clear communication and accountability at every step.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <PixelBookIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Continuous learning</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Always improving and staying ahead of technology trends.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group md:row-span-2 border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <PixelCheckIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Our Expertise</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Our team combines strong technical skills with practical business understanding across cloud, AI, data, and cybersecurity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="hidden md:block border-b border-neutral-200 bg-[#F5F5F0] min-h-[360px] md:min-h-[420px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />

            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <PixelShieldIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Accountability</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  We take ownership of outcomes and stand by our work.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default CompanyPage;