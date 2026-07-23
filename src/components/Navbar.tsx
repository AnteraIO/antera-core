'use client';
import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Globe, Layers, Building2, Code, BriefcaseBusiness,Lock,Star, Database, MessageSquare, Users, Target, TrendingUp, Network } from 'lucide-react'
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

  const languages: { code: 'en' | 'sw' | 'pl'; name: string }[] = [
    { code: 'en', name: 'EN' },
    { code: 'sw', name: 'SW' },
    { code: 'pl', name: 'PL' }
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
        { title: t('dropdown.products.title1'), desc: t('dropdown.products.desc1'), href: '/sekela-apis' },
        { title: t('dropdown.products.title2'), desc: t('dropdown.products.desc2'), href: '/products' },
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
    'Sekela APIS': {
      leftTitle: t('dropdown.sekela.featured_title'),
      leftItems: [
        { title: t('dropdown.sekela.title1'), desc: t('dropdown.sekela.desc1'), href: '/sekela-apis' },
        { title: t('dropdown.sekela.title2'), desc: t('dropdown.sekela.desc2'), href: '/sekela-apis' },
      ],
      bottomLinkText: t('dropdown.sekela.read_all'),
      bottomLinkHref: '/sekela-apis',
      rightTitle: t('dropdown.sekela.cat_title'),
      rightItems: [
        { name: t('dropdown.sekela.cat1'), href: '/sekela-apis', icon: Database },
        { name: t('dropdown.sekela.cat2'), href: '/sekela-apis', icon: MessageSquare },
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
    { name: t('nav.sekela'), href: '/sekela-apis', isDropdown: true, key: 'Sekela APIS' },
    { name: t('nav.developers'), href: '/developers', isDropdown: true, key: 'Developers' },
    { name: t('nav.blog'), href: '/blog', isDropdown: true, key: 'Blog', alignRight: true },
    { name: t('nav.customers'), href: '/customers' },
    { name: t('nav.company'), href: '/company', isDropdown: true, key: 'Company', alignRight: true },
  ]

  const marqueeTextItems = [
    { text: "Sekela POS — Cloud-Native POS for MSMEs in East Africa", badge: "COMING SOON" },
    { text: "Kava — AI Resume Builder & Career Assistant with FitCheck Me & Shunu Coach", badge: "LAUNCHING SOON" },
    { text: "Sekela APIs — High-throughput SMS, USSD, and Chatbot Integration", badge: "ACTIVE" },
    { text: "Custom Enterprise AI & Digital Platforms Development", badge: "SERVICES" },
    { text: "Scale your business with automated systems & secure local models", badge: "MISSION" }
  ];

  // Repeat items for infinite horizontal marquee scroll
  const repeatedMarquee = [...marqueeTextItems, ...marqueeTextItems, ...marqueeTextItems, ...marqueeTextItems];

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 text-xs font-mono font-bold antialiased uppercase tracking-wider h-20 flex flex-col"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Top Marquee */}
        <div className="w-full bg-[#1F1F1F] text-white h-6 overflow-hidden flex items-center relative border-b border-neutral-800 z-50">
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#1F1F1F] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#1F1F1F] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer py-1">
            {repeatedMarquee.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mx-6 text-[10px] tracking-normal font-medium text-neutral-300 normal-case">
                <span className="bg-[#FA520F] text-white text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-none flex-shrink-0">
                  {item.badge}
                </span>
                <span>{item.text}</span>
                <span className="text-neutral-600 font-mono ml-4 select-none">✦</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex items-stretch justify-between h-[56px] w-full">
          
          <div className="flex items-stretch">
            <Link href="/" className="flex items-center gap-3 px-6 border-r border-neutral-200 hover:bg-neutral-50 transition-colors flex-shrink-0 relative">
              <span className="absolute inset-0 border-t border-l border-neutral-50 pointer-events-none" />
              <Image src="/antera-logo.jpeg" alt="ANTERA Logo" width={24} height={24} className="h-6 w-6 object-contain" />
              <span className="font-black text-black tracking-tighter">ANTERA</span>
            </Link>

            <div className="hidden lg:flex items-stretch">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div
                    key={link.name}
                    onMouseEnter={() => setActiveMenu(link.key)}
                    className="relative flex items-stretch border-r border-neutral-200"
                  >
                    <Link
                      href={link.href}
                      className={`px-5 transition-colors flex items-center gap-1.5 ${
                        activeMenu === link.key || pathname === link.href ? 'bg-neutral-50 text-black' : 'text-black hover:bg-neutral-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3 h-3 stroke-[2.5px] transition-transform duration-150 ${activeMenu === link.key ? 'rotate-180' : ''}`} />
                    </Link>

                    <AnimatePresence>
                      {activeMenu === link.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.12 }}
                          className={`absolute top-[56px] bg-white border-x border-b border-neutral-200 z-50 flex w-[680px] text-left cursor-default ${
                            link.alignRight ? 'right-[-1px] left-auto' : 'left-[-1px] right-auto'
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="w-7/12 border-r border-neutral-200 flex flex-col bg-white">
                            <div className="px-6 py-3 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50 border-b border-neutral-200">
                              {dropdownConfigs[link.key].leftTitle}
                            </div>
                            <div className="flex flex-col divide-y divide-neutral-100">
                              {dropdownConfigs[link.key].leftItems.map((post, i) => (
                                <Link
                                  key={i} 
                                  href={post.href}
                                  className="px-6 py-4 flex flex-col justify-center text-black hover:bg-neutral-50 font-bold transition-colors group"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="truncate pr-4">{post.title}</span>
                                    <ArrowRight className="w-4 h-4 stroke-[2.5px] text-neutral-300 group-hover:text-[#FA520F] transition-colors shrink-0" />
                                  </div>
                                  {post.desc && (
                                    <p className="text-[10px] text-neutral-400 font-normal lowercase normal-case tracking-normal mt-1 leading-normal">
                                      {post.desc}
                                    </p>
                                  )}
                                </Link>
                              ))}
                            </div>
                            <Link href={dropdownConfigs[link.key].bottomLinkHref} className="px-6 py-4 mt-auto border-t border-neutral-200 bg-neutral-50 text-xs font-bold text-[#FA520F] flex items-center gap-1.5 hover:bg-black hover:text-white transition-colors">
                              <span>{dropdownConfigs[link.key].bottomLinkText}</span>
                              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                            </Link>
                          </div>

                          <div className="w-5/12 bg-neutral-50 flex flex-col">
                            <div className="px-6 py-3 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50 border-b border-neutral-200">
                              {dropdownConfigs[link.key].rightTitle}
                            </div>
                            <div className="p-6 flex flex-col gap-4 font-bold text-black">
                              {dropdownConfigs[link.key].rightItems.map((category, i) => {
                                const Icon = category.icon
                                return (
                                  <Link
                                    key={i} 
                                    href={category.href}
                                    className="hover:text-[#FA520F] flex items-center gap-3 transition-colors group"
                                  >
                                    <Icon className="w-4 h-4 text-neutral-600 group-hover:text-[#FA520F] transition-colors shrink-0" />
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
                    className={`px-5 border-r border-neutral-200 transition-colors flex items-center ${
                      pathname === link.href ? 'bg-neutral-100 text-black' : 'text-black hover:bg-neutral-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-stretch">
            <div className="relative flex items-stretch border-l border-neutral-200">
              <button
                id="lang-selector"
                onClick={() => setShowLangs(!showLangs)}
                className="px-4 flex items-center gap-2 text-black hover:bg-neutral-50 transition-colors"
              >
                <Globe className="w-4 h-4 stroke-[2.5px]" />
                <span>{language}</span>
              </button>
              <AnimatePresence>
                {showLangs && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute right-0 top-[56px] bg-white border border-neutral-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] z-50 w-24 flex flex-col divide-y divide-neutral-100"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        id={`lang-${lang.code}`}
                        onClick={() => {
                          setLanguage(lang.code)
                          setShowLangs(false)
                        }}
                        className={`w-full px-4 py-2.5 text-left text-xs font-bold transition-colors ${
                          language === lang.code ? 'bg-[#FA520F] text-white' : 'text-black hover:bg-neutral-50'
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/developers" className="px-6 flex items-center gap-2 border-l border-neutral-200 text-black hover:bg-neutral-50 transition-colors">
              <span>{t('nav.start_building')}</span>
              <ChevronDown className="w-3 h-3 stroke-[2.5px] opacity-60" />
            </Link>
            
            <Link href="https://wa.me/255760984921" target="_blank" className="px-6 bg-[#FA520F] text-white font-bold flex items-center justify-center hover:bg-black border-l border-neutral-200 transition-colors gap-2 relative group">
              <span className="absolute inset-0 border-t border-l border-white/10 pointer-events-none group-hover:border-white/5" />
              <span>{t('nav.contact_sales')}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
            </Link>
          </div>

          <button
            className="lg:hidden px-6 flex items-center justify-center text-black border-l border-neutral-200 hover:bg-neutral-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5px]" /> : <Menu className="w-5 h-5 stroke-[2.5px]" />}
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
            className="fixed inset-0 top-20 bg-white z-40 lg:hidden flex flex-col divide-y-4 divide-neutral-200 border-t border-neutral-200 overflow-y-auto font-mono font-bold text-xs uppercase tracking-wider"
          >
            <div className="flex flex-col divide-y-2 divide-neutral-100 text-black">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 hover:bg-neutral-50 ${pathname === link.href ? 'bg-[#FA520F] text-white' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="px-6 py-4 bg-neutral-50 flex items-center gap-4 border-b border-neutral-200">
                <Globe className="w-4 h-4 stroke-[2.5px] text-neutral-400" />
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-0.5 border border-neutral-200 ${language === lang.code ? 'bg-[#FA520F] text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,0.05)]' : 'bg-white text-black'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-auto bg-neutral-50 flex flex-col divide-y-2 divide-neutral-200 border-t border-neutral-200">
              <Link href="/developers" className="p-4 font-bold text-center text-black hover:bg-neutral-100 transition-colors">
                {t('nav.start_building')}
              </Link>
              <Link 
                href="https://wa.me/255760984921"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 font-bold text-center bg-[#FA520F] text-white hover:bg-black transition-colors"
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
