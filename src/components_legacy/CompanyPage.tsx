'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Play } from 'lucide-react';
import {
  Code,
  Settings,
  BarChart,
  Search,
  PenTool,
  Rocket,
  Lock,
  Target,
  Eye,
  BookOpen,
  CheckCircle,
  Globe,
  Users
} from 'lucide-react';

import anteraVideo from '../assets/company-video.mp4';

export const CompanyPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Card data for easier management
  const cards = [
    // Row 1: Mission & Reach
    { id: 'mission', title: 'Our Mission', desc: 'To enable organizations across Africa to compete and grow in a digital-first world.', icon: Code, span: 'large' },
    { id: 'reach', title: 'African Reach', desc: 'Delivering practical technology solutions tailored to African businesses.', icon: Globe, span: 'small' },
    
    // Row 2: Expertise & Applied AI
    { id: 'expertise', title: 'Our Expertise', desc: 'Built by engineers with hands-on experience in cloud, AI, and cybersecurity.', icon: Users, span: 'small' },
    { id: 'ai', title: 'Applied AI', desc: 'End-to-end AI solutions for enterprise transformation.', icon: BarChart, span: 'tall' },
    { id: 'models', title: 'Frontier Models', desc: 'State-of-the-art ML models trained for African languages and contexts.', icon: Settings, span: 'small' },
    
    // Row 3: How We Work
    { id: 'assess', title: 'Assess', desc: 'Understand business goals, systems, and risks before any work begins.', icon: Search, span: 'large' },
    { id: 'design', title: 'Design', desc: 'Create secure, scalable, and practical architectures.', icon: PenTool, span: 'small' },
    { id: 'deliver', title: 'Deliver', desc: 'Implement solutions in clear phases and milestones.', icon: Rocket, span: 'small' },
    { id: 'optimize', title: 'Optimize', desc: 'Measure impact and continuously improve performance.', icon: Lock, span: 'large' },
    
    // Row 4: Values
    { id: 'security', title: 'Security-first', desc: 'Every solution starts with protecting your data and systems.', icon: Lock, span: 'large' },
    { id: 'outcome', title: 'Outcome-driven', desc: 'Practical solutions that deliver real business results.', icon: Target, span: 'small' },
    { id: 'transparency', title: 'Transparency', desc: 'Clear communication and accountability at every step.', icon: Eye, span: 'small' },
    { id: 'learning', title: 'Continuous learning', desc: 'Always improving and staying ahead of technology trends.', icon: BookOpen, span: 'small' },
    { id: 'expertise2', title: 'Our Expertise', desc: 'Our team combines strong technical skills with practical business understanding across cloud, AI, data, and cybersecurity.', icon: CheckCircle, span: 'tall' },
    { id: 'accountability', title: 'Accountability', desc: 'We take ownership of outcomes and stand by our work.', icon: Lock, span: 'large' },
  ];

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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Antera.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Enabling organizations across Africa to compete and grow in a digital-first world.
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
              ref={videoRef}
              src={anteraVideo}
              className="w-full h-full object-cover"
              loop
              playsInline
              controls={isPlaying}
            />
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-[#171321] ml-1" fill="currentColor" />
                </motion.div>
              </button>
            )}
          </div>
        </motion.div>

        {/* How We Work Title - Moved up for better flow */}
        <div className="mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#171321]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Work.
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isPurple = index % 2 === 0;
            const gridClass = getGridClass(card.span);
            
            return (
              <motion.div
                key={card.id}
                className={`${gridClass} flex flex-col justify-between p-10 min-h-[280px] transition-all duration-300 hover:-translate-y-2 ${
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
                  <Icon className="w-12 h-12 text-[#171321] mb-8" strokeWidth={1.5} />
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171321] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-snug">
                    {card.desc}
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

export default CompanyPage;