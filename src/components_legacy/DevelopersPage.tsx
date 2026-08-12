'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Cpu, Database, Layout, Code, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ArrowLink = ({ text, href }: { text: string; href?: string }) => (
  <a 
    href={href || "#"} 
    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black group-hover:text-[#FA520F] transition-colors"
    target={href?.startsWith('http') ? "_blank" : undefined}
    rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
  >
    <span>{text}</span>
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </a>
);

export const DevelopersPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const { t } = useLanguage();

  return (
    <div ref={containerRef} className="bg-[#fffaeb] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-[#fffaeb]">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="mb-24 text-left max-w-4xl">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FA520F] mb-4">Documentation Center</div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F] mb-6 leading-tight">
            Do it all with custom code integration.
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-mono tracking-wider font-light max-w-2xl">
            Everything your developers need to securely configure and link our platforms and SDK tools.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#1F1F1F]/10 divide-y md:divide-y-0 md:divide-x divide-[#1F1F1F]/10 bg-white shadow-sm">
            
            <motion.div 
              className="group md:col-span-2 border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Terminal className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">System Documentation</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Complete SDK references with authorization flows, schema types, and deployment guidelines.
                </p>
                <ArrowLink text="Explore docs" />
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Cpu className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">SDK Libraries</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Ready-to-use SDKs configured for Javascript, Python, and PHP environments.
                </p>
                <ArrowLink text="Explore docs" />
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Database className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Data Schema Specs</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Complete entity relationship schemas and sovereign migration guides.
                </p>
                <ArrowLink text="Explore docs" />
              </div>
            </motion.div>

            <motion.div 
              className="group border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Layout className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">UI Components</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Pre-built interface tokens, components, and layout styling assets.
                </p>
                <ArrowLink 
                  text="Explore docs" 
                  href="https://aibruno.vercel.app/" 
                />
              </div>
            </motion.div>

            <motion.div 
              className="group md:row-span-2 border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Code className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Code Playground</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Interactive safe playground sandbox to run telemetry sequences in real-time.
                </p>
                <ArrowLink text="Launch playground" />
              </div>
            </motion.div>

            <motion.div 
              className="group md:col-span-2 border-b border-[#1F1F1F]/10 p-8 md:p-12 min-h-[360px] md:min-h-[420px] flex flex-col justify-between hover:bg-[#1F1F1F]/5 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Network className="w-8 h-8 text-[#FA520F]" />
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1F1F1F] mb-3">Event Webhooks</h3>
                <p className="text-xs md:text-sm text-neutral-500 font-mono tracking-wide leading-relaxed font-light">
                  Subscribe to platform ledger events to trigger automated operational pipelines.
                </p>
                <ArrowLink text="Explore docs" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersPage;