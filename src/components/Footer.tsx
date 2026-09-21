'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import hero9 from '@/assets/hero-4.jpg';

const YoutubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith('http');
  
  if (isExternal) {
    return (
      <li>
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-semibold text-[#1F1F1F] hover:text-[#FA520F] transition-colors block"
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className="text-sm font-semibold text-[#1F1F1F] hover:text-[#FA520F] transition-colors block">
        {children}
      </Link>
    </li>
  );
};

export const FinalCTAAndFooter = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="relative w-full bg-[#FAFAF8] text-black font-sans antialiased border-t border-neutral-200 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={hero9}
          alt="Footer Background" 
          className="object-cover object-center opacity-40" 
          fill 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8]/70 via-[#FAFAF8]/60 to-[#FAFAF8]/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FA520F]/10 via-transparent to-[#FCD34D]/10" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
        
        {/* Get in Touch Header */}
        <header className="mb-24 md:mb-40 text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-normal tracking-[-0.03em] leading-[0.95] text-black">
            Get in Touch.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-[#1F1F1F] mx-auto mt-8 font-medium">
            Ready to transform your business? Reach out and let's build something extraordinary together.
          </p>
        </header>

        {/* Glassmorphism Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-neutral-200 bg-white/70 backdrop-blur-sm">
          
          {/* Column 1: Brand & Contact */}
          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 bg-white flex items-center justify-center shrink-0">
                  <Image src="/antera-logo.jpeg" alt="Antera Logo" className="object-cover" fill priority />
                </div>
                <span className="text-lg font-semibold tracking-tight text-black">Antera Technologies</span>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#1F1F1F] group/link font-medium">
                  <Mail className="w-4 h-4 text-neutral-500 shrink-0"/>
                  <a href="mailto:info@antera.co.tz" className="text-sm font-mono group-hover/link:text-black transition-colors">info@antera.co.tz</a>
                </li>
                <li className="flex items-center gap-3 text-[#1F1F1F] group/link font-medium">
                  <Phone className="w-4 h-4 text-neutral-500 shrink-0"/>
                  <a href="tel:+255625534921" className="text-sm font-mono group-hover/link:text-black transition-colors">+255 625 534 921</a>
                </li>
                <li className="flex items-center gap-3 text-[#1F1F1F] group/link font-medium">
                  <Phone className="w-4 h-4 text-neutral-500 shrink-0"/>
                  <a href="tel:+255760984921" className="text-sm font-mono group-hover/link:text-black transition-colors">+255 760 984 921</a>
                </li>
                <li className="flex items-center gap-3 text-[#1F1F1F] group/link font-medium">
                  <MessageCircle className="w-4 h-4 text-neutral-500 shrink-0"/>
                  <a href="https://wa.me/255760984921" target="_blank" rel="noopener noreferrer" className="text-sm font-mono group-hover/link:text-black transition-colors">WhatsApp Support</a>
                </li>
              </ul>
            </div>
            
            <div className="text-[13px] text-neutral-500 font-medium mt-12">
              © {new Date().getFullYear()} Antera Technologies Inc.<br />All rights reserved.
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 font-mono">{t('nav.products')}</h3>
            <ul className="space-y-3">
              <FooterLink href="https://kava.co.tz/">Kava</FooterLink>
              <FooterLink href="https://aibruno.vercel.app/">AI Bruno</FooterLink>
              <FooterLink href="https://swahiba.vercel.app/">Swahiba</FooterLink>
              <FooterLink href="/data-analytics">Data Analytics</FooterLink>
              <FooterLink href="/solutions">AI Solutions</FooterLink>
              <FooterLink href="/models">Data Science</FooterLink>
              <FooterLink href="/solutions">Business Automation</FooterLink>
            </ul>
          </div>

          {/* Column 3: Impact */}
          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 font-mono">Impact</h3>
            <ul className="space-y-3">
              <FooterLink href="/customers">Enterprise</FooterLink>
              <FooterLink href="/customers">Financial Services</FooterLink>
              <FooterLink href="/customers">Government</FooterLink>
              <FooterLink href="/customers">Healthcare</FooterLink>
              <FooterLink href="/customers">Retail & Commerce</FooterLink>
              <FooterLink href="/customers">NGOs & Non-Profit</FooterLink>
              <FooterLink href="/customers">Telecommunications</FooterLink>
              <FooterLink href="/customers">Supply Chain</FooterLink>
            </ul>
          </div>

          {/* Column 4: Capabilities */}
          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 font-mono">Capabilities</h3>
            <ul className="space-y-3">
              <FooterLink href="/solutions">AI + ML</FooterLink>
              <FooterLink href="/solutions">Data Integration</FooterLink>
              <FooterLink href="/solutions">Digital Twin</FooterLink>
              <FooterLink href="/solutions">Edge AI</FooterLink>
              <FooterLink href="/solutions">Marketplace</FooterLink>
              <FooterLink href="/solutions">Pipeline Builder</FooterLink>
              <FooterLink href="/solutions">Process Mining</FooterLink>
              <FooterLink href="/solutions">Real-Time Alerting</FooterLink>
            </ul>
          </div>

          {/* Column 5: Company & Socials */}
          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 font-mono">{t('nav.company')}</h3>
              <ul className="space-y-3">
                <FooterLink href="/company">About Us</FooterLink>
                <FooterLink href="/team">Team</FooterLink>
                <FooterLink href="/office">Office</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/solutions">Solutions</FooterLink>
                <FooterLink href="/data-analytics">Data Analytics</FooterLink>
                <FooterLink href="/models">Models</FooterLink>
              </ul>
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-200 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-neutral-400">
                <a href="https://youtube.com/@antera_tz" target="_blank" rel="noopener noreferrer" className="hover:text-[#FA520F] transition-colors"><YoutubeIcon/></a>
                <a href="https://instagram.com/antera_tz" target="_blank" rel="noopener noreferrer" className="hover:text-[#FA520F] transition-colors"><InstagramIcon/></a>
                <a href="https://x.com/antera_tz" target="_blank" rel="noopener noreferrer" className="hover:text-[#FA520F] transition-colors"><XIcon/></a>
                <a href="https://linkedin.com/company/antera_tz" target="_blank" rel="noopener noreferrer" className="hover:text-[#FA520F] transition-colors"><LinkedinIcon/></a>
              </div>

              {/* Language Pills */}
              <div className="flex items-center gap-2">
                {['en', 'sw'].map((lang) => {
                  const isActive = language === lang;
                  return (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang as any)}
                      className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap rounded-[3px] border transition-colors duration-200 ${
                        isActive
                          ? 'bg-[#1F1F1F] border-[#1F1F1F] text-white'
                          : 'bg-white border-neutral-200 text-neutral-500 hover:text-[#111622] hover:border-neutral-300'
                      }`}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default FinalCTAAndFooter;