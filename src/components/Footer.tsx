'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export const FinalCTAAndFooter = () => {
  const { language, setLanguage, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div ref={containerRef} className="relative w-full bg-[#0B0B0B] text-white font-mono antialiased flex flex-col overflow-hidden selection:bg-[#FA520F] selection:text-white">
      {/* Dark background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left" style={{ scaleX }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
        <header className="mb-24 md:mb-32 text-left max-w-4xl">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#FA520F] mb-4">Empowering sovereignty</div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
            Let's build the future of intelligence together.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-400 font-light max-w-2xl">
            Partner with our world-class engineering team to build scalable, high-performance software architectures for Tanzanian and African markets.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-neutral-800 pt-16">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/antera-logo.jpeg" alt="Antera" width={20} height={20} className="invert brightness-200" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">ANTERA</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                Tailored systems, data infrastructures, and applied machine learning systems engineered for operational impact.
              </p>
            </div>
            <div className="text-[10px] text-neutral-600 mt-8 font-light">
              ANTERA GROUP SOFTWARE © {new Date().getFullYear()}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-6">{t('nav.products')}</h3>
            <ul className="space-y-3 text-[11px] text-neutral-400">
              <FooterLink href="/products">Sekela POS Platform</FooterLink>
              <FooterLink href="/products">Kava Career Intelligence</FooterLink>
              <FooterLink href="https://swahiba.vercel.app/">Swahiba Client</FooterLink>
              <FooterLink href="https://aibruno.vercel.app/">AI Bruno Interface</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-6">{t('nav.company')}</h3>
            <ul className="space-y-3 text-[11px] text-neutral-400">
              <FooterLink href="/company">Our Mission</FooterLink>
              <FooterLink href="/team">Engineering Team</FooterLink>
              <FooterLink href="/office">Corporate Office</FooterLink>
              <FooterLink href="/blog">Articles & Insights</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-6">Contact</h3>
            <ul className="space-y-3 text-[11px] text-neutral-400">
              <li><span className="text-neutral-500">EMAIL:</span> info@antera.co.tz</li>
              <li><span className="text-neutral-500">PHONE:</span> +255 760 984 921</li>
              <li><span className="text-neutral-500">OFFICE:</span> Dar es Salaam, Tanzania</li>
              <li className="pt-2">
                <a href="https://wa.me/255760984921" target="_blank" className="text-[#FA520F] hover:text-white transition-colors">
                  Open WhatsApp Connection →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#080B0B] py-6 border-t border-neutral-900">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-row items-center justify-between text-[9px] font-semibold tracking-[0.1em] text-neutral-500">
          <div>ENGINEERED FOR IMPACT. DEFENDING DIGITAL SOVEREIGNTY.</div>
          <div className="flex items-center gap-3">
            {['en', 'sw'].map(lang => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as any)}
                className={`uppercase px-2 py-0.5 border border-neutral-800 transition-colors ${
                  language === lang 
                    ? 'bg-[#FA520F] text-white border-[#FA520F]' 
                    : 'bg-transparent text-neutral-500 hover:text-white'
                }`}
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
    {href.startsWith('http') ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block py-0.5">
        {children}
      </a>
    ) : (
      <Link href={href} className="hover:text-white transition-colors block py-0.5">
        {children}
      </Link>
    )}
  </li>
)