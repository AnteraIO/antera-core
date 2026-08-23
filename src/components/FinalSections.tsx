'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  LayoutDashboard,
  PenTool,
  Rocket,
  TrendingUp,
  Cloud,
  GitBranch,
  DollarSign,
  Lock,
  Fingerprint,
  Monitor,
  Link2,
  Headphones,
  Building2,
  Key,
  Globe2,
  FileText,
  Target,
  Eye,
  GraduationCap,
  BarChart3
} from 'lucide-react';

export const OperationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const steps = [
    { id: 'assess', name: 'Assess.', desc: 'Understand your business goals, systems, and risks to find the best way forward.', icon: LayoutDashboard },
    { id: 'design', name: 'Design.', desc: 'Create secure, scalable, and practical architectures tailored to your specific needs.', icon: PenTool },
    { id: 'deliver', name: 'Deliver.', desc: 'Implement solutions in clear phases and milestones for highly predictable results.', icon: Rocket },
    { id: 'optimize', name: 'Optimize.', desc: 'Measure the impact and continuously improve your systems based on live results.', icon: TrendingUp },
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-white text-[#171321] font-sans w-full py-24 md:py-32 relative overflow-hidden"
    >
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#171321] z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full pl-6 md:pl-12 lg:pl-20 max-w-[1500px] mx-auto">
        <header className="mb-16 pr-6 md:pr-12 lg:pr-20">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            How we operate to serve you.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Work with Tanzanian top Software, Hardware , AI and ML Engineers to enable transformation that drives impact to your Company, School, Office or Organization.
          </motion.p>
        </header>

        {/* Horizontal Scroll Container mimicking the screenshot's carousel */}
        <div 
          className="flex overflow-x-auto gap-6 pb-12 pr-6 md:pr-12 lg:pr-20 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isPurple = index % 2 === 0;
            return (
              <motion.div
                key={step.id}
                className={`flex-none w-[85vw] md:w-[380px] snap-start flex flex-col justify-between p-10 rounded-[2rem] min-h-[380px] transition-transform duration-300 hover:-translate-y-2 ${
                  isPurple ? 'bg-[#EFE8FF]' : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100'
                }`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
              >
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#171321] mb-6">
                    {step.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-snug">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-12">
                  <Icon className="w-12 h-12 text-[#171321]" strokeWidth={1.5} />
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const services = [
    { title: 'Cloud Modernization.', desc: 'Migrate and operate cloud systems with high visibility and security.', icon: Cloud },
    { title: 'DevOps Automation.', desc: 'Faster releases with automated CI/CD pipelines and live monitoring.', icon: GitBranch },
    { title: 'Cost Optimization.', desc: 'Achieve predictable cloud costs and better infrastructure governance.', icon: DollarSign },
    { title: 'Security Audits.', desc: 'Assess your current environment and identify critical security risks.', icon: Lock },
    { title: 'Identity Management.', desc: 'Strengthen enterprise security with robust access control policies.', icon: Fingerprint },
    { title: 'Digital Platforms.', desc: 'Build highly secure websites and applications aligned to business needs.', icon: Monitor },
    { title: 'System Integration.', desc: 'Seamless integration between your core business systems for efficiency.', icon: Link2 },
    { title: 'Managed IT Support.', desc: 'Reliable IT operations that let your core business focus on growth.', icon: Headphones },
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-white text-[#171321] font-sans w-full py-24 md:py-32 relative overflow-hidden border-t border-gray-100"
    >
      <div className="w-full pl-6 md:pl-12 lg:pl-20 max-w-[1500px] mx-auto">
        <header className="mb-16 pr-6 md:pr-12 lg:pr-20">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Infrastructure and Operations.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Modern infrastructure designed for reliability, uncompromised security, and strict cost control.
          </motion.p>
        </header>

        <div 
          className="flex overflow-x-auto gap-6 pb-12 pr-6 md:pr-12 lg:pr-20 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPurple = index % 2 === 1; // Offset colors
            return (
              <motion.div
                key={index}
                className={`flex-none w-[85vw] md:w-[380px] snap-start flex flex-col justify-between p-10 rounded-[2rem] min-h-[380px] transition-transform duration-300 hover:-translate-y-2 ${
                  isPurple ? 'bg-[#EFE8FF]' : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100'
                }`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#171321] mb-6 pr-4">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-snug">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-12">
                  <Icon className="w-12 h-12 text-[#171321]" strokeWidth={1.5} />
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
  const containerRef = useRef<HTMLDivElement>(null);

  const reasons = [
    { title: 'Enterprise Experience.', desc: 'Built by engineers with experience in high-level environments.', icon: Building2 },
    { title: 'Embedded Security.', desc: 'Security is not an afterthought; it is embedded in every solution.', icon: Key },
    { title: 'African Market Focus.', desc: 'Practical solutions specifically aligned to African markets.', icon: Globe2 },
    { title: 'Clear Documentation.', desc: 'We provide clear scope, milestones, and full documentation.', icon: FileText },
    { title: 'Outcome Driven.', desc: 'Our solutions are focused on delivering real business value.', icon: Target },
    { title: 'Transparency.', desc: 'We value accountability and clear communication with our partners.', icon: Eye },
    { title: 'Continuous Learning.', desc: 'We constantly improve our skills to offer the latest technology.', icon: GraduationCap },
    { title: 'Scalable Systems.', desc: 'Every piece of code is designed to support your future growth.', icon: BarChart3 },
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-white text-[#171321] font-sans w-full py-24 md:py-32 relative overflow-hidden border-t border-gray-100"
    >
      <div className="w-full pl-6 md:pl-12 lg:pl-20 max-w-[1500px] mx-auto">
        <header className="mb-16 pr-6 md:pr-12 lg:pr-20">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            What makes us different from Others.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Partner with a team that prioritizes engineering excellence and clear business outcomes.
          </motion.p>
        </header>

        <div 
          className="flex overflow-x-auto gap-6 pb-12 pr-6 md:pr-12 lg:pr-20 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isPurple = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`flex-none w-[85vw] md:w-[380px] snap-start flex flex-col justify-between p-10 rounded-[2rem] min-h-[380px] transition-transform duration-300 hover:-translate-y-2 ${
                  isPurple ? 'bg-[#EFE8FF]' : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100'
                }`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#171321] mb-6 pr-4">
                    {reason.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-snug">
                    {reason.desc}
                  </p>
                </div>
                <div className="mt-12">
                  <Icon className="w-12 h-12 text-[#171321]" strokeWidth={1.5} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* Hide scrollbar for webkit (Chrome/Safari) */}
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};