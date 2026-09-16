'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

const InstagramIcon = () => (
  <motion.svg
    width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </motion.svg>
);

const XIcon = () => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
    whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </motion.svg>
);

const LinkedinIcon = () => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </motion.svg>
);

const YoutubeIcon = () => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </motion.svg>
);

const FacebookIcon = () => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </motion.svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  // Detect scroll — drives both the glass tint AND the banner auto-hide
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: t('nav.products') || 'Products', href: '/products' },
    { name: t('nav.solutions') || 'Solutions', href: '/solutions' },
    { name: t('nav.data_analytics') || 'Data Analytics', href: '/data-analytics' },
    { name: t('nav.models') || 'Models', href: '/models' },
    { name: t('nav.blog') || 'Blog', href: '/blog' },
    { name: t('nav.customers') || 'Customers', href: '/customers' },
    { name: t('nav.company') || 'Company', href: '/company' },
  ];

  const [blogLatestPosts, setBlogLatestPosts] = useState<
    Array<{ title: string; href: string; desc: string }>
  >([
    {
      title: 'Antera Group Office',
      href: '/office',
      desc: 'Enterprise Webs, Mobile Apps, Organization Sites and Digital Platform Development',
    },
    {
      title: 'Introducing Search Toolkit',
      href: '/blog',
      desc: 'Modern Data Science and Model Implementations for Tanzanian Markets',
    },
  ]);

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        const res = await fetch('/api/blog/posts?status=published&limit=2');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((post: any) => ({
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
                  desc: 'Modern Data Science and Model Implementations for Tanzanian Markets',
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
  }, []);

  // Glass tint swaps based on scroll position
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
      {/* Top Banner — solid dark, auto-hides on scroll */}
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
                  We Build AI Solutions and Intelligent Systems for Tanzanian and African Markets | Call Us:
                  +255 774 174 921 | WhatsApp: +255 760 984 921
                </span>
              </Link>
              <button
                onClick={() => setIsBannerVisible(false)}
                className="absolute right-4 md:right-6 text-gray-400 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar wrapper */}
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
          {/* Logo */}
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

          {/* Right-side actions */}
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
              Get Started
            </Link>

            <button
              aria-label="Search"
              className={`
                flex items-center justify-center w-[44px] h-[44px] backdrop-blur-md
                transition-colors rounded-sm
                ${isOpen ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' : iconBtn}
              `}
            >
              <Search className="w-4 h-4" strokeWidth={2} />
            </button>

            <button
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
              className={`
                flex items-center justify-center w-[44px] h-[44px] backdrop-blur-md
                transition-colors rounded-sm
                ${isOpen ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' : iconBtn}
              `}
            >
              {isOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="
                mt-2 w-full rounded-md overflow-y-auto max-h-[calc(100vh-140px)] pb-16
                bg-[#0e0e12]/95 backdrop-blur-2xl backdrop-saturate-150
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]
                text-white
              "
            >
              <div className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Column 1: Navigation */}
                <div className="lg:col-span-3">
                  <ul className="flex flex-col gap-5 text-[22px] font-light">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`hover:text-[#FA520F] transition-colors ${
                            pathname === link.href ? 'text-[#FA520F]' : 'text-white'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Latest News */}
                <div className="lg:col-span-6 pr-8">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-6">
                    <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
                      Latest Updates
                    </span>
                    <Link
                      href="/blog"
                      onClick={() => setIsOpen(false)}
                      className="text-[10px] font-bold text-zinc-400 hover:text-white tracking-widest uppercase transition-colors flex items-center gap-1"
                    >
                      View Blog <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogLatestPosts.map((post, i) => (
                      <Link
                        href={post.href}
                        key={i}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col gap-3 group cursor-pointer"
                      >
                        <span className="text-[10px] font-bold text-[#FA520F] tracking-widest uppercase">
                          Featured Post
                        </span>
                        <h3 className="text-lg font-medium leading-snug group-hover:text-[#FA520F] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">{post.desc}</p>
                        <span className="text-sm font-medium mt-1 group-hover:underline flex items-center gap-2 text-zinc-300">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="flex justify-between items-center border-b border-white/10 pb-3 mt-12 mb-6">
                    <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
                      Our Platforms
                    </span>
                    <Link
                      href="/products"
                      onClick={() => setIsOpen(false)}
                      className="text-[10px] font-bold text-zinc-400 hover:text-white tracking-widest uppercase transition-colors flex items-center gap-1"
                    >
                      View All Products <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <Link
                    href="/solutions"
                    onClick={() => setIsOpen(false)}
                    className="w-full md:w-1/2 pr-4 group cursor-pointer block"
                  >
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
                        AI Solutions
                      </span>
                      <h3 className="text-lg font-medium leading-snug group-hover:text-[#FA520F] transition-colors">
                        Enterprise AI & Digital Transformation
                      </h3>
                    </div>
                  </Link>
                </div>

                {/* Column 3: Company */}
                <div className="lg:col-span-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-6">
                    <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
                      Company
                    </span>
                    <Link
                      href="/company"
                      onClick={() => setIsOpen(false)}
                      className="text-[10px] font-bold text-zinc-400 hover:text-white tracking-widest uppercase transition-colors"
                    >
                      About Us ↗
                    </Link>
                  </div>
                  <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
                    Enterprise Webs, Mobile Apps, Organization Sites and Digital Platform Development for
                    the modern African market.
                  </p>

                  <div className="border-b border-white/10 pb-3 mb-6">
                    <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
                      Contact & Socials
                    </span>
                  </div>
                  <ul className="flex flex-col gap-4 text-sm text-zinc-300">
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                      <a href="mailto:info@antera.co.tz" className="hover:text-white transition-colors">
                        info@antera.co.tz
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                      <a href="tel:+255774174921" className="hover:text-white transition-colors">
                        +255 774 174 921
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-zinc-500 shrink-0" />
                      <a
                        href="https://wa.me/255760984921"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        +255 760 984 921
                      </a>
                    </li>
                    <li className="flex flex-col gap-2 pt-2">
                      <span className="text-zinc-500">Follow us:</span>
                      <div className="flex flex-col gap-2 text-sm">
                        <a href="https://instagram.com/antera_tz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                          <InstagramIcon /> Instagram
                        </a>
                        <a href="https://twitter.com/antera_tz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                          <XIcon /> X
                        </a>
                        <a href="https://linkedin.com/company/antera_tz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                          <LinkedinIcon /> LinkedIn
                        </a>
                        <a href="https://youtube.com/@antera_tz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                          <YoutubeIcon /> YouTube
                        </a>
                        <a href="https://facebook.com/antera_tz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                          <FacebookIcon /> Facebook
                        </a>
                      </div>
                    </li>
                  </ul>
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