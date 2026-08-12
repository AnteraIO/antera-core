'use client';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ChevronRight,
  Search,
  PenTool,
  CheckSquare,
  TrendingUp,
  Cloud,
  Infinity as InfinityIcon,
  DollarSign,
  Shield,
  Fingerprint,
  Layers,
  Cpu,
  LifeBuoy,
  Building2,
  Lock,
  Globe,
  FileText,
  Target,
  Eye,
  GraduationCap,
  Maximize2
} from 'lucide-react';

const PixelAssessIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-[#FA520F] flex items-center justify-center shadow-lg shadow-orange-500/10 border border-[#FA520F]/20"
  >
    <Search className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelDesignIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/10 border border-blue-500/20"
  >
    <PenTool className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelDeliverIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/10 border border-amber-500/20"
  >
    <CheckSquare className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelOptimizeIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-emerald-500/20"
  >
    <TrendingUp className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelCloudIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-[#FA520F] flex items-center justify-center shadow-lg shadow-orange-500/10 border border-[#FA520F]/20"
  >
    <Cloud className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelDevOpsIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/10 border border-blue-500/20"
  >
    <InfinityIcon className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelCostIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/10 border border-amber-500/20"
  >
    <DollarSign className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelSecurityIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/10 border border-red-500/20"
  >
    <Shield className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelIdentityIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/10 border border-violet-500/20"
  >
    <Fingerprint className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelPlatformIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-emerald-500/20"
  >
    <Layers className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelIntegrationIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/10 border border-cyan-500/20"
  >
    <Cpu className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelSupportIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-slate-500 flex items-center justify-center shadow-lg shadow-slate-500/10 border border-slate-500/20"
  >
    <LifeBuoy className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelEnterpriseIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-[#FA520F] flex items-center justify-center shadow-lg shadow-orange-500/10 border border-[#FA520F]/20"
  >
    <Building2 className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelEmbeddedIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/10 border border-blue-500/20"
  >
    <Lock className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelAfricanIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/10 border border-amber-500/20"
  >
    <Globe className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelDocIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-emerald-500/20"
  >
    <FileText className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelOutcomeIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/10 border border-red-500/20"
  >
    <Target className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelTransparencyIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/10 border border-violet-500/20"
  >
    <Eye className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelLearningIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/10 border border-cyan-500/20"
  >
    <GraduationCap className="w-6 h-6 text-white" />
  </motion.div>
);

const PixelScalableIcon = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-14 h-14 rounded-2xl bg-slate-500 flex items-center justify-center shadow-lg shadow-slate-500/10 border border-slate-500/20"
  >
    <Maximize2 className="w-6 h-6 text-white" />
  </motion.div>
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
    <section ref={containerRef} className="bg-white text-black font-sans w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            How we operate to serve you.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Work with Tanzanian top software and hardware engineers to enable transformation that drives impact.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between cursor-default`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
              >
                <step.icon />

                <div className="mt-auto">
                  <h3 className={`text-2xl md:text-3xl font-normal tracking-tight mb-3 transition-colors duration-200 ${isActive ? 'text-[#FA520F]' : 'text-black'}`}>
                    {step.name}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-base text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
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
    <section ref={containerRef} className="bg-white text-black font-sans w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Infrastructure and Operations.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Modern infrastructure designed for reliability, uncompromised security, and strict cost control.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group bg-[#F5F5F5] p-8 md:p-12 min-h-[300px] flex flex-col justify-between cursor-default`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
              >
                <service.icon />

                <div className="mt-auto">
                  <h3 className={`text-xl md:text-2xl font-normal tracking-tight mb-3 transition-colors duration-200 ${isActive ? 'text-[#FA520F]' : 'text-black'}`}>
                    {service.title}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-base text-neutral-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
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
    <section ref={containerRef} className="bg-white text-black font-sans w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <header className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            What makes us different from Others.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Partner with a team that prioritizes engineering excellence and clear business outcomes.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group bg-[#F5F5F5] p-8 md:p-12 min-h-[300px] flex flex-col justify-between cursor-default`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
              >
                <reason.icon />

                <div className="mt-auto">
                  <h3 className={`text-xl md:text-2xl font-normal tracking-tight mb-3 transition-colors duration-200 ${isActive ? 'text-[#FA520F]' : 'text-black'}`}>
                    {reason.title}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-base text-neutral-600 leading-relaxed">
                      {reason.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};