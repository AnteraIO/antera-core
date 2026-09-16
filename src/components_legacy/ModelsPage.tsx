'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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

export const ModelsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderItems = [
    {
      id: 'Data Architecture',
      label: 'ARCHITECTURE',
      title: 'Building the Data Stack, the Foundation Behind Systems That Work at Scale ↗',
      image: hero1,
    },
    {
      id: 'Predictive Analytics',
      label: 'PREDICTIVE AI',
      title: 'Forecasting Market Dynamics with High-Fidelity Machine Learning ↗',
      image: hero2,
    },
    {
      id: 'Applied AI',
      label: 'INTEGRATION',
      title: 'Deploying Computer Vision and NLP to the Edge in East Africa ↗',
      image: hero3,
    },
    {
      id: 'Business Intelligence',
      label: 'DASHBOARDS',
      title: 'Real-Time Telemetry Turning Raw Enterprise Data into Action ↗',
      image: hero4,
    },
    {
      id: 'System Orchestration',
      label: 'DEVCON',
      title: 'The Ontology-Powered Infrastructure Behind Autonomous Agents ↗',
      image: hero5,
    }
  ];

  const capabilities = [
    {
      id: '0.1',
      title: 'Architecture',
      desc: 'Design and build robust data pipelines that collect, clean, and structure information from multiple sources into unified, queryable enterprise systems.',
      image: architecture
    },
    {
      id: '0.2',
      title: 'Predictive',
      desc: 'Predictive analytics and machine learning integrations that forecast trends, identify risks, and surface opportunities before they become obvious.',
      image: predictiveAnalytics
    },
    {
      id: '0.3',
      title: 'Applied AI',
      desc: 'End-to-end AI integration for enterprise transformation, from natural language processing to computer vision and automated decision systems.',
      image: appliedAI
    },
    {
      id: '0.4',
      title: 'Intelligence',
      desc: 'Real-time dashboards and reporting tools that turn raw data into actionable insights leadership can trust and act upon.',
      image: businessIntelligence
    },
    {
      id: '0.5',
      title: 'Orchestration',
      desc: 'Integrate and orchestrate existing AI models within secure data platforms, layering proprietary tools, governance, and custom workflows.',
      image: orchestration
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [sliderItems.length]);

  return (
    <main className="min-h-screen bg-white text-[#111622] font-sans selection:bg-[#111622] selection:text-white pt-[140px] md:pt-[160px] pb-32 overflow-hidden">
      
      {/* Top Filter Pills Bar synced with slider */}
      <div className="w-full px-6 md:px-12 mb-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {sliderItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`px-4 py-2 text-[13px] transition-colors whitespace-nowrap rounded-sm ${
                currentSlide === idx 
                  ? 'bg-[#EAEAEA] text-[#111622] font-medium' 
                  : 'text-gray-500 bg-transparent hover:bg-[#F4F4F4]'
              }`}
            >
              {item.id}
            </button>
          ))}
          <button className="px-4 py-2 text-[13px] text-gray-500 bg-transparent hover:bg-[#F4F4F4] transition-colors whitespace-nowrap rounded-sm">
            SEE ALL
          </button>
        </div>
      </div>

      {/* Full-width Carousel Slider */}
      <div className="w-full overflow-hidden mb-24 relative">
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
                onClick={() => !isActive && setCurrentSlide(idx)}
              >
                {/* Increased height for bigger images */}
                <div className={`relative w-full h-[450px] md:h-[700px] bg-[#111] overflow-hidden transition-all duration-700 cursor-pointer ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'}`}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay Box */}
                  <div 
                    className={`absolute top-6 left-6 md:top-10 md:left-10 max-w-[320px] md:max-w-[420px] bg-[#22252a]/95 p-6 md:p-8 text-white shadow-2xl transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-3 md:mb-4">
                      {item.label}
                    </p>
                    <h3 className="text-lg md:text-[24px] font-normal leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Navigation Arrows */}
                  {isActive && (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }} 
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#111]/60 hover:bg-[#111] text-white flex items-center justify-center transition-colors"
                      >
                        <span className="text-lg">←</span>
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }} 
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#111]/60 hover:bg-[#111] text-white flex items-center justify-center transition-colors"
                      >
                        <span className="text-lg">→</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero Statement Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-28 mt-12">
        <h1 className="text-[2.5rem] md:text-[3.75rem] lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight text-[#111622] max-w-[1300px]">
          Our models power real-time, AI-driven decisions in critical commercial enterprises in East Africa, from the factory floors to the front lines.
        </h1>
      </div>

      {/* Models Interactive Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl md:text-[2rem] font-normal tracking-tight text-[#111622] mb-12">
          Our Models
        </h2>

        <div className="border-t border-gray-200">
          {capabilities.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={item.id}
                className={`group border-b border-gray-200 transition-colors duration-300 cursor-pointer ${
                  isHovered ? 'bg-[#F9F9F9]' : 'bg-transparent'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-center py-10 md:py-14 min-h-[280px] px-2 md:px-6">
                  
                  {/* Left Column: Description & Number */}
                  <div className="md:col-span-3 flex flex-col justify-between self-stretch py-2 h-full">
                    <p className="text-[14.5px] text-gray-800 font-normal leading-snug pr-6 max-w-[260px]">
                      {item.desc}
                    </p>
                    <p className="text-[13px] font-mono text-gray-500 mt-12 md:mt-auto tracking-wide">
                      {item.id}
                    </p>
                  </div>

                  {/* Center Column: Sideways Sliding Image - Increased size */}
                  <div className="md:col-span-4 flex justify-center items-center h-[280px] md:h-[320px] relative w-full overflow-hidden px-4 md:px-8">
                    <AnimatePresence>
                      {isHovered ? (
                        <motion.div
                          key="image-slide"
                          initial={{ x: '-100%', opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: '100%', opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute inset-0 w-full h-full px-4 md:px-8 py-2"
                        >
                          <div className="relative w-full h-full shadow-md">
                            <Image 
                              src={item.image} 
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="geometric-mark"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-full h-full flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
                        >
                          <span className="text-[12rem] font-bold tracking-tighter text-[#111622] font-mono leading-none">
                            {item.title.charAt(0)}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Column: Giant Display Title */}
                  <div className="md:col-span-5 flex justify-start md:justify-end items-center mt-6 md:mt-0">
                    <h3 className="text-[4rem] md:text-[5.5rem] lg:text-[7.5rem] font-medium tracking-tight text-[#111622] leading-none">
                      {item.title}
                    </h3>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Closing Callout Card */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-gray-200">
          
          {/* Left Image - Increased height */}
          <div className="md:col-span-6 min-h-[400px] md:min-h-[550px] relative bg-gray-100">
            <Image 
              src={hero1} 
              alt="ANTERA Engineering Field" 
              fill
              className="object-cover"
            />
          </div>

          {/* Right Callout Block */}
          <div className="md:col-span-6 p-10 md:p-16 flex flex-col justify-center items-start bg-white">
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-[#111622] mb-6">
              There is so much left to build
            </h3>
            <p className="text-[17px] text-gray-700 leading-relaxed max-w-md mb-10">
              ANTERA engineers deliver mission-critical outcomes for East Africa's most important institutions.
            </p>
            <button className="px-5 py-2.5 border border-gray-300 text-[11px] font-mono uppercase tracking-widest text-gray-600 hover:border-gray-900 hover:text-[#111622] transition-colors">
              LEARN MORE
            </button>
          </div>

        </div>
      </div>

    </main>
  );
};

export default ModelsPage;