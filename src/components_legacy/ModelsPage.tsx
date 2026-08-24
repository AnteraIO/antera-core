'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Database, 
  LineChart, 
  Brain,
  BarChart3
} from 'lucide-react';

export const ModelsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const models = [
    {
      icon: Database,
      title: 'Data Architecture',
      desc: 'We design and build robust data pipelines that collect, clean, and structure information from multiple sources into unified, queryable systems.'
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      desc: 'Machine learning models trained to forecast trends, identify risks, and surface opportunities before they become obvious.'
    },
    {
      icon: Brain,
      title: 'Applied AI',
      desc: 'End-to-end AI integration for enterprise transformation, from natural language processing to computer vision and automated decision systems.'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      desc: 'Real-time dashboards and reporting tools that turn raw data into actionable insights leadership can trust and act upon.'
    },
    {
      icon: LineChart,
      title: 'How We Work',
      desc: 'We start by understanding your data landscape, then build custom solutions that integrate with your existing infrastructure. Every model is trained, tested, and deployed with governance and explainability in mind.',
      span: 'full'
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
        
        {/* Header */}
        <header className="mb-16 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Data Intelligence.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mx-auto mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            End-to-end data solutions covering architecture, analytics, AI integration, and business intelligence for enterprise transformation.
          </motion.p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon;
            const isPurple = index % 2 === 0;
            const isFull = model.span === 'full';
            
            return (
              <motion.div
                key={index}
                className={`${isFull ? 'md:col-span-2' : ''} flex flex-col justify-between p-10 min-h-[320px] transition-all duration-300 hover:-translate-y-2 ${
                  isPurple 
                    ? 'bg-[#EFE8FF] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]' 
                    : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <Icon className="w-12 h-12 text-[#171321] mb-8" strokeWidth={1.5} />
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171321] mb-4">
                    {model.title}
                  </h3>
                  <p className={`text-lg text-gray-700 leading-snug ${isFull ? 'max-w-2xl' : ''}`}>
                    {model.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ModelsPage;