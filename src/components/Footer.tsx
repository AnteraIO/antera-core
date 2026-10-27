'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import hero9 from '@/assets/gritty-blue.png';
import logo from '@/assets/logo.png';

const CHECK_ICON = 'https://cdn-icons-png.flaticon.com/128/3916/3916581.png';

const CONTACT_ICONS = {
  email: 'https://cdn-icons-png.flaticon.com/128/15047/15047587.png',
  phone: 'https://cdn-icons-png.flaticon.com/128/3014/3014499.png',
  whatsapp: 'https://cdn-icons-png.flaticon.com/128/4008/4008228.png',
};

const SOCIALS = [
  { name: 'Facebook',  href: 'https://facebook.com/antera_tz',  icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111398.png' },
  { name: 'Instagram', href: 'https://instagram.com/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/733/733558.png' },
  { name: 'LinkedIn',  href: 'https://linkedin.com/company/antera_tz', icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png' },
  { name: 'X',         href: 'https://twitter.com/antera_tz',   icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968830.png' },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith('http');
  const cls =
    'flex items-center gap-3 py-2.5 text-base md:text-lg text-black hover:text-neutral-500 transition-colors duration-300 group w-full text-left';
  const content = (
    <>
      <img
        src={CHECK_ICON}
        alt=""
        width={18}
        height={18}
        className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
      />
      {children}
    </>
  );
  return (
    <li className="border-b border-black/20 last:border-0">
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {content}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {content}
        </Link>
      )}
    </li>
  );
};

export const FinalCTAAndFooter = () => {
  const { language, t } = useLanguage();
  const isSw = language === 'sw';

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.02, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-white w-full font-sans antialiased"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={hero9}
          alt="Footer Background"
          className="object-cover object-center opacity-70"
          fill
          priority
        />
      </div>
      <div className="absolute inset-0 z-0 bg-white/85 pointer-events-none" aria-hidden="true" />

      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-40 md:h-56 z-[5]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.5) 65%, rgba(255,255,255,0) 100%)',
        }}
      />

      <div className="relative w-full z-10">
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 md:pt-32 py-16 pb-32">
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="mb-16 md:mb-20 text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.95] text-black drop-shadow-sm">
              {t('footer.get_in_touch') || (isSw ? 'Wasiliana Nasi.' : 'Get in Touch.')}
            </h1>
            <p className="text-base md:text-xl max-w-3xl leading-relaxed text-black mx-auto mt-6 font-medium">
              {t('footer.get_in_touch_desc') ||
                (isSw
                  ? 'Uko tayari kubadilisha biashara yako? Wasiliana nasi na tujenge kitu cha kushangaza pamoja.'
                  : "Ready to transform your business? Reach out and let's build something extraordinary together.")}
            </p>
          </motion.header>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-black"
          >
            {/* Brand / contact */}
            <motion.div variants={fadeUp} className="space-y-6">
              <img
                src={logo.src}
                alt="Antera Logo"
                className="h-14 w-auto object-contain"
              />

              <ul className="space-y-0">
                {[
                  { icon: CONTACT_ICONS.email, label: 'info@antera.co.tz', href: 'mailto:info@antera.co.tz' },
                  { icon: CONTACT_ICONS.phone, label: '+255 625 534 921', href: 'tel:+255625534921' },
                  { icon: CONTACT_ICONS.phone, label: '+255 760 984 921', href: 'tel:+255760984921' },
                  {
                    icon: CONTACT_ICONS.whatsapp,
                    label: t('footer.whatsapp_support') || (isSw ? 'Msaada wa WhatsApp' : 'WhatsApp Support'),
                    href: 'https://wa.me/255760984921',
                    external: true,
                  },
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideRight}
                    className="border-b border-black/20 last:border-0"
                  >
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 py-2.5 text-base md:text-lg text-black hover:text-neutral-500 transition-colors duration-300 group"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        width={22}
                        height={22}
                        className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                      />
                      <span className="break-all">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <p className="text-sm font-medium text-black pt-2">
                © {new Date().getFullYear()} Antera Technologies Inc.
                <br />
                {t('footer.rights_reserved') ||
                  (isSw ? 'Haki zote zimehifadhiwa.' : 'All rights reserved.')}
              </p>
            </motion.div>

            {/* Products */}
            <motion.div variants={fadeUp}>
              <h3 className="text-3xl font-bold mb-6 text-black">
                {t('nav.products') || (isSw ? 'Bidhaa' : 'Products')}
              </h3>
              <ul className="space-y-0">
                <FooterLink href="https://kava.co.tz/">Kava</FooterLink>
                <FooterLink href="https://aibruno.vercel.app/">AI Bruno</FooterLink>
                <FooterLink href="https://swahiba.vercel.app/">Swahiba</FooterLink>
                <FooterLink href="/data-analytics">{isSw ? 'Uchambuzi wa Data' : 'Data Analytics'}</FooterLink>
                <FooterLink href="/solutions">{isSw ? 'Suluhisho za AI' : 'AI Solutions'}</FooterLink>
                <FooterLink href="/models">{isSw ? 'Sayansi ya Data' : 'Data Science'}</FooterLink>
                <FooterLink href="/solutions">{isSw ? 'Otomatiki ya Biashara' : 'Business Automation'}</FooterLink>
              </ul>
            </motion.div>

            {/* Impact */}
            <motion.div variants={fadeUp}>
              <h3 className="text-3xl font-bold mb-6 text-black">
                {t('footer.impact') || (isSw ? 'Athari' : 'Impact')}
              </h3>
              <ul className="space-y-0">
                <FooterLink href="/customers">{isSw ? 'Biashara Kubwa' : 'Enterprise'}</FooterLink>
                <FooterLink href="/customers">{isSw ? 'Huduma za Fedha' : 'Financial Services'}</FooterLink>
                <FooterLink href="/customers">{isSw ? 'Serikali' : 'Government'}</FooterLink>
                <FooterLink href="/customers">{isSw ? 'Sekta ya Afya' : 'Healthcare'}</FooterLink>
                <FooterLink href="/customers">{isSw ? 'Biashara & Rejareja' : 'Retail & Commerce'}</FooterLink>
                <FooterLink href="/customers">{isSw ? 'Mashirika Yasiyo ya Kiserekali' : 'NGOs & Non-Profit'}</FooterLink>
                <FooterLink href="/customers">{isSw ? 'Mawasiliano' : 'Telecommunications'}</FooterLink>
                <FooterLink href="/customers">{isSw ? 'Mnyororo wa Upatikanaji' : 'Supply Chain'}</FooterLink>
              </ul>
            </motion.div>

            {/* Capabilities */}
            <motion.div variants={fadeUp}>
              <h3 className="text-3xl font-bold mb-6 text-black">
                {t('footer.capabilities') || (isSw ? 'Uwezo' : 'Capabilities')}
              </h3>
              <ul className="space-y-0">
                <FooterLink href="/solutions">AI + ML</FooterLink>
                <FooterLink href="/solutions">{isSw ? 'Ujumuishaji wa Data' : 'Data Integration'}</FooterLink>
                <FooterLink href="/solutions">Digital Twin</FooterLink>
                <FooterLink href="/solutions">Edge AI</FooterLink>
                <FooterLink href="/solutions">Marketplace</FooterLink>
                <FooterLink href="/solutions">{isSw ? 'Ujenzi wa Mtiririko' : 'Pipeline Builder'}</FooterLink>
                <FooterLink href="/solutions">{isSw ? 'Uchimbaji wa Michakato' : 'Process Mining'}</FooterLink>
                <FooterLink href="/solutions">{isSw ? 'Taarifa za Muda Halisi' : 'Real-Time Alerting'}</FooterLink>
              </ul>
            </motion.div>

            {/* Company + socials */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-black">
                  {t('nav.company') || (isSw ? 'Kampuni' : 'Company')}
                </h3>
                <ul className="space-y-0">
                  <FooterLink href="/company">{isSw ? 'Kuhusu Sisi' : 'About Us'}</FooterLink>
                  <FooterLink href="/team">{isSw ? 'Timu Yetu' : 'Team'}</FooterLink>
                  <FooterLink href="/office">{isSw ? 'Ofisi' : 'Office'}</FooterLink>
                  <FooterLink href="/blog">{isSw ? 'Blogu' : 'Blog'}</FooterLink>
                  <FooterLink href="/solutions">{isSw ? 'Suluhisho' : 'Solutions'}</FooterLink>
                  <FooterLink href="/data-analytics">{isSw ? 'Uchambuzi wa Data' : 'Data Analytics'}</FooterLink>
                  <FooterLink href="/models">{isSw ? 'Mifumo' : 'Models'}</FooterLink>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-2xl mb-4 text-black">
                  {isSw ? 'Wasiliana na Tufuate.' : 'Reach to and Follow Us.'}
                </h4>
                <div className="flex flex-wrap items-center gap-5 md:gap-6">
                  {SOCIALS.map((s) => (
                    <motion.a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center transition-transform duration-300"
                    >
                      <img
                        src={s.icon}
                        alt={s.name}
                        width={48}
                        height={48}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar — copyright only */}
        <div className="relative border-t-2 border-black pt-8 max-w-7xl mx-auto px-6 pb-32">
          <p className="font-medium text-black text-base md:text-lg text-center md:text-left">
            © {new Date().getFullYear()} Antera Technologies Inc. —{' '}
            {t('footer.rights_reserved') ||
              (isSw ? 'Haki zote zimehifadhiwa.' : 'All rights reserved.')}
          </p>
        </div>

        {/* Black SVG wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[140px] fill-black"
          >
            <path d="M0,0 C150,90 400,100 600,60 C800,20 1050,30 1200,100 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default FinalCTAAndFooter;