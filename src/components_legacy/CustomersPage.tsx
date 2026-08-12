'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { StaticImageData } from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import blacksand1 from '../assets/blacksand-1.png';
import blacksand2 from '../assets/blacksand-2.png';
import blacksand3 from '../assets/blacksand-3.png';
import blacksand4 from '../assets/blacksand-4.png';
import nest1 from '../assets/nest-1.png';
import nest2 from '../assets/nest-2.png';
import nest3 from '../assets/nest-3.png';
import nest4 from '../assets/nest-4.png';
import nest5 from '../assets/nest-5.png';
import nest6 from '../assets/nest-6.png';
import sekelaweb1 from '../assets/sekelaweb-1.png';
import sekelaweb2 from '../assets/sekelaweb-2.png';
import sekelaweb3 from '../assets/sekelaweb-3.png';
import nawwi1 from '../assets/nawwi-1.png';
import nawwi2 from '../assets/nawwi-2.png';
import nawwi3 from '../assets/nawwi-3.png';
import nawwi4 from '../assets/nawwi-4.png';
import nawwi5 from '../assets/nawwi-5.png';
import nawwi6 from '../assets/nawwi-6.png';

const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

// Individual Client Card styled exactly like the Hero
const ClientCard = ({ client, images, description, index }: { client: string; images: (string | StaticImageData)[]; description: string; index: number }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden bg-black shadow-sm">
      
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
            src={images[currentImage]}
            alt={`${client} showcase ${currentImage + 1}`}
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-[1]" />

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 md:top-12 left-8 md:left-12 z-10 max-w-xl bg-black/80 backdrop-blur-sm p-6 md:p-8 rounded-sm"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-white font-sans">
          <ScrambleText text={client} />
        </h1>
        
        <p className="mt-4 text-sm md:text-base font-normal text-gray-200 leading-relaxed max-w-lg font-sans">
          {description}
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
  );
};

export const CustomersPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const clients = [
    { client: "Blacksand Adventures", images: [blacksand1, blacksand2, blacksand3, blacksand4], description: "A premium adventure tourism platform revolutionizing how travelers discover and book exclusive African safari experiences. Built with real-time availability, immersive previews, and seamless payment integration." },
    { client: "Travel Nest Africa", images: [nest1, nest2, nest3, nest4, nest5, nest6], description: "An all-in-one travel management ecosystem connecting local operators with global travelers. Features AI-powered itinerary generation, dynamic pricing, and a comprehensive vendor dashboard." },
    { client: "Sekela POS", images: [sekelaweb1, sekelaweb2, sekelaweb3], description: "A next-generation point-of-sale system designed for African retail businesses. Inventory management, and real-time analytics dashboard." },
    { client: "Nawwi Wellness", images: [nawwi1, nawwi2, nawwi3, nawwi4, nawwi5, nawwi6], description: "Luxury scent-led wellness from the heart of Tanzania. Handcrafted candles and immersive sensory experiences using premium coconut-soy wax and locally sourced essential oils. Sustainable, plastic-free packaging supporting local ethical agriculture in Tanzania." }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#fafafa] min-h-screen text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white pt-32 pb-24">
      <GrainOverlay />

      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX: scrollYProgress }} />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        <section className="mb-16 md:mb-24 px-6 md:px-8">
          <h1 className="text-5xl md:text-7xl font-normal tracking-[-0.02em] leading-[1.1] mb-4 font-sans">
            The Companies We Work and Collaborate With.
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl font-sans">
            We are solving complex problems across all industries in days, not years.
          </p>
        </section>

        {/* SEPARATE CARDS STACKED VERTICALLY */}
        <div className="flex flex-col gap-16 md:gap-20 px-6 md:px-8">
          {clients.map((client, index) => (
            <ClientCard 
              key={client.client} 
              client={client.client} 
              images={client.images} 
              description={client.description} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CustomersPage;