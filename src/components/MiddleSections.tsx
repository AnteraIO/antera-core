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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export const CommunicationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const channels = [
    { name: 'AI Chatbots', desc: 'Secure, context-aware chatbot deployments trained on company values and schemas.' },
    { name: 'SMS Solutions', desc: 'Sovereign local SMS delivery models integrated safely with your database.' },
    { name: 'USSD Systems', desc: 'Robust off-grid interactive USSD structures for high-reliability consumer touchpoints.' },
    { name: 'Workflow Automation', desc: 'Connect software agents directly to database event streams to optimize internal resources.' },
    { name: 'Security Architecture', desc: 'Protect distributed enterprise networks from targeted exploits and compliance drift.' },
    { name: 'Sovereign Integration', desc: 'Establish resilient API mappings and pipeline structures with distributed nodes.' },
  ];

  return (
    <section ref={containerRef} id="solutions" className="bg-[#0B0B0B] text-white antialiased w-full overflow-hidden border-b border-neutral-900 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Operations Engine</div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-none">
            Automate Work. Streamline Communications.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-400 font-mono tracking-wider font-light max-w-2xl">
            Empower your team with autonomous operations software designed to connect remote agents, tools, and databases with near-zero friction.
          </p>
        </header>

        {/* Palantir Stark 3x2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-800 divide-y md:divide-y-0 lg:divide-y-0 lg:divide-x divide-neutral-800 bg-black"
        >
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group p-8 md:p-12 min-h-[220px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300 border-b border-neutral-800"
            >
              <div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xl font-light tracking-tight text-white mb-2">{channel.name}</h3>
                <p className="text-xs text-neutral-400 font-mono tracking-wide font-light leading-relaxed">{channel.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-end">
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#FA520F] transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const ApplicationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <section ref={containerRef} className="bg-[#0B0B0B] text-white antialiased w-full overflow-hidden border-b border-neutral-900 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Core Systems</div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-none">
            Tailored Digital Platforms.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-400 font-mono tracking-wider font-light max-w-2xl">
            We design, develop, and audit custom high-availability applications configured for minimum latency on local infrastructure networks.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-neutral-800 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 bg-black">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300"
          >
            <div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />
              <h3 className="text-2xl font-light tracking-tight text-white mb-3">Enterprise Web & Mobile Applications</h3>
              <p className="text-xs md:text-sm text-neutral-400 font-mono tracking-wide leading-relaxed font-light">
                Production-ready corporate software mapped perfectly to target end-user behaviors and localized bandwidth limits.
              </p>
            </div>
            <div className="mt-8 border border-neutral-800 overflow-hidden bg-[#121212] p-2">
              <Image src={mobileAppImage} alt="Mobile App Interface" className="w-full h-auto object-cover opacity-70 filter brightness-110 grayscale" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300"
          >
            <div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />
              <h3 className="text-2xl font-light tracking-tight text-white mb-3">Corporate Digital Portals</h3>
              <p className="text-xs md:text-sm text-neutral-400 font-mono tracking-wide leading-relaxed font-light">
                Optimize brand footprint and regulatory compliance with modern, fully-auditable web control terminals.
              </p>
            </div>
            <div className="mt-8 border border-neutral-800 overflow-hidden bg-[#121212] p-2">
              <Image src={webCommandImage} alt="Web Command Dashboard" className="w-full h-auto object-cover opacity-70 filter brightness-110 grayscale" />
            </div>
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
    { title: 'Executive Dashboards', image: businessIntelligenceImage, num: '01' },
    { title: 'Predictive Models', image: predictiveAnalyticsImage, num: '02' },
    { title: 'Telemetry Pipelines', image: realTimeDashboardsImage, num: '03' },
    { title: 'Consolidated Ledgers', image: customerInsightsImage, num: '04' },
    { title: 'Information Security', image: performanceMonitoringImage, num: '05' },
    { title: 'Forecasting Engines', image: decisionSupportSystemsImage, num: '06' },
  ];

  return (
    <section ref={containerRef} id="models" className="bg-[#0B0B0B] text-white antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Decision Systems</div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-none">
            Transform Telemetry into Decisions.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-400 font-mono tracking-wider font-light max-w-2xl">
            Establish clean, high-integrity data pipelines from internal ledgers and field inputs to secure management control screens.
          </p>
        </header>

        {/* Stark Palantir 3x2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-800 divide-y md:divide-y-0 lg:divide-y-0 lg:divide-x divide-neutral-800 bg-black"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-950 transition-colors duration-300 border-b border-neutral-800"
            >
              <div>
                <span className="text-[9px] font-mono tracking-widest text-neutral-600 block mb-6">[{feature.num} // ANALYSIS]</span>
                <h3 className="text-xl font-light tracking-tight text-white mb-3">{feature.title}</h3>
              </div>
              <div className="mt-6 border border-neutral-800 overflow-hidden bg-[#121212] p-1.5 shadow-md">
                <Image src={feature.image} alt={feature.title} className="w-full h-auto object-cover opacity-65 filter grayscale contrast-125" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};