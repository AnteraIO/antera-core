'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import officeBg from '@/assets/hero-2.jpg';

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

const ArrowLink = ({ 
  text, 
  href, 
  isEmail = false, 
  isPhone = false 
}: { 
  text: string; 
  href?: string; 
  isEmail?: boolean;
  isPhone?: boolean;
}) => {
  let linkHref = href || "#";
  
  if (isEmail && href) linkHref = `mailto:${href}`;
  else if (isPhone && href) linkHref = `tel:${href}`;
  
  return (
    <a 
      href={linkHref}
      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#FA520F] transition-colors"
      target={href?.startsWith('http') ? "_blank" : undefined}
      rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      <span>{text}</span>
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
  );
};

export default function OfficePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div ref={containerRef} className="relative bg-white text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src={officeBg}
          alt="Office background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our <span className="text-[#FA520F]">Office</span>
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Antera Group operational headquarters and engineering hub.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <PixelMapPinIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Location</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Dar es Salaam, Tanzania
              </p>
              <ArrowLink 
                text="Get directions" 
                href="https://maps.google.com/maps?q=Dar+es+Salaam,+Tanzania"
              />
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <PixelClockIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Operating Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-base md:text-lg text-neutral-600 font-light">
                  <span>MON to FRI</span>
                  <span className="font-medium text-black">08:00 - 18:00 EAT</span>
                </div>
                <div className="flex justify-between text-base md:text-lg text-neutral-600 font-light">
                  <span>SAT to SUN</span>
                  <span className="font-medium text-black">Closed (Remote Only)</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <PixelMailIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Email</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                info@antera.co.tz
              </p>
              <ArrowLink 
                text="Send email" 
                href="info@antera.co.tz"
                isEmail={true}
              />
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <PixelPhoneIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Phone</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                +255 760 984 921
              </p>
              <ArrowLink 
                text="Call now" 
                href="+255760984921"
                isPhone={true}
              />
            </div>
          </motion.div>

          <motion.div 
            className="md:row-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <PixelGlobeIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Connect</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Follow our journey across digital platforms and stay updated with the latest from Antera Group.
              </p>
              <ArrowLink 
                text="Visit website" 
                href="https://antera.co.tz"
              />
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <PixelMapPinIcon />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Visit Us</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Schedule a meeting with our team to discuss your next project or partnership opportunity.
              </p>
              <ArrowLink 
                text="Book appointment" 
                href="https://calendly.com/antera-group/meeting"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}