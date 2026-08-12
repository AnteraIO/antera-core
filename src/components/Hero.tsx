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

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#fafafa] flex flex-col">
      
      <main className="flex-grow flex items-center justify-center px-4 md:px-8 py-6 md:py-10 bg-[#fafafa]">
        <div className="relative w-full max-w-[1400px] h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden bg-black shadow-sm">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
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
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent z-[1]" />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-8 md:top-12 left-8 md:left-12 z-10 max-w-xl bg-black/70 backdrop-blur-sm p-6 md:p-8 rounded-sm"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-white">
              Grow Your Business. With Smart Technology.
            </h1>
            
            <p className="mt-4 text-sm md:text-base font-normal text-gray-200 leading-relaxed max-w-lg">
              We build tailored systems, webapps, mobile apps, chatbots, and AI for Tanzanian SMEs, solopreneurs, and NGOs, connecting agents, tools, and data so small teams can solve niche problems faster, protect digital sovereignty, and expand their footprint.
            </p>
          </motion.div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition-all duration-200 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition-all duration-200 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
      </main>
    </section>
  );
};