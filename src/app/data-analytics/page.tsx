'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PieChart,
  Activity
} from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function DataAnalyticsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);

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
      icon: Cpu,
      title: 'Predictive & Machine Learning AI',
      desc: 'Deploy custom ML models that forecast customer demand, detect operational anomalies, and optimize resource allocation automatically.'
    },
    {
      icon: ShieldCheck,
      title: 'Data Governance & Ethical AI',
      desc: 'Frameworks compliant with regional regulations, ensuring security, transparency, privacy, and trustworthy AI adoption.'
    }
  ];

  const maturityLevels = [
    {
      stage: 'Level 1',
      name: 'Descriptive Analytics',
      question: 'What happened?',
      detail: 'Consolidating historical records into structured databases and standard reports.'
    },
    {
      stage: 'Level 2',
      name: 'Diagnostic Analytics',
      question: 'Why did it happen?',
      detail: 'Deep-dive root cause analysis using correlation, segmentation, and drill-down metrics.'
    },
    {
      stage: 'Level 3',
      name: 'Predictive Analytics',
      question: 'What will happen?',
      detail: 'Leveraging statistical models and machine learning to forecast future market shifts.'
    },
    {
      stage: 'Level 4',
      name: 'Prescriptive Analytics',
      question: 'What should we do?',
      detail: 'AI-driven decision engines that recommend optimal strategy and automate execution.'
    }
  ];

  const metrics = [
    { label: 'Decision Acceleration', value: '4.8x', desc: 'Faster time-to-insight for strategic executive planning' },
    { label: 'Data Accuracy', value: '99.4%', desc: 'Unified single-source-of-truth pipeline reliability' },
    { label: 'Operational Cost Savings', value: '35%', desc: 'Reduction in manual reporting overhead and errors' },
    { label: 'Predictive Model Precision', value: '92%', desc: 'Validated accuracy on forecasting key business KPIs' }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FAFAF8] text-black font-sans selection:bg-[#FA520F] selection:text-white pt-24 pb-20 overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      {/* Background Decorative Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-[-100px] w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[-50px] w-[550px] h-[550px] bg-purple-300/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* HERO SECTION */}
        <motion.header
          style={{ y: heroY, opacity: heroOpacity }}
          className="py-16 md:py-24 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FA520F]/10 text-[#FA520F] text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Analytics & AI Ecosystem
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-[-0.03em] leading-[1.05]"
          >
            Empower Business with <span className="text-[#FA520F]">Data & AI</span> Intelligence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto"
          >
            From raw infrastructure to high-impact predictive models, we empower Tanzanian and African enterprises to transform data assets into strategic competitive advantages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="https://wa.me/255760984921"
              target="_blank"
              className="px-8 py-3.5 bg-[#FA520F] text-white font-medium hover:bg-[#e0490d] transition-all rounded-md shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Start Data Transformation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/models"
              className="px-8 py-3.5 border border-black hover:bg-black hover:text-white transition-all rounded-md font-medium"
            >
              Explore AI Models
            </Link>
          </motion.div>
        </motion.header>

        {/* METRICS IMPACT STRIP */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16 border-y border-neutral-200 py-12"
        >
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-neutral-200/80 hover:border-[#FA520F]/40 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-2">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-[#FA520F] uppercase tracking-wider mb-1">
                {m.label}
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CORE ECOSYSTEM PILLARS */}
        <div className="my-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-2">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight">The Data Value Chain Framework</h2>
            </div>
            <p className="text-neutral-600 max-w-md text-sm md:text-base">
              End-to-end solutions covering data engineering, enterprise analytics, governance, and custom artificial intelligence integration.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {ecosystemPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl hover:shadow-[#FA520F]/5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#FAFAF8] border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-[#FA520F] group-hover:border-[#FA520F] transition-all duration-300">
                      <Icon className="w-7 h-7 text-neutral-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-black transition-colors">
                    <span>EXPLORE PILLAR</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ANALYTICS MATURITY ROADMAP */}
        <div className="my-28 bg-[#18181b] text-white p-10 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#FA520F]/20 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#FA520F] block mb-2">Ecosystem Growth</span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-tight">
              Enterprise Analytics Maturity Assessment
            </h2>
            <p className="text-neutral-400 mt-4 text-base md:text-lg font-light">
              We guide organizations across all stages of data capability maturity, shifting from backward-looking reports to real-time predictive decision engines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maturityLevels.map((lvl, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between hover:border-[#FA520F]/50 transition-colors group"
              >
                <div>
                  <span className="text-xs font-mono px-2.5 py-1 bg-zinc-800 rounded-md text-zinc-300 group-hover:bg-[#FA520F] group-hover:text-white transition-colors">
                    {lvl.stage}
                  </span>
                  <h4 className="text-xl font-medium mt-4 mb-1 text-white">{lvl.name}</h4>
                  <div className="text-xs font-semibold text-[#FA520F] mb-4 italic">"{lvl.question}"</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{lvl.detail}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-[11px] text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FA520F]" />
                  Verified Capability
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 border-t border-neutral-200"
        >
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-4">Ready to accelerate your data strategy?</h2>
          <p className="text-neutral-600 max-w-xl mx-auto mb-8 text-base">
            Consult with our lead data architects to evaluate your data ecosystem and build custom analytics systems.
          </p>
          <Link
            href="https://wa.me/255760984921"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FA520F] text-white font-medium hover:bg-[#e0490d] transition-all rounded-md shadow-md text-lg"
          >
            Contact Data Advisory <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
