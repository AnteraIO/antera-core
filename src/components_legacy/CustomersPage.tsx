'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

// Individual Client Card
const ClientCard = ({ 
  client, 
  images, 
  description, 
  index 
}: { 
  client: string; 
  images: (string | StaticImageData)[]; 
  description: string; 
  index: number 
}) => {
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
    <motion.div 
      variants={itemVariants}
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-[2rem] bg-neutral-50"
    >
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
            className="object-cover object-center opacity-90"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />

      {/* Client info - bottom left like the sections */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 md:bottom-12 left-8 md:left-12 z-10 max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {client}
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed max-w-lg">
          {description}
        </p>
      </motion.div>

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200 rounded-full border border-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200 rounded-full border border-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Slide indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentImage ? 'bg-white w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const CustomersPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const clients = [
    { 
      client: "Blacksand Adventures", 
      images: [blacksand1, blacksand2, blacksand3, blacksand4], 
      description: "A premium adventure tourism platform revolutionizing how travelers discover and book exclusive African safari experiences. Built with real-time availability, immersive previews, and seamless payment integration." 
    },
    { 
      client: "Travel Nest Africa", 
      images: [nest1, nest2, nest3, nest4, nest5, nest6], 
      description: "An all-in-one travel management ecosystem connecting local operators with global travelers. Features AI-powered itinerary generation, dynamic pricing, and a comprehensive vendor dashboard." 
    },
    { 
      client: "Sekela POS", 
      images: [sekelaweb1, sekelaweb2, sekelaweb3], 
      description: "A next-generation point-of-sale system designed for African retail businesses. Inventory management, and real-time analytics dashboard." 
    },
    { 
      client: "Nawwi Wellness", 
      images: [nawwi1, nawwi2, nawwi3, nawwi4, nawwi5, nawwi6], 
      description: "Luxury scent-led wellness from the heart of Tanzania. Handcrafted candles and immersive sensory experiences using premium coconut-soy wax and locally sourced essential oils. Sustainable, plastic-free packaging supporting local ethical agriculture in Tanzania." 
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-white text-[#171321] font-sans w-full overflow-hidden relative py-24"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#171321] z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Left Sidebar Column */}
        <div className="w-full lg:w-1/4 xl:w-1/5 flex flex-col gap-10 lg:sticky top-32 h-fit">
          <div>
            <h3 className="text-sm font-medium text-[#171321]">Clients</h3>
            <p className="text-sm text-neutral-500 mt-1">Our partners</p>
          </div>
          <a href="mailto:hello@antera.co.tz" className="flex items-center gap-2 text-base font-medium border-b border-[#171321] w-fit pb-1 hover:opacity-60 transition-opacity">
            Work With Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Content Column */}
        <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col gap-24">
          
          {/* Header */}
          <header className="max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-[72px] font-normal tracking-[-0.02em] leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              The Companies We Work and Collaborate With.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl leading-[1.6] text-neutral-800 mt-8 max-w-3xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              We are solving complex problems across all industries in days, not years.
            </motion.p>
          </header>

          {/* Client Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-12 md:gap-16"
          >
            {clients.map((client, index) => (
              <ClientCard 
                key={client.client} 
                client={client.client} 
                images={client.images} 
                description={client.description} 
                index={index} 
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CustomersPage;