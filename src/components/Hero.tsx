'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

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

import heroVideo0 from '../assets/antera-video.mp4';
import heroVideo1 from '../assets/antera-video-1.mp4';
import heroVideo2 from '../assets/antera-video-2.mp4';
import heroVideo3 from '../assets/antera-video-3.mp4';
import heroVideo4 from '../assets/antera-video-4.mp4';
import heroVideo5 from '../assets/antera-video-5.mp4';

import folderVideo from '../assets/graphics/folder-video.mp4';
import alertVideo from '../assets/graphics/alert.mp4';

const SLIDE_DURATION = 6000;

const HERO_VIDEOS = [
  heroVideo0,
  heroVideo1,
  heroVideo2,
  heroVideo3,
  heroVideo4,
  heroVideo5,
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [currentHeroVideo, setCurrentHeroVideo] = useState(0);
  const { language, t } = useLanguage();

  const isSw = language === 'sw';

  const handleHeroVideoEnd = () => {
    setCurrentHeroVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const sliderItems = [
    {
      name: isSw ? 'Wavuti' : 'Web Apps',
      title: isSw ? 'Programu za Wavuti za Biashara kwa Ukuzaji ↗' : 'Enterprise Web Applications for Scale ↗',
      video: folderVideo
    },
    {
      name: isSw ? 'Mifumo ya Simu' : 'Mobile Systems',
      title: isSw ? 'Programu za Simu za Majukwaa Mbalimbali kwa Afrika Mashariki ↗' : 'Cross-Platform Mobile Solutions for East Africa ↗',
      video: alertVideo
    },
    {
      name: isSw ? 'Wakala wa AI' : 'AI Agents',
      title: isSw ? 'Wakala wa Mazungumzo na Mifumo ya Akili Bandia ↗' : 'Autonomous Chatbots and Intelligent Agents ↗',
      image: hero3
    },
    {
      name: isSw ? 'Uchambuzi wa Data' : 'Data Analytics',
      title: isSw ? 'Mifumo ya Kutabiri na Majukwaa ya Data ↗' : 'Predictive Models and Data Ecosystems ↗',
      image: hero4
    },
    {
      name: isSw ? 'Dashibodi' : 'Dashboards',
      title: isSw ? 'Takwimu za Muda Halisi & Akili ya Biashara ↗' : 'Real-Time Telemetry & Business Intelligence ↗',
      image: hero5
    },
    {
      name: isSw ? 'Ujumuishaji' : 'Integration',
      title: isSw ? 'Njia Salama za API na Usanifu wa Mifumo ↗' : 'Secure API Gateways and System Architecture ↗',
      image: hero6
    },
    {
      name: isSw ? 'Wingu' : 'Cloud',
      title: isSw ? 'Miundombinu Inayokua & Deployments za Wingu ↗' : 'Scalable Infrastructure & Cloud Deployments ↗',
      image: hero7
    },
    {
      name: isSw ? 'Usalama' : 'Security',
      title: isSw ? 'Ukimiliki wa Kidijitali & Ulinzi wa Data ↗' : 'Digital Sovereignty & Data Protection ↗',
      image: hero8
    },
    {
      name: isSw ? 'Tovuti' : 'Portals',
      title: isSw ? 'Tovuti Maalum za Usimamizi kwa Mashirika ↗' : 'Custom Management Portals for NGOs ↗',
      image: hero9
    },
    {
      name: isSw ? 'Kazi Otomatiki' : 'Automation',
      title: isSw ? 'Kurahisisha Mtiririko wa Kazi kwa Timu Ndogo ↗' : 'Workflow Automation for Small Teams ↗',
      image: hero10
    },
    {
      name: isSw ? 'Suluhisho za IoT' : 'IoT Solutions',
      title: isSw ? 'Kuunganisha Vifaa na Uchambuzi wa Wingu ↗' : 'Connecting Hardware to Cloud Analytics ↗',
      image: hero11
    },
    {
      name: isSw ? 'Ujifunzaji Mashine' : 'Machine Learning',
      title: isSw ? 'Tengeneza Suluhisho za AI kwa Masoko ya Tanzania ↗' : 'Build Solutions around frontier AI models for Tanzanian Markets ↗',
      image: hero12
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    setProgressKey((k) => k + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
    setProgressKey((k) => k + 1);
  };

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
  }, [sliderItems.length]);

  return (
    <div className="w-full relative flex flex-col bg-white overflow-hidden">

      <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center py-24 md:py-0 px-4 sm:px-6">
        <div className="absolute inset-0 w-full h-full bg-black">
          <video
            key={currentHeroVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleHeroVideoEnd}
            className="w-full h-full object-cover opacity-65"
            src={HERO_VIDEOS[currentHeroVideo]}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative z-10 flex flex-col items-center justify-center px-2 sm:px-6 mt-12 md:mt-16 text-center"
        >
          <h1 className="text-[26px] sm:text-[40px] md:text-[64px] lg:text-[85px] font-medium leading-[1.15] md:leading-[1.05] tracking-tight text-white max-w-5xl">
            {isSw ? (
              <>Tunajenga Mifumo Huru ya AI<br className="hidden sm:inline" /> kwa Kila Maamuzi</>
            ) : (
              <>We Build Sovereign AI Systems<br className="hidden sm:inline" /> for Every Decision</>
            )}
          </h1>
        </motion.div>
      </section>

      <section className="w-full pt-10 md:pt-16 pb-16 md:pb-24 bg-white">

        <div className="w-full px-4 md:px-12 mb-4 md:mb-6 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {sliderItems.map((item, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`relative overflow-hidden px-3 py-1.5 md:px-4 md:py-2 text-[12px] md:text-[14px] whitespace-nowrap rounded-[3px] border transition-colors duration-200 flex-shrink-0 ${
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

                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}

            <div className="ml-auto pl-2 md:pl-4 flex-shrink-0 hidden sm:block">
              <button className="px-3 py-1.5 md:px-4 md:py-2 text-[12px] md:text-[14px] text-[#111622] bg-white border border-[#111622] hover:bg-[#111622] hover:text-white transition-colors whitespace-nowrap rounded-[3px]">
                {t('hero.see_all') || (isSw ? 'TAZAMA ZOTE' : 'SEE ALL')}
              </button>
            </div>
          </div>
        </div>

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
                  className="w-[85vw] flex-shrink-0 px-1 sm:px-2 relative"
                  onClick={() => !isActive && goToSlide(idx)}
                >
                  <div
                    className={`relative w-full h-[320px] sm:h-[480px] md:h-[750px] lg:h-[850px] bg-[#111] overflow-hidden transition-all duration-700 cursor-pointer rounded-sm ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'
                    }`}
                  >
                    {item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="85vw"
                        className="object-cover"
                        priority={idx === 0}
                      />
                    ) : null}

                    <div
                      className={`absolute top-3 left-3 right-3 md:right-auto md:top-10 md:left-10 max-w-none md:max-w-[460px] bg-[#22252a]/95 p-3.5 sm:p-5 md:p-9 text-white shadow-2xl transition-opacity duration-500 delay-100 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <h3 className="text-sm sm:text-base md:text-[26px] font-normal leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {isActive && (
                      <>
                        <div className="absolute bottom-3 right-3 flex md:hidden items-center gap-1.5 z-20">
                          <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            aria-label="Previous slide"
                            className="w-10 h-8 bg-[#111]/80 hover:bg-[#111] text-white flex items-center justify-center transition-colors rounded-sm"
                          >
                            <span className="text-sm leading-none">←</span>
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            aria-label="Next slide"
                            className="w-10 h-8 bg-[#111]/80 hover:bg-[#111] text-white flex items-center justify-center transition-colors rounded-sm"
                          >
                            <span className="text-sm leading-none">→</span>
                          </button>
                        </div>

                        <button
                          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                          aria-label="Previous slide"
                          className="hidden md:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-14 h-8 md:w-16 md:h-9 bg-[#111]/60 hover:bg-[#111] text-white items-center justify-center transition-colors"
                        >
                          <span className="text-sm md:text-base leading-none">←</span>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                          aria-label="Next slide"
                          className="hidden md:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-14 h-8 md:w-16 md:h-9 bg-[#111]/60 hover:bg-[#111] text-white items-center justify-center transition-colors"
                        >
                          <span className="text-sm md:text-base leading-none">→</span>
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