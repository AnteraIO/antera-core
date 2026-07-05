'use client';
import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

interface BlogLink {
  title: string
  href: string
}

interface CategoryItem {
  name: string
  href: string
  icon: React.ComponentType
}

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
    { name: t('nav.products'), href: '/products', icon: PixelLayersIcon },
    { name: t('nav.company'), href: '/company', icon: PixelBuildingIcon },
    { name: t('nav.developers'), href: '/developers', icon: PixelTerminalIcon },
    { name: t('nav.solutions'), href: '/solutions', icon: PixelBriefcaseIcon },
  ]

  const navLinks = [
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.solutions'), href: '/solutions' },
    { name: t('nav.sekela'), href: '/sekela-apis' },
    { name: t('nav.developers'), href: '/developers' },
    { name: t('nav.blog'), href: '/blog', isDropdown: true },
    { name: t('nav.customers'), href: '/customers' },
    { name: t('nav.company'), href: '/company' },
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
                    onMouseEnter={() => setActiveMenu('Blog')}
                    className="relative flex items-stretch border-r border-neutral-200"
                  >
                    <Link
                      href={link.href}
                      className={`px-5 transition-colors flex items-center gap-1.5 ${
                        activeMenu === 'Blog' || pathname === link.href ? 'bg-neutral-50 text-black' : 'text-black hover:bg-neutral-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3 h-3 stroke-[2.5px] transition-transform duration-150 ${activeMenu === 'Blog' ? 'rotate-180' : ''}`} />
                    </Link>

                    <AnimatePresence>
                      {activeMenu === 'Blog' && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.12 }}
                          className="absolute top-14 left-[-1px] bg-white border-x border-b border-neutral-200 z-50 flex w-[680px] text-left cursor-default"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="w-7/12 border-r border-neutral-200 flex flex-col bg-white">
                            <div className="px-6 py-3 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50 border-b border-neutral-200">
                              {t('blog.latest_briefings')}
                            </div>
                            <div className="flex flex-col divide-y divide-neutral-100">
                              {blogLatestPosts.map((post, i) => (
                                <Link
                                  key={i} 
                                  href={post.href}
                                  className="px-6 py-4 flex items-center justify-between text-black hover:bg-neutral-50 font-bold transition-colors group"
                                >
                                  <span className="truncate pr-4">{post.title}</span>
                                  <ArrowRight className="w-4 h-4 stroke-[2.5px] text-neutral-300 group-hover:text-[#FA520F] transition-colors shrink-0" />
                                </Link>
                              ))}
                            </div>
                            <Link href="/blog" className="px-6 py-4 mt-auto border-t border-neutral-200 bg-neutral-50 text-xs font-bold text-[#FA520F] flex items-center gap-1.5 hover:bg-black hover:text-white transition-colors">
                              <span>{t('blog.read_all')}</span>
                              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                            </Link>
                          </div>

                          <div className="w-5/12 bg-neutral-50 flex flex-col">
                            <div className="px-6 py-3 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50 border-b border-neutral-200">
                              Categories
                            </div>
                            <div className="p-6 flex flex-col gap-4 font-bold text-black">
                              {blogCategories.map((category, i) => (
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