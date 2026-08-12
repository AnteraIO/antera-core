'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import mobileAppImage from '../assets/mobile-app.png';
import webCommandImage from '../assets/web-command.png';
import businessIntelligenceImage from '../assets/Business-Intelligence.png';
import predictiveAnalyticsImage from '../assets/Predictive-Analytics.png';
import realTimeDashboardsImage from '../assets/Real-Time-Dashboards.png';
import customerInsightsImage from '../assets/Customer-Insights.png';
import performanceMonitoringImage from '../assets/Performance-Monitoring.png';
import decisionSupportSystemsImage from '../assets/Decision-Support-Systems.png';

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export const CommunicationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const channels = [
    { name: 'AI Chatbots', desc: 'Sleek, context-aware chatbot models.' },
    { name: 'SMS Solutions', desc: 'Secure, targeted localized messaging channels.' },
    { name: 'USSD Menu', desc: 'High-visibility lightweight interactive modules.' },
    { name: 'Workflow Automation', desc: 'Reduce latency on manual and repetitive tasks.' },
    { name: 'Security Infrastructures', desc: 'Advanced defensive layers for system integrity.' },
    { name: 'System Integrations', desc: 'Connect distributed databases securely.' },
  ];

  return (
    <section ref={containerRef} id="solutions" className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Automate <span className="text-neutral-400 block font-normal">Work.</span>
          </motion.h1>
          <motion.p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-8 font-light"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          >
            Connect with your customers and automate workflows. We help you solve manual and repetitive tasks while improving response times and staff productivity.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-200 bg-white shadow-sm"
          >
            {channels.map((channel, i) => (
              <motion.a href="#" key={i} variants={itemVariants} custom={i}
                className="group p-8 md:p-12 min-h-[220px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors duration-300 border-b md:border-b-0 lg:border-r border-neutral-200 last:border-r-0 cursor-pointer"
              >
                <div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6 group-hover:scale-150 transition-transform duration-300" />
                  <h3 className="text-xl font-light tracking-tight text-black mb-2">{channel.name}</h3>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{channel.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FA520F] transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ApplicationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital <span className="text-neutral-400 block font-normal">Platforms.</span>
          </motion.h1>
          <motion.p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-8 font-light"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          >
            We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 border border-neutral-200 bg-white shadow-sm"
          >
            <motion.div variants={itemVariants} className="group p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors duration-300 border-b lg:border-b-0 lg:border-r border-neutral-200">
              <div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />
                <h3 className="text-2xl font-light tracking-tight mt-4 mb-3">Web & Mobile Applications</h3>
                <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">Secure, scalable digital platforms that support growth and improve user experience across all devices.</p>
              </div>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="mt-8 border border-black/10 overflow-hidden shadow-sm">
                <Image src={mobileAppImage} alt="Mobile App Interface" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="group p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors duration-300">
              <div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />
                <h3 className="text-2xl font-light tracking-tight mt-4 mb-3">Corporate Digital Portals</h3>
                <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">Improve brand credibility and digital presence with integrated business systems and secure development practices.</p>
              </div>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="mt-8 border border-black/10 overflow-hidden shadow-sm">
                <Image src={webCommandImage} alt="Web Command Dashboard" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const DataIntelligenceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const features = [
    { title: 'Executive Dashboards', image: businessIntelligenceImage },
    { title: 'Predictive Analytics', image: predictiveAnalyticsImage },
    { title: 'Data Pipelines', image: realTimeDashboardsImage },
    { title: 'Single Source of Truth', image: customerInsightsImage },
    { title: 'Data Governance', image: performanceMonitoringImage },
    { title: 'Forecasting Insights', image: decisionSupportSystemsImage },
  ];

  return (
    <section ref={containerRef} id="models" className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Data into <span className="text-neutral-400 block font-normal">Decisions.</span>
          </motion.h1>
          <motion.p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-8 font-light"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          >
            We build data systems leadership can trust, from clean pipelines to executive dashboards. Turn data into actionable insights for smarter decision making.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-200 bg-white shadow-sm"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={itemVariants} custom={i}
                className="group p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors duration-300 border-b md:border-b-0 lg:border-r border-neutral-200 last:border-r-0"
              >
                <div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />
                  <h3 className="text-xl font-light tracking-tight mt-4 mb-3">{feature.title}</h3>
                </div>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="mt-4 border border-black/5 overflow-hidden shadow-sm">
                  <Image src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
                </motion.div>
              </motion.div>
            ))}
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};