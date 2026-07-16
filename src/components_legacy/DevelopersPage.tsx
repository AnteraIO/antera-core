'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const PixelTerminalIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <path d="M8 9l3 3-3 3M13 15h3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelCpuIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <rect x="8" y="8" width="8" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
    <path d="M8 12h-2M18 12h-2M12 8V6M12 18v-2M8 8l-1-1M17 17l-1-1M16 8l1-1M8 16l-1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelDatabaseIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1"/>
    <ellipse cx="12" cy="7" rx="5" ry="2" stroke="white" strokeWidth="1.5"/>
    <path d="M7 7v5c0 1.1 2.24 2 5 2s5-.9 5-2V7" stroke="white" strokeWidth="1.5"/>
    <path d="M7 12v5c0 1.1 2.24 2 5 2s5-.9 5-2v-5" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelLayoutIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <rect x="7" y="7" width="10" height="4" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="7" y="13" width="4" height="4" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="13" y="13" width="4" height="4" rx="0.5" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelCodeIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M9 9l-3 3 3 3M15 9l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelWebhookIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1"/>
    <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);


const ArrowLink = ({ text, href }: { text: string; href?: string }) => (
  <a 
    href={href || "#"} 
    className="mt-4 flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#FA520F] transition-colors"
    target={href?.startsWith('http') ? "_blank" : undefined}
    rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
  >
    <span>{text}</span>
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </a>
);

export const DevelopersPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const { t } = useLanguage();

  return (
    <div ref={containerRef} className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelTerminalIcon />
          <PixelCpuIcon />
          <PixelDatabaseIcon />
          <PixelLayoutIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with code.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('page.developers.desc')}
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
            
            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
            >
              <PixelTerminalIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">API Reference</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Complete REST API documentation with authentication guides, rate limits, and code examples.
                </p>
                <ArrowLink text="Explore docs" />
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <PixelCpuIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">SDK Libraries</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Ready-to-use SDKs for JavaScript, Python, PHP, and mobile platforms.
                </p>
                <ArrowLink text="Explore docs" />
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <PixelDatabaseIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Data Schema</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Database schemas, entity relationships, and data migration guides.
                </p>
                <ArrowLink text="Explore docs" />
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <PixelLayoutIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">UI Components</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Pre-built React components, design tokens, and accessibility guidelines.
                </p>
                <ArrowLink 
                  text="Explore docs" 
                  href="https://aibruno.vercel.app/" 
                />
              </div>
            </motion.div>

            <motion.div 
              className="group md:row-span-2 border-b border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <PixelCodeIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Code Playground</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
                  Interactive sandbox for testing API calls, SDK methods, and component previews in real-time.
                </p>
                <ArrowLink text="Launch playground" />
              </div>
            </motion.div>

            <motion.div 
              className="group md:col-span-2 border-b border-r border-neutral-200 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <PixelWebhookIcon />
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">Webhooks & Events</h3>
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md">
                  Real-time event subscriptions, payload schemas, and retry logic for reliable integrations.
                </p>
                <ArrowLink text="Explore docs" />
              </div>
            </motion.div>
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersPage;