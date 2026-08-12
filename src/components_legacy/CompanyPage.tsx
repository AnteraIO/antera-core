'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Play } from 'lucide-react';

import anteraVideo from '../assets/company-video.mp4';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelCodeIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M9 9l-3 3 3 3M15 9l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelGearIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/>
    <path d="M12 6v2M12 16v2M6 12h2M16 12h2M8.05 8.05l1.41 1.41M14.54 14.54l1.41 1.41M8.05 15.95l1.41-1.41M14.54 9.46l1.41-1.41" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelChartIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="8" y="12" width="3" height="5" fill="white"/>
    <rect x="13" y="8" width="3" height="9" fill="white"/>
  </motion.svg>
);

const PixelSearchIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <circle cx="11" cy="11" r="4" stroke="white" strokeWidth="1.5"/>
    <path d="M15 15l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelDesignIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/>
    <path d="M12 8V6M12 18v-2M8 12H6M18 12h-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelZapIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelShieldIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelLockIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="9" y="11" width="6" height="7" rx="1" stroke="white" strokeWidth="1.5"/>
    <path d="M10 11V9a2 2 0 0 1 4 0v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelTargetIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="white"/>
  </motion.svg>
);

const PixelEyeIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelBookIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="1.5"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelCheckIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelGlobeIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5"/>
    <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelUsersIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="1.5"/>
    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.5"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="1.5"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
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
    <div ref={containerRef} className="bg-white min-h-screen text-black font-sans antialiased selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        
        {/* Header */}
        <section className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Antera.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Enabling organizations across Africa to compete and grow in a digital-first world.
          </motion.p>
        </section>

        {/* Video Section */}
        <motion.div 
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
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

        {/* Grid 1: Mission & Reach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-32">
          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <PixelCodeIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Our Mission</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                To enable organizations across Africa to compete and grow in a digital-first world.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <PixelGlobeIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">African Reach</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Delivering practical technology solutions tailored to African businesses.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid 2: Expertise & Applied AI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-32">
          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <PixelUsersIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Our Expertise</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Built by engineers with hands-on experience in cloud, AI, and cybersecurity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="md:row-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <PixelChartIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Applied AI</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                End-to-end AI solutions for enterprise transformation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <PixelGearIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Frontier Models</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                State-of-the-art ML models trained for African languages and contexts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* How We Work Title */}
        <div className="mb-12 text-left">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Work.
          </motion.h2>
        </div>
          
        {/* Grid 3: How We Work */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-32">
          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <PixelSearchIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Assess</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Understand business goals, systems, and risks before any work begins.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <PixelDesignIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Design</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Create secure, scalable, and practical architectures.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <PixelZapIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Deliver</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Implement solutions in clear phases and milestones.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <PixelShieldIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Optimize</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Measure impact and continuously improve performance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid 4: Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <PixelLockIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Security-first</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Every solution starts with protecting your data and systems.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <PixelTargetIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Outcome-driven</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Practical solutions that deliver real business results.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <PixelEyeIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Transparency</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Clear communication and accountability at every step.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <PixelBookIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Continuous learning</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Always improving and staying ahead of technology trends.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="md:row-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <PixelCheckIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Our Expertise</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Our team combines strong technical skills with practical business understanding across cloud, AI, data, and cybersecurity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <PixelShieldIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Accountability</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                We take ownership of outcomes and stand by our work.
              </p>
            </div>
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default CompanyPage;