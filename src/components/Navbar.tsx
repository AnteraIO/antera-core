'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

const LANGUAGE_ICON = 'https://cdn-icons-png.flaticon.com/128/4673/4673025.png';
const CLOSE_ICON = 'https://cdn-icons-png.flaticon.com/128/3906/3906839.png';
const MENU_ICON = 'https://cdn-icons-png.flaticon.com/128/3906/3906840.png';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: t('nav.products') || 'Products', href: '/products' },
    { name: t('nav.solutions') || 'Solutions', href: '/solutions' },
    { name: t('nav.data_analytics') || 'Data Analytics', href: '/data-analytics' },
    { name: t('nav.models') || 'Models', href: '/models' },
    { name: t('nav.blog') || 'Blog', href: '/blog' },
    { name: t('nav.customers') || 'Customers', href: '/customers' },
    { name: t('nav.company') || 'Company', href: '/company' },
  ];

  const glassBase = scrolled
    ? 'bg-white/60 backdrop-blur-2xl backdrop-saturate-180 border border-black/10 text-[#111622]'
    : 'bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 text-white';

  const glassShadow = scrolled
    ? 'shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]'
    : 'shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans pointer-events-none">
      <AnimatePresence initial={false}>
        {isBannerVisible && !scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden pointer-events-auto"
          >
            <div className="bg-[#1f1e24] text-white text-[12px] md:text-[13px] py-2.5 px-10 md:px-14 flex justify-center items-center w-full relative border-b border-white/10">
              <Link href="/blog" className="flex items-center hover:text-gray-300 transition-colors text-center">
                <span className="underline underline-offset-4 decoration-white/50 hover:decoration-white">
                  {t('nav.banner') || 'We make smart computer programs for Tanzania and Africa. Call: +255 774 174 921 | WhatsApp: +255 760 984 921'}
                </span>
              </Link>
              <button
                onClick={() => setIsBannerVisible(false)}
                aria-label="Close banner"
                className="absolute right-4 md:right-6"
              >
                <img src={CLOSE_ICON} alt="Close" width={16} height={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-3 md:px-5 pt-3 md:pt-4 pointer-events-auto">
        <div
          className={`
            w-full flex items-center justify-between h-[64px] md:h-[72px] px-4 md:px-8
            rounded-md transition-all duration-300
            ${isOpen
              ? 'bg-white border border-black/10 text-[#111111] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]'
              : `${glassBase} ${glassShadow}`}
          `}
        >
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 z-50">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/antera-logo.jpeg"
                alt="Antera Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span
              className={`text-[22px] md:text-[24px] font-medium tracking-tight transition-colors ${
                isOpen || !scrolled ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]' : 'text-[#111622]'
              }`}
            >
              Antera Technologies
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors flex items-center gap-1 ${
                  isOpen
                    ? 'text-[#111111] hover:text-black'
                    : scrolled
                    ? 'text-[#111622] hover:text-black'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3 z-50">
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
                aria-label="Switch language"
                title={language === 'en' ? 'Kubadili kwenda Kiswahili' : 'Switch to English'}
                className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer select-none"
              >
                <img src={LANGUAGE_ICON} alt="Language" width={28} height={28} />
              </button>

              <div className="relative p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500">
                <Link
                  href="/contact"
                  className="block text-sm font-medium px-5 py-2 rounded-full transition-all text-white bg-[#111111] hover:bg-black"
                >
                  {t('nav.contact_sales') || 'Contact sales'}
                </Link>
              </div>
            </div>

            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer"
            >
              <img 
                src={isOpen ? CLOSE_ICON : MENU_ICON} 
                alt={isOpen ? 'Close' : 'Menu'} 
                width={32} 
                height={32}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="
                mt-2 w-full rounded-md overflow-y-auto max-h-[calc(100vh-140px)]
                bg-white border border-black/10
                shadow-[0_20px_60px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]
                text-[#111111] pointer-events-auto
              "
            >
              <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  <div className="lg:col-span-5">
                    <ul className="flex flex-col gap-4 text-[40px] md:text-[48px] lg:text-[52px] font-light leading-tight">
                      {navLinks.slice(0, 3).map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors text-left ${
                              pathname === item.href ? 'text-[#FA520F]' : 'hover:text-[#7DD3B0] text-[#111111]'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4">
                    <ul className="flex flex-col gap-4 text-[40px] md:text-[48px] lg:text-[52px] font-light leading-tight">
                      {navLinks.slice(3).map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors text-left ${
                              pathname === item.href ? 'text-[#FA520F]' : 'hover:text-[#7DD3B0] text-[#111111]'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="bg-[#1A365D] text-white rounded-md p-8 md:p-10 min-h-[360px] flex flex-col items-center text-center justify-between relative overflow-hidden">
                      <div className="pt-10">
                        <h3 className="text-[32px] md:text-[38px] font-normal leading-[1.1] text-white whitespace-pre-line">
                          Talk to<br />Antera
                        </h3>
                        <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed mt-4">
                          Let's build something great together. Get in touch and see how we can help.
                        </p>
                      </div>

                      <div className="relative p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 mt-6">
                        <Link
                          href="/solutions"
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-sm font-semibold px-6 py-3.5 rounded-full transition-colors text-white bg-[#111111] hover:bg-black"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-14 pt-10 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="flex items-center gap-6 text-[14px] text-[#111111]/80">
                    <Link href="/company" onClick={() => setIsOpen(false)} className="hover:text-[#111111] transition-colors">About Us</Link>
                    <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-[#111111] transition-colors">Media</Link>
                    <Link href="/company" onClick={() => setIsOpen(false)} className="hover:text-[#111111] transition-colors">Contact</Link>
                  </div>

                  <div className="flex items-center gap-3 md:justify-end">
                    <a href="https://instagram.com/antera_tz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-black/25 flex items-center justify-center text-[#111111]/80 hover:text-[#111111] hover:border-[#111111] transition-colors">
                      <InstagramIcon />
                    </a>
                    <a href="https://twitter.com/antera_tz" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-full border border-black/25 flex items-center justify-center text-[#111111]/80 hover:text-[#111111] hover:border-[#111111] transition-colors">
                      <XIcon />
                    </a>
                    <a href="https://linkedin.com/company/antera_tz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-black/25 flex items-center justify-center text-[#111111]/80 hover:text-[#111111] hover:border-[#111111] transition-colors">
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>

                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <img src={CLOSE_ICON} alt="Close" width={56} height={56} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;