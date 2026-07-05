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
      
      {/* SECTION 1: Massive Accent Callout Banner (Mistral-style) */}
      <section className="relative mx-6 my-12 lg:mx-12 bg-[#FA520F] text-white pt-24 pb-20 px-6 lg:px-12 overflow-hidden">
        {/* High-Fidelity CSS Grain Texture Layer */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12"
        >
          {/* Left: Text Content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.1] max-w-2xl">
              {t('hero.description')}
            </h2>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-row items-center gap-4 flex-shrink-0 mb-2">
            <button className="group bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-100 transition-colors">
              <span className="relative flex items-center gap-2">
                {t('nav.start_building')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <a href="https://wa.me/255760984921" target="_blank" className="group bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-900 transition-colors">
              <span className="relative flex items-center gap-2">
                {t('nav.contact_sales')}
                <ArrowRight className="w-4 h-4 opacity-60" />
              </span>
            </a>
          </div>
        </motion.div>
      </section>

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

      {/* SECTION 3: Social Layout and App Download Row */}
      <div className="bg-white pt-12 px-6 lg:px-8 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Aligned Clean Social List */}
        <div className="flex items-center gap-5 text-black/80">
          <a href="#" className="hover:text-[#FA520F] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-[#FA520F] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-[#FA520F] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-[#FA520F] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-[#FA520F] transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.073 1.621.084.29.117.598.117.9 0 2.813-2.798 5.132-6.14 5.132-3.282 0-5.964-2.247-5.964-5.02 0-.366.039-.724.112-1.07-.662-.307-1.125-.97-1.125-1.754 0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182c.06-.283.302-.482.597-.482.07 0 .14.012.205.035l2.412.613a1.25 1.25 0 0 1 1.25 1.25z"/>
            </svg>
          </a>
        </div>

        {/* Right: App Download Badges */}
        <div className="flex items-center gap-3">
          <a href="#" className="block">
            <div className="bg-black text-white px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-neutral-800 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.05.05-2.31.71-3.06 1.55-.68.78-1.28 2.03-1.12 3.14 1.19.09 2.41-.6 3.11-1.58"/>
              </svg>
              <div className="leading-none">
                <div className="text-[7px] opacity-80">Download on the</div>
                <div className="text-xs font-semibold">App Store</div>
              </div>
            </div>
          </a>
          <a href="#" className="block">
            <div className="bg-black text-white px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-neutral-800 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className="leading-none">
                <div className="text-[7px] opacity-80">GET IT ON</div>
                <div className="text-xs font-semibold">Google Play</div>
              </div>
            </div>
          </a>
        </div>
      </div>

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