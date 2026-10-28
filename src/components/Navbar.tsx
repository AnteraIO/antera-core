'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';
import menuBgImg from '@/assets/gritty-blue.png';

const SWAHILI_ICON = 'https://cdn-icons-png.flaticon.com/128/303/303200.png';
const ENGLISH_ICON = 'https://cdn-icons-png.flaticon.com/128/10452/10452489.png';
const CLOSE_ICON = 'https://cdn-icons-png.flaticon.com/128/12274/12274954.png';
const MENU_ICON = 'https://cdn-icons-png.flaticon.com/128/2099/2099089.png';

const NAV_ICONS = [
  'https://cdn-icons-png.flaticon.com/128/35/35787.png',
  'https://cdn-icons-png.flaticon.com/128/35/35580.png',
  'https://cdn-icons-png.flaticon.com/128/57/57276.png',
  'https://cdn-icons-png.flaticon.com/128/57/57223.png',
  'https://cdn-icons-png.flaticon.com/128/16074/16074286.png',
  'https://cdn-icons-png.flaticon.com/128/16068/16068124.png',
  'https://cdn-icons-png.flaticon.com/128/16074/16074196.png',
  'https://cdn-icons-png.flaticon.com/128/16074/16074239.png',
  'https://cdn-icons-png.flaticon.com/128/58/58300.png',
  'https://cdn-icons-png.flaticon.com/128/16836/16836758.png',
];

const SOCIALS = [
  { name: 'Facebook',  href: 'https://facebook.com/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/174/174848.png' },
  { name: 'Instagram', href: 'https://instagram.com/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/1409/1409946.png' },
  { name: 'LinkedIn',  href: 'https://linkedin.com/company/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png' },
  { name: 'X',         href: 'https://twitter.com/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968830.png' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const isEnglish = language === 'en';

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
    { name: t('nav.sauti_connect') || 'Sauti Connect', href: '/sauti-connect', icon: NAV_ICONS[0] },
    { name: t('nav.products') || 'Products', href: '/products', icon: NAV_ICONS[1] },
    { name: t('nav.solutions') || 'Solutions', href: '/solutions', icon: NAV_ICONS[2] },
    { name: t('nav.data_analytics') || 'Data Analytics', href: '/data-analytics', icon: NAV_ICONS[3] },
    { name: t('nav.models') || 'Models', href: '/models', icon: NAV_ICONS[4] },
    { name: t('nav.blog') || 'Blog', href: '/blog', icon: NAV_ICONS[5] },
    { name: t('nav.customers') || 'Customers', href: '/customers', icon: NAV_ICONS[6] },
    { name: t('nav.company') || 'Company', href: '/company', icon: NAV_ICONS[7] },
    { name: 'Media', href: '/blog', icon: NAV_ICONS[8] },
    { name: 'Contact', href: '/company', icon: NAV_ICONS[9] },
  ];

  const glassBase = scrolled
    ? 'bg-white/60 backdrop-blur-2xl backdrop-saturate-180 border border-black/10 text-[#111622]'
    : 'bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 text-white';

  const glassShadow = scrolled
    ? 'shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]'
    : 'shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]';

  const isDarkSurface = !scrolled && !isOpen;
  const menuIconFilter = isDarkSurface ? 'brightness-0 invert' : '';

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
              <Link href="/sauti-connect" className="flex items-center hover:text-gray-300 transition-colors text-center">
                <span className="underline underline-offset-4 decoration-white/50 hover:decoration-white">
                  {t('nav.banner') || 'We make smart computer programs for Tanzania and Africa. Call: +255 774 174 921 | WhatsApp: +255 760 984 921'}
                </span>
              </Link>
              <button
                onClick={() => setIsBannerVisible(false)}
                aria-label="Close banner"
                className="absolute right-4 md:right-6"
              >
                <img src={CLOSE_ICON} alt="Close" width={16} height={16} className="brightness-0 invert" />
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
          <Link href="/" className="flex items-center flex-shrink-0 z-50">
            <div className="relative h-12 md:h-16 w-[200px] md:w-[280px]">
              <Image
                src={logo}
                alt="Antera Technologies"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 7).map((item) => (
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
              <div className="relative p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500">
                <Link
                  href="/sauti-connect"
                  className="block text-sm font-medium px-5 py-2 rounded-full transition-all text-white bg-[#111111] hover:bg-black"
                >
                  {t('nav.sauti_connect') || 'Sauti Connect'}
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
                className={`w-8 h-8 object-contain ${menuIconFilter}`}
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
                relative mt-2 w-full rounded-md overflow-y-auto max-h-[calc(100vh-140px)]
                bg-white border border-black/10
                shadow-[0_20px_60px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]
                text-[#111111] pointer-events-auto
              "
            >
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <Image
                  src={menuBgImg}
                  alt="Menu Background"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="absolute inset-0 z-0 bg-white/80 pointer-events-none" />

              <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  
                  <div>
                    <ul className="flex flex-col gap-3 text-[32px] md:text-[38px] lg:text-[42px] font-light leading-tight">
                      {navLinks.slice(0, 3).map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center gap-3 transition-colors text-left ${
                              pathname === item.href ? 'text-black font-medium' : 'hover:text-[#7DD3B0] text-[#111111]'
                            }`}
                          >
                            <img
                              src={item.icon}
                              alt=""
                              className="w-8 h-8 md:w-9 md:h-9 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                            />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <ul className="flex flex-col gap-3 text-[32px] md:text-[38px] lg:text-[42px] font-light leading-tight">
                      {navLinks.slice(3, 7).map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center gap-3 transition-colors text-left ${
                              pathname === item.href ? 'text-black font-medium' : 'hover:text-[#7DD3B0] text-[#111111]'
                            }`}
                          >
                            <img
                              src={item.icon}
                              alt=""
                              className="w-8 h-8 md:w-9 md:h-9 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                            />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <ul className="flex flex-col gap-3 text-[32px] md:text-[38px] lg:text-[42px] font-light leading-tight">
                      {navLinks.slice(7).map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center gap-3 transition-colors text-left ${
                              pathname === item.href ? 'text-black font-medium' : 'hover:text-[#7DD3B0] text-[#111111]'
                            }`}
                          >
                            <img
                              src={item.icon}
                              alt=""
                              className="w-8 h-8 md:w-9 md:h-9 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                            />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="mt-14 pt-10 border-t border-black/10 flex flex-col md:flex-row md:justify-between gap-10 items-center">
                  <div className="text-[14px] text-[#111111]/80">
                    © {new Date().getFullYear()} Antera Technologies. All rights reserved.
                  </div>

                  <div className="flex items-center gap-5 md:justify-end">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        title={s.name}
                        className="flex items-center justify-center hover:scale-125 transition-transform duration-300"
                      >
                        <img
                          src={s.icon}
                          alt={s.name}
                          width={40}
                          height={40}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />
                      </a>
                    ))}
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