'use client';

import React, { useState } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [showLangs, setShowLangs] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const languages: { code: 'en' | 'sw'; name: string }[] = [
    { code: 'en', name: 'EN' },
    { code: 'sw', name: 'SW' }
  ];

  const navLinks = [
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.solutions'), href: '/solutions' },
    { name: t('nav.models'), href: '/models' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.customers'), href: '/customers' },
    { name: t('nav.company'), href: '/company' },
  ];

  const blogLatestPosts = [
    { title: 'Antera Group Office', href: '/office', desc: 'Enterprise Webs, Mobile Apps, Organization Sites and Digital Platform Development' },
    { title: 'Introducing Search Toolkit', href: '/blog', desc: 'Modern Data Science and Model Implementations for Tanzanian Markets' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Top Banner - Using Antera Marquee Content */}
      {isBannerVisible && (
        <div className="bg-[#111111] text-white text-xs py-2 px-6 flex justify-between items-center w-full tracking-wide">
          <div className="flex-1 flex justify-start items-center gap-4 pl-2 overflow-hidden whitespace-nowrap">
            <span>
              AI Solutions and Intelligent Systems for Tanzanian and African Markets | Call us: +255 760 984 921
            </span>
          </div>
          <button 
            onClick={() => setIsBannerVisible(false)}
            className="text-gray-400 hover:text-white transition-colors ml-4 shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav 
        className={`w-full flex items-center justify-between px-6 py-4 transition-colors duration-200 border-b ${
          isOpen 
            ? 'bg-[#18181b] text-white border-zinc-800' 
            : 'bg-white text-black border-neutral-200'
        }`}
      >
        {/* Logo - Image integrated next to text branding */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 z-50">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200">
            <Image
              src="/antera-logo.jpeg"
              alt="Antera Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-semibold tracking-tight">Antera</span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 z-50">
          <Link 
            href="/solutions"
            className={`hidden lg:flex px-6 py-2 text-sm font-medium border transition-colors ${
              isOpen 
                ? 'border-zinc-600 hover:bg-zinc-800 text-white' 
                : 'border-black hover:bg-gray-50 text-black'
            }`}
          >
            {t('nav.start_building')}
          </Link>
          
          <Link 
            href="https://wa.me/255760984921"
            target="_blank"
            className={`hidden lg:flex px-6 py-2 text-sm font-medium border transition-colors ${
              isOpen 
                ? 'border-[#FA520F] bg-[#FA520F] text-white hover:bg-[#e0490d]' 
                : 'border-black bg-white text-black hover:bg-neutral-50'
            }`}
          >
            {t('nav.contact_sales')}
          </Link>

          {/* Language Selector */}
          <div className="relative flex items-center">
            <button
              onClick={() => setShowLangs(!showLangs)}
              className={`p-2 border transition-colors ${
                isOpen 
                  ? 'border-zinc-600 hover:bg-zinc-800 text-white' 
                  : 'border-black hover:bg-gray-50 text-black'
              }`}
            >
              <Globe className="w-5 h-5" />
            </button>
            
            <AnimatePresence>
              {showLangs && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className={`absolute right-0 top-[48px] border shadow-sm w-24 flex flex-col ${
                    isOpen ? 'bg-[#18181b] border-zinc-700' : 'bg-white border-neutral-200'
                  }`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangs(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors border-b last:border-none ${
                        isOpen ? 'border-zinc-700' : 'border-neutral-100'
                      } ${
                        language === lang.code 
                          ? 'bg-[#FA520F] text-white' 
                          : isOpen 
                            ? 'text-white hover:bg-zinc-800' 
                            : 'text-black hover:bg-neutral-50'
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 border transition-colors ${
              isOpen
                ? 'bg-white text-black border-white hover:bg-gray-200'
                : 'bg-white text-black border-black hover:bg-gray-50'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full h-[100vh] bg-[#18181b] text-white overflow-y-auto pb-32"
          >
            <div className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Column 1: Navigation */}
              <div className="lg:col-span-3">
                <div className="border-b border-zinc-700 pb-3 mb-6">
                  <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
                    Navigation
                  </span>
                </div>
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

              {/* Column 2: Latest News & Impact (Using Antera Blog Content) */}
              <div className="lg:col-span-6 pr-8">
                <div className="flex justify-between items-center border-b border-zinc-700 pb-3 mb-6">
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
                
                <div className="grid grid-cols-2 gap-8">
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
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {post.desc}
                      </p>
                      <span className="text-sm font-medium mt-1 group-hover:underline flex items-center gap-2 text-zinc-300">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Latest Platforms Section */}
                <div className="flex justify-between items-center border-b border-zinc-700 pb-3 mt-12 mb-6">
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
                <Link href="/solutions" onClick={() => setIsOpen(false)} className="w-1/2 pr-4 group cursor-pointer block">
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

              {/* Column 3: Offerings & Quick Links */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center border-b border-zinc-700 pb-3 mb-6">
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
                  Enterprise Webs, Mobile Apps, Organization Sites and Digital Platform Development for the modern African market.
                </p>
            
                <div className="border-b border-zinc-700 pb-3 mb-6">
                  <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
                    Contact & Socials
                  </span>
                </div>
                <ul className="flex flex-col gap-4 text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="text-zinc-500">Email:</span>
                    <a href="mailto:info@antera.co.tz" className="hover:text-white transition-colors">info@antera.co.tz</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-zinc-500">Phone:</span>
                    <a href="tel:+255760984921" className="hover:text-white transition-colors">+255 760 984 921</a>
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="text-zinc-500">Follow us:</span>
                    <div className="flex gap-4 text-sm">
                      <a 
                        href="https://instagram.com/antera_tz" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="hover:text-white transition-colors"
                      >
                        Instagram
                      </a>
                      <a 
                        href="https://twitter.com/antera_tz" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        X
                      </a>
                      <a 
                        href="https://linkedin.com/company/antera_tz" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a 
                        href="https://youtube.com/@antera_tz" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        YouTube
                      </a>
                      <a 
                        href="https://facebook.com/antera_tz" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};