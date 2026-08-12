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
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center pt-14">
      {/* Background Slideshow with extreme high contrast */}
      <div className="absolute inset-0 z-0 select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt={`ANTERA Systems Background`}
              fill
              priority
              className="object-cover object-center scale-102 filter brightness-[0.7]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep tech gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/50 to-transparent z-[1]" />

        {/* Stark 1px grid lines for blueprint look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] z-[2]" />
      </div>

      {/* Corporate Technical Details */}
      <div className="absolute top-24 left-12 z-20 hidden xl:flex flex-col gap-1 text-[8px] font-mono text-neutral-600 tracking-[0.2em] uppercase pointer-events-none select-none">
        <div>SYS.ID: ANTERA_CORE_v15</div>
        <div>REGION: DAR_ES_SALAAM_TZ</div>
        <div>COORDINATES: 6.7924° S, 39.2083° E</div>
      </div>

      <div className="absolute top-24 right-12 z-20 hidden xl:flex flex-col items-end gap-1 text-[8px] font-mono text-neutral-600 tracking-[0.2em] uppercase pointer-events-none select-none">
        <div>ORBITAL_STATUS: ACTIVE</div>
        <div>INTEGRITY_CHECK: PASS</div>
        <div>Sovereignty secured</div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-30 mx-auto w-full max-w-[1440px] px-6 md:px-12 py-24 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Subtle minimal tag */}
          <div className="inline-flex items-center gap-2 mb-8 select-none">
            <span className="w-1 h-1 bg-[#FA520F]" />
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#FA520F]">
              Foundational Software for Africa
            </span>
          </div>

          {/* Large Stark Palantir-style Title */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight tracking-[-0.03em] text-white leading-[1.05] mb-8 font-sans">
            Build tailored systems.<br />
            <span className="text-neutral-400 font-extralight">Secure your operations.</span>
          </h1>

          {/* Stark Description */}
          <p className="max-w-2xl text-sm md:text-base leading-relaxed text-neutral-400 font-mono tracking-wider font-light mb-12">
            We build custom systems, digital platforms, and Applied AI solutions for Tanzanian SMEs, NGOs, and high-growth startups, connecting critical data models and pipelines securely so small groups solve niche operations faster.
          </p>

          {/* Palantir Stark Action buttons */}
          <div className="flex flex-wrap gap-6 font-mono text-[9px] tracking-[0.2em] uppercase">
            <a
              href="https://wa.me/255760984921"
              target="_blank"
              className="bg-[#FA520F] text-white px-8 py-3.5 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/solutions"
              className="bg-transparent text-white border border-neutral-800 hover:border-white px-8 py-3.5 transition-all duration-300 flex items-center justify-center"
            >
              <span>Explore Ecosystem</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tiny minimal scroll indicator at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none opacity-40">
        <span className="text-[7px] font-mono tracking-[0.3em] uppercase text-neutral-400">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neutral-400 to-transparent" />
      </div>
    </section>
  );
};