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

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Editorial-Style Headline (Near-Serif) */}
          <h1 className="mb-6 text-5xl font-light leading-[1.2] tracking-tight text-white md:text-7xl lg:text-8xl font-serif">
            {t('hero.title_part1')}
            <br />
            {t('hero.title_part2')}
          </h1>

          {/* Supporting Copy */}
          <p className="mb-12 max-w-xl text-base leading-relaxed text-white/80 md:text-lg font-light">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap items-center gap-6">

            <button className="group relative border-4 border-black bg-[#FA520F] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-75 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">

              <span className="absolute inset-0 border-t-2 border-l-2 border-white/40 pointer-events-none" />
              {/* Bottom/Right inner shadow */}
              {/* <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />

              <span className="relative flex items-center gap-2">
                {t('nav.start_building')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button> */}

            {/* Tetris Secondary Style Button */}
            {/* <a href="https://wa.me/255760984921" target="_blank" className="group relative border-4 border-black bg-zinc-800 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-75 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:bg-zinc-700">
              <span className="absolute inset-0 border-t-2 border-l-2 border-white/20 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-black/60 pointer-events-none" />

              <span className="relative">
                {t('nav.contact_sales')}
              </span>
            </a>
          </div> */}


        </motion.div>
      </div>
    </section>
  );
};