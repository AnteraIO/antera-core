'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Database,
  Lock,
  ArrowRight,
  PieChart,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

export default function DataAnalyticsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const ecosystemPillars = [
    {
      icon: Database,
      title: 'Data Architecture & Engineering',
      desc: 'Build scalable, secure data pipelines and data warehouses that integrate fragmented enterprise sources into a single source of truth.'
    },
    {
      icon: PieChart,
      title: 'Business Intelligence & Visualization',
      desc: 'Real-time executive dashboards and interactive reports designed to translate raw data into instant, actionable decision-making tools.'
    },
    {
      icon: Rocket,
      title: 'Predictive & Machine Learning AI',
      desc: 'Deploy custom ML models that forecast customer demand, detect operational anomalies, and optimize resource allocation automatically.'
    },
    {
      icon: Lock,
      title: 'Data Governance & Ethical AI',
      desc: 'Frameworks compliant with regional regulations, ensuring security, transparency, privacy, and trustworthy AI adoption.'
    }
  ];

  const maturityLevels = [
    {
      name: 'Descriptive Analytics',
      question: 'What happened?',
      detail: 'Consolidating historical records into structured databases and standard reports.'
    },
    {
      name: 'Diagnostic Analytics',
      question: 'Why did it happen?',
      detail: 'Deep-dive root cause analysis using correlation, segmentation, and drill-down metrics.'
    },
    {
      name: 'Predictive Analytics',
      question: 'What will happen?',
      detail: 'Leveraging statistical models and machine learning to forecast future market shifts.'
    },
    {
      name: 'Prescriptive Analytics',
      question: 'What should we do?',
      detail: 'AI-driven decision engines that recommend optimal strategy and automate execution.'
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-white text-[#171321] font-sans w-full py-24 md:py-32 relative overflow-hidden border-t border-gray-100"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#171321] z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* CORE ECOSYSTEM PILLARS */}
        <div className="mb-24">
          <header className="mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Data & Analytics Solutions
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              End-to-end solutions covering data engineering, enterprise analytics, governance, and custom artificial intelligence integration.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystemPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isPurple = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  className={`flex flex-col justify-between p-10 min-h-[280px] transition-all duration-300 hover:-translate-y-2 ${
                    isPurple 
                      ? 'bg-[#EFE8FF] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]' 
                      : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div>
                    <Icon className="w-12 h-12 text-[#171321] mb-8" strokeWidth={1.5} />
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171321] mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ANALYTICS MATURITY ROADMAP */}
        <div className="mb-24">
          <header className="mb-16">
            <motion.span 
              className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Ecosystem Growth
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Enterprise Analytics Maturity Assessment
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              We guide organizations across all stages of data capability maturity, shifting from backward-looking reports to real-time predictive decision engines.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maturityLevels.map((lvl, idx) => {
              const isPurple = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  className={`flex flex-col justify-between p-10 min-h-[240px] transition-all duration-300 hover:-translate-y-2 ${
                    isPurple 
                      ? 'bg-[#EFE8FF] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]' 
                      : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div>
                    <h4 className="text-xl font-bold text-[#171321] mb-2">
                      {lvl.name}
                    </h4>
                    <div className="text-sm font-semibold text-[#171321]/70 mb-4 italic">
                      "{lvl.question}"
                    </div>
                    <p className="text-base text-gray-700 leading-snug">{lvl.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="text-center py-16 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#171321] mb-4">
            Ready to accelerate your data strategy?
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Consult with our lead data architects to evaluate your data ecosystem and build custom analytics systems.
          </p>
          <Link
            href="https://wa.me/255760984921"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#171321] text-white font-medium hover:bg-[#2a2438] transition-all rounded-[2rem] text-lg hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)]"
          >
            Contact Data Advisory <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}