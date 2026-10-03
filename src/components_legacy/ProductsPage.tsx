'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

import hero1 from '@/assets/intelligence.jpg';
import hero2 from '@/assets/data-architecture.jpg';
import hero3 from '@/assets/banner-3.png';
import hero4 from '@/assets/hero-4.jpg';
import hero5 from '@/assets/hero-5.jpg';
import appliedAI from '@/assets/ai-applied.jpg';
import Audit from '@/assets/system-audit.jpg';
import orchestration from '@/assets/orchestration.jpg';
import SDK from '@/assets/sdk.jpg';
import bannerGraphics from '@/assets/graphics/117.png';
import bannerMarketing from '@/assets/graphics/110.png';
import bannerResume from '../assets/graphics/resume.png';

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

export const ProductsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const sliderItems = [
    {
      id: isSw ? 'Ukaguzi wa Miundombinu' : 'Infrastructure Audit',
      label: isSw ? 'USALAMA' : 'SECURITY',
      title: isSw ? 'Ramani ya Mfumo na Ukaguzi wa Usalama wa Rasilimali za Kidijitali' : 'Systematic Mapping and Security Auditing of Distributed Digital Assets',
      image: hero2
    },
    {
      id: isSw ? 'Uratibu wa Wingu' : 'Cloud Orchestration',
      label: isSw ? 'MIUNDOMBINU' : 'INFRASTRUCTURE',
      title: isSw ? 'Deployments za Wingu Zilizoboreshwa kwa Afrika Mashariki na Barani' : 'Auto-Scaling Deployments Optimized for Latency Across the African Continent',
      image: hero3
    },
    {
      id: isSw ? 'SDK Maalum' : 'Custom SDKs',
      label: isSw ? 'UJUMUISHAI' : 'INTEGRATION',
      title: isSw ? 'Zana Maalum za Ujumuishaji kwa Programu za Simu na Wavuti' : 'Tailored Integration Kits for Rapid Deployment in Mobile and Web Environments',
      image: hero4
    },
    {
      id: isSw ? 'Huduma za AI Inayotumika' : 'Applied AI Services',
      label: isSw ? 'AI INAYOTUMIKA' : 'APPLIED AI',
      title: isSw ? 'Suluhisho Kamili za AI kwa Mabadiliko ya Biashara' : 'End-to-End AI Solutions for Enterprise Transformation',
      image: hero5
    },
  ];

  const capabilities = [
    {
      title: isSw ? 'Ukaguzi' : 'Audit',
      description: isSw ? 'Ramani na ukaguzi wa usalama wa rasilimali za kidijitali katika miundombinu yako yote.' : 'Systematic mapping and security auditing of distributed digital assets across your entire infrastructure.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', image: Audit, span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Wingu' : 'Cloud',
      description: isSw ? 'Upelekaji wa wingu unaokua kiotomatiki ulioboreshwa kwa ajili ya kasi kote barani Afrika.' : 'Auto-scaling deployments optimized for latency across the African continent, built to handle peak loads.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', image: appliedAI, span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'SDKs' : 'SDKs',
      description: isSw ? 'Zana maalum za ujumuishaji wa haraka kwenye mazingira ya simu na wavuti.' : 'Tailored integration kits for rapid deployment in mobile and web environments with native bindings.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', image: SDK, span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-24 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Uratibu' : 'Orchestration',
      description: isSw ? 'Kuunganisha na kuratibu mifumo ya AI iliyopo ndani ya majukwaa salama ya data.' : 'Integrating and orchestrating existing AI models within secure data platforms with custom governance and workflows.',
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70', image: orchestration, span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Ubunifu wa Picha' : 'Graphics Design',
      description: isSw ? 'Picha, nembo, na mabango ya biashara yaliyoandaliwa kwa ubora wa juu yanayovutia wateja mara moja.' : 'Professional graphic designs, branding guidelines, and visual identity materials crafted in bold, modern styles.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', image: bannerGraphics, span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-20 w-[85%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Masoko ya Kidijitali' : 'Digital Marketing',
      description: isSw ? 'Matangazo yaliyolengwa mtandaoni na mbinu za mitandao ya kijamii zinazoongeza wateja na mauzo halisi.' : 'High-ROI digital marketing campaigns, social media management, and search engine optimization built for revenue growth.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', image: bannerMarketing, span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-20 w-[90%] h-auto object-contain drop-shadow-2xl'
    },
    {
      title: isSw ? 'Uandishi wa Wasifu' : 'Resume Writing',
      description: isSw ? 'CV na barua za maombi ya kazi za kitaalamu zinazokusaidia kupata fursa bora za ajira kwa haraka.' : 'Persuasive executive CVs, cover letters, and professional portfolio writing that help candidates stand out.',
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70', image: bannerResume, span: 'md:col-span-12', height: 'h-[480px]', imgClass: 'absolute -bottom-24 -right-20 w-[60%] h-auto object-contain drop-shadow-2xl'
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
          <header className="max-w-[1400px] mx-auto text-center mb-16">
            <motion.h1
              className="text-[5rem] md:text-[12rem] lg:text-[18rem] font-bold tracking-[-0.05em] leading-[0.85]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {isSw ? 'Bidhaa zetu zinaendesha' : 'Our products power'}
              </span>
              <span className="block text-[#3E9C8F]">
                {isSw ? 'maamuzi ya muda halisi' : 'real-time decisions'}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-12 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {isSw
                ? 'Bidhaa zetu zinaendesha maamuzi ya muda halisi, ya kuongozwa na AI katika biashara muhimu za Afrika Mashariki.'
                : 'Our products power real-time, AI-driven decisions in critical commercial enterprises in East Africa, from the factory floors to the front lines.'}
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
              <span className="block text-black">
                {isSw ? 'Bidhaa tunazo' : 'Products we'}
              </span>
              <span className="block text-[#3E9C8F]">
                {isSw ? 'jenga kwa ajili yako' : 'build for you'}
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
          <header className="max-w-[1400px] mx-auto text-center">
            <motion.h2
              className="text-[5rem] md:text-[12rem] lg:text-[18rem] font-bold tracking-[-0.05em] leading-[0.85]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">
                {isSw ? 'Kuna mengi sana' : 'There is so much'}
              </span>
              <span className="block text-[#3E9C8F]">
                {isSw ? 'yaliyobaki kujenga' : 'left to build'}
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-12 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {isSw
                ? 'Wahandisi wa ANTERA wanatoa matokeo yenye tija kwa taasisi muhimu za Afrika Mashariki.'
                : 'ANTERA engineers deliver mission-critical outcomes for East Africa\'s most important institutions.'}
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
                {t('common.learn_more') || (isSw ? 'Jifunze Zaidi' : 'Learn More')}
              </Link>
            </motion.div>
          </header>
        </div>

      </section>
    </MotionWrapper>
  );
};

export default ProductsPage;