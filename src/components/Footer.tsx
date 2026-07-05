'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const PixelMailIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <rect x="7" y="9" width="10" height="7" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <path d="M7 9l5 4 5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const PixelPhoneIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1"/>
    <rect x="9" y="7" width="6" height="10" rx="1" stroke="white" strokeWidth="1.5"/>
    <path d="M11 17h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelWhatsappIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1"/>
    <path d="M12 6a5 5 0 0 1 5 5c0 2.5-2 5-5 5a4.5 4.5 0 0 1-2-.5l-2 .5.5-2A4.5 4.5 0 0 1 7 11a5 5 0 0 1 5-5z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 11h4M10 13h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </motion.svg>
);

const PixelLogoIcon = () => (
  <motion.svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="1"/>
    <path d="M8 8h3v8H8V8zm5 0h3v5h-3V8z" fill="white"/>
  </motion.svg>
);

const DiamondDecoration = ({ className = "" }: { className?: string }) => (
  <motion.div className={`w-16 h-16 border border-neutral-200 rotate-45 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

export const FinalCTAAndFooter = () => {
  const { language, setLanguage, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div ref={containerRef} className="w-full bg-[#FAFAF8] text-black font-sans antialiased flex flex-col overflow-hidden selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
        <div className="flex justify-center items-center gap-8 mb-12">
          <PixelMailIcon />
          <PixelPhoneIcon />
          <PixelWhatsappIcon />
        </div>

        <header className="mb-24 md:mb-40 text-center">
          <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in <span className="text-[#FA520F]">Touch.</span>
          </motion.h1>
          <motion.p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to transform your business? Reach out and let's build something extraordinary together.
          </motion.p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <DiamondDecoration className="absolute -top-8 -left-8 hidden md:block" />
          <div className="absolute -top-3 right-0 w-2 h-2 bg-black hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-neutral-200 bg-white">
            
            <div className="group p-8 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b md:border-b-0 lg:border-r border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <PixelLogoIcon />
                <span className="text-lg font-medium tracking-tight">Antera Group</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We use smart technology and AI to help businesses grow and work better at any scale.
              </p>
            </div>

            <div className="group p-8 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b md:border-b-0 lg:border-r border-neutral-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 font-mono">{t('nav.products')}</h3>
              <ul className="space-y-3">
                <FooterLink href="/solutions">AI Solutions</FooterLink>
                <FooterLink href="/sekela-apis">App Development</FooterLink>
                <FooterLink href="/models">Data Science</FooterLink>
                <FooterLink href="/solutions">Business Automation</FooterLink>
              </ul>
            </div>

            <div className="group p-8 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b md:border-b-0 lg:border-r border-neutral-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 font-mono">{t('nav.company')}</h3>
              <ul className="space-y-3">
                <FooterLink href="/company">About Us</FooterLink>
                <FooterLink href="/team">Team</FooterLink>
                <FooterLink href="/office">Office</FooterLink>
                <FooterLink href="/solutions">Solutions</FooterLink>
                <FooterLink href="/sekela-apis">Sekela APIS</FooterLink>
                <FooterLink href="/developers">Developers</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
              </ul>
            </div>

            <div className="group p-8 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 font-mono">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-neutral-500 group/link">
                  <span className="text-sm font-mono group-hover/link:text-black transition-colors">info@antera.co.tz</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-500 group/link">
                  <PixelPhoneIcon />
                  <span className="text-sm font-mono group-hover/link:text-black transition-colors">+255 760 984 921</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-500 group/link">
                  <PixelPhoneIcon />
                  <span className="text-sm font-mono group-hover/link:text-black transition-colors">+255 774 174 921</span>
                </li>
                <a href="https://wa.me/255760984921" target="_blank" className="flex items-center gap-3 text-neutral-500 group/link cursor-pointer">
                  <PixelWhatsappIcon />
                  <span className="text-sm font-mono group-hover/link:text-black transition-colors">WhatsApp Support</span>
                </a>
              </ul>
            </div>

            <div className="absolute -bottom-3 left-0 w-2 h-2 bg-black hidden md:block" />
            <DiamondDecoration className="absolute -bottom-8 -right-8 hidden md:block" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end pt-12 bg-[#FAFAF8] overflow-hidden select-none pointer-events-none">
        <motion.svg
          initial={{ y: 60 }} whileInView={{ y: 4 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
          width="160" height="140" viewBox="0 0 16 14" fill="none" className="text-black"
        >
          <path d="M2 0h2v2H2V0zm10 0h2v2h-2V0zM2 2h2v2H2V2zm10 0h2v2h-2V2zM0 4h16v6H0V4zm2 2h2v2H2V6zm10 0h2v2h-2V6zm-6 4h4v2H6v-2zm-2 2h8v2H4v-2z" fill="currentColor" />
        </motion.svg>
      </div>

      <div className="bg-[#FAFAF8] py-6 px-6 lg:px-8 w-full border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto flex flex-row items-center justify-between text-[10px] font-mono text-neutral-400 font-bold tracking-wider">
          <div>Antera Group Software© {new Date().getFullYear()}</div>
          <div className="flex items-center gap-4">
            {['en', 'sw', 'pl'].map(lang => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as any)}
                className={`uppercase px-2 py-0.5 border border-neutral-200 transition-colors ${language === lang ? 'bg-[#FA520F] text-white border-[#FA520F]' : 'bg-white hover:text-black'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-sm font-medium text-neutral-500 hover:text-[#FA520F] transition-colors block">
      {children}
    </Link>
  </li>
)