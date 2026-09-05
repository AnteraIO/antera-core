'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import mobileAppImage from '../assets/mobile-app.png';
import webCommandImage from '../assets/web-command.png';
import businessIntelligenceImage from '../assets/Business-Intelligence.png';
import predictiveAnalyticsImage from '../assets/Predictive-Analytics.png';
import realTimeDashboardsImage from '../assets/Real-Time-Dashboards.png';
import customerInsightsImage from '../assets/Customer-Insights.png';
import performanceMonitoringImage from '../assets/Performance-Monitoring.png';
import decisionSupportSystemsImage from '../assets/Decision-Support-Systems.png';

const iconUrls = {
  chatbot: 'https://cdn-icons-png.flaticon.com/128/9095/9095835.png',
  development: 'https://cdn-icons-png.flaticon.com/128/8004/8004415.png',
  analytics: 'https://cdn-icons-png.flaticon.com/128/12775/12775154.png',
  automation: 'https://cdn-icons-png.flaticon.com/128/4429/4429903.png',
  security: 'https://cdn-icons-png.flaticon.com/128/10527/10527707.png',
  integration: 'https://cdn-icons-png.flaticon.com/128/16901/16901433.png',
  smartphone: 'https://cdn-icons-png.flaticon.com/128/5217/5217391.png',
  globe: 'https://cdn-icons-png.flaticon.com/128/9967/9967347.png',
  dashboard: 'https://cdn-icons-png.flaticon.com/128/18287/18287548.png',
  predictive: 'https://cdn-icons-png.flaticon.com/128/2782/2782066.png',
  pipeline: 'https://cdn-icons-png.flaticon.com/128/12610/12610422.png',
  database: 'https://cdn-icons-png.flaticon.com/128/11948/11948089.png',
  governance: 'https://cdn-icons-png.flaticon.com/128/12251/12251807.png',
  forecasting: 'https://cdn-icons-png.flaticon.com/128/3488/3488658.png',
};

const IconImage = ({
  src,
  alt,
  className = "w-16 h-16 object-contain",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <img 
    src={src} 
    alt={alt}
    className={className}
  />
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export const CommunicationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const channels = [
    { name: 'AI Chatbots', icon: iconUrls.chatbot },
    { name: 'System Development', icon: iconUrls.development },
    { name: 'Data Analytics', icon: iconUrls.analytics },
    { name: 'Workflow Automation', icon: iconUrls.automation },
    { name: 'Security Infrastructures', icon: iconUrls.security },
    { name: 'System Integrations', icon: iconUrls.integration },
  ];

  return (
    <section 
      ref={containerRef} 
      id="solutions" 
      className="bg-white text-black font-sans w-full overflow-hidden relative pt-24 pb-32"
    >
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Left Sidebar Column*/}
        <div className="w-full lg:w-1/4 xl:w-1/5 flex flex-col gap-10 lg:sticky top-32 h-fit">
          <div>
            <h3 className="text-sm font-medium text-black">Solutions</h3>
            <p className="text-sm text-neutral-500 mt-1">Automating the future of work</p>
          </div>
          <a href="+255774174921" className="flex items-center gap-2 text-base font-medium border-b border-black w-fit pb-1 hover:opacity-60 transition-opacity">
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Content Column */}
        <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col gap-24">
          
          <header className="max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-[72px] font-normal tracking-[-0.02em] leading-[1.05]"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Automate Work. Save Time. Improve Productivity.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl leading-[1.6] text-neutral-800 mt-8 max-w-3xl"
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Connect with your customers and automate workflows. We help you solve manual and repetitive tasks while improving response times and staff productivity.
            </motion.p>
          </header>

          {/* Core Philosophy */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 lg:gap-16 pt-16 border-t border-neutral-100"
          >
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-medium tracking-tight">Antera Core.</h2>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                {channels.map((channel, i) => {
                  const IconUrl = channel.icon;
                  return (
                    <motion.div 
                      key={i} 
                      variants={itemVariants} 
                      className="group flex items-start gap-4 cursor-pointer"
                    >
                      <div className="bg-neutral-100 p-3 rounded-lg group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <IconImage src={IconUrl} alt={channel.name} className="w-10 h-10 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-black group-hover:underline decoration-1 underline-offset-4 transition-all duration-300">
                          {channel.name}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ApplicationSection = () => {
  return (
    <section className="bg-white text-black font-sans w-full overflow-hidden relative py-24">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Left Sidebar Column */}
        <div className="w-full lg:w-1/4 xl:w-1/5 flex flex-col gap-10 lg:sticky top-32 h-fit">
          <div>
            <h3 className="text-sm font-medium text-black">Platform</h3>
            <p className="text-sm text-neutral-500 mt-1">Digital environments</p>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col gap-24">
          
          <header className="max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-[72px] font-normal tracking-[-0.02em] leading-[1.05]"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Digital Platforms.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl leading-[1.6] text-neutral-800 mt-8 max-w-3xl"
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              We design and develop modern websites and applications that are secure, reliable, and aligned with real business needs.
            </motion.p>
          </header>

          {/* Web & Mobile Block */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-10 pt-16 border-t border-neutral-100"
          >
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
              <div className="w-full md:w-1/3">
                <h2 className="text-2xl font-medium tracking-tight flex items-center gap-3">
                  <IconImage src={iconUrls.smartphone} alt="Web & Mobile" className="w-10 h-10 object-contain" /> Web & Mobile
                </h2>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
                  Secure, scalable digital platforms that support growth and improve user experience across all devices. We build for performance and longevity.
                </p>
              </div>
            </div>
            <motion.div variants={itemVariants} className="w-full overflow-hidden rounded-[2rem] bg-neutral-50">
              <Image src={mobileAppImage} alt="Mobile App Interface" className="w-full h-auto object-cover opacity-90" />
            </motion.div>
          </motion.div>

          {/* Corporate Portals Block */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-10 pt-16 border-t border-neutral-100"
          >
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
              <div className="w-full md:w-1/3">
                <h2 className="text-2xl font-medium tracking-tight flex items-center gap-3">
                  <IconImage src={iconUrls.globe} alt="Corporate Portals" className="w-10 h-10 object-contain" /> Corporate Portals
                </h2>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
                  Improve brand credibility and digital presence with integrated business systems and secure development practices.
                </p>
              </div>
            </div>
            <motion.div variants={itemVariants} className="w-full overflow-hidden rounded-[2rem] bg-neutral-50">
              <Image src={webCommandImage} alt="Web Command Dashboard" className="w-full h-auto object-cover opacity-90" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const DataIntelligenceSection = () => {
  const features = [
    { title: 'Executive Dashboards', image: businessIntelligenceImage, icon: iconUrls.dashboard },
    { title: 'Predictive Analytics', image: predictiveAnalyticsImage, icon: iconUrls.predictive },
    { title: 'Data Pipelines', image: realTimeDashboardsImage, icon: iconUrls.pipeline },
    { title: 'Single Source of Truth', image: customerInsightsImage, icon: iconUrls.database },
    { title: 'Data Governance', image: performanceMonitoringImage, icon: iconUrls.governance },
    { title: 'Forecasting Insights', image: decisionSupportSystemsImage, icon: iconUrls.forecasting },
  ];

  return (
    <section className="bg-white text-black font-sans w-full overflow-hidden relative py-24 mb-24">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Left Sidebar Column */}
        <div className="w-full lg:w-1/4 xl:w-1/5 flex flex-col gap-10 lg:sticky top-32 h-fit">
          <div>
            <h3 className="text-sm font-medium text-black">Company</h3>
            <p className="text-sm text-neutral-500 mt-1">Data & Intelligence</p>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col gap-24">
          
          <header className="max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-[72px] font-normal tracking-[-0.02em] leading-[1.05]"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Turn Data into Decisions.<br/>Get Actionable Insights.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl leading-[1.6] text-neutral-800 mt-8 max-w-3xl"
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              We build data systems leadership can trust, from clean pipelines to executive dashboards. Turn data into actionable insights for smarter decision making.
            </motion.p>
          </header>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-16 border-t border-neutral-100"
          >
            {features.map((feature, i) => {
              const IconUrl = feature.icon;
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  className="group flex flex-col gap-6"
                >
                  <div className="flex items-center gap-3">
                    <IconImage src={IconUrl} alt={feature.title} className="w-10 h-10 object-contain" />
                    <h3 className="text-xl font-medium tracking-tight text-black">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="w-full overflow-hidden rounded-[2rem] bg-neutral-50">
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90" 
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};