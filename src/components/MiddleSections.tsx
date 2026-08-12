'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { ArrowRight } from 'lucide-react';
import mobileAppImage from '../assets/mobile-app.png';
import webCommandImage from '../assets/web-command.png';
import businessIntelligenceImage from '../assets/Business-Intelligence.png';
import predictiveAnalyticsImage from '../assets/Predictive-Analytics.png';
import realTimeDashboardsImage from '../assets/Real-Time-Dashboards.png';
import customerInsightsImage from '../assets/Customer-Insights.png';
import performanceMonitoringImage from '../assets/Performance-Monitoring.png';
import decisionSupportSystemsImage from '../assets/Decision-Support-Systems.png';

const PixelChatbotIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="7" y="8" width="10" height="6" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <circle cx="10" cy="11" r="1" fill="white"/>
    <circle cx="14" cy="11" r="1" fill="white"/>
    <path d="M9 17v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelSmsIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <rect x="6" y="7" width="12" height="8" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <path d="M6 11h12" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelUssdIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <rect x="7" y="6" width="10" height="2" rx="0.5" fill="white"/>
    <rect x="7" y="10" width="10" height="2" rx="0.5" fill="white"/>
    <rect x="7" y="14" width="6" height="2" rx="0.5" fill="white"/>
  </motion.svg>
);

const PixelWorkflowIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <rect x="6" y="7" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="14" y="7" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="6" y="14" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="14" y="14" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <path d="M10 8.5h4M8 10v4M16 10v4M10 15.5h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelSecurityIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1"/>
    <path d="M12 3s-7 3-7 9c0 3.5 3 7 7 7s7-3.5 7-7c0-6-7-9-7-9z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelIntegrationIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1"/>
    <rect x="6" y="6" width="4" height="4" fill="white"/>
    <rect x="14" y="6" width="4" height="4" fill="white"/>
    <rect x="6" y="14" width="4" height="4" fill="white"/>
    <rect x="14" y="14" width="4" height="4" fill="white"/>
    <path d="M10 8h4M8 10v4M16 10v4M10 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelMobileIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="8" y="7" width="8" height="10" rx="1" stroke="white" strokeWidth="1.5"/>
    <path d="M10 6h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelWebIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <rect x="6" y="8" width="12" height="8" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <path d="M6 11h12" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelDashboardIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <rect x="7" y="7" width="4" height="4" rx="0.5" fill="white"/>
    <rect x="13" y="7" width="4" height="4" rx="0.5" fill="white"/>
    <rect x="7" y="13" width="4" height="4" rx="0.5" fill="white"/>
    <rect x="13" y="13" width="4" height="4" rx="0.5" fill="white"/>
  </motion.svg>
);

const PixelAnalyticsIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M6 16l4-6 3 4 5-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelPipelineIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1"/>
    <rect x="6" y="9" width="4" height="6" rx="0.5" fill="white"/>
    <rect x="10" y="7" width="4" height="8" rx="0.5" fill="white"/>
    <rect x="14" y="11" width="4" height="4" rx="0.5" fill="white"/>
  </motion.svg>
);

const PixelTruthIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1"/>
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="white"/>
  </motion.svg>
);

const PixelGovernanceIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#06B6D4" stroke="#0891B2" strokeWidth="1"/>
    <rect x="7" y="7" width="10" height="2" rx="0.5" fill="white"/>
    <rect x="7" y="11" width="8" height="2" rx="0.5" fill="white"/>
    <rect x="7" y="15" width="6" height="2" rx="0.5" fill="white"/>
  </motion.svg>
);

const PixelForecastIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#64748B" stroke="#475569" strokeWidth="1"/>
    <path d="M7 17l3-4 3 2 4-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 7v4h-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export const CommunicationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const channels = [
    { name: 'AI Chatbots', icon: PixelChatbotIcon },
    { name: 'SMS Solutions', icon: PixelSmsIcon },
    { name: 'USSD MENU', icon: PixelUssdIcon },
    { name: 'Workflow Automation', icon: PixelWorkflowIcon },
    { name: 'Security Infrastructures', icon: PixelSecurityIcon },
    { name: 'System Integrations', icon: PixelIntegrationIcon },
  ];

  return (
    <section ref={containerRef} id="solutions" className="bg-white text-black font-sans w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Automate Work. Save Time. Improve Productivity.
          </motion.h1>
          <motion.p className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }}
          >
            Connect with your customers and automate workflows. We help you solve manual and repetitive tasks while improving response times and staff productivity.
          </motion.p>
        </header>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {channels.map((channel, i) => (
            <motion.a href="#" key={i} variants={itemVariants} custom={i}
              className="group bg-[#F5F5F5] p-8 md:p-10 flex flex-col justify-between cursor-pointer"
            >
              <channel.icon />
              <div className="mt-auto flex items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-normal tracking-tight text-black group-hover:text-[#FA520F] transition-colors duration-200">{channel.name}</h3>
                <ArrowRight className="w-5 h-5 text-black transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.a>
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
    <section ref={containerRef} className="bg-white text-black font-sans w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital Platforms.
          </motion.h1>
          <motion.p className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }}
          >
            We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs.
          </motion.p>
        </header>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="group bg-[#F5F5F5] p-8 md:p-12 min-h-[500px] flex flex-col justify-between">
            <div>
              <PixelMobileIcon />
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mt-8 mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Web & Mobile Applications</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">Secure, scalable digital platforms that support growth and improve user experience across all devices.</p>
            </div>
            <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.5 }} className="mt-8 overflow-hidden">
              <Image src={mobileAppImage} alt="Mobile App Interface" className="w-full h-auto object-cover" />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="group bg-[#F5F5F5] p-8 md:p-12 min-h-[500px] flex flex-col justify-between">
            <div>
              <PixelWebIcon />
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mt-8 mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Corporate Digital Portals</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">Improve brand credibility and digital presence with integrated business systems and secure development practices.</p>
            </div>
            <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.5 }} className="mt-8 overflow-hidden">
              <Image src={webCommandImage} alt="Web Command Dashboard" className="w-full h-auto object-cover" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const DataIntelligenceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const features = [
    { title: 'Executive Dashboards', image: businessIntelligenceImage, icon: PixelDashboardIcon },
    { title: 'Predictive Analytics', image: predictiveAnalyticsImage, icon: PixelAnalyticsIcon },
    { title: 'Data Pipelines', image: realTimeDashboardsImage, icon: PixelPipelineIcon },
    { title: 'Single Source of Truth', image: customerInsightsImage, icon: PixelTruthIcon },
    { title: 'Data Governance', image: performanceMonitoringImage, icon: PixelGovernanceIcon },
    { title: 'Forecasting Insights', image: decisionSupportSystemsImage, icon: PixelForecastIcon },
  ];

  return (
    <section ref={containerRef} id="models" className="bg-white text-black font-sans w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Turn Data into Decisions. Get Actionable Insights.
          </motion.h1>
          <motion.p className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }}
          >
            We build data systems leadership can trust, from clean pipelines to executive dashboards. Turn data into actionable insights for smarter decision making.
          </motion.p>
        </header>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={itemVariants} custom={i}
              className="group bg-[#F5F5F5] p-8 md:p-12 flex flex-col justify-between"
            >
              <div>
                <feature.icon />
                <h3 className="text-2xl md:text-3xl font-normal tracking-tight mt-8 mb-3 group-hover:text-[#FA520F] transition-colors duration-200">{feature.title}</h3>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="mt-4 overflow-hidden">
                <Image src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};