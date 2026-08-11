'use client';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ChevronRight,
  Search,
  Layout,
  CheckCircle,
  TrendingUp,
  Cloud,
  Cpu,
  Coins,
  Shield,
  UserCheck,
  Laptop,
  Shuffle,
  LifeBuoy,
  Building,
  ShieldCheck,
  Globe,
  FileText,
  Target,
  Eye,
  GraduationCap,
  Maximize2
} from 'lucide-react';

const PixelAssessIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Search className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelDesignIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Layout className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelDeliverIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#F59E0B] border border-[#B45309] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <CheckCircle className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelOptimizeIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#10B981] border border-[#059669] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <TrendingUp className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelCloudIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Cloud className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelDevOpsIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Cpu className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelCostIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#F59E0B] border border-[#B45309] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Coins className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelSecurityIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#EF4444] border border-[#B91C1C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Shield className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelIdentityIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#8B5CF6] border border-[#7C3AED] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <UserCheck className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelPlatformIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#10B981] border border-[#059669] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Laptop className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelIntegrationIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#06B6D4] border border-[#0891B2] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Shuffle className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelSupportIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#64748B] border border-[#475569] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <LifeBuoy className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelEnterpriseIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#FA520F] border border-[#C2410C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Building className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelEmbeddedIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#3B82F6] border border-[#1D4ED8] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <ShieldCheck className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelAfricanIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#F59E0B] border border-[#B45309] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Globe className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelDocIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#10B981] border border-[#059669] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FileText className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelOutcomeIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#EF4444] border border-[#B91C1C] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Target className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelTransparencyIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#8B5CF6] border border-[#7C3AED] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Eye className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelLearningIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#06B6D4] border border-[#0891B2] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <GraduationCap className="w-7 h-7 stroke-[2]" />
  </motion.div>
);

const PixelScalableIcon = () => (
  <motion.div
    className="w-14 h-14 bg-[#64748B] border border-[#475569] flex items-center justify-center text-white relative shadow-sm"
    style={{ borderRadius: '4px' }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Maximize2 className="w-7 h-7 stroke-[2]" />
  </motion.div>
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
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

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
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

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
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

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
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
