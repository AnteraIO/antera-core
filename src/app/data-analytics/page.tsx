'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Database,
  BarChart3,
  Cpu,
  ShieldCheck,
  Layers,
  ArrowRight
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function DataAnalyticsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const pillars = [
    {
      title: 'Data Architecture & Pipelines',
      desc: 'Build scalable, secure data pipelines that integrate fragmented enterprise sources into a unified single source of truth.',
      icon: Database
    },
    {
      title: 'Business Intelligence & Dashboards',
      desc: 'Real-time executive dashboards and reports designed to translate raw operational data into instant decision-making tools.',
      icon: BarChart3
    },
    {
      title: 'Predictive & Machine Learning AI',
      desc: 'Deploy custom machine learning models that forecast demand, detect anomalies, and optimize enterprise resources automatically.',
      icon: Cpu
    },
    {
      title: 'Data Governance & Compliance',
      desc: 'Frameworks compliant with regional regulations, ensuring security, transparency, privacy, and ethical AI adoption.',
      icon: ShieldCheck
    },
    {
      title: 'Ecosystem Maturity Assessment',
      desc: 'Guide organizations through 4 maturity levels: Descriptive, Diagnostic, Predictive, and Prescriptive decision engines.',
      icon: Layers
    }
  ];

  return (
    <section
      ref={containerRef}
      className="text-black font-sans w-full min-h-screen pt-28 pb-24 selection:bg-[#FA520F] selection:text-white relative overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FA520F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="w-full px-6 md:px-12 lg:px-20 py-12 max-w-[1400px] mx-auto relative z-10">
        <header className="mb-16">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Data Analytics.
          </motion.h1>
          <motion.p
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Turn raw enterprise data into clear actionable insights. We build end-to-end data value chain systems for African markets.
          </motion.p>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group bg-[#F5F5F5] p-8 md:p-10 flex flex-col justify-between cursor-pointer rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FA520F]/5"
              >
                <Icon className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
                <div className="mt-8">
                  <h3 className="text-2xl md:text-3xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-base text-neutral-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 flex items-center justify-between text-sm font-medium text-black group-hover:text-[#FA520F]">
                  <span>Explore Insights</span>
                  <ArrowRight className="w-5 h-5 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
