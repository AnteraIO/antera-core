'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export const FinalCTAAndFooter = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="w-full bg-white text-black font-sans antialiased flex flex-col overflow-hidden">

      {/* SECTION 2: Rigid Multi-Column Grid Links Footer */}
      <footer className="bg-white border-t border-black w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-black">
          
          {/* Column 1: Identity / Branding */}
          <div className="p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <img src="/antera-logo.jpeg" alt="Antera Logo" className="h-6 w-6 object-contain filter grayscale" />
                <span className="text-lg font-bold tracking-tight uppercase text-black">Antera Group</span>
              </div>
              <p className="text-black/50 text-xs leading-relaxed max-w-xs font-normal">
                We use smart technology and AI to help businesses grow and work better at any scale.
              </p>
            </div>
          </div>

          {/* Column 2: Services List */}
          <div className="p-8 lg:p-12">
            <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-6">
              {t('nav.products')}
            </div>
            <ul className="space-y-3.5">
              <FooterLink href="/solutions">AI Solutions</FooterLink>
              <FooterLink href="/sekela-apis">App Development</FooterLink>
              <FooterLink href="/models">Data Science</FooterLink>
              <FooterLink href="/solutions">Business Automation</FooterLink>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="p-8 lg:p-12">
            <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-6">
              {t('nav.company')}
            </div>
            <ul className="space-y-3.5">
              <FooterLink href="/company">About Us</FooterLink>
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href="/office">Office</FooterLink>
              <FooterLink href="/solutions">Solutions</FooterLink>
              <FooterLink href="/sekela-apis">Sekela APIS</FooterLink>
              <FooterLink href="/developers">Developers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact Technical Info */}
          <div className="p-8 lg:p-12">
            <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-6">
              Contact
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-black/60 group">
                <Mail className="w-3.5 h-3.5 text-black/40 group-hover:text-[#FA520F] transition-colors" />
                <span className="text-xs font-mono select-all group-hover:text-black transition-colors">info@antera.co.tz</span>
              </li>
              <li className="flex items-center gap-3 text-black/60 group">
                <Phone className="w-3.5 h-3.5 text-black/40 group-hover:text-[#FA520F] transition-colors" />
                <span className="text-xs font-mono select-all group-hover:text-black transition-colors">+255 760 984 921</span>
              </li>
              <li className="flex items-center gap-3 text-black/60 group">
                <Phone className="w-3.5 h-3.5 text-black/40 group-hover:text-[#FA520F] transition-colors" />
                <span className="text-xs font-mono select-all group-hover:text-black transition-colors">+255 774 174 921</span>
              </li>
              <a href="https://wa.me/255760984921" target="_blank" className="flex items-center gap-3 text-black/60 group cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5 text-black/40 group-hover:text-[#FA520F] transition-colors" />
                <span className="text-xs font-mono group-hover:text-black transition-colors">WhatsApp Support</span>
              </a>
            </ul>
          </div>

        </div>
      </footer>


      {/* SECTION 4: Centered Giant Pixel Mascot Container */}
      <div className="w-full flex justify-center items-end pt-12 bg-white overflow-hidden select-none pointer-events-none">
        <motion.svg
          initial={{ y: 60 }}
          whileInView={{ y: 4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          width="160" 
          height="140" 
          viewBox="0 0 16 14" 
          fill="none" 
          className="text-black"
        >
          <path 
            d="M2 0h2v2H2V0zm10 0h2v2h-2V0zM2 2h2v2H2V2zm10 0h2v2h-2V2zM0 4h16v6H0V4zm2 2h2v2H2V6zm10 0h2v2h-2V6zm-6 4h4v2H6v-2zm-2 2h8v2H4v-2z" 
            fill="currentColor" 
          />
        </motion.svg>
      </div>

      {/* SECTION 5: Absolute Bottom Meta Bar */}
      <div className="bg-white py-6 px-6 lg:px-8 w-full border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between text-[10px] font-mono text-black/40 font-bold tracking-wider">
          
          <div>
            Antera Group Software© {new Date().getFullYear()}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {['en', 'sw', 'pl'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as any)}
                  className={`uppercase px-2 py-0.5 border border-black/10 transition-colors ${language === lang ? 'bg-[#FA520F] text-white border-[#FA520F]' : 'bg-neutral-50 hover:text-black'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href} 
      className="text-xs font-semibold text-black/60 hover:text-[#FA520F] transition-colors uppercase tracking-tight block"
    >
      {children}
    </Link>
  </li>
)