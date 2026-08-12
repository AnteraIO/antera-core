'use client';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const OperationSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const steps = [
    { id: 'assess', name: 'Assess.', desc: 'Understand your business goals, systems, and operational bottlenecks to find the optimal integration path.' },
    { id: 'design', name: 'Design.', desc: 'Configure secure, redundant, and sovereign platform topologies tailored to target endpoints.' },
    { id: 'deliver', name: 'Deliver.', desc: 'Roll out systems incrementally in clear, auditable operational milestones with complete oversight.' },
    { id: 'optimize', name: 'Optimize.', desc: 'Trace output metrics continuously to refine model accuracy, cloud costs, and latency.' },
  ];

  return (
    <section ref={containerRef} className="bg-[#fffaeb] text-[#1F1F1F] antialiased w-full py-24 md:py-32 border-b border-[#1F1F1F]/10 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Engineering Lifecycles</div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-none">
            How We Operate.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            Clean, professional coordination and structured delivery models. We integrate directly with your engineering core.
          </p>
        </header>

        {/* Stark 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#1F1F1F]/10 divide-y md:divide-y-0 lg:divide-y-0 lg:divide-x divide-[#1F1F1F]/10 bg-white shadow-sm">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[300px] hover:bg-[#1F1F1F]/5 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTopBorderOp"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#FA520F]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <span className="text-[9px] font-mono tracking-widest text-neutral-400 block mb-6">[PHASE 0{index + 1}]</span>

                <div className="mt-auto">
                  <h3 className="text-xl font-light tracking-tight text-[#1F1F1F] mb-3">
                    {step.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                    {step.desc}
                  </p>
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
    { title: 'Cloud Modernization.', desc: 'Migrate and operate cloud systems with high visibility, cost governance, and transparency.' },
    { title: 'DevOps Automation.', desc: 'Faster releases with automated pipeline integration and continuous verification logging.' },
    { title: 'Cost Optimization.', desc: 'Control cloud consumption dynamically to maintain highly predictable budgets.' },
    { title: 'Security Audits.', desc: 'Continuous vulnerability scanning and systematic mapping to protect critical platforms.' },
    { title: 'Identity Management.', desc: 'Configure robust access controls and policies across distributed database models.' },
    { title: 'Digital Platforms.', desc: 'Configure high-availability corporate websites and applications safely.' },
    { title: 'System Integration.', desc: 'Establish highly resilient API and pipeline connection maps securely.' },
    { title: 'Managed IT Support.', desc: 'Reliable on-call assistance ensuring maximum uptime on critical frameworks.' },
  ];

  return (
    <section ref={containerRef} className="bg-[#fffaeb] text-[#1F1F1F] antialiased w-full py-24 md:py-32 border-b border-[#1F1F1F]/10 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Operational Integrity</div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-none">
            Infrastructure & Operations.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            Sovereign hosting, strict isolation patterns, and robust monitoring configurations designed for ultimate security.
          </p>
        </header>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#1F1F1F]/10 divide-y md:divide-y-0 lg:divide-y-0 divide-[#1F1F1F]/10 bg-white shadow-sm">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[260px] border-b border-[#1F1F1F]/10 hover:bg-[#1F1F1F]/5 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTopBorderData"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#FA520F]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />

                <div className="mt-auto">
                  <h3 className="text-lg font-light tracking-tight text-[#1F1F1F] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                    {service.desc}
                  </p>
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
    { title: 'Enterprise Experience.', desc: 'Built by engineers with experience in high-level environments.' },
    { title: 'Embedded Security.', desc: 'Security is not an afterthought; it is embedded in every solution.' },
    { title: 'African Market Focus.', desc: 'Practical solutions specifically aligned to African markets.' },
    { title: 'Clear Documentation.', desc: 'We provide clear scope, milestones, and full documentation.' },
    { title: 'Outcome Driven.', desc: 'Our solutions are focused on delivering real business value.' },
    { title: 'Transparency.', desc: 'We value accountability and clear communication with our partners.' },
    { title: 'Continuous Learning.', desc: 'We constantly improve our skills to offer the latest technology.' },
    { title: 'Scalable Systems.', desc: 'Every piece of code is designed to support your future growth.' },
  ];

  return (
    <section ref={containerRef} className="bg-[#fffaeb] text-[#1F1F1F] antialiased w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Values</div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-none">
            What Makes Us Different.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            A relentless commitment to engineering excellence, complete system safety, and strict alignment to operational goals.
          </p>
        </header>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#1F1F1F]/10 divide-y md:divide-y-0 lg:divide-y-0 divide-[#1F1F1F]/10 bg-white shadow-sm">
          {reasons.map((reason, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[260px] border-b border-[#1F1F1F]/10 hover:bg-[#1F1F1F]/5 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTopBorderWhy"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#FA520F]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />

                <div className="mt-auto">
                  <h3 className="text-lg font-light tracking-tight text-[#1F1F1F] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};