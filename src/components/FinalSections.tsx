'use client';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

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
    { id: 'assess', name: 'Assess.', desc: 'Understand your business goals, systems, and risks to find the best way forward.' },
    { id: 'design', name: 'Design.', desc: 'Create secure, scalable, and practical architectures tailored to your specific needs.' },
    { id: 'deliver', name: 'Deliver.', desc: 'Implement solutions in clear phases and milestones for highly predictable results.' },
    { id: 'optimize', name: 'Optimize.', desc: 'Measure the impact and continuously improve your systems based on live results.' },
  ];

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            How we operate.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6 font-light"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-neutral-200 bg-white shadow-sm">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex flex-col justify-between p-8 md:p-12 min-h-[300px] border-b md:border-b-0 lg:border-r border-neutral-200 last:border-r-0 hover:bg-neutral-50/50 transition-colors duration-300 cursor-default`}
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

                  <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />

                  <div className="mt-auto">
                    <h3 className="text-xl md:text-2xl font-light tracking-tight text-black mb-3">
                      {step.name}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-neutral-500 font-light leading-relaxed">
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
    { title: 'Cloud Modernization.', desc: 'Migrate and operate cloud systems with high visibility and security.' },
    { title: 'DevOps Automation.', desc: 'Faster releases with automated CI/CD pipelines and live monitoring.' },
    { title: 'Cost Optimization.', desc: 'Achieve predictable cloud costs and better infrastructure governance.' },
    { title: 'Security Audits.', desc: 'Assess your current environment and identify critical security risks.' },
    { title: 'Identity Management.', desc: 'Strengthen enterprise security with robust access control policies.' },
    { title: 'Digital Platforms.', desc: 'Build highly secure websites and applications aligned to business needs.' },
    { title: 'System Integration.', desc: 'Seamless integration between your core business systems for efficiency.' },
    { title: 'Managed IT Support.', desc: 'Reliable IT operations that let your core business focus on growth.' },
  ];

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Infrastructure & Operations.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6 font-light"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-neutral-200 bg-white shadow-sm">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex flex-col justify-between p-8 md:p-12 min-h-[260px] border-b border-r border-neutral-200 hover:bg-neutral-50/50 transition-colors duration-300 cursor-default`}
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

                  <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />

                  <div className="mt-auto">
                    <h3 className="text-lg md:text-xl font-light tracking-tight text-black mb-3">
                      {service.title}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">
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
    <section ref={containerRef} className="bg-[#FAFAF8] text-black font-sans antialiased w-full py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            What makes us different.
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6 font-light"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-neutral-200 bg-white shadow-sm">
            {reasons.map((reason, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex flex-col justify-between p-8 md:p-12 min-h-[260px] border-b border-r border-neutral-200 hover:bg-neutral-50/50 transition-colors duration-300 cursor-default`}
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

                  <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] mb-6" />

                  <div className="mt-auto">
                    <h3 className="text-lg md:text-xl font-light tracking-tight text-black mb-3">
                      {reason.title}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">
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
