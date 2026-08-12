'use client';
import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Globe, Layers, Building2, Code, BriefcaseBusiness, Lock, Star, Database, MessageSquare, Users, Target, TrendingUp, Network, Brain, LineChart, Phone, Mail, Share2, Smartphone, MonitorCog } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

interface BlogLink {
  title: string
  href: string
}

interface CategoryItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showLangs, setShowLangs] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const languages: { code: 'en' | 'sw'; name: string }[] = [
    { code: 'en', name: 'EN' },
    { code: 'sw', name: 'SW' }
  ]

  const blogLatestPosts: BlogLink[] = [
    { title: 'Antera Group Office', href: '/office' },
    { title: 'Solutions.', href: '/solutions' },
    { title: 'Introducing Search Toolkit', href: '/developers' },
  ]

  const blogCategories: CategoryItem[] = [
    { name: t('nav.products'), href: '/products', icon: Layers },
    { name: t('nav.company'), href: '/company', icon: Building2 },
    { name: t('nav.developers'), href: '/developers', icon: Code },
    { name: t('nav.solutions'), href: '/solutions', icon: BriefcaseBusiness},
  ]

  const dropdownConfigs: Record<string, {
    leftTitle: string
    leftItems: { title: string; desc: string; href: string }[]
    bottomLinkText: string
    bottomLinkHref: string
    rightTitle: string
    rightItems: { name: string; href: string; icon: React.ComponentType<{ className?: string }> }[]
  }> = {
    'Products': {
      leftTitle: t('dropdown.products.featured_title'),
      leftItems: [
        { title: 'Sekela POS Platform', desc: 'Enterprise management for MSMEs.', href: '/products' },
        { title: 'Kava Professional', desc: 'AI CV parsing and match engine.', href: '/products' },
      ],
      bottomLinkText: t('dropdown.products.read_all'),
      bottomLinkHref: '/products',
      rightTitle: t('dropdown.products.cat_title'),
      rightItems: [
        { name: t('dropdown.products.cat1'), href: '/products', icon: Code },
        { name: t('dropdown.products.cat2'), href: '/products', icon: Layers },
        { name: t('dropdown.products.cat3'), href: '/products', icon: Globe },
        { name: t('dropdown.products.cat4'), href: '/products', icon: Building2 },
      ]
    },
    'Solutions': {
      leftTitle: t('dropdown.solutions.featured_title'),
      leftItems: [
        { title: t('dropdown.solutions.title1'), desc: t('dropdown.solutions.desc1'), href: '/solutions' },
        { title: t('dropdown.solutions.title2'), desc: t('dropdown.solutions.desc2'), href: '/solutions' },
      ],
      bottomLinkText: t('dropdown.solutions.read_all'),
      bottomLinkHref: '/solutions',
      rightTitle: t('dropdown.solutions.cat_title'),
      rightItems: [
        { name: t('dropdown.solutions.cat1'), href: '/solutions', icon: Globe },
        { name: t('dropdown.solutions.cat2'), href: '/solutions', icon: Lock },
        { name: t('dropdown.solutions.cat3'), href: '/solutions', icon: TrendingUp },
        { name: t('dropdown.solutions.cat4'), href: '/solutions', icon: BriefcaseBusiness },
      ]
    },
    'Developers': {
      leftTitle: t('dropdown.developers.featured_title'),
      leftItems: [
        { title: t('dropdown.developers.title1'), desc: t('dropdown.developers.desc1'), href: '/developers' },
        { title: t('dropdown.developers.title2'), desc: t('dropdown.developers.desc2'), href: '/developers' },
      ],
      bottomLinkText: t('dropdown.developers.read_all'),
      bottomLinkHref: '/developers',
      rightTitle: t('dropdown.developers.cat_title'),
      rightItems: [
        { name: t('dropdown.developers.cat1'), href: '/developers', icon: Code },
        { name: t('dropdown.developers.cat2'), href: '/developers', icon: Network },
        { name: t('dropdown.developers.cat3'), href: '/developers', icon: Database },
        { name: t('dropdown.developers.cat4'), href: '/developers', icon: Layers },
      ]
    },
    'Blog': {
      leftTitle: t('blog.latest_briefings'),
      leftItems: blogLatestPosts.map(p => ({ title: p.title, desc: '', href: p.href })),
      bottomLinkText: t('blog.read_all'),
      bottomLinkHref: '/blog',
      rightTitle: 'Categories',
      rightItems: blogCategories.map(c => ({ name: c.name, href: c.href, icon: c.icon }))
    },
    'Company': {
      leftTitle: t('dropdown.company.featured_title'),
      leftItems: [
        { title: t('dropdown.company.title1'), desc: t('dropdown.company.desc1'), href: '/company' },
        { title: t('dropdown.company.title2'), desc: t('dropdown.company.desc2'), href: '/company' },
      ],
      bottomLinkText: t('dropdown.company.read_all'),
      bottomLinkHref: '/company',
      rightTitle: t('dropdown.company.cat_title'),
      rightItems: [
        { name: t('dropdown.company.cat1'), href: '/company', icon: Target },
        { name: t('dropdown.company.cat2'), href: '/company', icon:  Star},
        { name: t('dropdown.company.cat3'), href: '/company', icon: Users },
      ]
    }
  }

  const navLinks = [
    { name: t('nav.products'), href: '/products', isDropdown: true, key: 'Products' },
    { name: t('nav.solutions'), href: '/solutions', isDropdown: true, key: 'Solutions' },
    { name: t('nav.developers'), href: '/developers', isDropdown: true, key: 'Developers' },
    { name: t('nav.blog'), href: '/blog', isDropdown: true, key: 'Blog', alignRight: true },
    { name: t('nav.customers'), href: '/customers' },
    { name: t('nav.company'), href: '/company', isDropdown: true, key: 'Company', alignRight: true },
  ]

  const marqueeTextItems = [
    { text: "AI Solutions and Intelligent Systems for Tanzanian and African Markets", badge: "AI & AUTOMATION", icon: Brain },
    { text: "Enterprise Webs, Mobile Apps, Organization Sites and Digital Platform Development", badge: "DEVELOPMENT", icon: MonitorCog },
    { text: "Modern Data Science and Model Implementations", badge: "BUSINESS INTELLIGENCE", icon: LineChart },
    { text: "Sekela POS, Kava AI Career Assistant", badge: "OUR PLATFORMS", icon: Smartphone },
    { text: "Call us: +255 625 534 921 | +255 760 984 921 | +255 774 174 921", badge: "CALL US", icon: Phone },
    { text: "info@antera.co.tz", badge: "EMAIL", icon: Mail },
    { text: "Follow @antera_tz on Instagram, X, and LinkedIn", badge: "SOCIALS", icon: Share2 }
  ];

  // Repeat items for infinite horizontal marquee scroll
  const repeatedMarquee = [...marqueeTextItems, ...marqueeTextItems, ...marqueeTextItems, ...marqueeTextItems];

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-[#fffaeb] border-b border-[#1F1F1F]/10 text-[10px] font-mono font-medium antialiased uppercase tracking-[0.12em] h-20 flex flex-col text-[#1F1F1F]"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Top Marquee */}
        <div className="w-full bg-[#1F1F1F] text-white h-6 overflow-hidden flex items-center relative border-b border-neutral-800 z-50">
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#1F1F1F] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#1F1F1F] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer py-1">
            {repeatedMarquee.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2 mx-6 text-[10px] tracking-normal font-medium text-neutral-300 normal-case">
                  <span className="bg-[#FA520F] text-white text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-none flex-shrink-0">
                    {item.badge}
                  </span>
                  {Icon && <Icon className="w-3.5 h-3.5 text-[#FA520F] shrink-0" />}
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto flex items-stretch justify-between h-[56px] w-full max-w-[1440px]">
          
          <div className="flex items-stretch">
            <Link href="/" className="flex items-center gap-3 px-6 border-r border-[#1F1F1F]/10 hover:bg-[#1F1F1F]/5 transition-colors flex-shrink-0 relative">
              <Image src="/antera-logo.jpeg" alt="ANTERA Logo" width={20} height={20} className="h-5 w-5 object-contain" />
              <span className="font-semibold text-[#1F1F1F] tracking-[0.2em] text-[11px]">ANTERA</span>
            </Link>

            <div className="hidden lg:flex items-stretch">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div
                    key={link.name}
                    onMouseEnter={() => setActiveMenu(link.key)}
                    className="relative flex items-stretch border-r border-[#1F1F1F]/10"
                  >
                    <Link
                      href={link.href}
                      className={`px-5 transition-colors flex items-center gap-1 ${
                        activeMenu === link.key || pathname === link.href ? 'bg-[#1F1F1F]/5 text-[#1F1F1F]' : 'text-[#1F1F1F] hover:bg-[#1F1F1F]/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-150 ${activeMenu === link.key ? 'rotate-180' : ''}`} />
                    </Link>

                    <AnimatePresence>
                      {activeMenu === link.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 1 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 1 }}
                          transition={{ duration: 0.1 }}
                          className={`absolute top-[56px] bg-[#fffaeb] border border-[#1F1F1F]/10 z-50 flex w-[640px] text-left cursor-default shadow-lg ${
                            link.alignRight ? 'right-[-1px] left-auto' : 'left-[-1px] right-auto'
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="w-7/12 border-r border-[#1F1F1F]/10 flex flex-col bg-[#fffaeb]">
                            <div className="px-6 py-3 text-[9px] uppercase font-semibold tracking-[0.2em] text-neutral-500 bg-[#1F1F1F]/5 border-b border-[#1F1F1F]/10">
                              {dropdownConfigs[link.key].leftTitle}
                            </div>
                            <div className="flex flex-col divide-y divide-[#1F1F1F]/5">
                              {dropdownConfigs[link.key].leftItems.map((post, i) => (
                                <Link
                                  key={i} 
                                  href={post.href}
                                  className="px-6 py-4 flex flex-col justify-center text-[#1F1F1F] hover:bg-[#1F1F1F]/5 transition-colors group"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-semibold text-[#1F1F1F] group-hover:text-[#FA520F] transition-colors">{post.title}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FA520F] transition-colors shrink-0" />
                                  </div>
                                  {post.desc && (
                                    <p className="text-[9px] text-neutral-500 normal-case tracking-wider mt-1 leading-normal font-light">
                                      {post.desc}
                                    </p>
                                  )}
                                </Link>
                              ))}
                            </div>
                            <Link href={dropdownConfigs[link.key].bottomLinkHref} className="px-6 py-4 mt-auto border-t border-[#1F1F1F]/10 bg-[#1F1F1F]/5 text-[9px] font-semibold text-[#FA520F] flex items-center gap-1 hover:text-black transition-colors">
                              <span>{dropdownConfigs[link.key].bottomLinkText}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="w-5/12 bg-[#1F1F1F]/5 flex flex-col">
                            <div className="px-6 py-3 text-[9px] uppercase font-semibold tracking-[0.2em] text-neutral-500 bg-[#1F1F1F]/5 border-b border-[#1F1F1F]/10">
                              {dropdownConfigs[link.key].rightTitle}
                            </div>
                            <div className="p-6 flex flex-col gap-3 font-medium text-[#1F1F1F]">
                              {dropdownConfigs[link.key].rightItems.map((category, i) => {
                                const Icon = category.icon
                                return (
                                  <Link
                                    key={i}
                                    href={category.href}
                                    className="hover:text-[#FA520F] flex items-center gap-2 text-[9px] transition-colors group"
                                  >
                                    <Icon className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#FA520F] transition-colors shrink-0" />
                                    <span>{category.name}</span>
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setActiveMenu(null)}
                    className={`px-5 border-r border-[#1F1F1F]/10 transition-colors flex items-center ${
                      pathname === link.href ? 'bg-[#1F1F1F]/10 text-black' : 'text-[#1F1F1F] hover:bg-[#1F1F1F]/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-stretch">
            <div className="relative flex items-stretch border-l border-[#1F1F1F]/10">
              <button
                id="lang-selector"
                onClick={() => setShowLangs(!showLangs)}
                className="px-4 flex items-center gap-1.5 text-[#1F1F1F] hover:bg-[#1F1F1F]/5 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 opacity-60" />
                <span>{language}</span>
              </button>
              <AnimatePresence>
                {showLangs && (
                  <motion.div
                    initial={{ opacity: 0, y: 1 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 1 }}
                    className="absolute right-0 top-[56px] bg-[#fffaeb] border border-[#1F1F1F]/10 z-50 w-20 flex flex-col"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        id={`lang-${lang.code}`}
                        onClick={() => {
                          setLanguage(lang.code)
                          setShowLangs(false)
                        }}
                        className={`w-full px-4 py-2 text-left text-[9px] font-semibold transition-colors ${
                          language === lang.code ? 'bg-[#FA520F] text-[#fffaeb]' : 'text-[#1F1F1F] hover:bg-[#1F1F1F]/5'
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/developers" className="px-6 flex items-center gap-1.5 border-l border-[#1F1F1F]/10 text-[#1F1F1F] hover:bg-[#1F1F1F]/5 transition-colors">
              <span>{t('nav.start_building')}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>

            <Link href="https://wa.me/255760984921" target="_blank" className="px-6 bg-[#FA520F] text-[#fffaeb] font-bold flex items-center justify-center hover:bg-black border-l border-[#1F1F1F]/10 transition-colors gap-2 relative group">
              <span className="absolute inset-0 border-t border-l border-white/10 pointer-events-none group-hover:border-white/5" />
              <span>{t('nav.contact_sales')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden px-6 flex items-center justify-center text-black border-l border-[#1F1F1F]/10 hover:bg-[#1F1F1F]/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 top-20 bg-[#fffaeb] z-40 lg:hidden flex flex-col divide-y divide-[#1F1F1F]/10 border-t border-[#1F1F1F]/10 overflow-y-auto font-mono text-[9px] uppercase tracking-wider"
          >
            <div className="flex flex-col divide-y divide-[#1F1F1F]/5 text-black">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 hover:bg-[#1F1F1F]/5 ${pathname === link.href ? 'bg-[#FA520F] text-[#fffaeb]' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="px-6 py-4 bg-[#1F1F1F]/5 flex items-center gap-4 border-b border-[#1F1F1F]/10">
                <Globe className="w-4 h-4 text-neutral-400" />
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-0.5 border border-[#1F1F1F]/10 ${language === lang.code ? 'bg-[#FA520F] text-[#fffaeb]' : 'bg-[#fffaeb] text-black'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-auto bg-[#1F1F1F]/5 flex flex-col divide-y divide-[#1F1F1F]/10 border-t border-[#1F1F1F]/10">
              <Link href="/developers" className="p-4 font-bold text-center text-black hover:bg-[#1F1F1F]/10 transition-colors">
                {t('nav.start_building')}
              </Link>
              <Link 
                href="https://wa.me/255760984921"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 font-bold text-center bg-[#FA520F] text-[#fffaeb] hover:bg-black transition-colors"
              >
                {t('nav.contact_sales')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
