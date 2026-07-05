'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';


const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelMapPinIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <path d="M12 6a4 4 0 0 1 4 4c0 3-4 8-4 8s-4-5-4-8a4 4 0 0 1 4-4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="1.5" fill="white"/>
  </motion.svg>
);

const PixelClockIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5"/>
    <path d="M12 8v4l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelGlobeIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5"/>
    <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="12" cy="12" rx="5" ry="2.5" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelMailIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
    <rect x="7" y="9" width="10" height="7" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <path d="M7 9l5 4 5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelPhoneIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M11 6a1 1 0 0 1 2 0 1 1 0 0 1-2 0z" fill="white"/>
    <rect x="9" y="8" width="6" height="10" rx="1" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
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

const ArrowLink = ({ text }: { text: string }) => (
  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#FA520F] transition-colors">
    <span>{text}</span>
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </div>
);

export default function OfficePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div ref={containerRef} className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelMapPinIcon />
          <PixelClockIcon />
          <PixelGlobeIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Our <span className="text-[#FA520F]">Office</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Antera Group operational headquarters and engineering hub.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          <div className="absolute -top-3 right-0 w-2 h-2 bg-black hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
            
            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              <PixelMapPinIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Location</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Dar es Salaam, Tanzania
                </p>
                <p className="mt-4 text-sm text-neutral-500 leading-relaxed max-w-md">
                  Our Dar es Salaam office serves as the primary research and development agency for Advanced Neural Technologies & Engineering.
                </p>
                <ArrowLink text="Get directions" />
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <PixelClockIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Operating Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-base md:text-lg text-neutral-500">
                    <span>MON — FRI</span>
                    <span className="font-medium text-black">08:00 - 18:00 EAT</span>
                  </div>
                  <div className="flex justify-between text-base md:text-lg text-neutral-500">
                    <span>SAT — SUN</span>
                    <span className="font-medium text-black">Closed (Remote Only)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <PixelMailIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Email</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-mono">
                  info@antera.co.tz
                </p>
                <ArrowLink text="Send email" />
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <PixelPhoneIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Phone</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-mono">
                  +255 760 984 921
                </p>
                <ArrowLink text="Call now" />
              </div>
            </motion.div>

            <motion.div 
              className="group md:row-span-2 border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <PixelGlobeIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Connect</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Follow our journey across digital platforms and stay updated with the latest from Antera Group.
                </p>
                <ArrowLink text="Visit website" />
              </div>
            </motion.div>

            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <PixelMapPinIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Visit Us</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Schedule a meeting with our team to discuss your next project or partnership opportunity.
                </p>
                <ArrowLink text="Book appointment" />
              </div>
            </motion.div>

            <div className="absolute -bottom-3 left-0 w-2 h-2 bg-black hidden md:block" />
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />

          </div>
        </div>
      </div>
    </div>
  );
}