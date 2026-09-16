'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const SocialPill = ({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 w-full max-w-[200px] px-5 py-2.5 text-[11px] font-mono uppercase tracking-[0.15em] text-neutral-800 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
  >
    {icon}
    <span>{label}</span>
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="text-[14px] text-neutral-700 hover:text-[#FA520F] transition-colors leading-relaxed block py-0.5"
    >
      {children}
    </Link>
  </li>
);

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-6 font-mono">
    {children}
  </h3>
);

export const FinalCTAAndFooter = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="relative w-full bg-white text-black font-sans antialiased overflow-hidden selection:bg-[#FA520F] selection:text-white">
      {/* Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 bg-white flex-shrink-0">
                <Image
                  src="/antera-logo.jpeg"
                  alt="Antera Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-black">
                Antera Technologies
              </span>
            </div>

            {/* Copyright */}
            <div className="text-[14px] text-neutral-700 leading-relaxed">
              © {new Date().getFullYear()} Antera Technologies Inc.<br />
              All rights reserved.
            </div>

            {/* Social pills */}
            <div className="flex flex-col gap-2.5">
              <SocialPill href="https://youtube.com/@antera_tz" label="YouTube" icon={<YoutubeIcon />} />
              <SocialPill href="https://x.com/antera_tz" label="X" icon={<XIcon />} />
              <SocialPill href="https://linkedin.com/company/antera_tz" label="LinkedIn" icon={<LinkedinIcon />} />
              <SocialPill href="https://instagram.com/antera_tz" label="Instagram" icon={<InstagramIcon />} />
            </div>
          </div>

          {/* ── Middle: 4 link columns ── */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">

            {/* Column 1: Offerings / Products */}
            <div>
              <ColumnHeading>{t('nav.products')}</ColumnHeading>
              <ul className="space-y-1">
                <FooterLink href="https://kava.co.tz/">Kava</FooterLink>
                <FooterLink href="https://aibruno.vercel.app/">AI Bruno</FooterLink>
                <FooterLink href="https://swahiba.vercel.app/">Swahiba</FooterLink>
                <FooterLink href="/data-analytics">Data Analytics</FooterLink>
                <FooterLink href="/solutions">AI Solutions</FooterLink>
                <FooterLink href="/models">Data Science</FooterLink>
                <FooterLink href="/solutions">Business Automation</FooterLink>
              </ul>
            </div>

            {/* Column 2: Impact / Solutions */}
            <div>
              <ColumnHeading>Impact</ColumnHeading>
              <ul className="space-y-1">
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

            {/* Column 3: Capabilities */}
            <div>
              <ColumnHeading>Capabilities</ColumnHeading>
              <ul className="space-y-1">
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

            {/* Column 4: Company / Documents */}
            <div>
              <ColumnHeading>{t('nav.company')}</ColumnHeading>
              <ul className="space-y-1">
                <FooterLink href="/company">About Us</FooterLink>
                <FooterLink href="/team">Team</FooterLink>
                <FooterLink href="/office">Office</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/solutions">Solutions</FooterLink>
                <FooterLink href="/data-analytics">Data Analytics</FooterLink>
                <FooterLink href="/models">Models</FooterLink>
              </ul>
            </div>

          </div>
        </div>

        {/* Contact strip — no border, just spaced */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 text-[13px] font-mono text-neutral-600">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-2">Email</span>
            <a href="mailto:info@antera.co.tz" className="hover:text-[#FA520F] transition-colors">
              info@antera.co.tz
            </a>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-2">Phone</span>
            <a href="tel:+255625534921" className="hover:text-[#FA520F] transition-colors">
              +255 625 534 921
            </a>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-2">Phone</span>
            <a href="tel:+255760984921" className="hover:text-[#FA520F] transition-colors">
              +255 760 984 921
            </a>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-2">WhatsApp</span>
            <a
              href="https://wa.me/255760984921"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FA520F] transition-colors"
            >
              +255 774 174 921
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar — language pills, no borders */}
      <div className="pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-row items-center justify-between">

          {/* Language pills — styled like the slider pills */}
          <div className="flex items-center gap-2">
            {['en', 'sw'].map((lang) => {
              const isActive = language === lang;
              return (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as any)}
                  className={`px-4 py-2 text-[13px] whitespace-nowrap rounded-[3px] border transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#D9D9D9] border-[#D9D9D9] text-[#111622] font-medium'
                      : 'bg-white border-gray-200 text-gray-500 hover:text-[#111622] hover:border-gray-300'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FinalCTAAndFooter;