'use client';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelAssessIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="7" y="7" width="4" height="4" rx="0.5" fill="white"/>
    <rect x="13" y="7" width="4" height="4" rx="0.5" fill="white"/>
    <rect x="7" y="13" width="4" height="4" rx="0.5" fill="white"/>
    <rect x="13" y="13" width="4" height="4" rx="0.5" fill="white" opacity="0.5"/>
  </motion.svg>
);

const PixelDesignIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <path d="M7 7l10 10M17 7L7 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="white"/>
  </motion.svg>
);

const PixelDeliverIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M6 12h8M10 8l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="16" y="10" width="2" height="4" fill="white"/>
  </motion.svg>
);

const PixelOptimizeIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <path d="M8 16V8h3v8H8zm5 0v-4h3v4h-3z" fill="white"/>
  </motion.svg>
);

const PixelCloudIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelDevOpsIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/>
    <path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelCostIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M12 6v2M12 16v2M8 8l2 2M14 14l2 2M8 16l2-2M14 10l2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="white"/>
  </motion.svg>
);

const PixelSecurityIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1"/>
    <path d="M12 3s-7 3-7 9c0 3.5 3 7 7 7s7-3.5 7-7c0-6-7-9-7-9z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelIdentityIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1"/>
    <rect x="8" y="7" width="8" height="10" rx="1" stroke="white" strokeWidth="1.5"/>
    <circle cx="12" cy="11" r="2" stroke="white" strokeWidth="1.5"/>
    <path d="M10 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelPlatformIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <rect x="7" y="7" width="10" height="4" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="7" y="13" width="4" height="4" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <rect x="13" y="13" width="4" height="4" rx="0.5" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelIntegrationIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#06B6D4" stroke="#0891B2" strokeWidth="1"/>
    <rect x="6" y="6" width="4" height="4" fill="white"/>
    <rect x="14" y="6" width="4" height="4" fill="white"/>
    <rect x="6" y="14" width="4" height="4" fill="white"/>
    <rect x="14" y="14" width="4" height="4" fill="white"/>
    <path d="M10 8h4M8 10v4M16 10v4M10 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelSupportIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#64748B" stroke="#475569" strokeWidth="1"/>
    <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelEnterpriseIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="8" y="8" width="3" height="8" fill="white"/>
    <rect x="13" y="8" width="3" height="8" fill="white"/>
    <rect x="8" y="6" width="8" height="2" fill="white"/>
  </motion.svg>
);

const PixelEmbeddedIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelAfricanIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1"/>
    <path d="M12 6l3 3-3 3-3-3 3-3z" fill="white"/>
    <path d="M12 12l3 3-3 3-3-3 3-3z" fill="white" opacity="0.5"/>
  </motion.svg>
);

const PixelDocIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <rect x="7" y="6" width="10" height="2" rx="0.5" fill="white"/>
    <rect x="7" y="10" width="8" height="2" rx="0.5" fill="white"/>
    <rect x="7" y="14" width="6" height="2" rx="0.5" fill="white"/>
  </motion.svg>
);

const PixelOutcomeIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1"/>
    <path d="M7 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelTransparencyIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1"/>
    <path d="M12 7v5M12 14h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5"/>
  </motion.svg>
);

const PixelLearningIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#06B6D4" stroke="#0891B2" strokeWidth="1"/>
    <path d="M12 6l-6 4 6 4 6-4-6-4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14l6 4 6-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelScalableIcon = () => (
  <motion.svg 
    width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#64748B" stroke="#475569" strokeWidth="1"/>
    <path d="M8 16l8-8M8 8h8v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

export const OperationSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const steps = [
    { id: 'assess', name: 'Assess.', desc: 'Understand your business goals, systems, and risks to find the best way forward.', icon: PixelAssessIcon },
    { id: 'design', name: 'Design.', desc: 'Create secure, scalable, and practical architectures tailored to your specific needs.', icon: PixelDesignIcon },
    { id: 'deliver', name: 'Deliver.', desc: 'Implement solutions in clear phases and milestones for highly predictable results.', icon: PixelDeliverIcon },
    { id: 'optimize', name: 'Optimize.', desc: 'Measure the impact and continuously improve your systems based on live results.', icon: PixelOptimizeIcon },
  ];

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelAssessIcon />
          <PixelDesignIcon />
          <PixelDeliverIcon />
          <PixelOptimizeIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            How we operate.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Work with world-class engineers to enable transformation that drives impact.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          <div className="absolute -top-3 right-0 w-2 h-2 bg-black hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-neutral-200 bg-white">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex flex-col justify-between p-8 md:p-12 min-h-[360px] md:min-h-[420px] border-b md:border-b-0 lg:border-r border-neutral-200 last:border-r-0 hover:bg-neutral-50/50 transition-colors cursor-default`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTopBorderOp"
                      className="absolute top-0 left-0 right-0 h-[3px] bg-[#FA520F]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <step.icon />

                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-3">
                      {step.name}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-neutral-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}

            <div className="absolute -bottom-3 left-0 w-2 h-2 bg-black hidden md:block" />
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const DataScienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const services = [
    { title: 'Cloud Modernization.', desc: 'Migrate and operate cloud systems with high visibility and security.', icon: PixelCloudIcon },
    { title: 'DevOps Automation.', desc: 'Faster releases with automated CI/CD pipelines and live monitoring.', icon: PixelDevOpsIcon },
    { title: 'Cost Optimization.', desc: 'Achieve predictable cloud costs and better infrastructure governance.', icon: PixelCostIcon },
    { title: 'Security Audits.', desc: 'Assess your current environment and identify critical security risks.', icon: PixelSecurityIcon },
    { title: 'Identity Management.', desc: 'Strengthen enterprise security with robust access control policies.', icon: PixelIdentityIcon },
    { title: 'Digital Platforms.', desc: 'Build highly secure websites and applications aligned to business needs.', icon: PixelPlatformIcon },
    { title: 'System Integration.', desc: 'Seamless integration between your core business systems for efficiency.', icon: PixelIntegrationIcon },
    { title: 'Managed IT Support.', desc: 'Reliable IT operations that let your core business focus on growth.', icon: PixelSupportIcon },
  ];

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelCloudIcon />
          <PixelDevOpsIcon />
          <PixelSecurityIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Infrastructure & Operations.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Modern infrastructure designed for reliability, uncompromised security, and strict cost control.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          <div className="absolute -top-3 right-0 w-2 h-2 bg-black hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-neutral-200 bg-white">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex flex-col justify-between p-8 md:p-12 min-h-[300px] border-b border-r border-neutral-200 hover:bg-neutral-50/50 transition-colors cursor-default`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.7 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTopBorderData"
                      className="absolute top-0 left-0 right-0 h-[3px] bg-[#FA520F]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <service.icon />

                  <div className="mt-auto">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-black mb-3">
                      {service.title}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-neutral-500 leading-relaxed">
                        {service.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}

            <div className="absolute -bottom-3 left-0 w-2 h-2 bg-black hidden md:block" />
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhySection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const reasons = [
    { title: 'Enterprise Experience.', desc: 'Built by engineers with experience in high-level environments.', icon: PixelEnterpriseIcon },
    { title: 'Embedded Security.', desc: 'Security is not an afterthought; it is embedded in every solution.', icon: PixelEmbeddedIcon },
    { title: 'African Market Focus.', desc: 'Practical solutions specifically aligned to African markets.', icon: PixelAfricanIcon },
    { title: 'Clear Documentation.', desc: 'We provide clear scope, milestones, and full documentation.', icon: PixelDocIcon },
    { title: 'Outcome Driven.', desc: 'Our solutions are focused on delivering real business value.', icon: PixelOutcomeIcon },
    { title: 'Transparency.', desc: 'We value accountability and clear communication with our partners.', icon: PixelTransparencyIcon },
    { title: 'Continuous Learning.', desc: 'We constantly improve our skills to offer the latest technology.', icon: PixelLearningIcon },
    { title: 'Scalable Systems.', desc: 'Every piece of code is designed to support your future growth.', icon: PixelScalableIcon },
  ];

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelEnterpriseIcon />
          <PixelEmbeddedIcon />
          <PixelAfricanIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            What makes us different.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Partner with a team that prioritizes engineering excellence and clear business outcomes.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          <div className="absolute -top-3 right-0 w-2 h-2 bg-black hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-neutral-200 bg-white">
            {reasons.map((reason, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex flex-col justify-between p-8 md:p-12 min-h-[300px] border-b border-r border-neutral-200 hover:bg-neutral-50/50 transition-colors cursor-default`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.7 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTopBorderWhy"
                      className="absolute top-0 left-0 right-0 h-[3px] bg-[#FA520F]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <reason.icon />

                  <div className="mt-auto">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-black mb-3">
                      {reason.title}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-neutral-500 leading-relaxed">
                        {reason.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}

            <div className="absolute -bottom-3 left-0 w-2 h-2 bg-black hidden md:block" />
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};