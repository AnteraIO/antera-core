'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import Image from 'next/image';

import mobileAppImage from '../assets/mobile-app.png';
import webCommandImage from '../assets/web-command.png';
import businessIntelligenceImage from '../assets/Business-Intelligence.png';
import predictiveAnalyticsImage from '../assets/Predictive-Analytics.png';
import realTimeDashboardsImage from '../assets/Real-Time-Dashboards.png';
import customerInsightsImage from '../assets/Customer-Insights.png';
import performanceMonitoringImage from '../assets/Performance-Monitoring.png';
import decisionSupportSystemsImage from '../assets/Decision-Support-Systems.png';

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

export const SolutionsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const solutions = [
    {
      title: 'Practical AI & Automation',
      description: 'Imagine a helpful robot that answers your customers, sorts your emails, and books your meetings while you sleep. That is what we build. It saves you hours every day and never gets tired.',
      color: 'bg-[#E8ECEF]', text: 'text-black', subText: 'text-black/70',
      image: businessIntelligenceImage,
      span: 'md:col-span-7', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-20 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Modern Infrastructure',
      description: 'Think of this as the strong foundation under a house. We make sure your apps and websites run fast, never crash, and cost less to keep alive every month.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      image: mobileAppImage,
      span: 'md:col-span-5', height: 'h-[520px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Security & Risk',
      description: 'We put locks on every door and windows on every wall of your digital business. If someone tries to break in, we already have a plan to stop them and fix it fast.',
      color: 'bg-[#0D2A6B]', text: 'text-white', subText: 'text-white/70',
      image: performanceMonitoringImage,
      span: 'md:col-span-5', height: 'h-[520px]',
      imgClass: 'absolute -bottom-24 -right-20 w-[100%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Digital Platforms',
      description: 'Websites, mobile apps, and business systems that just work. Your customers can find you, buy from you, and trust you, on any device, from anywhere in the world.',
      color: 'bg-[#E6007E]', text: 'text-white', subText: 'text-white/70',
      image: webCommandImage,
      span: 'md:col-span-7', height: 'h-[520px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[80%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Managed IT Support',
      description: 'We watch over your computers, printers, and software like a security guard watches a building. If anything breaks, we fix it before you even notice. You focus on your business, we handle the tech.',
      color: 'bg-[#FFC72C]', text: 'text-black', subText: 'text-black/70',
      image: realTimeDashboardsImage,
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-20 -right-16 w-[85%] h-auto object-contain drop-shadow-2xl',
    },
    {
      title: 'Data & Analytics',
      description: 'We turn the piles of numbers you already have into clear, colourful pictures and simple charts. At a glance you can see what is working, what is not, and what to do next. No maths required.',
      color: 'bg-[#0A0A0A]', text: 'text-white', subText: 'text-white/70',
      image: predictiveAnalyticsImage,
      span: 'md:col-span-6', height: 'h-[480px]',
      imgClass: 'absolute -bottom-24 -right-24 w-[110%] h-auto object-contain drop-shadow-2xl',
    },
  ];

  return (
    <MotionWrapper>
      <section ref={containerRef} className="bg-white text-black font-sans w-full pt-32 pb-32 relative overflow-hidden">
        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">
          <header className="max-w-[1400px] mx-auto text-center mb-24">
            <motion.h1
              className="text-[5rem] md:text-[12rem] lg:text-[18rem] font-bold tracking-[-0.05em] leading-[0.85]"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
            >
              <span className="block text-black">Do it all</span>
              <span className="block text-[#3E9C8F]">with Antera</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-[1.55] text-neutral-700 mt-12 max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              We implement practical AI and technology solutions that reduce repetitive work while keeping systems secure and governed. Simple enough for anyone to understand. Powerful enough for the enterprise.
            </motion.p>
          </header>

          <motion.div
            variants={gridVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {solutions.map((card, i) => (
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
      </section>
    </MotionWrapper>
  );
};

export default SolutionsPage;