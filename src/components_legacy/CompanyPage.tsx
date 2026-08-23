'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
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
  const { t } = useLanguage();
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

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen text-black font-sans antialiased selection:bg-[#FA520F] selection:text-white overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl" />
      </div>
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        
        {/* Header */}
        <section className="mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Antera.
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Enabling organizations across Africa to compete and grow in a digital-first world.
          </motion.p>
        </section>

        {/* Video Section */}
        <motion.div 
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/20">
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
                  <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                </motion.div>
              </button>
            )}
          </div>
        </motion.div>

        {/* Grid 1: Mission & Reach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-32">
          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <Code className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Our Mission</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                To enable organizations across Africa to compete and grow in a digital-first world.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <Globe className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">African Reach</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Delivering practical technology solutions tailored to African businesses.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid 2: Expertise & Applied AI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-32">
          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Users className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Our Expertise</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Built by engineers with hands-on experience in cloud, AI, and cybersecurity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="md:row-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <BarChart className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Applied AI</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                End-to-end AI solutions for enterprise transformation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Settings className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Frontier Models</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                State-of-the-art ML models trained for African languages and contexts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* How We Work Title */}
        <div className="mb-12 text-left">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.02em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Work.
          </motion.h2>
        </div>
          
        {/* Grid 3: How We Work */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-32">
          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <Search className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Assess</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Understand business goals, systems, and risks before any work begins.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <PenTool className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Design</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Create secure, scalable, and practical architectures.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Rocket className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Deliver</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Implement solutions in clear phases and milestones.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Lock className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Optimize</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Measure impact and continuously improve performance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid 4: Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7 }}
          >
            <Lock className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Security-first</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                Every solution starts with protecting your data and systems.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <Target className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Outcome-driven</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Practical solutions that deliver real business results.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Eye className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Transparency</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Clear communication and accountability at every step.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <BookOpen className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Continuous learning</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Always improving and staying ahead of technology trends.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="md:row-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <CheckCircle className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Our Expertise</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                Our team combines strong technical skills with practical business understanding across cloud, AI, data, and cybersecurity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-2 bg-[#F5F5F5] p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between group hover:shadow-lg hover:shadow-[#FA520F]/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <Lock className="w-14 h-14 text-black/60 group-hover:text-[#FA520F] transition-colors duration-200" />
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">Accountability</h3>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                We take ownership of outcomes and stand by our work.
              </p>
            </div>
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default CompanyPage;