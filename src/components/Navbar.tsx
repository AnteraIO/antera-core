'use client';
import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Globe, Search, Cpu, BarChart3, ShieldCheck, Zap, Users, Building2, Terminal, BookOpen, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

interface NavItem {
  name: string
  href: string
  isDropdown?: boolean
  dropdownContent?: {
    featuredTitle: string
    featuredItems: { title: string; desc: string; href: string; icon?: React.ComponentType<any> }[]
    categoriesTitle: string
    categories: { name: string; href: string; icon: React.ComponentType<any> }[]
    footerLink?: { text: string; href: string }
  }
}

const PixelIcon = ({ color = "#FA520F", secondary = "#C2410C" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" fill={color} stroke={secondary} strokeWidth="0.5"/>
    <rect x="8" y="8" width="8" height="8" fill="white" opacity="0.3"/>
  </svg>
);

const PixelLayersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#FA520F" stroke="#C2410C" strokeWidth="0.5"/>
    <path d="M12 6l7 4-7 4-7-4 7-4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 13l7 4 7-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PixelBuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="0.5"/>
    <rect x="8" y="8" width="3" height="8" fill="white"/>
    <rect x="13" y="8" width="3" height="8" fill="white"/>
    <rect x="8" y="6" width="8" height="2" fill="white"/>
  </svg>
);

const PixelTerminalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#10B981" stroke="#059669" strokeWidth="0.5"/>
    <path d="M8 9l3 3-3 3M13 15h3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PixelBriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="0.5"/>
    <rect x="7" y="10" width="10" height="6" rx="0.5" stroke="white" strokeWidth="1.5"/>
    <path d="M9 10V8a3 3 0 0 1 6 0v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showLangs, setShowLangs] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const languages: { code: 'en' | 'sw' | 'pl'; name: string }[] = [
    { code: 'en', name: 'EN' },
    { code: 'sw', name: 'SW' },
    { code: 'pl', name: 'PL' }
  ]

  const navLinks: NavItem[] = [
    {
      name: t('nav.products'),
      href: '/products',
      isDropdown: true,
      dropdownContent: {
        featuredTitle: 'Core Technology',
        featuredItems: [
          { title: 'Sekela APIs', desc: 'SMS, USSD, and WhatsApp automation.', href: '/sekela-apis', icon: Zap },
          { title: 'Data Intelligence', desc: 'Predictive models and analytics.', href: '/models', icon: BarChart3 },
          { title: 'AI Chatbots', desc: 'Support automation with Gemini.', href: '/products', icon: MessageSquare },
        ],
        categoriesTitle: 'All Products',
        categories: [
          { name: 'Sekela APIs', href: '/sekela-apis', icon: PixelTerminalIcon },
          { name: 'Data Models', href: '/models', icon: PixelLayersIcon },
          { name: 'Security', href: '/solutions', icon: PixelIcon },
          { name: 'Cloud Ops', href: '/solutions', icon: PixelIcon },
        ],
        footerLink: { text: 'View all products', href: '/products' }
      }
    },
    {
      name: t('nav.solutions'),
      href: '/solutions',
      isDropdown: true,
      dropdownContent: {
        featuredTitle: 'Industry Solutions',
        featuredItems: [
          { title: 'FinTech', desc: 'Secure payment & banking infra.', href: '/solutions', icon: ShieldCheck },
          { title: 'SME & Retail', desc: 'Inventory & POS automation.', href: '/solutions', icon: Zap },
          { title: 'Public Sector', desc: 'Digital citizen services.', href: '/solutions', icon: Building2 },
        ],
        categoriesTitle: 'Services',
        categories: [
          { name: 'Managed IT', href: '/solutions', icon: PixelIcon },
          { name: 'App Dev', href: '/solutions', icon: PixelLayersIcon },
          { name: 'Data Audit', href: '/models', icon: PixelIcon },
          { name: 'AI Strategy', href: '/products', icon: PixelIcon },
        ],
        footerLink: { text: 'How we operate', href: '/solutions' }
      }
    },
    {
      name: t('nav.developers'),
      href: '/developers',
      isDropdown: true,
      dropdownContent: {
        featuredTitle: 'Resources',
        featuredItems: [
          { title: 'Documentation', desc: 'Integration guides & tutorials.', href: '/developers', icon: BookOpen },
          { title: 'API Reference', desc: 'Complete Sekela API specs.', href: '/developers', icon: Terminal },
          { title: 'SDKs', desc: 'Libraries for Node, Python, Go.', href: '/developers', icon: Cpu },
        ],
        categoriesTitle: 'Tools',
        categories: [
          { name: 'Postman', href: '/developers', icon: PixelTerminalIcon },
          { name: 'Github', href: 'https://github.com/antera', icon: PixelIcon },
          { name: 'Status', href: '/developers', icon: PixelIcon },
        ],
        footerLink: { text: 'Go to dashboard', href: '/admin' }
      }
    },
    {
      name: t('nav.blog'),
      href: '/blog',
      isDropdown: true,
      dropdownContent: {
        featuredTitle: t('blog.latest_briefings'),
        featuredItems: [
          { title: 'Antera Group Office', desc: 'Our new HQ in Dar es Salaam.', href: '/office' },
          { title: 'Introducing Search Toolkit', desc: 'New tools for developers.', href: '/developers' },
          { title: 'AI in Tanzania 2026', desc: 'The future of automation.', href: '/blog' },
        ],
        categoriesTitle: 'Categories',
        categories: [
          { name: 'Technology', href: '/blog', icon: PixelIcon },
          { name: 'Engineering', href: '/blog', icon: PixelIcon },
          { name: 'Inside Antera', href: '/office', icon: PixelIcon },
        ],
        footerLink: { text: t('blog.read_all'), href: '/blog' }
      }
    },
    {
      name: t('nav.company'),
      href: '/company',
      isDropdown: true,
      dropdownContent: {
        featuredTitle: 'About Antera',
        featuredItems: [
          { title: 'Our Mission', desc: 'Enabling Africa via technology.', href: '/company', icon: Building2 },
          { title: 'Our Team', desc: 'The engineers behind Antera.', href: '/team', icon: Users },
          { title: 'Headquarters', desc: 'Visit our physical offices.', href: '/office', icon: Building2 },
        ],
        categoriesTitle: 'Connect',
        categories: [
          { name: 'Careers', href: '/team', icon: PixelIcon },
          { name: 'Contact', href: 'https://wa.me/255760984921', icon: PixelIcon },
          { name: 'LinkedIn', href: '#', icon: PixelIcon },
        ],
      }
    },
  ]

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 text-xs font-mono font-bold antialiased uppercase tracking-wider h-14"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex items-stretch justify-between h-full">
          
          <div className="flex items-stretch">
            <Link href="/" className="flex items-center gap-3 px-6 border-r border-neutral-200 hover:bg-neutral-50 transition-colors flex-shrink-0 relative">
              <span className="absolute inset-0 border-t border-l border-neutral-50 pointer-events-none" />
              <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="h-6 w-6 object-contain" />
              <span className="font-black text-black tracking-tighter">ANTERA</span>
            </Link>

            <div className="hidden lg:flex items-stretch">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div
                    key={link.name}
                    onMouseEnter={() => setActiveMenu(link.name)}
                    className="relative flex items-stretch border-r border-neutral-200"
                  >
                    <Link
                      href={link.href}
                      className={`px-5 transition-colors flex items-center gap-1.5 ${
                        activeMenu === link.name || pathname === link.href ? 'bg-neutral-50 text-black' : 'text-black hover:bg-neutral-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3 h-3 stroke-[2.5px] transition-transform duration-150 ${activeMenu === link.name ? 'rotate-180' : ''}`} />
                    </Link>

                    <AnimatePresence>
                      {activeMenu === link.name && link.dropdownContent && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.12 }}
                          className="absolute top-14 left-[-1px] bg-white border-x border-b border-neutral-200 z-50 flex w-[720px] text-left cursor-default shadow-xl"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="w-7/12 border-r border-neutral-200 flex flex-col bg-white overflow-hidden">
                            <div className="px-6 py-3 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50 border-b border-neutral-200 flex justify-between items-center">
                              <span>{link.dropdownContent.featuredTitle}</span>
                              {link.name === t('nav.blog') && (
                                <div className="relative flex items-center">
                                  <Search className="w-3 h-3 absolute left-2 text-neutral-400" />
                                  <input
                                    type="text"
                                    placeholder="SEARCH BLOG..."
                                    className="bg-white border border-neutral-200 pl-6 pr-2 py-1 text-[8px] focus:outline-none focus:border-[#FA520F] w-32"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col divide-y divide-neutral-100">
                              {link.dropdownContent.featuredItems.map((item, i) => (
                                <Link
                                  key={i} 
                                  href={item.href}
                                  className="px-6 py-4 flex items-start gap-4 text-black hover:bg-neutral-50 font-bold transition-colors group"
                                >
                                  {item.icon && (
                                    <div className="mt-1 w-8 h-8 rounded bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#FA520F] group-hover:text-white transition-colors">
                                      <item.icon className="w-4 h-4" />
                                    </div>
                                  )}
                                  <div className="flex flex-col">
                                    <span className="flex items-center gap-1.5 group-hover:text-[#FA520F] transition-colors">
                                      {item.title}
                                      <ArrowRight className="w-3 h-3 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </span>
                                    <span className="text-[10px] text-neutral-400 font-normal normal-case tracking-normal mt-0.5">{item.desc}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            {link.dropdownContent.footerLink && (
                              <Link href={link.dropdownContent.footerLink.href} className="px-6 py-4 mt-auto border-t border-neutral-200 bg-neutral-50 text-xs font-bold text-[#FA520F] flex items-center gap-1.5 hover:bg-black hover:text-white transition-colors">
                                <span>{link.dropdownContent.footerLink.text}</span>
                                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                              </Link>
                            )}
                          </div>

                          <div className="w-5/12 bg-neutral-50 flex flex-col">
                            <div className="px-6 py-3 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50 border-b border-neutral-200">
                              {link.dropdownContent.categoriesTitle}
                            </div>
                            <div className="p-6 flex flex-col gap-4 font-bold text-black">
                              {link.dropdownContent.categories.map((category, i) => (
                                <Link
                                  key={i} 
                                  href={category.href}
                                  className="hover:text-[#FA520F] flex items-center gap-3 transition-colors group"
                                >
                                  <div className="w-8 h-8 border border-neutral-200 bg-white flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,0.05)] group-hover:bg-[#FA520F] group-hover:text-white transition-colors duration-75 shrink-0">
                                    <category.icon />
                                  </div>
                                  <span>{category.name}</span>
                                </Link>
                              ))}
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
                    className={`px-5 border-r border-neutral-200 transition-colors flex items-center ${
                      pathname === link.href ? 'bg-neutral-100 text-black' : 'text-black hover:bg-neutral-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                href="/customers"
                className={`px-5 border-r border-neutral-200 transition-colors flex items-center ${
                  pathname === '/customers' ? 'bg-neutral-100 text-black' : 'text-black hover:bg-neutral-50'
                }`}
              >
                {t('nav.customers')}
              </Link>
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
                    className="absolute right-0 top-[56px] bg-white border border-neutral-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] w-24 flex flex-col divide-y divide-neutral-100"
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

            <button className="px-6 flex items-center gap-2 border-l border-neutral-200 text-black hover:bg-neutral-50 transition-colors">
              <span>{t('nav.start_building')}</span>
              <ChevronDown className="w-3 h-3 stroke-[2.5px] opacity-60" />
            </button>
            
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
            className="fixed inset-0 top-14 bg-white z-40 lg:hidden flex flex-col divide-y-4 divide-neutral-200 border-t border-neutral-200 overflow-y-auto font-mono font-bold text-xs uppercase tracking-wider"
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
              
              <Link
                href="/customers"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 hover:bg-neutral-50 ${pathname === '/customers' ? 'bg-[#FA520F] text-white' : ''}`}
              >
                {t('nav.customers')}
              </Link>

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
              <button className="p-4 font-bold text-center text-black hover:bg-neutral-100 transition-colors">
                {t('nav.start_building')}
              </button>
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