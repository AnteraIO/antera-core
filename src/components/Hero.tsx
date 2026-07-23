'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';

export const Hero = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Split text for animation
  const titleWords = "Grow Your Business. With Smart Technology.".split(" ");

  return (
    <section className="relative min-h-screen w-full bg-black font-sans antialiased overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt={`Hero Background ${currentImage + 1}`}
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        {/* Sunset gradient overlay: dark -> orange-red -> cream-yellow */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#FA520F]/30 to-[#FCD34D]/20 z-[1]" />
      </div>

      {/* ===== EDGE ORNAMENT FRAME DECORATIONS ===== */}

      {/* Top Left Corner Ornament */}
      <div className="absolute top-0 left-0 z-20 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Outer corner bracket */}
          <path d="M2 2 L30 2 L30 6 L6 6 L6 30 L2 30 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
          {/* Inner decorative line */}
          <path d="M10 10 L25 10 L25 14 L14 14 L14 25 L10 25 Z" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
          {/* Dot accent */}
          <circle cx="8" cy="8" r="1.5" fill="white" opacity="0.25" />
        </svg>
      </div>

      {/* Top Right Corner Ornament */}
      <div className="absolute top-0 right-0 z-20 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Outer corner bracket */}
          <path d="M98 2 L70 2 L70 6 L94 6 L94 30 L98 30 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
          {/* Inner decorative line */}
          <path d="M90 10 L75 10 L75 14 L86 14 L86 25 L90 25 Z" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
          {/* Dot accent */}
          <circle cx="92" cy="8" r="1.5" fill="white" opacity="0.25" />
        </svg>
      </div>

      {/* Bottom Left Corner Ornament */}
      <div className="absolute bottom-0 left-0 z-20 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Outer corner bracket */}
          <path d="M2 98 L30 98 L30 94 L6 94 L6 70 L2 70 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
          {/* Inner decorative line */}
          <path d="M10 90 L25 90 L25 86 L14 86 L14 75 L10 75 Z" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
          {/* Dot accent */}
          <circle cx="8" cy="92" r="1.5" fill="white" opacity="0.25" />
        </svg>
      </div>

      {/* Bottom Right Corner Ornament */}
      <div className="absolute bottom-0 right-0 z-20 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Outer corner bracket */}
          <path d="M98 98 L70 98 L70 94 L94 94 L94 70 L98 70 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
          {/* Inner decorative line */}
          <path d="M90 90 L75 90 L75 86 L86 86 L86 75 L90 75 Z" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
          {/* Dot accent */}
          <circle cx="92" cy="92" r="1.5" fill="white" opacity="0.25" />
        </svg>
      </div>

      {/* Top Edge - Ornamental Line */}
      <div className="absolute top-8 left-12 right-12 z-20 h-px pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Bottom Edge - Ornamental Line */}
      <div className="absolute bottom-8 left-12 right-12 z-20 h-px pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Left Edge - Ornamental Line */}
      <div className="absolute top-12 left-8 bottom-12 z-20 w-px pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* Right Edge - Ornamental Line */}
      <div className="absolute top-12 right-8 bottom-12 z-20 w-px pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          {/* Animated Title */}
          <h1 className="mb-4 text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-[-0.02em] text-white" style={{ fontFamily: "'Inter', 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Animated Description */}
          <motion.p 
            className="mb-12 max-w-2xl text-base md:text-lg leading-relaxed text-white/70 font-light tracking-wide"
            style={{ fontFamily: "'Inter', 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            We help organizations build tailored Systems, Webapps, Mobile Apps, Chatbots, and AI systems to solve the world's hardest problems.
          </motion.p>

          {/* CTA Buttons - Commented out as requested */}
          {/* <div className="flex flex-wrap items-center gap-6">
            <button className="group relative border-4 border-black bg-[#FA520F] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-75 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              <span className="absolute inset-0 border-t-2 border-l-2 border-white/40 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />
              <span className="relative flex items-center gap-2">
                {t('nav.start_building')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <a href="https://wa.me/255760984921" target="_blank" className="group relative border-4 border-black bg-zinc-800 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-75 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:bg-zinc-700">
              <span className="absolute inset-0 border-t-2 border-l-2 border-white/20 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/60 pointer-events-none" />
              <span className="relative">
                {t('nav.contact_sales')}
              </span>
            </a>
          </div> */}

        </div>
      </div>
    </section>
  );
};