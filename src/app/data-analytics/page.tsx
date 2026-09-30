'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import hero1 from '@/assets/intelligence.jpg';
import hero2 from '@/assets/data-architecture.jpg';
import hero3 from '@/assets/banner-3.png';
import hero4 from '@/assets/hero-4.jpg';
import hero5 from '@/assets/hero-5.jpg';
import appliedAI from '@/assets/ai-applied.jpg';
import predictiveAnalytics from '@/assets/applied-ai.jpg';
import orchestration from '@/assets/orchestration.jpg';
import businessIntelligence from '@/assets/intelligence.jpg';
import architecture from '@/assets/data-architecture.jpg';
import descriptiveAnalytics from '@/assets/descriptive-analytics.png';
import diagnosticAnalytics from '@/assets/diagnostic-analytics.png';
import predictiveAnalyticsImg from '@/assets/predictiveanalytics.png';
import prescriptiveAnalytics from '@/assets/prescriptive-analytics.png';

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="never">{children}</MotionConfig>
);

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const SLIDE_DURATION = 6000;

export default function DataAnalyticsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const sliderItems = [
    { id: 'Data Architecture', label: 'ENGINEERING', title: 'Building the Data Stack, the Foundation Behind Systems That Work at Scale', image: hero1 },
    { id: 'Business Intelligence', label: 'DASHBOARDS', title: 'Real-Time Telemetry Turning Raw Enterprise Data into Action', image: hero2 },
    { id: 'Predictive Analytics', label: 'PREDICTIVE AI', title: 'Forecasting Market Dynamics with High-Fidelity Machine Learning', image: hero3 },
    { id: 'Data Governance', label: 'GOVERNANCE', title: 'Frameworks Compliant with Regional Regulations, Ensuring Security and Trust', image: hero4 },
  ];

  const capabilities = [
    { title: 'Architecture', description: 'Build scalable, secure data pipelines and data warehouses that integrate fragmented enterprise sources into a single source of truth.', color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', image: architecture, span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Intelligence', description: 'Real-time executive dashboards and interactive reports designed to translate raw data into instant, actionable decision-making tools.', color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', image: businessIntelligence, span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Predictive', description: 'Deploy custom ML models that forecast customer demand, detect operational anomalies, and optimize resource allocation automatically.', color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', image: predictiveAnalytics, span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-24 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Governance', description: 'Frameworks compliant with regional regulations, ensuring security, transparency, privacy, and trustworthy AI adoption.', color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70', image: appliedAI, span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl' },
  ];

  const maturityLevels = [
    { title: 'Descriptive', description: 'Consolidating historical records into structured databases and standard reports.', color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70', image: descriptiveAnalytics, span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Diagnostic', description: 'Deep-dive root cause analysis using correlation, segmentation, and drill-down metrics.', color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', image: diagnosticAnalytics, span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Predictive', description: 'Leveraging statistical models and machine learning to forecast future market shifts.', color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', image: predictiveAnalyticsImg, span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-24 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Prescriptive', description: 'AI-driven decision engines that recommend optimal strategy and automate execution.', color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', image: prescriptiveAnalytics, span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl' },
  ];

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setProgressKey((k) => k + 1);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % sliderItems.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + sliderItems.length) % sliderItems.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        setProgressKey((k) => k + 1);
        return (prev + 1) % sliderItems.length;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [sliderItems.length]);

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full pt-32 pb-32 relative overflow-hidden">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-[1400px] mx-auto text-center mb-16">
            <motion.h1
              className="text-[5rem] md:text-[12rem] lg:text-[18rem] font-bold tracking-[-0.05em] leading-[0.85]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Our analytics power</span>
              <span className="block text-[#3E9C8F]">real-time decisions</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-12 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Our analytics power real-time, AI-driven decisions in critical commercial enterprises in East Africa, from the factory floors to the front lines.
            </motion.p>
          </header>
        </div>

        <div className="w-full px-6 md:px-12 mb-6 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {sliderItems.map((item, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
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
                  <span className="relative z-10">{item.id}</span>
                </button>
              );
            })}

            <div className="ml-auto pl-4 flex-shrink-0">
              <button className="px-4 py-2 text-[14px] text-[#111622] bg-white border border-[#111622] hover:bg-[#111622] hover:text-white transition-colors whitespace-nowrap rounded-[3px]">
                SEE ALL
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 mb-32">
          <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-[#0A0A0A]">
            {sliderItems.map((item, idx) => {
              const isActive = currentSlide === idx;
              return (
                <div
                  key={idx}
                  onClick={() => !isActive && goToSlide(idx)}
                  className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                >
                  <Image src={item.image} alt={item.title} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-8 left-8 md:bottom-14 md:left-14 max-w-3xl text-white">
                    <p className="text-[11px] font-medium uppercase tracking-[0.25em] opacity-70 mb-6">{item.label}</p>
                    <h3 className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-[-0.03em] leading-[1.02]">
                      {item.title}
                    </h3>
                  </div>

                  {isActive && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors duration-300"
                      >
                        ←
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors duration-300"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 mb-32">
          <header className="max-w-[1400px] mx-auto text-center mb-24">
            <motion.h2
              className="text-[5rem] md:text-[12rem] lg:text-[18rem] font-bold tracking-[-0.05em] leading-[0.85]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Solutions we</span>
              <span className="block text-[#3E9C8F]">build for you</span>
            </motion.h2>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {capabilities.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer ${card.color} ${card.text} ${card.span} ${card.height}`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                  <Image src={card.image} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                <div className="relative z-20 max-w-[85%]">
                  <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05]">
                    {card.title}
                  </h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-2xl md:text-3xl ${card.subText} mt-5 leading-[1.3] max-w-lg`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 mb-32">
          <header className="max-w-[1400px] mx-auto text-center mb-24">
            <motion.h2
              className="text-[5rem] md:text-[12rem] lg:text-[18rem] font-bold tracking-[-0.05em] leading-[0.85]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Analytics maturity</span>
              <span className="block text-[#3E9C8F]">from data to decisions</span>
            </motion.h2>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {maturityLevels.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer ${card.color} ${card.text} ${card.span} ${card.height}`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                  <Image src={card.image} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                <div className="relative z-20 max-w-[85%]">
                  <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05]">
                    {card.title}
                  </h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-2xl md:text-3xl ${card.subText} mt-5 leading-[1.3] max-w-lg`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-[1400px] mx-auto text-center">
            <motion.h2
              className="text-[5rem] md:text-[12rem] lg:text-[18rem] font-bold tracking-[-0.05em] leading-[0.85]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Ready to accelerate</span>
              <span className="block text-[#3E9C8F]">your data strategy</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-12 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Consult with our lead data architects to evaluate your data ecosystem and build custom analytics systems.
            </motion.p>

            <motion.div
              className="mt-12"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="https://wa.me/255760984921"
                target="_blank"
                className="inline-flex items-center gap-4 text-base md:text-lg font-medium border-b-2 border-black pb-0.5 hover:opacity-60 transition-opacity"
              >
                Contact Data Advisory
              </Link>
            </motion.div>
          </header>
        </div>

      </section>
    </MotionWrapper>
  );
}