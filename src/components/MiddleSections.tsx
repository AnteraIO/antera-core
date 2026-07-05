'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StaticImageData } from 'next/image';
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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export const CommunicationSection = () => {
  const { scrollYProgress } = useScroll();
  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const channels = [
    { name: 'AI Chatbots' },
    { name: 'SMS Solutions'},
    { name: 'USSD MENU'},
    { name: 'Workflow Automation' },
    { name: 'Security Infrastructures' },
    { name: 'System Integrations'},
  ];

  return (
    <motion.section 
      id="solutions" 
      className="bg-[#FBFBFB] border-b border-black/10 text-black font-sans antialiased w-full overflow-hidden perspective-[1500px]"
      style={{ y: sectionY, opacity }}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex flex-col lg:flex-row items-stretch max-w-[1440px]"
      >
        
        {/* Left Core Structural Copy Block */}
        <motion.div
          variants={itemVariants}
          className="lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/10 bg-[#FBFBFB] transform-style-3d"
        >
          <div>
            <div className="flex items-center gap-3 mb-8 select-none">
              <motion.svg 
                whileHover={{ scale: 1.15, rotate: 5 }} 
                transition={{ type: "spring", stiffness: 300 }}
                width="22" 
                height="22" 
                viewBox="0 0 10 10" 
                fill="none" 
                className="text-black"
              >
                <path d="M2 1h6v1H2V1zm-1 2h8v4H1V3zm2 5h4v1H3V8z" fill="currentColor"/>
              </motion.svg>
              <motion.svg 
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                width="22" 
                height="22" 
                viewBox="0 0 10 10" 
                fill="none" 
                className="text-black"
              >
                <path d="M1 2h8v6H1V2zm2 2h4v2H3V4z" fill="currentColor"/>
              </motion.svg>
            </div>

            <h2 className="text-[2.5rem] md:text-[3rem] font-normal tracking-tight leading-[1.1] mb-6">
              Automate <span className="text-neutral-400 block">Work.</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-md">
              Connect with your customers and automate workflows. We help you solve manual and repetitive tasks while improving response times and staff productivity.
            </p>
          </div>
          
          <div className="mt-16 pt-6 border-t border-black/10 flex items-center justify-between font-mono text-[9px] text-neutral-400 tracking-wider uppercase font-bold">
          </div>
        </motion.div>

        <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 items-stretch bg-white">
          {channels.map((channel, i) => (
            <motion.a
              href="#" 
              key={i} 
              variants={itemVariants}
              custom={i}
              className="p-8 bg-white flex flex-col justify-between group relative transition-all duration-500 min-h-[180px] hover:bg-[#FAFAFA] border-b border-r border-black/10 transform-style-3d hover:translate-z-8 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)]"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />

              <div className="relative flex items-center justify-between w-full mb-12">
                <motion.svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 10 10" 
                  fill="none" 
                  className="text-black group-hover:text-black transition-colors duration-300"
                >
                  <path d="M2 2h6v1H2V2zm0 3h4v1H2V5zm0 3h5v1H2V8z" fill="currentColor"/>
                </motion.svg>
              </div>

              <div className="relative flex items-center justify-between gap-4 mt-auto">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-black transition-colors duration-300 font-mono">
                  {channel.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-black transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400 stroke-[2px]" />
              </div>
            </motion.a>
          ))}
        </div>

      </motion.div>
    </motion.section>
  );
};

export const ApplicationSection = () => {
  const { scrollYProgress } = useScroll();
  const headerX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.3], [2, 0]);

  return (
    <section className="bg-[#FBFBFB] border-b border-black/10 text-black font-sans antialiased w-full flex flex-col overflow-hidden perspective-[1800px]">
      
      {/* Structural Sub-header Horizontal Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: headerX }}
        className="border-b border-black/10 bg-white w-full transform-style-3d"
      >
        <div className="max-w-[1440px] mx-auto p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight leading-none">
              We Develop Digital Platforms
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-md leading-relaxed font-normal">
            We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs.
          </p>
        </div>
      </motion.div>

      {/* Main Structural Grid Block Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/10 bg-white"
      >
        
        {/* Left Slot: Mobile Framework UI */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 lg:p-16 flex flex-col justify-between group hover:bg-[#FAFAFA] transition-all duration-500 transform-style-3d hover:translate-z-6"
        >
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <motion.svg 
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring" }}
                width="26" 
                height="26" 
                viewBox="0 0 12 12" 
                fill="none" 
                className="text-black"
              >
                <path d="M3 1h6v10H3V1zm1 1v6h4V2H4z" fill="currentColor"/>
              </motion.svg>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3 font-mono">
              Web & Mobile Applications
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              Secure, scalable digital platforms that support growth and improve user experience across all devices.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ y: -6, rotateX: 4, scale: 1.02 }}
            style={{ rotateX: imageRotate }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-black/10 bg-white overflow-hidden shadow-sm transform-style-3d"
          >
            <img 
              src={(mobileAppImage as any).src || mobileAppImage}
              alt="Mobile App Interface"
              className="w-full h-auto object-cover transition-transform duration-700"
            />
          </motion.div>
        </motion.div>

        {/* Right Slot: Web Engine UI */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 lg:p-16 flex flex-col justify-between group hover:bg-[#FAFAFA] transition-all duration-500 transform-style-3d hover:translate-z-6"
        >
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <motion.svg 
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: "spring" }}
                width="26" 
                height="26" 
                viewBox="0 0 12 12" 
                fill="none" 
                className="text-black"
              >
                <path d="M1 2h10v7H1V2zm1 2v4h8V4H2z" fill="currentColor"/>
              </motion.svg>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3 font-mono">
              Corporate Digital Portals
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              Improve brand credibility and digital presence with integrated business systems and secure development practices.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ y: -6, rotateX: 4, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-black/10 bg-white overflow-hidden shadow-sm transform-style-3d"
          >
            <img 
              src={(webCommandImage as any).src || webCommandImage}
              alt="Web Command Dashboard"
              className="w-full h-auto object-cover transition-transform duration-700"
            />
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export const DataIntelligenceSection = () => {
  const { scrollYProgress } = useScroll();
  const sectionRotate = useTransform(scrollYProgress, [0, 0.25], [2, 0]);

  const features = [
    { title: 'Executive Dashboards', image: businessIntelligenceImage },
    { title: 'Predictive Analytics', image: predictiveAnalyticsImage },
    { title: 'Data Pipelines', image: realTimeDashboardsImage },
    { title: 'Single Source of Truth', image: customerInsightsImage },
    { title: 'Data Governance', image: performanceMonitoringImage },
    { title: 'Forecasting Insights', image: decisionSupportSystemsImage },
  ];

  return (
    <motion.section 
      id="models" 
      className="bg-white border-b border-black/10 text-black font-sans antialiased w-full overflow-hidden perspective-[1600px]"
      style={{ rotateX: sectionRotate }}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto flex flex-col lg:flex-row items-stretch max-w-[1440px]"
      >
        
        {/* Left Side: Matrix Link Grid layout */}
        <div className="lg:w-7/12 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 bg-white divide-y sm:divide-y-0 sm:divide-x divide-black/10 border-t lg:border-t-0 border-black/10 items-stretch">
          <div className="divide-y divide-black/10 flex flex-col justify-between h-full">
            {features.slice(0, 3).map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                transition={{ delay: i * 0.12 }}
                className="h-full"
              >
                <DataFeatureCard title={f.title} image={f.image} />
              </motion.div>
            ))}
          </div>
          <div className="divide-y divide-black/10 flex flex-col justify-between h-full sm:border-t-0">
            {features.slice(3, 6).map((f, i) => (
              <motion.div
                key={i + 3}
                variants={itemVariants}
                transition={{ delay: (i + 3) * 0.12 }}
                className="h-full"
              >
                <DataFeatureCard title={f.title} image={f.image} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Copy block details */}
        <motion.div
          variants={itemVariants}
          className="lg:w-5/12 order-1 lg:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-between lg:border-l border-black/10 bg-[#FBFBFB] transform-style-3d"
        >
          <div>
            <div className="flex items-center gap-3 mb-8 select-none">
              <motion.svg 
                whileHover={{ rotate: -12, scale: 1.1 }}
                transition={{ type: "spring" }}
                width="22" 
                height="22" 
                viewBox="0 0 10 10" 
                fill="none" 
                className="text-black"
              >
                <path d="M1 1h8v1H1V1zm0 3h8v1H1V4zm0 3h5v1H1V7zm7 0h2v1H8V7z" fill="currentColor"/>
              </motion.svg>
              <motion.svg 
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring" }}
                width="22" 
                height="22" 
                viewBox="0 0 10 10" 
                fill="none" 
                className="text-black"
              >
                <path d="M4 1h2v8H4V1zM1 4h8v2H1V4z" fill="currentColor"/>
              </motion.svg>
            </div>

            <h2 className="text-[2.5rem] md:text-[3rem] font-normal tracking-tight leading-[1.1] mb-6">
              Data into <span className="text-neutral-400 block">Decisions.</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-10">
              We build data systems leadership can trust, from clean pipelines to executive dashboards. Turn data into actionable insights for smarter decision making.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors duration-300 flex items-center justify-between gap-6 w-full sm:max-w-xs group shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <span>View Analytics</span>
              <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform stroke-[2px]" />
            </motion.button>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

const DataFeatureCard = ({ title, image }: { title: string; image: string | StaticImageData }) => (
  <motion.div 
    whileHover={{ translateZ: 12, scale: 1.02, rotateX: 2 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="p-8 lg:p-10 bg-white flex flex-col justify-between group hover:bg-[#FAFAFA] transition-all duration-500 h-full w-full relative transform-style-3d"
  >
    
    <div className="mb-6 overflow-hidden border border-black/5 bg-[#FBFBFB]">
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src={(image as any).src || image}
        alt={title}
        className="w-full h-auto object-cover"
      />
    </div>
    
    <div className="flex items-center justify-between w-full gap-4 mt-auto">
      <h4 className="text-xs font-bold uppercase tracking-wider text-black max-w-[180px] leading-tight group-hover:text-black transition-colors duration-300 font-mono">
        {title}
      </h4>
    </div>
  </motion.div>
);