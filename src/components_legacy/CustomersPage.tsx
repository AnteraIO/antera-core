'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, MotionConfig } from 'framer-motion';
import Image from 'next/image';

import blacksand1 from '../assets/blacksand-1.png';
import nest1 from '../assets/nest-1.png';
import sekelaweb1 from '../assets/sekelaweb-1.png';
import nawwi1 from '../assets/nawwi-1.png';

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="never">{children}</MotionConfig>
);

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const SLIDE_DURATION = 10000;

export const CustomersPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const [currentClient, setCurrentClient] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const clients = [
    { client: 'Blacksand Adventures', image: blacksand1 },
    { client: 'Travel Nest Africa', image: nest1 },
    { client: 'Sekela POS', image: sekelaweb1 },
    { client: 'Nawwi Wellness', image: nawwi1 },
  ];

  const activeClient = clients[currentClient];

  const goToClient = (idx: number) => {
    setCurrentClient(idx);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClient((prev) => {
        setProgressKey((k) => k + 1);
        return (prev + 1) % clients.length;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <MotionWrapper>
      <section
        ref={containerRef}
        className="bg-white text-black font-sans w-full pt-32 pb-32 relative overflow-hidden"
      >
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left"
          style={{ scaleX }}
        />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-[1400px] mx-auto text-center mb-16">
            <motion.h1
              className="text-[5rem] md:text-[12rem] lg:text-[18rem] font-bold tracking-[-0.05em] leading-[0.85]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Happy</span>
              <span className="block text-[#3E9C8F]">clients</span>
            </motion.h1>
          </header>
        </div>

        <div className="w-full px-6 md:px-12 mb-8 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {clients.map((c, idx) => {
              const isActive = currentClient === idx;
              return (
                <button
                  key={idx}
                  onClick={() => goToClient(idx)}
                  className={`relative overflow-hidden px-4 py-2 text-[14px] whitespace-nowrap rounded-[3px] border transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#D9D9D9] border-[#D9D9D9] text-[#111622]'
                      : 'bg-white border-gray-200 text-gray-500 hover:text-[#111622] hover:border-gray-300'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      key={progressKey}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                      className="absolute inset-0 bg-[#C4C4C4] origin-left"
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10">{c.client}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="relative w-[94%] md:w-[91%] lg:w-[89%] overflow-hidden bg-[#0A0A0A] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentClient}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full"
              >
                <Image
                  src={activeClient.image}
                  alt={activeClient.client}
                  priority
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default CustomersPage;