'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/imac.jpg';
import hero3 from '../assets/bot.jpg';
import hero4 from '../assets/hero-4.jpg';
import hero5 from '../assets/hero-5.jpg';
import hero6 from '../assets/hero-6.jpg';
import hero7 from '../assets/data-architecture.jpg';
import hero8 from '../assets/cyber-1.jpg';
import hero9 from '../assets/Business-Intelligence.png';
import hero10 from '../assets/hero-10.jpg';
import hero11 from '../assets/hero-11.jpg';
import hero12 from '../assets/intelligence.jpg';

import heroVideo from '../assets/antera-video.mp4';

const SLIDE_DURATION = 6000;

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const sliderItems = [
    { id: 'Web Apps', label: 'ENTERPRISE 1', title: 'Enterprise Web Applications for Scale ↗', image: hero1 },
    { id: 'Mobile Systems', label: 'CROSS-PLATFORM 2', title: 'Cross-Platform Mobile Solutions for East Africa ↗', image: hero2 },
    { id: 'AI Agents', label: 'INTELLIGENCE 3', title: 'Autonomous Chatbots and Intelligent Agents ↗', image: hero3 },
    { id: 'Data Analytics', label: 'PREDICTIVE 4', title: 'Predictive Models and Data Ecosystems ↗', image: hero4 },
    { id: 'Dashboards', label: 'TELEMETRY 5', title: 'Real-Time Telemetry & Business Intelligence ↗', image: hero5 },
    { id: 'Integration', label: 'ARCHITECTURE 6', title: 'Secure API Gateways and System Architecture ↗', image: hero6 },
    { id: 'Cloud', label: 'INFRASTRUCTURE 7', title: 'Scalable Infrastructure & Cloud Deployments ↗', image: hero7 },
    { id: 'Security', label: 'SOVEREIGNTY 8', title: 'Digital Sovereignty & Data Protection ↗', image: hero8 },
    { id: 'Portals', label: 'MANAGEMENT 9', title: 'Custom Management Portals for NGOs ↗', image: hero9 },
    { id: 'Automation', label: 'WORKFLOW 10', title: 'Workflow Automation for Small Teams ↗', image: hero10 },
    { id: 'IoT Solutions', label: 'HARDWARE 11', title: 'Connecting Hardware to Cloud Analytics ↗', image: hero11 },
    { id: 'Machine Learning', label: 'MODELS 12', title: 'Custom LLMs tailored for Tanzanian Markets ↗', image: hero12 },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [currentSlide, sliderItems.length]);

  return (
    <div className="w-full relative flex flex-col bg-white overflow-hidden">

      {/* 1. Full Screen Video Hero Section */}
      <section className="relative h-[100svh] w-full flex flex-col justify-center items-center">
        <div className="absolute inset-0 w-full h-full bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-65"
            src={heroVideo}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative z-10 flex flex-col items-center justify-center px-6 mt-16 text-center"
        >
          <h1 className="text-[42px] md:text-[64px] lg:text-[85px] font-medium leading-[1.05] tracking-tight text-white max-w-5xl">
            We Build Sovereign AI Systems<br />for Every Decision
          </h1>
        </motion.div>
      </section>

      {/* 2. Slider Section */}
      <section className="w-full pt-16 pb-24 bg-white">

        {/* Pills / Tabs Navigation */}
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
                  {/* Progress fill darkens the pill background from left to right */}
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

                  {/* Label sits above the progress fill */}
                  <span className="relative z-10">{item.id}</span>
                </button>
              );
            })}

            {/* SEE ALL */}
            <div className="ml-auto pl-4 flex-shrink-0">
              <button className="px-4 py-2 text-[14px] text-[#111622] bg-white border border-[#111622] hover:bg-[#111622] hover:text-white transition-colors whitespace-nowrap rounded-[3px]">
                SEE ALL
              </button>
            </div>
          </div>
        </div>

        {/* Full-width Carousel Slider */}
        <div className="w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(calc(50vw - 42.5vw - ${currentSlide * 85}vw))` }}
          >
            {sliderItems.map((item, idx) => {
              const isActive = currentSlide === idx;
              return (
                <div
                  key={idx}
                  className="w-[85vw] flex-shrink-0 px-2 relative"
                  onClick={() => !isActive && goToSlide(idx)}
                >
                  {/* Height*/}
                  <div
                    className={`relative w-full h-[550px] md:h-[850px] bg-[#111] overflow-hidden transition-all duration-700 cursor-pointer ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="85vw"
                      className="object-cover"
                      priority={idx === 0}
                    />

                    {/* Overlay Box */}
                    <div
                      className={`absolute top-6 left-6 md:top-10 md:left-10 max-w-[340px] md:max-w-[460px] bg-[#22252a]/95 p-6 md:p-9 text-white shadow-2xl transition-opacity duration-500 delay-100 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-3 md:mb-4">
                        {item.label}
                      </p>
                      <h3 className="text-lg md:text-[26px] font-normal leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Navigation Arrows */}
                    {isActive && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-[#111]/60 hover:bg-[#111] text-white flex items-center justify-center transition-colors"
                        >
                          <span className="text-lg md:text-xl">←</span>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-[#111]/60 hover:bg-[#111] text-white flex items-center justify-center transition-colors"
                        >
                          <span className="text-lg md:text-xl">→</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;