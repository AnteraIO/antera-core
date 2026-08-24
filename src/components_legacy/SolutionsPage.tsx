'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Code,
  Settings,
  BarChart,
  Laptop,
  Wrench,
  Lock,
  Layout,
  BarChart3,
  Bot
} from 'lucide-react';

import anteraVideo from '../assets/antera-video.mp4';

export const SolutionsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const solutions = [
    { 
      id: 'ai', 
      title: 'Practical AI & Automation', 
      desc: 'AI chatbots, workflow automation, and secure copilots that reduce repetitive work and improve response times.',
      icon: Laptop,
      span: 'large'
    },
    { 
      id: 'infrastructure', 
      title: 'Modern Infrastructure', 
      desc: 'Cloud migration, DevOps automation, and monitoring to improve uptime, reliability, and cost control.',
      icon: Wrench,
      span: 'small'
    },
    { 
      id: 'security', 
      title: 'Security & Risk', 
      desc: 'Security assessments, risk roadmaps, and incident response readiness to protect your digital platforms.',
      icon: Lock,
      span: 'small'
    },
    { 
      id: 'platforms', 
      title: 'Digital Platforms', 
      desc: 'Scalable corporate websites, mobile applications, and system integrations aligned with real business needs.',
      icon: Layout,
      span: 'small'
    },
    { 
      id: 'support', 
      title: 'Managed IT Support', 
      desc: 'Proactive system monitoring, maintenance, and helpdesk support that lets your business focus on growth.',
      icon: Bot,
      span: 'tall'
    },
    { 
      id: 'analytics', 
      title: 'Data & Analytics', 
      desc: 'Executive dashboards, data pipelines, and predictive analytics to turn data into smarter business decisions.',
      icon: BarChart3,
      span: 'large'
    },
  ];

  // Determine grid placement based on span
  const getGridClass = (span: string) => {
    switch(span) {
      case 'large': return 'md:col-span-2';
      case 'tall': return 'md:row-span-2';
      default: return '';
    }
  };

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
        {/* Header */}
        <header className="mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Antera.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            We implement practical AI and technology solutions that reduce repetitive work while keeping systems secure and governed.
          </motion.p>
        </header>

        {/* Video Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-video w-full overflow-hidden bg-black/5 rounded-[2rem] border border-gray-100">
            <video
              src={anteraVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isPurple = index % 2 === 0;
            const gridClass = getGridClass(solution.span);
            
            return (
              <motion.div
                key={solution.id}
                className={`${gridClass} flex flex-col justify-between p-10 min-h-[360px] transition-all duration-300 hover:-translate-y-2 ${
                  isPurple 
                    ? 'bg-[#EFE8FF] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]' 
                    : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
              >
                <div>
                  <div className="mb-8">
                    <Icon className="w-12 h-12 text-[#171321]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#171321] mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-snug">
                    {solution.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsPage;