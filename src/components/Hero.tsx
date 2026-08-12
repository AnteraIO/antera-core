'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';

export const Hero = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  // Rotate background images every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Split headline into individual words for staggered animation
  const titleWords = "Grow Your Business. With Smart Technology.".split(" ");

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center">
      {/* Background image slideshow with crossfade */}
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
              className="object-cover object-center scale-105"
            />
          </motion.div>
        </AnimatePresence>
        {/* Warm sunset gradient overlay with Palantir-style technical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-[#FA520F]/20 z-[1]" />

        {/* Fine grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-[2]" />
      </div>

      {/* Decorative corner ornaments - top left */}
      <div className="absolute top-20 left-4 md:top-24 md:left-8 z-20 w-16 h-16 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M2 2 L30 2" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          <path d="M2 2 L2 30" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          <circle cx="2" cy="2" r="1.5" fill="#FA520F" />
        </svg>
      </div>

      {/* Decorative corner ornaments - top right */}
      <div className="absolute top-20 right-4 md:top-24 md:right-8 z-20 w-16 h-16 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M98 2 L70 2" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          <path d="M98 2 L98 30" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          <circle cx="98" cy="2" r="1.5" fill="#FA520F" />
        </svg>
      </div>

      {/* Decorative corner ornaments - bottom left */}
      <div className="absolute bottom-8 left-4 md:bottom-12 md:left-8 z-20 w-16 h-16 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M2 98 L30 98" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          <path d="M2 98 L2 70" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          <circle cx="2" cy="98" r="1.5" fill="#FA520F" />
        </svg>
      </div>

      {/* Decorative corner ornaments - bottom right */}
      <div className="absolute bottom-8 right-4 md:bottom-12 md:right-8 z-20 w-16 h-16 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M98 98 L70 98" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          <path d="M98 98 L98 70" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          <circle cx="98" cy="98" r="1.5" fill="#FA520F" />
        </svg>
      </div>

      {/* Decorative crosshairs / dots */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 z-20 hidden lg:block opacity-35">
        <div className="flex flex-col gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 md:px-12 py-20 mt-12">
        <div className="max-w-4xl text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-sm text-[10px] font-mono tracking-widest text-[#FA520F] uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA520F] animate-pulse" />
            Empowering Tanzanian Enterprise
          </motion.div>

          {/* Animated headline with larger text sizes */}
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05]">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Animated description with larger text */}
          <motion.p 
            className="mb-10 max-w-2xl text-base md:text-lg leading-relaxed text-neutral-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            We build tailored systems, webapps, mobile apps, chatbots, and AI for Tanzanian SMEs, solopreneurs, and NGOs, connecting agents, tools, and data so small teams can solve niche problems faster, protect digital sovereignty, and expand their footprint.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://wa.me/255760984921" target="_blank" className="btn-primary flex items-center gap-2">
              <span>Contact Sales</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/solutions" className="btn-secondary text-white border-white/20 hover:border-white flex items-center gap-2">
              <span>Explore Solutions</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};