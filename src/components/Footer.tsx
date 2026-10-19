'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import hero9 from '@/assets/gritty-blue.png';
import logo from '@/assets/logo.png';

const SWAHILI_ICON = 'https://cdn-icons-png.flaticon.com/128/303/303200.png';
const ENGLISH_ICON = 'https://cdn-icons-png.flaticon.com/128/10452/10452489.png';

const CONTACT_ICONS = {
  email: 'https://cdn-icons-png.flaticon.com/128/15047/15047587.png',
  phone: 'https://cdn-icons-png.flaticon.com/128/3014/3014499.png',
  whatsapp: 'https://cdn-icons-png.flaticon.com/128/4008/4008228.png',
};

const SOCIALS = [
  { name: 'Facebook',  href: 'https://facebook.com/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111398.png' },
  { name: 'Instagram', href: 'https://instagram.com/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/733/733558.png' },
  { name: 'LinkedIn',  href: 'https://linkedin.com/company/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png' },
  { name: 'X',         href: 'https://twitter.com/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968830.png' },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith('http');
  
  if (isExternal) {
    return (
      <li>
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-semibold text-[#1F1F1F] hover:text-black transition-colors block"
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className="text-sm font-semibold text-[#1F1F1F] hover:text-black transition-colors block">
        {children}
      </Link>
    </li>
  );
};

export const FinalCTAAndFooter = () => {
  const { language, setLanguage, t } = useLanguage();
  const isSw = language === 'sw';
  const isEnglish = language === 'en';

  return (
    <footer className="relative w-full bg-[#FAFAF8] text-black font-sans antialiased border-t border-neutral-200 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={hero9}
          alt="Footer Background" 
          className="object-cover object-center opacity-70" 
          fill 
          priority
        />
        {/* Replaced heavy white gradients with a subtle translucent overlay to maintain text legibility without hiding the image */}
        <div className="absolute inset-0 bg-[#FAFAF8]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8] via-transparent to-[#FAFAF8]/50" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
        
        <header className="mb-24 md:mb-40 text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-normal tracking-[-0.03em] leading-[0.95] text-black drop-shadow-sm">
            {t('footer.get_in_touch') || (isSw ? 'Wasiliana Nasi.' : 'Get in Touch.')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-[#1F1F1F] mx-auto mt-8 font-medium">
            {t('footer.get_in_touch_desc') || (isSw ? 'Uko tayari kubadilisha biashara yako? Wasiliana nasi na tujenge kitu cha kushangaza pamoja.' : "Ready to transform your business? Reach out and let's build something extraordinary together.")}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-neutral-200 bg-white/80 backdrop-blur-md">
          
          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src={logo.src} 
                  alt="Antera Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#1F1F1F] group/link font-medium">
                  <img src={CONTACT_ICONS.email} alt="Email" className="w-5 h-5 object-contain opacity-70 group-hover/link:opacity-100 transition-opacity shrink-0" />
                  <a href="mailto:info@antera.co.tz" className="text-sm font-mono group-hover/link:text-black transition-colors">info@antera.co.tz</a>
                </li>
                <li className="flex items-center gap-3 text-[#1F1F1F] group/link font-medium">
                  <img src={CONTACT_ICONS.phone} alt="Phone" className="w-5 h-5 object-contain opacity-70 group-hover/link:opacity-100 transition-opacity shrink-0" />
                  <a href="tel:+255625534921" className="text-sm font-mono group-hover/link:text-black transition-colors">+255 625 534 921</a>
                </li>
                <li className="flex items-center gap-3 text-[#1F1F1F] group/link font-medium">
                  <img src={CONTACT_ICONS.phone} alt="Phone" className="w-5 h-5 object-contain opacity-70 group-hover/link:opacity-100 transition-opacity shrink-0" />
                  <a href="tel:+255760984921" className="text-sm font-mono group-hover/link:text-black transition-colors">+255 760 984 921</a>
                </li>
                <li className="flex items-center gap-3 text-[#1F1F1F] group/link font-medium">
                  <img src={CONTACT_ICONS.whatsapp} alt="WhatsApp" className="w-5 h-5 object-contain opacity-70 group-hover/link:opacity-100 transition-opacity shrink-0" />
                  <a href="https://wa.me/255760984921" target="_blank" rel="noopener noreferrer" className="text-sm font-mono group-hover/link:text-black transition-colors">
                    {t('footer.whatsapp_support') || (isSw ? 'Msaada wa WhatsApp' : 'WhatsApp Support')}
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-[13px] text-neutral-500 font-medium mt-12">
              © {new Date().getFullYear()} Antera Technologies Inc.<br />{t('footer.rights_reserved') || (isSw ? 'Haki zote zimehifadhiwa.' : 'All rights reserved.')}
            </div>
          </div>

          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 font-mono">{t('nav.products')}</h3>
            <ul className="space-y-3">
              <FooterLink href="https://kava.co.tz/">Kava</FooterLink>
              <FooterLink href="https://aibruno.vercel.app/">AI Bruno</FooterLink>
              <FooterLink href="https://swahiba.vercel.app/">Swahiba</FooterLink>
              <FooterLink href="/data-analytics">{isSw ? 'Uchambuzi wa Data' : 'Data Analytics'}</FooterLink>
              <FooterLink href="/solutions">{isSw ? 'Suluhisho za AI' : 'AI Solutions'}</FooterLink>
              <FooterLink href="/models">{isSw ? 'Sayansi ya Data' : 'Data Science'}</FooterLink>
              <FooterLink href="/solutions">{isSw ? 'Otomatiki ya Biashara' : 'Business Automation'}</FooterLink>
            </ul>
          </div>

          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 font-mono">
              {t('footer.impact') || (isSw ? 'Athari' : 'Impact')}
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/customers">{isSw ? 'Biashara Kubwa' : 'Enterprise'}</FooterLink>
              <FooterLink href="/customers">{isSw ? 'Huduma za Fedha' : 'Financial Services'}</FooterLink>
              <FooterLink href="/customers">{isSw ? 'Serikali' : 'Government'}</FooterLink>
              <FooterLink href="/customers">{isSw ? 'Sekta ya Afya' : 'Healthcare'}</FooterLink>
              <FooterLink href="/customers">{isSw ? 'Biashara & Rejareja' : 'Retail & Commerce'}</FooterLink>
              <FooterLink href="/customers">{isSw ? 'Mashirika Yasiyo ya Kiserekali' : 'NGOs & Non-Profit'}</FooterLink>
              <FooterLink href="/customers">{isSw ? 'Mawasiliano' : 'Telecommunications'}</FooterLink>
              <FooterLink href="/customers">{isSw ? 'Mnyororo wa Upatikanaji' : 'Supply Chain'}</FooterLink>
            </ul>
          </div>

          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 font-mono">
              {t('footer.capabilities') || (isSw ? 'Uwezo' : 'Capabilities')}
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/solutions">AI + ML</FooterLink>
              <FooterLink href="/solutions">{isSw ? 'Ujumuishaji wa Data' : 'Data Integration'}</FooterLink>
              <FooterLink href="/solutions">Digital Twin</FooterLink>
              <FooterLink href="/solutions">Edge AI</FooterLink>
              <FooterLink href="/solutions">Marketplace</FooterLink>
              <FooterLink href="/solutions">{isSw ? 'Ujenzi wa Mtiririko' : 'Pipeline Builder'}</FooterLink>
              <FooterLink href="/solutions">{isSw ? 'Uchimbaji wa Michakato' : 'Process Mining'}</FooterLink>
              <FooterLink href="/solutions">{isSw ? 'Taarifa za Muda Halisi' : 'Real-Time Alerting'}</FooterLink>
            </ul>
          </div>

          <div className="group p-8 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-r border-b border-neutral-200">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 font-mono">{t('nav.company')}</h3>
              <ul className="space-y-3">
                <FooterLink href="/company">{isSw ? 'Kuhusu Sisi' : 'About Us'}</FooterLink>
                <FooterLink href="/team">{isSw ? 'Timu Yetu' : 'Team'}</FooterLink>
                <FooterLink href="/office">{isSw ? 'Ofisi' : 'Office'}</FooterLink>
                <FooterLink href="/blog">{isSw ? 'Blogu' : 'Blog'}</FooterLink>
                <FooterLink href="/solutions">{isSw ? 'Suluhisho' : 'Solutions'}</FooterLink>
                <FooterLink href="/data-analytics">{isSw ? 'Uchambuzi wa Data' : 'Data Analytics'}</FooterLink>
                <FooterLink href="/models">{isSw ? 'Mifumo' : 'Models'}</FooterLink>
              </ul>
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-200 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-neutral-400">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="hover:scale-125 transition-transform duration-300"
                  >
                    <img
                      src={s.icon}
                      alt={s.name}
                      width={32}
                      height={32}
                      className="w-6 h-6 object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>

              <button
                onClick={() => setLanguage(isEnglish ? 'sw' : 'en')}
                aria-label="Switch language"
                title={isEnglish ? 'Kubadili kwenda Kiswahili' : 'Switch to English'}
                className="relative flex items-center cursor-pointer select-none p-1 rounded-lg overflow-hidden w-[80px]"
                style={{
                  background: 'linear-gradient(140deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.20) 45%, rgba(255,255,255,0.40) 100%)',
                  backdropFilter: 'blur(30px) saturate(200%) brightness(1.05)',
                  WebkitBackdropFilter: 'blur(30px) saturate(200%) brightness(1.05)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: `
                    0 8px 24px rgba(0,0,0,0.12),
                    inset 0 1px 0 rgba(255,255,255,0.9),
                    inset 0 -1px 0 rgba(255,255,255,0.25)
                  `,
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-1 top-[1px] h-1/2 rounded-md bg-gradient-to-b from-white/60 to-transparent"
                />

                <motion.span
                  aria-hidden
                  initial={false}
                  animate={{ x: isEnglish ? 38 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="pointer-events-none absolute top-1 left-1 w-9 h-9 rounded-md"
                  style={{
                    background: 'linear-gradient(140deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%)',
                    boxShadow: `
                      0 4px 12px rgba(0,0,0,0.18),
                      inset 0 1px 0 rgba(255,255,255,1),
                      inset 0 -1px 0 rgba(0,0,0,0.05)
                    `,
                  }}
                />

                <span className="relative z-10 flex items-center justify-center w-9 h-9">
                  <img
                    src={SWAHILI_ICON}
                    alt="Swahili"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </span>

                <span className="relative z-10 flex items-center justify-center w-9 h-9 ml-[2px]">
                  <img
                    src={ENGLISH_ICON}
                    alt="English"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default FinalCTAAndFooter;