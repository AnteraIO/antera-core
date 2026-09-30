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

// ==========================================
// SECTION 1 — Communication
// ==========================================
export const CommunicationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const cards = [
    {
      isVideo: true,
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents that qualify leads, answer support queries, and book appointments around the clock.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70',
      span: 'md:col-span-7', height: 'h-[560px]',
    },
    {
      title: 'System Development',
      description: 'Custom software built end to end, from architecture to deployment, around your exact workflow.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      image: mobileAppImage,
      span: 'md:col-span-5', height: 'h-[560px]',
      imgClass: 'absolute -bottom-20 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Data Analytics',
      description: 'Clean pipelines and dashboards that turn raw operational data into decisions you can actually act on.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70',
      image: realTimeDashboardsImage,
      span: 'md:col-span-5', height: 'h-[520px]',
      imgClass: 'absolute -bottom-24 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Workflow Automation',
      description: 'Remove repetitive manual steps across your business and let systems do the work they were meant to.',
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70',
      image: predictiveAnalyticsImage,
      span: 'md:col-span-7', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Security Infrastructures',
      description: 'Layered defenses, access control, and monitoring to keep your data and operations safe.',
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70',
      image: performanceMonitoringImage,
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'System Integrations',
      description: 'Connect your tools, CRMs, and data sources so information flows where it needs to without friction.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      image: webCommandImage,
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full pt-32 pb-32 scroll-smooth">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          {/* HEADER — centered */}
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Automate work that</span>
              <span className="block text-[#3E9C8F]">excite and inspire</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Connect with your customers and automate workflows. We help you solve manual and repetitive tasks while improving response times and staff productivity.
            </motion.p>

            {/* Scrolls down to the video card, doesn't open the video */}
            <motion.a
              href="#showreel"
              className="inline-flex items-center gap-4 mt-12 group"
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

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                id={card.isVideo ? 'showreel' : undefined}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer scroll-mt-32 ${card.color} ${card.text} ${card.span} ${card.height}`}
              >
                {card.isVideo ? (
                  <video
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-[1.15] transition-opacity duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-60"
                  />
                ) : (
                  <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                    <Image src={card.image!} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                  </div>
                )}

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
      </section>
    </MotionWrapper>
  );
};

// ==========================================
// SECTION 2 — Application
// ==========================================
export const ApplicationSection = () => {
  const cards = [
    {
      title: 'Secure, scalable digital platforms.',
      description: 'Support growth and improve user experience across all devices. Built for performance and longevity.',
      image: mobileAppImage,
      bg: 'bg-[#E8ECEF]', text: 'text-black', sub: 'text-black/70',
      imgClass: 'absolute -bottom-32 -right-32 w-[80%] md:w-[70%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Improve brand credibility.',
      description: 'Integrated business systems and secure development practices for a stronger digital presence.',
      image: webCommandImage,
      bg: 'bg-[#0A0A0A]', text: 'text-white', sub: 'text-white/70',
      imgClass: 'absolute -bottom-32 -right-32 w-[85%] md:w-[75%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section className="bg-white text-black font-sans w-full py-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Built for growth that</span>
              <span className="block text-[#3E9C8F]">designed for people</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs.
            </motion.p>

            <motion.a
              href="#showreel"
              className="inline-flex items-center gap-4 mt-12 group"
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

          <div className="flex flex-col gap-3">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className={`group relative overflow-hidden ${card.bg} ${card.text} min-h-[640px] lg:min-h-[820px] p-8 md:p-14 flex flex-col justify-start cursor-pointer`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${card.imgClass}`}>
                  <Image src={card.image} alt={card.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                <div className="relative z-20 max-w-3xl">
                  <h3 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-[-0.03em] leading-[1.02]">{card.title}</h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-3xl md:text-4xl ${card.sub} mt-6 leading-[1.25] max-w-2xl`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

// ==========================================
// SECTION 3 — Data Intelligence
// ==========================================
export const DataIntelligenceSection = () => {
  const features = [
    { title: 'Executive Dashboards', description: 'A single, clear view of the metrics that drive decisions, from revenue to operations, updated live.', image: businessIntelligenceImage, color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70', span: 'md:col-span-7', height: 'h-[560px]', imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Predictive Analytics', description: 'Forecast demand, churn, and revenue with models trained on your own historical data.', image: predictiveAnalyticsImage, color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', span: 'md:col-span-5', height: 'h-[560px]', imgClass: 'absolute -bottom-24 -right-24 w-[105%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Data Pipelines', description: 'Automated flows that collect, clean, and centralize data from every system you use.', image: realTimeDashboardsImage, color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70', span: 'md:col-span-5', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Single Source of Truth', description: 'One trusted dataset everyone agrees on, ending spreadsheet chaos and conflicting reports.', image: customerInsightsImage, color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70', span: 'md:col-span-7', height: 'h-[520px]', imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Data Governance', description: 'Policies, lineage, and access controls so your data stays accurate, compliant, and auditable.', image: performanceMonitoringImage, color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70', span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl' },
    { title: 'Forecasting Insights', description: 'Scenario planning and forward-looking models to help leadership prepare for what is next.', image: decisionSupportSystemsImage, color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70', span: 'md:col-span-6', height: 'h-[480px]', imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl' },
  ];

  return (
    <MotionWrapper>
      <section className="bg-white text-black font-sans w-full py-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-5xl mx-auto text-center mb-24">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.98]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Turn data into decisions that</span>
              <span className="block text-[#3E9C8F]">get actionable insights</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-10 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              We build data systems leadership can trust, from clean pipelines to executive dashboards.
            </motion.p>

            <motion.a
              href="#showreel"
              className="inline-flex items-center gap-4 mt-12 group"
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

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`group relative overflow-hidden flex flex-col justify-start p-8 md:p-10 cursor-pointer ${feature.color} ${feature.text} ${feature.span} ${feature.height}`}
              >
                <div className={`pointer-events-none transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-60 ${feature.imgClass}`}>
                  <Image src={feature.image} alt={feature.title} className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                <div className="relative z-20 max-w-[85%]">
                  <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05]">
                    {feature.title}
                  </h3>

                  <div className="overflow-hidden">
                    <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className={`text-2xl md:text-3xl ${feature.subText} mt-5 leading-[1.3] max-w-lg`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};