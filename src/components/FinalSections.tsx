'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const OperationSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const steps = [
    { 
      id: 'assess', 
      name: 'Assess.', 
      desc: 'Understand your business goals, systems, and risks to find the best way forward.',
      iconColor: 'text-[#4A90E2]' 
    },
    { 
      id: 'design', 
      name: 'Design.',  
      desc: 'Create secure, scalable, and practical architectures tailored to your specific needs.',
      iconColor: 'text-[#50E3C2]' 
    },
    { 
      id: 'deliver', 
      name: 'Deliver.', 
      desc: 'Implement solutions in clear phases and milestones for highly predictable results.',
      iconColor: 'text-[#F5A623]' 
    },
    { 
      id: 'optimize', 
      name: 'Optimize.',  
      desc: 'Measure the impact and continuously improve your systems based on live results.',
      iconColor: 'text-[#D0021B]' 
    },
  ];

  return (
    <section className="bg-[#F9F9F8] text-black font-sans antialiased w-full py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        <div className="mb-12">
          <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight leading-tight mb-8">
            How we operate.
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-neutral-800 text-base md:text-lg max-w-2xl">
              Work with world-class engineers to enable transformation that drives impact.
            </p>
            <button className="bg-[#F1F1F1] hover:bg-[#E5E5E5] transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              Our services <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-black/10 bg-[#F9F9F8]">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative flex flex-col justify-between p-8 min-h-[380px] border-r border-black/10 last:border-r-0 transition-colors duration-200 cursor-default ${
                  isActive ? 'bg-white' : 'bg-transparent'
                } ${index === 0 ? 'border-l' : ''}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTopBorderOp"
                    className="absolute top-[-1px] left-0 right-0 h-[3px] bg-[#F5A623]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" className={step.iconColor}>
                    <rect width="8" height="8" x="2" y="2" fill="currentColor" />
                    <rect width="6" height="6" x="12" y="12" fill="currentColor" />
                    <rect width="4" height="4" x="16" y="4" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-medium tracking-tight text-black">
                    {step.name}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isActive ? 'auto' : 0, 
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 12 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-neutral-800 leading-relaxed pr-4">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};


export const DataScienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const services = [
    { title: 'Cloud Modernization.', desc: 'Migrate and operate cloud systems with high visibility and security.', iconColor: 'text-[#4A90E2]'},
    { title: 'DevOps Automation.', desc: 'Faster releases with automated CI/CD pipelines and live monitoring.', iconColor: 'text-[#50E3C2]' },
    { title: 'Cost Optimization.', desc: 'Achieve predictable cloud costs and better infrastructure governance.', iconColor: 'text-[#F5A623]'},
    { title: 'Security Audits.', desc: 'Assess your current environment and identify critical security risks.', iconColor: 'text-[#D0021B]' },
    { title: 'Identity Management.', desc: 'Strengthen enterprise security with robust access control policies.', iconColor: 'text-[#9013FE]'},
    { title: 'Digital Platforms.', desc: 'Build highly secure websites and applications aligned to business needs.', iconColor: 'text-[#4A90E2]' },
    { title: 'System Integration.', desc: 'Seamless integration between your core business systems for efficiency.', iconColor: 'text-[#7ED321]'},
    { title: 'Managed IT Support.', desc: 'Reliable IT operations that let your core business focus on growth.', iconColor: 'text-[#4A4A4A]'},
  ];

  return (
    <section className="bg-[#F9F9F8] text-black font-sans antialiased w-full py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        <div className="mb-12">
          <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight leading-tight mb-8">
            Infrastructure & Operations.
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-neutral-800 text-base md:text-lg max-w-2xl">
              Modern infrastructure designed for reliability, uncompromised security, and strict cost control.
            </p>
            <button className="bg-[#F1F1F1] hover:bg-[#E5E5E5] transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              View all capabilities <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-black/10 bg-[#F9F9F8]">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isBottomRow = index > 3;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative flex flex-col justify-between p-8 min-h-[380px] border-r border-black/10 transition-colors duration-200 cursor-default
                  ${isActive ? 'bg-white' : 'bg-transparent'} 
                  ${index % 4 === 0 ? 'border-l' : ''}
                  ${isBottomRow ? 'border-t border-black/10' : ''}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTopBorderData"
                    className="absolute top-[-1px] left-0 right-0 h-[3px] bg-[#FA520F]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" className={service.iconColor}>
                    <rect width="6" height="6" x="2" y="2" fill="currentColor" />
                    <rect width="6" height="6" x="10" y="8" fill="currentColor" />
                    <rect width="6" height="6" x="18" y="14" fill="currentColor" />
                  </svg>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-medium tracking-tight text-black">
                    {service.title}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isActive ? 'auto' : 0, 
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 12 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-neutral-800 leading-relaxed pr-4">
                      {service.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};


export const WhySection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const reasons = [
    { title: 'Enterprise Experience.', desc: 'Built by engineers with experience in high-level environments.', iconColor: 'text-[#4A90E2]'},
    { title: 'Embedded Security.', desc: 'Security is not an afterthought; it is embedded in every solution.', iconColor: 'text-[#50E3C2]' },
    { title: 'African Market Focus.', desc: 'Practical solutions specifically aligned to African markets.', iconColor: 'text-[#F5A623]'},
    { title: 'Clear Documentation.', desc: 'We provide clear scope, milestones, and full documentation.', iconColor: 'text-[#D0021B]' },
    { title: 'Outcome Driven.', desc: 'Our solutions are focused on delivering real business value.', iconColor: 'text-[#9013FE]'},
    { title: 'Transparency.', desc: 'We value accountability and clear communication with our partners.', iconColor: 'text-[#4A90E2]' },
    { title: 'Continuous Learning.', desc: 'We constantly improve our skills to offer the latest technology.', iconColor: 'text-[#7ED321]'},
    { title: 'Scalable Systems.', desc: 'Every piece of code is designed to support your future growth.', iconColor: 'text-[#4A4A4A]'},
  ];

  return (
    <section className="bg-[#F9F9F8] text-black font-sans antialiased w-full py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        <div className="mb-12">
          <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight leading-tight mb-8">
            What makes us different.
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-neutral-800 text-base md:text-lg max-w-2xl">
              Partner with a team that prioritizes engineering excellence and clear business outcomes.
            </p>
            <button className="bg-[#F1F1F1] hover:bg-[#E5E5E5] transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              Our principles <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-black/10 bg-[#F9F9F8]">
          {reasons.map((reason, index) => {
            const isActive = activeIndex === index;
            const isBottomRow = index > 3;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative flex flex-col justify-between p-8 min-h-[380px] border-r border-black/10 transition-colors duration-200 cursor-default
                  ${isActive ? 'bg-white' : 'bg-transparent'} 
                  ${index % 4 === 0 ? 'border-l' : ''}
                  ${isBottomRow ? 'border-t border-black/10' : ''}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTopBorderWhy"
                    className="absolute top-[-1px] left-0 right-0 h-[3px] bg-[#FA520F]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" className={reason.iconColor}>
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-medium tracking-tight text-black">
                    {reason.title}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isActive ? 'auto' : 0, 
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 12 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-neutral-800 leading-relaxed pr-4">
                      {reason.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};