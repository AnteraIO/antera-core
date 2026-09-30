'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

import mobileAppImage from '../assets/mobile-app.png';
import webCommandImage from '../assets/web-command.png';
import businessIntelligenceImage from '../assets/Business-Intelligence.png';
import predictiveAnalyticsImage from '../assets/Predictive-Analytics.png';
import realTimeDashboardsImage from '../assets/Real-Time-Dashboards.png';
import customerInsightsImage from '../assets/Customer-Insights.png';
import performanceMonitoringImage from '../assets/Performance-Monitoring.png';
import decisionSupportSystemsImage from '../assets/Decision-Support-Systems.png';

import heroVideo from '../assets/antera-video.mp4';

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

export const CompanyPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const workCards = [
    { title: 'Assess', description: 'Understand business goals, systems, and risks before any work begins.', color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', image: businessIntelligenceImage, span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Design', description: 'Create secure, scalable, and practical architectures.', color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', image: mobileAppImage, span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Deliver', description: 'Implement solutions in clear phases and milestones.', color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', image: realTimeDashboardsImage, span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-24 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Optimize', description: 'Measure impact and continuously improve performance.', color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70', image: predictiveAnalyticsImage, span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl' },
  ];

  const valueCards = [
    { title: 'Security first', description: 'Every solution starts with protecting your data and systems.', color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', image: performanceMonitoringImage, span: 'md:col-span-7', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Outcome driven', description: 'Practical solutions that deliver real business results.', color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70', image: customerInsightsImage, span: 'md:col-span-5', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-20 w-[90%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Transparency', description: 'Clear communication and accountability at every step.', color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', image: decisionSupportSystemsImage, span: 'md:col-span-5', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Continuous learning', description: 'Always improving and staying ahead of technology trends.', color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', image: webCommandImage, span: 'md:col-span-7', height: 'h-[480px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Our expertise', description: 'Strong technical skills paired with practical business understanding across cloud, AI, data, and cybersecurity.', color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70', image: businessIntelligenceImage, span: 'md:col-span-8', height: 'h-[440px]', imgClass: 'absolute -bottom-24 -right-20 w-[70%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Accountability', description: 'We take ownership of outcomes and stand by our work.', color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', image: mobileAppImage, span: 'md:col-span-4', height: 'h-[440px]', imgClass: 'absolute -bottom-20 -right-16 w-[100%] h-auto object-contain drop-shadow-2xl' },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full pt-32 pb-32 scroll-smooth">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

        {/* ==========================================
            HERO
        ========================================== */}
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 mb-32">
          <header className="max-w-5xl mx-auto text-center mb-16">
            <motion.p
              className="text-xs md:text-sm font-medium tracking-[0.25em]  text-neutral-500 mb-8"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              About Antera Technologies.
            </motion.p>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">A technology partner</span>
              <span className="block text-[#3E9C8F]">working from Africa for the world</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Welcome to Antera. We started out as a specialist software and systems engineering team, crafting bespoke digital platforms for premium clients across Africa. That is still the core of the business, but we now offer a range of services across cloud, AI, data, and cybersecurity.
            </motion.p>

            {/* Fixed: scrolls to the Work section below */}
            <motion.a
              href="#how-we-work"
              className="inline-flex items-center gap-4 mt-12 group cursor-pointer"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-colors duration-300 group-hover:bg-black">
                <Play className="w-4 h-4 fill-black group-hover:fill-white transition-colors duration-300" />
              </span>
              <span className="text-base md:text-lg font-medium border-b-2 border-black pb-0.5">
                Watch our showreel
              </span>
            </motion.a>
          </header>
        </div>

        {/* ==========================================
            HOW WE WORK — this is where showreel scrolls to
        ========================================== */}
        <div id="how-we-work" className="w-full max-w-[1600px] mx-auto px-6 md:px-10 mb-32 scroll-mt-24">
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h2
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Four steps from</span>
              <span className="block text-[#3E9C8F]">problem to outcome</span>
            </motion.h2>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {workCards.map((card, i) => (
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

        {/* ==========================================
            VALUES
        ========================================== */}
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 mb-32">
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h2
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Principles that</span>
              <span className="block text-[#3E9C8F]">guide every project</span>
            </motion.h2>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {valueCards.map((card, i) => (
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

        {/* ==========================================
            CLOSING
        ========================================== */}
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Do it all</span>
              <span className="block text-[#3E9C8F]">with Antera</span>
            </motion.h2>
          </header>
        </div>

      </section>
    </MotionWrapper>
  );
};

export default CompanyPage;