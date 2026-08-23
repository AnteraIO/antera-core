'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';
import hero4 from '../assets/hero-4.jpg';
import hero5 from '../assets/hero-5.jpg';
import hero6 from '../assets/hero-6.jpg';
import hero7 from '../assets/hero-7.jpg';
import hero8 from '../assets/hero-8.jpg';
import hero9 from '../assets/hero-9.jpg';
import hero10 from '../assets/hero-10.jpg';
import hero11 from '../assets/hero-11.jpg';
import hero12 from '../assets/hero-12.jpg';

export const Hero = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    hero1, hero2, hero3, hero4, hero5, hero6, 
    hero7, hero8, hero9, hero10, hero11, hero12
  ];

  const totalImages = heroImages.length;

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, 8000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col pt-16 md:pt-20 lg:pt-24 overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-violet-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl" />
      </div>
      
      <main className="flex-grow flex items-center justify-center px-4 md:px-8 py-6 md:py-10 relative z-10">
        <div className="relative w-full max-w-[1400px] h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm shadow-sm border border-white/20">
          
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
              We Build Tailored Systems, Webapps, Mobile Apps, Portals, Chatbots, Data Analytics, Data Dashboards and AI for Tanzanian SMEs, solopreneurs, and NGOs, connecting agents, tools, and data so small teams can solve niche problems faster, protect digital sovereignty, and expand their footprint.
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

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImage === index 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

        </div>
      </main>
    </section>
  );
};