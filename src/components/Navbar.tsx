'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MessageCircle, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

const LANGUAGE_ICON = 'https://cdn-icons-png.flaticon.com/128/2200/2200326.png';
const CLOSE_ICON = 'https://cdn-icons-png.flaticon.com/128/594/594598.png';

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

  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

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

  const [blogLatestPosts, setBlogLatestPosts] = useState([
    {
      title: 'Antera Group Office',
      href: '/office',
      desc: t('nav.office_desc') || 'Enterprise Webs, Mobile Apps, Organization Sites and Digital Platform Development',
    },
    {
      title: 'Introducing Search Toolkit',
      href: '/blog',
      desc: t('nav.search_desc') || 'Modern Data Science and Model Implementations for Tanzanian Markets',
    },
  ]);

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        const res = await fetch('/api/blog/posts?status=published&limit=2');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((post) => ({
              title: post.title,
              href: `/blog/${post.slug}`,
              desc:
                post.excerpt ||
                post.description ||
                'Read our latest update and technical deep-dive on this topic.',
            }));
            if (mapped.length === 1) {
              setBlogLatestPosts([
                mapped[0],
                {
                  title: 'Introducing Search Toolkit',
                  href: '/blog',
                  desc: t('nav.search_desc') || 'Modern Data Science and Model Implementations for Tanzanian Markets',
                },
              ]);
            } else {
              setBlogLatestPosts(mapped);
            }
          }
        }
      } catch (err) {
        console.error('Failed to fetch latest posts for navbar:', err);
      }
    }
    fetchLatestPosts();
  }, [t]);

  const glassBase = scrolled
    ? 'bg-white/60 backdrop-blur-2xl backdrop-saturate-180 border border-black/10 text-[#111622]'
    : 'bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 text-white';

  const glassShadow = scrolled
    ? 'shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]'
    : 'shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]';

  const iconBtn = scrolled
    ? 'bg-black/[0.06] hover:bg-black/[0.12] text-[#111622] border border-black/10'
    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20';

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
              ? 'bg-[#18181b]/95 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]'
              : `${glassBase} ${glassShadow}`}
          `}
        >
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 z-50">
            <div className="relative w-6 h-6 rounded-full overflow-hidden grayscale brightness-200">
              <Image
                src="/antera-logo.jpeg"
                alt="Antera Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span
              className={`text-[18px] md:text-[19px] font-medium tracking-tight transition-colors ${
                isOpen || !scrolled ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]' : 'text-[#111622]'
              }`}
            >
              Antera Technologies
            </span>
          </Link>

          <div className="flex items-center gap-2 md:gap-3 z-50">
            <Link
              href="/solutions"
              className={`
                hidden md:flex items-center justify-center h-[44px] px-6 text-[14px] font-medium
                transition-colors rounded-sm
                ${isOpen || !scrolled
                  ? 'bg-white text-black hover:bg-gray-100 shadow-[0_2px_12px_rgba(255,255,255,0.15)]'
                  : 'bg-[#111622] text-white hover:bg-[#1a2030] shadow-[0_2px_12px_rgba(0,0,0,0.15)]'}
              `}
            >
              {t('nav.get_started') || 'Get Started'}
            </Link>

            <button
              onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
              aria-label="Switch language"
              title={language === 'en' ? 'Kubadili kwenda Kiswahili' : 'Switch to English'}
              className={`
                flex items-center justify-center w-[44px] h-[44px] backdrop-blur-md
                transition-all rounded-sm cursor-pointer select-none
                ${isOpen ? 'bg-white/10 hover:bg-white/20 border border-white/20' : iconBtn}
              `}
            >
              <img src={LANGUAGE_ICON} alt="Language" width={22} height={22} />
            </button>

            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen(!isOpen)}
              className={`
                flex items-center justify-center w-[44px] h-[44px] backdrop-blur-md
                transition-colors rounded-sm
                ${isOpen ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' : iconBtn}
              `}
            >
              {isOpen ? (
                <img src={CLOSE_ICON} alt="Close" width={22} height={22} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2} />
              )}
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
                bg-[#0e0e12]/95 backdrop-blur-2xl backdrop-saturate-150
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]
                text-white
              "
            >
              <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-5">
                    <ul className="flex flex-col gap-4 text-[32px] md:text-[40px] lg:text-[44px] font-light leading-tight">
                      {navLinks.slice(0, 3).map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors ${
                              pathname === link.href ? 'text-[#FA520F]' : 'hover:text-[#FA520F] text-white'
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4">
                    <ul className="flex flex-col gap-4 text-[32px] md:text-[40px] lg:text-[44px] font-light leading-tight">
                      {navLinks.slice(3).map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors ${
                              pathname === link.href ? 'text-[#FA520F]' : 'hover:text-[#FA520F] text-white'
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="bg-white text-[#111622] rounded-sm p-8 md:p-10 min-h-[360px] flex flex-col items-center text-center justify-between relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center pointer-events-none opacity-90">
                        <svg viewBox="0 0 300 60" className="w-full h-full">
                          <path d="M150 20 C140 5, 120 0, 110 10 C115 20, 130 22, 150 20 Z" fill="#7BAE4B" />
                          <path d="M150 20 C160 5, 180 0, 190 10 C185 20, 170 22, 150 20 Z" fill="#4A90E2" />
                          <ellipse cx="130" cy="12" rx="6" ry="9" fill="#F4B63F" transform="rotate(-20 130 12)" />
                          <ellipse cx="170" cy="12" rx="6" ry="9" fill="#E85A28" transform="rotate(20 170 12)" />
                          <ellipse cx="150" cy="8" rx="6" ry="9" fill="#7BAE4B" />
                        </svg>
                      </div>

                      <div className="pt-10">
                        <h3 className="text-[32px] md:text-[38px] font-normal leading-[1.1] text-black">
                          Talk to<br />Antera
                        </h3>
                        <p className="text-[14px] md:text-[15px] text-[#3a3a3a] leading-relaxed mt-4">
                          Let's build something great together. Get in touch and see how we can help.
                        </p>
                      </div>

                      <Link
                        href="/solutions"
                        onClick={() => setIsOpen(false)}
                        className="mt-6 inline-flex items-center gap-2 bg-black hover:bg-[#1a1a1a] text-white text-[15px] font-semibold px-6 py-3.5 rounded-sm transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <ul className="flex flex-col gap-4 text-[32px] md:text-[40px] lg:text-[44px] font-light leading-tight">
                    <li>
                      <Link href="/company" onClick={() => setIsOpen(false)} className="hover:text-[#FA520F] transition-colors text-white">About Us</Link>
                    </li>
                    <li>
                      <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-[#FA520F] transition-colors text-white">Media</Link>
                    </li>
                    <li>
                      <Link href="/company" onClick={() => setIsOpen(false)} className="hover:text-[#FA520F] transition-colors text-white">Contact</Link>
                    </li>
                  </ul>

                  <div className="flex items-center gap-3 md:justify-end">
                    <a href="https://instagram.com/antera_tz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors">
                      <InstagramIcon />
                    </a>
                    <a href="https://twitter.com/antera_tz" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors">
                      <XIcon />
                    </a>
                    <a href="https://linkedin.com/company/antera_tz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors">
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>

                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <img src={CLOSE_ICON} alt="Close" width={72} height={72} />
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