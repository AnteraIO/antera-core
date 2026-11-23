'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';
import menuBgImg from '@/assets/gritty-blue.jpg';

const CLOSE_ICON = 'https://cdn-icons-png.flaticon.com/128/12274/12274954.png';
const MENU_ICON = 'https://cdn-icons-png.flaticon.com/128/747/747327.png';

const NAV_ICONS = [
  'https://cdn-icons-png.flaticon.com/128/35/35787.png',
  'https://cdn-icons-png.flaticon.com/128/35/35580.png',
  'https://cdn-icons-png.flaticon.com/128/57/57276.png',
  'https://cdn-icons-png.flaticon.com/128/57/57223.png',
  'https://cdn-icons-png.flaticon.com/128/16074/16074286.png',
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

  // YOUR ACTUAL LINKS
  const navLinks = [
    { name: t('nav.solutions') || 'Solutions', href: '/solutions', icon: NAV_ICONS[1] },
    { name: t('nav.data_analytics') || 'Data Analytics', href: '/data-analytics', icon: NAV_ICONS[2] },
    { name: t('nav.blog') || 'Blog', href: '/blog', icon: NAV_ICONS[4] },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans w-full">
      {/* Top Banner */}
      <AnimatePresence initial={false}>
        {isBannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#0a0a0a] text-white w-full relative"
          >
            <div className="text-[11px] md:text-[13px] py-2.5 px-9 md:px-14 flex justify-center items-center w-full relative">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D8FF] shrink-0 hidden md:block"></span>
                <Link href="/blog" className="flex items-center hover:text-gray-300 transition-colors text-center text-white/90">
                  {t('nav.banner') || 'The Chain technology platform is now part of Onyx'}
                  {/* HIDDEN ON MOBILE */}
                  <span className="hidden md:inline-flex ml-2 text-[#00D8FF] hover:underline items-center gap-1">
                    Read the announcement &rarr;
                  </span>
                </Link>
              </div>
              <button
                onClick={() => setIsBannerVisible(false)}
                aria-label="Close banner"
                className="absolute right-4 md:right-6 opacity-70 hover:opacity-100"
              >
                <img src={CLOSE_ICON} alt="Close" width={16} height={16} className="brightness-0 invert" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar Area - No Background */}
      <div className="w-full transition-colors duration-300 bg-transparent">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 z-50">
            <div className="relative h-10 md:h-12 w-[140px] md:w-[180px]">
              <Image
                src={logo}
                alt="Antera Technologies"
                fill
                className="object-contain object-left"
                priority
                sizes="180px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Pill */}
          <nav className="hidden lg:flex items-center bg-[#2A2A2A] rounded-lg p-1.5 shadow-sm">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2.5 text-[15px] font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 z-50">
            {/* Desktop CTA - matches the nav pill button styling */}
            <div className="hidden lg:block">
              <div className="bg-[#2A2A2A] rounded-lg p-1.5 shadow-sm">
                <Link
                  href="/contact"
                  className="block px-5 py-2.5 text-[15px] font-medium rounded-md bg-black text-white shadow-md transition-all duration-200 hover:bg-white/10"
                >
                  {t('nav.contact_sales') || 'Contact sales'}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-[44px] h-[44px] cursor-pointer"
            >
              <img
                src={isOpen ? CLOSE_ICON : MENU_ICON}
                alt={isOpen ? 'Close' : 'Menu'}
                width={32}
                height={32}
                className="w-8 h-8 object-contain brightness-0"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - No Solid White Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="
              absolute top-[calc(100%+1px)] left-0 w-full rounded-b-xl overflow-y-auto max-h-[calc(100vh-80px)]
              bg-transparent border border-black/10 shadow-2xl text-[#111111] lg:hidden
            "
          >
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <Image
                src={menuBgImg}
                alt="Menu Background"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            <div className="relative z-10 px-6 py-10 bg-transparent">
              <ul className="flex flex-col gap-4 text-[32px] font-light leading-tight">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center gap-3 transition-colors text-left ${
                        pathname === item.href ? 'text-black font-medium' : 'hover:text-[#7DD3B0] text-[#111111]'
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Read Announcement Link Moved Inside Mobile Menu */}
              <div className="mt-6">
                <Link 
                  href="/blog" 
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center text-[16px] text-[#00D8FF] hover:underline"
                >
                  Read the announcement &rarr;
                </Link>
              </div>

              {/* Mobile CTA - matches the nav link button styling */}
              <div className="mt-10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center text-lg font-medium px-6 py-3 rounded-md bg-black text-white shadow-md transition-colors hover:bg-neutral-800"
                >
                  {t('nav.contact_sales') || 'Contact sales'}
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-black/10 flex flex-col gap-6 items-center">
                <div className="text-[14px] text-[#111111]/60">
                  © {new Date().getFullYear()} Antera Technologies. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <img src={s.icon} alt={s.name} width={24} height={24} className="w-6 h-6 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;