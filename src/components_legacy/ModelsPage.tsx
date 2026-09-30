'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

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

import heroVideo from '@/assets/antera-video.mp4';

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

export const ModelsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const sliderItems = [
    { id: isSw ? 'Video' : 'Showreel', label: 'SHOWREEL', title: isSw ? 'Tazama Antera ikitenda kazi' : 'See Antera in motion', isVideo: true },
    { id: isSw ? 'Usanifu wa Data' : 'Data Architecture', label: isSw ? 'USANIFU' : 'ARCHITECTURE', title: isSw ? 'Ujenzi wa Miundombinu ya Data Nyuma ya Mifumo Inayofanya Kazi kwa Ukubwa' : 'Building the Data Stack, the Foundation Behind Systems That Work at Scale', image: hero1 },
    { id: isSw ? 'Uchambuzi wa Kutabiri' : 'Predictive Analytics', label: isSw ? 'AI YA KUTABIRI' : 'PREDICTIVE AI', title: isSw ? 'Kutabiri Mwenendo wa Soko kwa Ujifunzaji wa Mashine' : 'Forecasting Market Dynamics with High-Fidelity Machine Learning', image: hero2 },
    { id: isSw ? 'AI Inayotumika' : 'Applied AI', label: isSw ? 'UJUMUISHAI' : 'INTEGRATION', title: isSw ? 'Kutumia Computer Vision na NLP Barani Afrika Mashariki' : 'Deploying Computer Vision and NLP to the Edge in East Africa', image: hero3 },
    { id: isSw ? 'Akili ya Biashara' : 'Business Intelligence', label: isSw ? 'DASHIBODI' : 'DASHBOARDS', title: isSw ? 'Takwimu za Muda Halisi Zinazogeuza Data Ghafi kuwa Hatua' : 'Real-Time Telemetry Turning Raw Enterprise Data into Action', image: hero4 },
    { id: isSw ? 'Uratibu wa Mifumo' : 'System Orchestration', label: 'DEVCON', title: isSw ? 'Miundombinu ya Kina Nyuma ya Wakala wa Otomatiki' : 'The Ontology-Powered Infrastructure Behind Autonomous Agents', image: hero5 },
  ];

  const capabilities = [
    {
      title: isSw ? 'Usanifu' : 'Architecture',
      description: isSw ? 'Sanifu na ujenge njia madhubuti za data zinazokusanya, kusafisha na kupanga taarifa kutoka vyanzo mbalimbali.' : 'Design and build robust data pipelines that collect, clean, and structure information from multiple sources into unified, queryable enterprise systems.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', image: architecture, span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Utabiri' : 'Predictive',
      description: isSw ? 'Uchambuzi wa kutabiri na ujumuishaji wa ujifunzaji mashine unaotabiri mienendo na kubaini hatari.' : 'Predictive analytics and machine learning integrations that forecast trends, identify risks, and surface opportunities before they become obvious.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', image: predictiveAnalytics, span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'AI Inayotumika' : 'Applied AI',
      description: isSw ? 'Ujumuishaji kamili wa AI kwa mabadiliko ya biashara, kutoka kwa uchanganuzi wa lugha hadi mifumo ya maamuzi.' : 'End-to-end AI integration for enterprise transformation, from natural language processing to computer vision and automated decision systems.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', image: appliedAI, span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-24 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Akili' : 'Intelligence',
      description: isSw ? 'Dashibodi za muda halisi na zana za ripoti zinazogeuza data ghafi kuwa maarifa inayoaminika.' : 'Real-time dashboards and reporting tools that turn raw data into actionable insights leadership can trust and act upon.',
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70', image: businessIntelligence, span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Uratibu' : 'Orchestration',
      description: isSw ? 'Unganisha na uratibu mifumo iliyopo ya AI katika majukwaa salama ya data.' : 'Integrate and orchestrate existing AI models within secure data platforms, layering proprietary tools, governance, and custom workflows.',
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70', image: orchestration, span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Upelekaji' : 'Deployment',
      description: isSw ? 'Peleka mifumo katika mazingira ya uzalishaji ikiwa na ufuatiliaji wa kina na mipango ya kurejesha.' : 'Ship models into production environments with monitoring, observability, and rollback plans built in from day one.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', image: hero5, span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl'
    },
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
          <header className="max-w-5xl mx-auto text-center mb-16">

            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {isSw ? 'Mifumo yetu inaendesha' : 'Our models power'}
              </span>
              <span className="block text-[#3E9C8F]">
                {isSw ? 'maamuzi ya muda halisi' : 'real-time decisions'}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {isSw
                ? 'Mifumo ya data inaendesha maamuzi ya muda halisi, ya kuongozwa na AI katika biashara muhimu za Afrika Mashariki.'
                : 'Our models power real-time, AI-driven decisions in critical commercial enterprises in East Africa, from the factory floors to the front lines.'}
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
                {t('hero.see_all') || (isSw ? 'TAZAMA ZOTE' : 'SEE ALL')}
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
                  {item.isVideo ? (
                    <video
                      src={heroVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover scale-[1.15]"
                    />
                  ) : (
                    <Image src={item.image!} alt={item.title} fill className="object-cover" priority />
                  )}

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
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h2
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {isSw ? 'Uwezo tunao' : 'Capabilities we'}
              </span>
              <span className="block text-[#3E9C8F]">
                {isSw ? 'leta mezani' : 'bring to the table'}
              </span>
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

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {isSw ? 'Kuna mengi sana' : 'There is so much'}
              </span>
              <span className="block text-[#3E9C8F]">
                {isSw ? 'yaliyobaki kujenga' : 'left to build'}
              </span>
            </motion.h2>
          </header>
        </div>

      </section>
    </MotionWrapper>
  );
};

export default ModelsPage;