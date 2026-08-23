'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

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
    <div 
      ref={containerRef} 
      className="relative min-h-screen text-black font-sans selection:bg-[#FA520F] selection:text-white pt-32 pb-20 overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* CORE ECOSYSTEM PILLARS */}
        <div className="my-24">
          <header className="mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Data & Analytics Solutions
            </motion.h2>
            <motion.p 
              className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              End-to-end solutions covering data engineering, enterprise analytics, governance, and custom artificial intelligence integration.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ecosystemPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-[#F5F5F5] p-8 md:p-12 min-h-[280px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div>
                    <Icon className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
                    <h3 className="text-2xl md:text-3xl font-normal tracking-tight mt-8 mb-3 group-hover:text-[#FA520F] transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-base text-neutral-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ANALYTICS MATURITY ROADMAP */}
        <div className="my-28">
          <header className="mb-16">
            <motion.span 
              className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Ecosystem Growth
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Enterprise Analytics Maturity Assessment
            </motion.h2>
            <motion.p 
              className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              We guide organizations across all stages of data capability maturity, shifting from backward-looking reports to real-time predictive decision engines.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {maturityLevels.map((lvl, idx) => (
              <motion.div
                key={idx}
                className="bg-[#F5F5F5] p-8 md:p-10 flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <h4 className="text-xl font-medium mt-4 mb-1 text-black group-hover:text-[#FA520F] transition-colors duration-200">
                    {lvl.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#FA520F] mb-4 italic">"{lvl.question}"</div>
                  <p className="text-sm text-neutral-600 leading-relaxed">{lvl.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="text-center py-16 border-t border-neutral-200/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-4">Ready to accelerate your data strategy?</h2>
          <p className="text-neutral-600 max-w-xl mx-auto mb-8 text-base">
            Consult with our lead data architects to evaluate your data ecosystem and build custom analytics systems.
          </p>
          <Link
            href="https://wa.me/255760984921"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white font-medium hover:bg-black transition-all rounded-md shadow-md text-lg hover:shadow-lg"
          >
            Contact Data Advisory <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}