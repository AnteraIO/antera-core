'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import {
  ArrowRight,
  MessageSquare,
  MessageSquareCode,
  Hash,
  GitBranch,
  Shield,
  Cpu,
  Smartphone,
  Globe,
  LayoutDashboard,
  LineChart,
  Database,
  Fingerprint,
  Scale,
  Sparkles
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
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-[#FA520F] flex items-center justify-center shadow-lg shadow-orange-500/10 border border-[#FA520F]/20"
  >
    <MessageSquare className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelSmsIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/10 border border-blue-500/20"
  >
    <MessageSquareCode className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelUssdIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/10 border border-amber-500/20"
  >
    <Hash className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelWorkflowIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-emerald-500/20"
  >
    <GitBranch className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelSecurityIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/10 border border-red-500/20"
  >
    <Shield className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelIntegrationIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/10 border border-violet-500/20"
  >
    <Cpu className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelMobileIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-[#FA520F] flex items-center justify-center shadow-lg shadow-orange-500/10 border border-[#FA520F]/20"
  >
    <Smartphone className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelWebIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/10 border border-blue-500/20"
  >
    <Globe className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelDashboardIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-emerald-500/20"
  >
    <LayoutDashboard className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelAnalyticsIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/10 border border-amber-500/20"
  >
    <LineChart className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelPipelineIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/10 border border-red-500/20"
  >
    <Database className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelTruthIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/10 border border-violet-500/20"
  >
    <Fingerprint className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelGovernanceIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/10 border border-cyan-500/20"
  >
    <Scale className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelForecastIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-slate-500 flex items-center justify-center shadow-lg shadow-slate-500/10 border border-slate-500/20"
  >
    <Sparkles className="w-6 h-6 text-white" />
  </motion.div>
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