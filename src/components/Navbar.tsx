'use client';
import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

interface BlogLink {
  title: string
  href: string
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
    { title: 'Solutions Ecosystem', href: '/solutions' },
    { title: 'Introducing Search Toolkit', href: '/developers' },
  ]

  const dropdownConfigs: Record<string, {
    leftTitle: string
    leftItems: { title: string; desc: string; href: string }[]
    bottomLinkText: string
    bottomLinkHref: string
    rightTitle: string
    rightItems: { name: string; href: string }[]
  }> = {
    'Products': {
      leftTitle: t('dropdown.products.featured_title'),
      leftItems: [
        { title: 'Sekela POS', desc: 'Cloud-native business operations platform for East African MSMEs.', href: '/products' },
        { title: 'Kava AI', desc: 'AI-powered professional builder and career intelligence assistant.', href: '/products' },
      ],
      bottomLinkText: t('dropdown.products.read_all'),
      bottomLinkHref: '/products',
      rightTitle: 'Product Suite',
      rightItems: [
        { name: 'Swahiba Platform', href: '/products' },
        { name: 'Sekela Suite', href: '/products' },
        { name: 'Custom SDKs', href: '/products' },
        { name: 'Applied AI', href: '/products' },
      ]
    },
    'Solutions': {
      leftTitle: t('dropdown.solutions.featured_title'),
      leftItems: [
        { title: 'Practical AI & Automation', desc: 'Sleek integration of cognitive workflows to minimize latency.', href: '/solutions' },
        { title: 'Modern Infrastructure', desc: 'High-availability deployment, cloud migration, and continuous auditing.', href: '/solutions' },
      ],
      bottomLinkText: t('dropdown.solutions.read_all'),
      bottomLinkHref: '/solutions',
      rightTitle: 'Enterprise Industries',
      rightItems: [
        { name: 'Finance & FinTech', href: '/solutions' },
        { name: 'SMEs & Retail', href: '/solutions' },
        { name: 'Modern Data Systems', href: '/solutions' },
        { name: 'Managed IT Operations', href: '/solutions' },
      ]
    },
    'Developers': {
      leftTitle: t('dropdown.developers.featured_title'),
      leftItems: [
        { title: 'Documentation & Playgrounds', desc: 'Interactive console testing structures and SDK modules.', href: '/developers' },
        { title: 'Webhooks & Event Streams', desc: 'Low-latency subscription channels for real-time operation workflows.', href: '/developers' },
      ],
      bottomLinkText: t('dropdown.developers.read_all'),
      bottomLinkHref: '/developers',
      rightTitle: 'Resources',
      rightItems: [
        { name: 'SDK Libraries', href: '/developers' },
        { name: 'Data Schema Spec', href: '/developers' },
        { name: 'UI components', href: '/developers' },
      ]
    },
    'Company': {
      leftTitle: 'Corporate Governance',
      leftItems: [
        { title: 'Our Mission', desc: 'Sovereign intelligence platforms scaled for the African continent.', href: '/company' },
        { title: 'Engineering Team', desc: 'The group building tailored software architectures for impact.', href: '/team' },
      ],
      bottomLinkText: 'About Antera',
      bottomLinkHref: '/company',
      rightTitle: 'Ecosystem',
      rightItems: [
        { name: 'Headquarters', href: '/company' },
        { name: 'Workforce Values', href: '/company' },
        { name: 'Partnerships', href: '/company' },
      ]
    }
  }

  const navLinks = [
    { name: t('nav.products'), href: '/products', isDropdown: true, key: 'Products' },
    { name: t('nav.solutions'), href: '/solutions', isDropdown: true, key: 'Solutions' },
    { name: t('nav.developers'), href: '/developers', isDropdown: true, key: 'Developers' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.customers'), href: '/customers' },
    { name: t('nav.company'), href: '/company', isDropdown: true, key: 'Company' },
  ]

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F] border-b border-neutral-800 text-[10px] font-mono font-normal antialiased uppercase tracking-[0.15em] h-14 flex items-stretch select-none"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex items-stretch justify-between w-full max-w-[1440px]">
          
          <div className="flex items-stretch">
            <Link href="/" className="flex items-center gap-3 px-6 hover:bg-neutral-900 transition-colors flex-shrink-0 relative border-r border-neutral-800">
              <Image src="/antera-logo.jpeg" alt="ANTERA Logo" width={20} height={24} className="h-5 w-5 object-contain invert brightness-200" />
              <span className="font-semibold text-white tracking-[0.2em] text-[11px]">ANTERA</span>
            </Link>

            <div className="hidden lg:flex items-stretch">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div
                    key={link.name}
                    onMouseEnter={() => setActiveMenu(link.key)}
                    className="relative flex items-stretch"
                  >
                    <Link
                      href={link.href}
                      className={`px-5 transition-colors flex items-center gap-1 text-neutral-300 hover:text-white hover:bg-neutral-900 ${
                        activeMenu === link.key || pathname === link.href ? 'bg-neutral-900 text-white' : ''
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    </Link>

                    <AnimatePresence>
                      {activeMenu === link.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 1 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 1 }}
                          transition={{ duration: 0.1 }}
                          className="absolute top-14 left-0 bg-[#0F0F0F] border-r border-b border-neutral-800 z-50 flex w-[640px] text-left cursor-default shadow-2xl"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="w-7/12 border-r border-neutral-800 flex flex-col bg-[#0F0F0F] py-4">
                            <div className="px-6 pb-2 text-[9px] uppercase font-semibold tracking-[0.2em] text-neutral-500 border-b border-neutral-900 mb-2">
                              {dropdownConfigs[link.key].leftTitle}
                            </div>
                            <div className="flex flex-col">
                              {dropdownConfigs[link.key].leftItems.map((post, i) => (
                                <Link
                                  key={i} 
                                  href={post.href}
                                  className="px-6 py-3 flex flex-col justify-center text-neutral-200 hover:bg-neutral-900 transition-colors group"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-semibold tracking-wider text-neutral-200 group-hover:text-[#FA520F] transition-colors">{post.title}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#FA520F] transition-colors shrink-0" />
                                  </div>
                                  {post.desc && (
                                    <p className="text-[9px] text-neutral-400 normal-case tracking-wider mt-1 leading-normal font-light">
                                      {post.desc}
                                    </p>
                                  )}
                                </Link>
                              ))}
                            </div>
                            <Link href={dropdownConfigs[link.key].bottomLinkHref} className="mx-6 mt-4 pt-3 border-t border-neutral-900 text-[9px] font-semibold text-[#FA520F] flex items-center gap-1 hover:text-white transition-colors">
                              <span>{dropdownConfigs[link.key].bottomLinkText}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="w-5/12 bg-[#121212] flex flex-col py-4">
                            <div className="px-6 pb-2 text-[9px] uppercase font-semibold tracking-[0.2em] text-neutral-500 border-b border-neutral-900 mb-2">
                              {dropdownConfigs[link.key].rightTitle}
                            </div>
                            <div className="px-6 py-2 flex flex-col gap-3 font-medium text-neutral-300">
                              {dropdownConfigs[link.key].rightItems.map((category, i) => (
                                <Link
                                  key={i}
                                  href={category.href}
                                  className="hover:text-[#FA520F] text-[9px] transition-colors"
                                >
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
                    onMouseEnter={() => setActiveMenu(null)}
                    className={`px-5 transition-colors flex items-center text-neutral-300 hover:text-white hover:bg-neutral-900 ${
                      pathname === link.href ? 'bg-neutral-900 text-white' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-stretch">
            <div className="relative flex items-stretch">
              <button
                id="lang-selector"
                onClick={() => setShowLangs(!showLangs)}
                className="px-4 flex items-center gap-1.5 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
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
                    className="absolute right-0 top-14 bg-[#0F0F0F] border border-neutral-800 z-50 w-20 flex flex-col"
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
                          language === lang.code ? 'bg-[#FA520F] text-white' : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="https://wa.me/255760984921" target="_blank" className="px-6 bg-[#FA520F] text-white font-semibold flex items-center justify-center hover:bg-white hover:text-black border-l border-neutral-800 transition-colors gap-2 relative group">
              <span>Contact Sales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            className="lg:hidden px-6 flex items-center justify-center text-neutral-300 hover:bg-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 top-14 bg-[#0F0F0F] z-40 lg:hidden flex flex-col border-t border-neutral-800 overflow-y-auto font-mono text-[9px] uppercase tracking-[0.15em]"
          >
            <div className="flex flex-col text-neutral-300">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 border-b border-neutral-900 hover:bg-neutral-900 ${pathname === link.href ? 'bg-[#FA520F] text-white' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="px-6 py-4 bg-[#121212] flex items-center gap-4 border-b border-neutral-900">
                <Globe className="w-3.5 h-3.5 text-neutral-400" />
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1 border border-neutral-800 ${language === lang.code ? 'bg-[#FA520F] text-white border-[#FA520F]' : 'bg-[#0F0F0F] text-neutral-300'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-auto bg-[#121212] flex flex-col border-t border-neutral-800">
              <Link 
                href="https://wa.me/255760984921"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 font-semibold text-center bg-[#FA520F] text-white hover:bg-white hover:text-black transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
