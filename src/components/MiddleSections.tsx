'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import {
  ArrowRight,
  Bot,
  MessageSquare,
  Hash,
  Workflow,
  ShieldCheck,
  Link as LinkIcon,
  Smartphone,
  Monitor,
  LayoutDashboard,
  LineChart,
  Database,
  CheckCircle2,
  FileSpreadsheet,
  TrendingUp
} from 'lucide-react';
import mobileAppImage from '../assets/mobile-app.png';
import webCommandImage from '../assets/web-command.png';
import businessIntelligenceImage from '../assets/Business-Intelligence.png';
import predictiveAnalyticsImage from '../assets/Predictive-Analytics.png';
import realTimeDashboardsImage from '../assets/Real-Time-Dashboards.png';
import customerInsightsImage from '../assets/Customer-Insights.png';
import performanceMonitoringImage from '../assets/Performance-Monitoring.png';
import decisionSupportSystemsImage from '../assets/Decision-Support-Systems.png';

const PixelChatbotIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Bot className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelSmsIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <MessageSquare className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelUssdIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Hash className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelWorkflowIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Workflow className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelSecurityIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <ShieldCheck className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelIntegrationIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <LinkIcon className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelMobileIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Smartphone className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelWebIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Monitor className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelDashboardIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <LayoutDashboard className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelAnalyticsIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <LineChart className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelPipelineIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Database className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelTruthIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <CheckCircle2 className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelGovernanceIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FileSpreadsheet className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

const PixelForecastIcon = () => (
  <motion.div
    className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center text-black relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <TrendingUp className="w-7 h-7 stroke-[1.5]" />
  </motion.div>
);

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
    <section ref={containerRef} id="solutions" className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 className="text-7xl md:text-9xl lg:text-[10rem] font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Automate <span className="text-neutral-400 block">Work.</span>
          </motion.h1>
          <motion.p className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-[#1F1F1F] mx-auto mt-8 font-medium"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          >
            Connect with your customers and automate workflows. We help you solve manual and repetitive tasks while improving response times and staff productivity.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-200 bg-white"
          >
            {channels.map((channel, i) => (
              <motion.a href="#" key={i} variants={itemVariants} custom={i}
                className="group p-8 md:p-12 min-h-[200px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b md:border-b-0 lg:border-r border-neutral-200 last:border-r-0 cursor-pointer"
              >
                <channel.icon />
                <div className="mt-auto flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black">{channel.name}</h3>
                  <ArrowRight className="w-5 h-5 text-black transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
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
          <motion.h1 className="text-7xl md:text-9xl lg:text-[10rem] font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital <span className="text-neutral-400 block">Platforms.</span>
          </motion.h1>
          <motion.p className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-[#1F1F1F] mx-auto mt-8 font-medium"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          >
            We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 border border-neutral-200 bg-white"
          >
            <motion.div variants={itemVariants} className="group p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b lg:border-b-0 lg:border-r border-neutral-200">
              <div>
                <PixelMobileIcon />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-8 mb-3">Web & Mobile Applications</h3>
                <p className="text-base md:text-lg text-[#1F1F1F] font-medium leading-relaxed">Secure, scalable digital platforms that support growth and improve user experience across all devices.</p>
              </div>
              <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.5 }} className="mt-8 border border-black/10 overflow-hidden">
                <Image src={mobileAppImage} alt="Mobile App Interface" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="group p-8 md:p-12 min-h-[500px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors">
              <div>
                <PixelWebIcon />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-8 mb-3">Corporate Digital Portals</h3>
                <p className="text-base md:text-lg text-[#1F1F1F] font-medium leading-relaxed">Improve brand credibility and digital presence with integrated business systems and secure development practices.</p>
              </div>
              <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.5 }} className="mt-8 border border-black/10 overflow-hidden">
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
    { title: 'Executive Dashboards', image: businessIntelligenceImage, icon: PixelDashboardIcon },
    { title: 'Predictive Analytics', image: predictiveAnalyticsImage, icon: PixelAnalyticsIcon },
    { title: 'Data Pipelines', image: realTimeDashboardsImage, icon: PixelPipelineIcon },
    { title: 'Single Source of Truth', image: customerInsightsImage, icon: PixelTruthIcon },
    { title: 'Data Governance', image: performanceMonitoringImage, icon: PixelGovernanceIcon },
    { title: 'Forecasting Insights', image: decisionSupportSystemsImage, icon: PixelForecastIcon },
  ];

  return (
    <section ref={containerRef} id="models" className="bg-[#FAFAF8] text-black font-sans antialiased w-full overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 className="text-7xl md:text-9xl lg:text-[10rem] font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Data into <span className="text-neutral-400 block">Decisions.</span>
          </motion.h1>
          <motion.p className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-[#1F1F1F] mx-auto mt-8 font-medium"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          >
            We build data systems leadership can trust, from clean pipelines to executive dashboards. Turn data into actionable insights for smarter decision making.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-200 bg-white"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={itemVariants} custom={i}
                className="group p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b md:border-b-0 lg:border-r border-neutral-200 last:border-r-0"
              >
                <div>
                  <feature.icon />
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mt-8 mb-3">{feature.title}</h3>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="mt-4 border border-black/5 overflow-hidden">
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